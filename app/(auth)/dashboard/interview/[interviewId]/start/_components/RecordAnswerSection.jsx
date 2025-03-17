import { Mic, Webcam } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../../../../../../../components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { toast } from "sonner";
import { chatSession } from "../../../../../../../utils/Gemni";
import { useUser } from "@clerk/nextjs";
import { db } from "../../../../../../../utils/db";
import { UserAnswer } from "../../../../../../../utils/schema";
import moment from "moment";
const RecordAnswerSection = ({
  mockInterviewQuestions,
  activeQuestionIndex,
  interviewData,
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const {
    error,
    interimResult,
    isRecording,
    results,
    setResults,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) => {
      setUserAnswer((prevAns) => prevAns + result.transcript);
    });
  }, [results]);

 
  
  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer();
    }
    
  }, [userAnswer]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
      console.log(userAnswer);
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    setLoading(true);

    const feedbackPrompt =
      "Questions:" +
      mockInterviewQuestions[activeQuestionIndex]?.question +
      ",User Answer:" +
      userAnswer +
      ".Depends on question and user answer for given interviewquestions" +
      "Please give use rating for answer and feedback as area of improvement if any " +
      "in just 3 to 5 lines to improve it in JSON formate with rating field and feedback field";

    const result = await chatSession.sendMessage(feedbackPrompt);
    const mockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    // console.log(JSON.parse(mockJsonResp));
    const JsonFeedbackResp = JSON.parse(mockJsonResp);

    const resp = await db.insert(UserAnswer).values({
      mockIdRef: interviewData?.mockId,
      question: mockInterviewQuestions[activeQuestionIndex]?.question,
      correctAns: mockInterviewQuestions[activeQuestionIndex]?.answer,
      userAns: userAnswer,
      feedback: JsonFeedbackResp?.feedback,
      rating: JsonFeedbackResp?.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD-MM-yyyy"),
    });
    if (resp) {
      toast("Your answer has been recorded successfully");
      setUserAnswer("");
      setResults([]);
    }
    setResults([]);
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-col mt-10 justify-center item-center border p-20">
        {/* <Image
          className="absolute"
          src="/webcam.png"
          alt="Record Answer"
          width={400}
          height={400}
        /> */}
        <Webcam
          mirrored="true"
          style={{ zIndex: 10, height: 300, width: "100%" }}
        />
      </div>

      <Button
        disabled={loading}
        onClick={StartStopRecording}
        className="my-4"
        variant="outline"
      >
        {isRecording ? (
          <h2 className="text-red-700 flex gap-2">
            <Mic />
            Stop Recording
          </h2>
        ) : (
          " Record Answer"
        )}
      </Button>
    </div>
  );
};

export default RecordAnswerSection;
