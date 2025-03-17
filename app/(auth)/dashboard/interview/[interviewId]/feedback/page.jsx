"use client";

import { db } from "../../../../../../utils/db";
import { UserAnswer } from "../../../../../../utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../../../@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "../../../../../../components/ui/button";

import { useRouter } from "next/navigation";

const Feedback = ({ params }) => {
  const [feedbackList, setFeedbackList] = useState([]);

  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);
  };

  return (
    <div className="p-10">
      {feedbackList?.length === 0 ? (
        <h2 className="font-bold  text-xl  text-red-500">
          No feedback available
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-500">Congratulations</h2>
          <h2 className="font-bold text-2xl">
            Here is your interview feedback
          </h2>

          <h2 className="text-blue-500 text-lg my-3">
            Your Overall interview Rating: <strong>7/10</strong>{" "}
          </h2>
          <h2 className="text-sm text-gray-500">
            Find below interview question with correct answer,your answer and
            feedback for improvement{" "}
          </h2>
          {feedbackList &&
            feedbackList.map((item, index) => (
              <Collapsible key={index} className="mt-7">
                <CollapsibleTrigger className="p-2 bg-stone-300 w-full rounded-lg my-2 text-left flex justify-between gap-7">
                  {item.question} <ChevronsUpDown className="w-6 h-6" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className=" flex flex-col gap-2">
                    <h2 className="p-2 text-red-500 border rounded-lg">
                      <strong>Rating</strong>
                      {item.rating}
                    </h2>
                    <h2 className="p-2 bg-red-50 text-sm border rounded-lg">
                      <strong>Your Answer:</strong> {item.UserAnswer}
                    </h2>
                    <h2 className="p-2 bg-green-50 text-sm border rounded-lg">
                      <strong>Correct Answer:</strong> {item.correctAns}
                    </h2>
                    <h2 className="p-2 bg-blue-50 text-sm border rounded-lg">
                      <strong>Feedback:</strong> {item.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}
      <Button onclick={() => router.replace("/dashboard")}>Go Home</Button>
    </div>
  );
};

export default Feedback;
