"use client";

// import React, { useEffect, useState } from "react";
// import { MockInterview } from "../../../../utils/schema";
// import { eq } from "drizzle-orm";
// import { db } from "../../../../utils/db";
// import Webcam from "react-webcam";
// import { Lightbulb, WebcamIcon } from "lucide-react";
// import { Button } from "../../../../components/ui/button";
// import Link from "next/link";

// function Interview({ params }) {
//   const [interviewData, setInterviewData] = useState();
//   const [webCamEnabled, setWebCamEnabled] = useState(false);
//   useEffect(() => {
//     console.log(params.interviewId);
//     GetInterviewDetails();
//   }, []);

//   const GetInterviewDetails = async () => {
//     const result = await db
//       .select()
//       .from(MockInterview)
//       .where(eq(MockInterview.mockId, params.interviewId));

//     setInterviewData(result[0]);
//   };
//   return (
//     <div className="my-10 ">
//       <h2 className="font-bold my-8 text-2xl">Let&apos;s get started</h2>
//       <div className="flex grid-cols-1 md:grid-cols-2 gap-10">
//         <div className="my-5 flex gap-5 flex-col ">
//           <div className="gap-5 flex flex-col border rounded-lg p-5">
//             <h2 className="text-lg">
//               <strong>JobRole/Job Position : </strong>
//               {interviewData.jobPosition}
//             </h2>
//             <h2 className="text-lg">
//               <strong>JobDescription/Tech stack : </strong>
//               {interviewData.jobDesc}
//             </h2>
//             <h2 className="text-lg">
//               <strong>Years of Experience : </strong>
//               {interviewData.jobExperience}
//             </h2>
//           </div>
//           <div className="bg-yellow-100 p-5 rounded-lg border border-yellow-300">
//             <h2 className="flex text-yellow-500 gap-2 items-center">
//               {" "}
//               <Lightbulb className="" />
//               <strong>Information</strong>
//             </h2>
//             <h2 className="mt-3 text-yellow-600">
//               {process.env.NEXT_PUBLIC_INFO}
//             </h2>
//           </div>
//         </div>
//         <div>
//           {webCamEnabled ? (
//             <Webcam
//               onUserMedia={() => setWebCamEnabled(true)}
//               onUserMediaError={() => setWebCamEnabled(false)}
//               // mirrored={true}
//               style={{ height: 300, width: 300 }}
//             />
//           ) : (
//             <>
//               <WebcamIcon className="w-full h-72 rounded-lg border  bg-secondary my-7 p-20" />
//               <Button variant="ghost" onClick={() => setWebCamEnabled(true)}>
//                 Enable Camera and Microphone
//               </Button>
//             </>
//           )}
//         </div>
//       </div>
//       <div className="flex justify-end items-end ">
//         <Link href={"/dashboard/interview/" + params.interviewId + "/start"}>
//           <Button className="">Start Interview</Button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Interview;
import React, { useEffect, useState } from "react";
import { MockInterview } from "../../../../../utils/schema";
import { eq } from "drizzle-orm";
import { db } from "../../../../../utils/db";
import Webcam from "react-webcam";
import { Lightbulb, WebcamIcon } from "lucide-react";
import { Button } from "../../../../../components/ui/button";
import Link from "next/link";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState(null); // Initialize with null
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    setInterviewData(result[0]);
  };

  return (
    <div className="my-10">
      <h2 className="font-bold my-8 text-2xl">Let&apos;s get started</h2>
      <div className="flex grid-cols-1 md:grid-cols-2 gap-10">
        <div className="my-5 flex gap-5 flex-col">
          <div className="gap-5 flex flex-col border rounded-lg p-5">
            {/* Add a check for interviewData */}
            {interviewData ? (
              <>
                <h2 className="text-lg">
                  <strong>JobRole/Job Position : </strong>
                  {interviewData.jobPosition}
                </h2>
                <h2 className="text-lg">
                  <strong>JobDescription/Tech stack : </strong>
                  {interviewData.jobDesc}
                </h2>
                <h2 className="text-lg">
                  <strong>Years of Experience : </strong>
                  {interviewData.jobExperience}
                </h2>
              </>
            ) : (
              <p>Loading interview details...</p> // You can show a loader or a message
            )}
          </div>
          <div className="bg-yellow-100 p-5 rounded-lg border border-yellow-300">
            <h2 className="flex text-yellow-500 gap-2 items-center">
              <Lightbulb className="" />
              <strong>Information</strong>
            </h2>
            <h2 className="mt-3 text-yellow-600">
              {process.env.NEXT_PUBLIC_INFO}
            </h2>
          </div>
        </div>
        <div>
          {webCamEnabled ? (
            <Webcam
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              style={{ height: 300, width: 300 }}
            />
          ) : (
            <>
              <WebcamIcon className="w-full h-72 rounded-lg border bg-secondary my-7 p-20" />
              <Button variant="ghost" onClick={() => setWebCamEnabled(true)}>
                Enable Camera and Microphone
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end items-end ">
        <Link href={"/dashboard/interview/" + params.interviewId + "/start"}>
          <Button className="">Start Interview</Button>
        </Link>
      </div>
    </div>
  );
}

export default Interview;
