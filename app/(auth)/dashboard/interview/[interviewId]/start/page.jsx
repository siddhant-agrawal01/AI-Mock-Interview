"use client";

import React, { useEffect, useState } from "react";
import { MockInterview } from "../../../../../../utils/schema";
import { eq } from "drizzle-orm";
import { db } from "../../../../../../utils/db";
import QuestionSection from "./_components/QuestionSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "../../../../../../components/ui/button";
import Link from "next/link";

const StartInterview = ({ params }) => {
  const [interviewData, setInterviewData] = useState(); // Initialize with null
  const [mockInterviewQuestions, setMockInterviewQuestions] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));
      const jsonMockResp = result[0].jsonMockResp.replace(/[\u0000-\u001F\u007F-\u009F]/g, ""); // Sanitize JSON string
      const parsedMockResp = JSON.parse(jsonMockResp);
      setMockInterviewQuestions(parsedMockResp);
      setInterviewData(result[0]);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  ">
        {/* Questions  */}
        <QuestionSection
          activeQuestionIndex={activeQuestionIndex}
          mockInterviewQuestions={mockInterviewQuestions}
        />
        {/* video recording  */}

        <RecordAnswerSection
          activeQuestionIndex={activeQuestionIndex}
          mockInterviewQuestions={mockInterviewQuestions}
          interviewData={interviewData}
        />
      </div>

      <div className="flex justify-end gap-6">
        {activeQuestionIndex > 0 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
          >
            Previous Question
          </Button>
        )}
        {activeQuestionIndex != mockInterviewQuestions?.length - 1 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
          >
            Next Question
          </Button>
        )}
        {activeQuestionIndex == mockInterviewQuestions?.length - 1 && (
          <Link
            href={"/dashboard/interview/" + interviewData?.mockId + "/feedback"}
          >
            {" "}
            <Button>End Interview</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default StartInterview;
