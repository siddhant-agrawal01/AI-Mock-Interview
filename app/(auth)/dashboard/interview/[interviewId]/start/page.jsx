// "use client";

// import React, { useEffect, useState } from "react";
// import { MockInterview } from "../../../../../../utils/schema";
// import { eq } from "drizzle-orm";
// import { db } from "../../../../../../utils/db";
// import QuestionSection from "./_components/QuestionSection";
// import RecordAnswerSection from "./_components/RecordAnswerSection";
// import { Button } from "../../../../../../components/ui/button";
// import Link from "next/link";

// const StartInterview = ({ params }) => {
//   const [interviewData, setInterviewData] = useState(); // Initialize with null
//   const [mockInterviewQuestions, setMockInterviewQuestions] = useState();
//   const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
//   useEffect(() => {
//     GetInterviewDetails();
//   }, []);

//   const GetInterviewDetails = async () => {
//     try {
//       const result = await db
//         .select()
//         .from(MockInterview)
//         .where(eq(MockInterview.mockId, params.interviewId));
//       const jsonMockResp = result[0].jsonMockResp.replace(/[\u0000-\u001F\u007F-\u009F]/g, ""); // Sanitize JSON string
//       const parsedMockResp = JSON.parse(jsonMockResp);
//       setMockInterviewQuestions(parsedMockResp);
//       setInterviewData(result[0]);
//     } catch (error) {
//       console.error("Error parsing JSON:", error);
//     }
//   };
//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10  ">
//         {/* Questions  */}
//         <QuestionSection
//           activeQuestionIndex={activeQuestionIndex}
//           mockInterviewQuestions={mockInterviewQuestions}
//         />
//         {/* video recording  */}

//         <RecordAnswerSection
//           activeQuestionIndex={activeQuestionIndex}
//           mockInterviewQuestions={mockInterviewQuestions}
//           interviewData={interviewData}
//         />
//       </div>

//       <div className="flex justify-end gap-6">
//         {activeQuestionIndex > 0 && (
//           <Button
//             onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
//           >
//             Previous Question
//           </Button>
//         )}
//         {activeQuestionIndex != mockInterviewQuestions?.length - 1 && (
//           <Button
//             onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
//           >
//             Next Question
//           </Button>
//         )}
//         {activeQuestionIndex == mockInterviewQuestions?.length - 1 && (
//           <Link
//             href={"/dashboard/interview/" + interviewData?.mockId + "/feedback"}
//           >
//             {" "}
//             <Button>End Interview</Button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StartInterview;

"use client";

import React, { useEffect, useState } from "react";
import { MockInterview } from "../../../../../../utils/schema";
import { eq } from "drizzle-orm";
import { db } from "../../../../../../utils/db";
import QuestionSection from "./_components/QuestionSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "../../../../../../components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

const StartInterview = ({ params }) => {
  const [interviewData, setInterviewData] = useState(null);
  const [mockInterviewQuestions, setMockInterviewQuestions] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    try {
      setLoading(true);
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));

      if (!result || result.length === 0) {
        throw new Error("Interview not found");
      }

      const jsonMockResp = result[0].jsonMockResp.replace(
        /[\u0000-\u001F\u007F-\u009F]/g,
        ""
      );
      const parsedMockResp = JSON.parse(jsonMockResp);

      setMockInterviewQuestions(parsedMockResp);
      setInterviewData(result[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching interview:", error);
      setError(error.message || "Failed to load interview data");
      toast.error(
        "Could not load interview: " + (error.message || "Unknown error")
      );
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        Loading interview...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-64">
        <p className="text-red-500 mb-4">Error: {error}</p>
        <Button onClick={GetInterviewDetails}>Retry</Button>
        <Link href="/dashboard" className="mt-4">
          <Button variant="outline">Return to Dashboard</Button>
        </Link>
      </div>
    );
  }

  if (!mockInterviewQuestions || !interviewData) {
    return (
      <div className="flex flex-col justify-center items-center h-64">
        <p className="text-amber-500 mb-4">No interview data found</p>
        <Link href="/dashboard" className="mt-4">
          <Button variant="outline">Return to Dashboard</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Questions */}
        <QuestionSection
          activeQuestionIndex={activeQuestionIndex}
          mockInterviewQuestions={mockInterviewQuestions}
        />

        {/* Video recording */}
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

        {activeQuestionIndex < mockInterviewQuestions.length - 1 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
          >
            Next Question
          </Button>
        )}

        {activeQuestionIndex === mockInterviewQuestions.length - 1 && (
          // <Link href={`/dashboard/interview/${interviewData.mockId}/feedback`}>
          <Link
            href={"/dashboard/interview/" + interviewData?.mockId + "/feedback"}
          >
            <Button>End Interview</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default StartInterview;
