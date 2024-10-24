import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

const QuestionSection = ({ mockInterviewQuestions, activeQuestionIndex }) => {

    const textToSpeech = (text) =>{
        if('speechSynthesis' in window){
            const speech = new SpeechSynthesisUtterance(text);
            speech.text = text;
            speech.volume = 2;
            speech.rate = 1;
            speech.pitch = 1;
            window.speechSynthesis.speak(speech);
        }
        else {
            alert('Your browser does not support text to speech');
        }
    }
  return (
    mockInterviewQuestions && (
      <div className="p-5 border rounded-lg my-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {mockInterviewQuestions &&
            mockInterviewQuestions.map((question, index) => (
              <h2
                key={index}
                className={`p-2 px-4 text-xs cursor-pointer md:text-sm items-center bg-blue-400 rounded-full
                ${activeQuestionIndex === index && "bg-blue-600 text-white"}
                }`}
              >
                Question #{index + 1}
              </h2>
            ))}
        </div>
        <h2 className="my-5 text-md md:text-lg">
          {mockInterviewQuestions[activeQuestionIndex]?.question}
        </h2>
        <Volume2 className="cursor-pointer"
          onClick={() => {
            textToSpeech(mockInterviewQuestions[activeQuestionIndex]?.question);
          }}
        />
        <div className="border rounded-lg p-5 bg-blue-100 mt-20 ">
          <h2 className="flex gap-2 items-center text-blue-600">
            <Lightbulb />
            <strong>Note:</strong>
          </h2>
          <h2 className="text-sm my-2 text-blue-600">
            {process.env.NEXT_PUBLIC_QUESTION_NOTE}
          </h2>
        </div>
      </div>
    )
  );
};

export default QuestionSection;
