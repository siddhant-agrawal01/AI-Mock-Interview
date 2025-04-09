// "use client";

// // import React, { useEffect, useState } from "react";
// // import { MockInterview } from "../../../../utils/schema";
// // import { eq } from "drizzle-orm";
// // import { db } from "../../../../utils/db";
// // import Webcam from "react-webcam";
// // import { Lightbulb, WebcamIcon } from "lucide-react";
// // import { Button } from "../../../../components/ui/button";
// // import Link from "next/link";

// // function Interview({ params }) {
// //   const [interviewData, setInterviewData] = useState();
// //   const [webCamEnabled, setWebCamEnabled] = useState(false);
// //   useEffect(() => {
// //     console.log(params.interviewId);
// //     GetInterviewDetails();
// //   }, []);

// //   const GetInterviewDetails = async () => {
// //     const result = await db
// //       .select()
// //       .from(MockInterview)
// //       .where(eq(MockInterview.mockId, params.interviewId));

// //     setInterviewData(result[0]);
// //   };
// //   return (
// //     <div className="my-10 ">
// //       <h2 className="font-bold my-8 text-2xl">Let&apos;s get started</h2>
// //       <div className="flex grid-cols-1 md:grid-cols-2 gap-10">
// //         <div className="my-5 flex gap-5 flex-col ">
// //           <div className="gap-5 flex flex-col border rounded-lg p-5">
// //             <h2 className="text-lg">
// //               <strong>JobRole/Job Position : </strong>
// //               {interviewData.jobPosition}
// //             </h2>
// //             <h2 className="text-lg">
// //               <strong>JobDescription/Tech stack : </strong>
// //               {interviewData.jobDesc}
// //             </h2>
// //             <h2 className="text-lg">
// //               <strong>Years of Experience : </strong>
// //               {interviewData.jobExperience}
// //             </h2>
// //           </div>
// //           <div className="bg-yellow-100 p-5 rounded-lg border border-yellow-300">
// //             <h2 className="flex text-yellow-500 gap-2 items-center">
// //               {" "}
// //               <Lightbulb className="" />
// //               <strong>Information</strong>
// //             </h2>
// //             <h2 className="mt-3 text-yellow-600">
// //               {process.env.NEXT_PUBLIC_INFO}
// //             </h2>
// //           </div>
// //         </div>
// //         <div>
// //           {webCamEnabled ? (
// //             <Webcam
// //               onUserMedia={() => setWebCamEnabled(true)}
// //               onUserMediaError={() => setWebCamEnabled(false)}
// //               // mirrored={true}
// //               style={{ height: 300, width: 300 }}
// //             />
// //           ) : (
// //             <>
// //               <WebcamIcon className="w-full h-72 rounded-lg border  bg-secondary my-7 p-20" />
// //               <Button variant="ghost" onClick={() => setWebCamEnabled(true)}>
// //                 Enable Camera and Microphone
// //               </Button>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //       <div className="flex justify-end items-end ">
// //         <Link href={"/dashboard/interview/" + params.interviewId + "/start"}>
// //           <Button className="">Start Interview</Button>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Interview;
// import React, { useEffect, useState } from "react";
// import { MockInterview } from "../../../../../utils/schema";
// import { eq } from "drizzle-orm";
// import { db } from "../../../../../utils/db";
// import Webcam from "react-webcam";
// import { Lightbulb, WebcamIcon } from "lucide-react";
// import { Button } from "../../../../../components/ui/button";
// import Link from "next/link";

