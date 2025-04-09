// "use client";

// import { useState } from "react";
// import { Input } from "../../../../components/ui/input";
// import { Textarea } from "../../../../components/ui/textarea";
// import { v4 as uuidv4 } from "uuid";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "../../../../components/ui/dialog";
// import { Button } from "../../../../components/ui/button";
// import { chatSession } from "../../../../utils/Gemni";
// import { LoaderCircle } from "lucide-react";
// import { db } from "../../../../utils/db";
// import { MockInterview } from "../../../../utils/schema";
// import { useUser } from "@clerk/nextjs";
// import moment from "moment";
// import { useRouter } from "next/navigation";

// const AddNewInterview = () => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [jobPosition, setJobPosition] = useState();
//   const [jobDesc, setJobDesc] = useState();
//   const [jobExperience, setJobExperience] = useState();
//   const [loading, setLoading] = useState(false);
//   const [jsonResponse, setJsonResponse] = useState([]);
//   const { user } = useUser();

//   const router = useRouter();

//   const onSubmit = async (e) => {
//     setLoading(true);
//     e.preventDefault();

//     // console.log(jobPosition, jobDesc, jobExperience);

//     const InputPrompt =
//       "Job position: " +
//       jobPosition +
//       "  , Job Decription : " +
//       jobDesc +
//       " , Years of experience : " +
//       jobExperience +
//       " .Depends on job position,job decription, and years of experience  give us " +
//       process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
//       " interview question along with Answer in JSON format. Give use question and answer field on JSON.";

//     const result = await chatSession.sendMessage(InputPrompt);

//     const MockJsonResponse = result.response
//       .text()
//       .replace("```json", "")
//       .replace("```", "");
//     // console.log(JSON.parse(MockJsonResponse));
//     setJsonResponse(MockJsonResponse);

//     if (MockJsonResponse) {
//       const response = await db
//         .insert(MockInterview)
//         .values({
//           mockId: uuidv4(),
//           jsonMockResp: MockJsonResponse,
//           jobPosition: jobPosition,
//           jobDesc: jobDesc,
//           jobExperience: jobExperience,
//           createdBy: user?.primaryEmailAddress?.emailAddress,
//           createdAt: moment().format("DD-MM-yyyy"),
//         })
//         .returning({ mockId: MockInterview.mockId });

//       // console.log(response);
//       if (response) {
//         setOpenDialog(false);
//         router.push("/dashboard/interview/" + response[0]?.mockId);
//       }
//     } else {
//       console.log("Error in generating response");
//     }
//     setLoading(false);
//   };

//   return (
//     <div>
//       <div
//         onClick={() => setOpenDialog(true)}
//         className="p-10 border-lg rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
//       >
//         <h2 className="text-lg font-bold text-center">Add New Interview</h2>
//       </div>
//       <Dialog open={openDialog}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle className="text-2xl">
//               Tell us more about your job
//             </DialogTitle>
//             <DialogDescription>
//               Fill in the details about your job and job description
//             </DialogDescription>
//           </DialogHeader>

//           <form onSubmit={onSubmit}>
//             <div>
//               <h2>Add Details about your job, Job description</h2>
//               <div className="mt-7 my-3">
//                 <label>Job Role</label>
//                 <Input
//                   placeholder="Ex. Full stack developer"
//                   required
//                   onChange={(event) => setJobPosition(event.target.value)}
//                 />
//               </div>
//               <div className="my-3">
//                 <label>Tech Stack</label>
//                 <Textarea
//                   placeholder="Ex. React,nodejs"
//                   required
//                   onChange={(event) => setJobDesc(event.target.value)}
//                 />
//               </div>
//               <div className="my-3">
//                 <label>Years of Experience</label>
//                 <Input
//                   placeholder="Ex. 3"
//                   type="number"
//                   onChange={(event) => setJobExperience(event.target.value)}
//                   required
//                 />
//               </div>

//               <div className="flex justify-end gap-5">
//                 <Button
//                   onClick={() => setOpenDialog(false)}
//                   type="button"
//                   variant="ghost"
//                 >
//                   Cancel
//                 </Button>
//                 <Button type="submit" disabled={loading}>
//                   {loading ? (
//                     <>
//                       <LoaderCircle className="animate-spin" />
//                       Generating...
//                     </>
//                   ) : (
//                     "Start Interview"
//                   )}
//                 </Button>
//               </div>
//             </div>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default AddNewInterview;
"use client";

import { useState } from "react";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { v4 as uuidv4 } from "uuid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../../components/ui/dialog";
import { Button } from "../../../../components/ui/button";
import { chatSession } from "../../../../utils/Gemni";
import { LoaderCircle } from "lucide-react";
import { db } from "../../../../utils/db";
import { MockInterview } from "../../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";

const AddNewInterview = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const { user } = useUser();
  const router = useRouter();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const InputPrompt =
      "Job position: " +
      jobPosition +
      "  , Job Description : " +
      jobDesc +
      " , Years of experience : " +
      jobExperience +
      " .Depends on job position,job description, and years of experience  give us " +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      " interview question along with Answer in JSON format. Give use question and answer field on JSON.";

    const result = await chatSession.sendMessage(InputPrompt);
    const MockJsonResponse = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    setJsonResponse(MockJsonResponse);

    if (MockJsonResponse) {
      const response = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResponse,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-yyyy"),
        })
        .returning({ mockId: MockInterview.mockId });

      if (response) {
        setOpenDialog(false);
        router.push("/dashboard/interview/" + response[0]?.mockId);
      }
    } else {
      console.log("Error in generating response");
    }
    setLoading(false);
  };

  return (
    <div className="w-full">
      {/* Trigger Card */}
      <div
        onClick={() => setOpenDialog(true)}
        className="group p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
      >
        <div className="flex items-center justify-center h-24">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              + Add New Interview
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Start a new mock interview
            </p>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold rounded-lg text-gray-900 dark:text-white">
              New Interview Setup
            </DialogTitle>
            <DialogDescription className="text-gray-600 rounded-lg dark:text-gray-300">
              Provide details about the job position you want to practice for
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={onSubmit} className="space-y-6 mt-4">
            <div className="space-y-4 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Job Role
                </label>
                <Input
                  placeholder="e.g., Full Stack Developer"
                  value={jobPosition}
                  onChange={(e) => setJobPosition(e.target.value)}
                  required
                  className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Tech Stack / Job Description
                </label>
                <Textarea
                  placeholder="e.g., React, Node.js, AWS"
                  value={jobDesc}
                  onChange={(e) => setJobDesc(e.target.value)}
                  required
                  className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white min-h-[100px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Years of Experience
                </label>
                <Input
                  placeholder="e.g., 3"
                  type="number"
                  value={jobExperience}
                  onChange={(e) => setJobExperience(e.target.value)}
                  required
                  min="0"
                  className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpenDialog(false)}
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                    <span>Generating...</span>
                  </div>
                ) : (
                  "Start Interview"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;