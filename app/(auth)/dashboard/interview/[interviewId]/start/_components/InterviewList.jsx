"use client";

import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React, { useState } from "react";
import InterviewItemCard from "./InterviewItemCard";

const InterviewList = () => {
  const { user } = useUser();
  const [InterviewList, setInterviewList] = useState([]);

  const GetInterViewList = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.createdBy, user?.primaryEmailAddress))
      .orderBy(desc(MockInterview.createdAt));

    console.log(result);
    setFeedbackList(result);
    setInterviewList(result);
  };
  return (
    <div>
      <h2 className="font-medium text-xl">Previous mock Interview </h2>
      <div>
        {InterviewList &&
          InterviewList.map((item, index) => (
            <InterviewItemCard interview={interview} key={index} />
          ))}
      </div>
    </div>
  );
};

export default InterviewList;