// function Interview({ params }) {
//   const [interviewData, setInterviewData] = useState(null); // Initialize with null
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
//     <div className="my-10">
//       <h2 className="font-bold my-8 text-2xl">Let&apos;s get started</h2>
//       <div className="flex grid-cols-1 md:grid-cols-2 gap-10">
//         <div className="my-5 flex gap-5 flex-col">
//           <div className="gap-5 flex flex-col border rounded-lg p-5">
//             {/* Add a check for interviewData */}
//             {interviewData ? (
//               <>
//                 <h2 className="text-lg">
//                   <strong>JobRole/Job Position : </strong>
//                   {interviewData.jobPosition}
//                 </h2>
//                 <h2 className="text-lg">
//                   <strong>JobDescription/Tech stack : </strong>
//                   {interviewData.jobDesc}
//                 </h2>
//                 <h2 className="text-lg">
//                   <strong>Years of Experience : </strong>
//                   {interviewData.jobExperience}
//                 </h2>
//               </>
//             ) : (
//               <p>Loading interview details...</p> // You can show a loader or a message
//             )}
//           </div>
//           <div className="bg-yellow-100 p-5 rounded-lg border border-yellow-300">
//             <h2 className="flex text-yellow-500 gap-2 items-center">
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
//               style={{ height: 300, width: 300 }}
//             />
//           ) : (
//             <>
//               <WebcamIcon className="w-full h-72 rounded-lg border bg-secondary my-7 p-20" />
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


"use client";

import React, { useEffect, useState } from "react";
import { MockInterview } from "../../../../../utils/schema";
import { eq } from "drizzle-orm";
import { db } from "../../../../../utils/db";
import Webcam from "react-webcam";
import { AlertCircle, Briefcase, Code, Clock, WebcamIcon } from "lucide-react";
import { Button } from "../../../../../components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState(null);
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    getInterviewDetails();
  }, []);

  const getInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));
      
      setInterviewData(result[0]);
    } catch (error) {
      console.error("Failed to fetch interview details:", error);
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="max-w-6xl mx-auto px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-3xl font-bold mb-10 border-b pb-4 dark:text-gray-100 text-gray-800 dark:border-gray-700"
        variants={itemVariants}
      >
        Prepare for Your Mock Interview
      </motion.h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          ) : interviewData ? (
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <h2 className="text-xl font-semibold mb-5 text-gray-700 dark:text-gray-200">Position Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 mt-1 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Job Position</h3>
                    <p className="text-gray-600 dark:text-gray-400">{interviewData.jobPosition}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 mt-1 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Tech Stack & Requirements</h3>
                    <p className="text-gray-600 dark:text-gray-400">{interviewData.jobDesc}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3"> 
                  <Clock className="w-5 h-5 mt-1 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Experience Level</h3>
                    <p className="text-gray-600 dark:text-gray-400">{interviewData.jobExperience} years</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
              <p className="text-red-600 dark:text-red-400">Unable to load interview details. Please try again.</p>
            </div>
          )}

          <motion.div 
            className="bg-amber-50 dark:bg-amber-900/20 rounded-xl shadow-sm border border-amber-200 dark:border-amber-800/50 p-6"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <h2 className="text-lg font-semibold text-amber-700 dark:text-amber-300">Before You Begin</h2>
            </div>
            <p className="text-amber-700 dark:text-amber-400">
              {process.env.NEXT_PUBLIC_INFO || 
               "Ensure you're in a quiet environment. Speak clearly and take your time to think through responses. The interview will evaluate both technical knowledge and communication skills."}
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center justify-center"
          variants={itemVariants}
        >
          <div className="bg-gray-50 dark:bg-gray-800 w-full rounded-xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-200">Camera Preview</h2>
            
            {webCamEnabled ? (
              <Webcam
                onUserMedia={() => setWebCamEnabled(true)}
                onUserMediaError={() => setWebCamEnabled(false)}
                className="rounded-lg w-full max-w-md shadow-md"
                width={400}
                height={300}
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-6 py-8">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-6">
                  <WebcamIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-center max-w-sm">
                  Enable your camera to see how you appear during the interview
                </p>
                <Button 
                  onClick={() => setWebCamEnabled(true)}
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
                >
                  Enable Camera
                </Button>
              </div>
            )}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-6">All systems ready? Begin when you're prepared.</p>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-10 flex justify-end"
        variants={itemVariants}
      >
        <Link href={`/dashboard/interview/${params.interviewId}/start`}>
          <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-sm transition-all hover:shadow">
            Start Interview
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Interview;