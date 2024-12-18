"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { MockInterview } from "../../../../utils/schema";
import { desc, eq } from "drizzle-orm";
import { db } from "../../../../utils/db";
import InterviewItemCard from "./InterviewItemCard";

const InterviewList = () => {
  const { user } = useUser();
  const [InterviewList, setInterviewList] = useState([]);

  useEffect(() => {
    user && GetInterviewList();
  }, [user]);

  const GetInterviewList = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.createdBy, user?.primaryEmailAddress))
      .orderBy(desc(MockInterview.createdAt));
    setInterviewList9(result);
  };
  return (
    <div>
      <h2 className="font-medium text-xl py-6">Previous Mock Interview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-3 ">
        {InterviewList &&
          InterviewList.map((interview, index) => (
            <InterviewItemCard interview={interview} key={index} />
          ))}
      </div>
    </div>
  );
};

export default InterviewList;
