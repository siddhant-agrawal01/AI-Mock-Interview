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
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const { user } = useUser();

  const router = useRouter();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    // console.log(jobPosition, jobDesc, jobExperience);

    const InputPrompt =
      "Job position: " +
      jobPosition +
      "  , Job Decription : " +
      jobDesc +
      " , Years of experience : " +
      jobExperience +
      " .Depends on job position,job decription, and years of experience  give us " +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      " interview question along with Answer in JSON format. Give use question and answer field on JSON.";

    const result = await chatSession.sendMessage(InputPrompt);

    const MockJsonResponse = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    // console.log(JSON.parse(MockJsonResponse));
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

      // console.log(response);
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
    <div>
      <div
        onClick={() => setOpenDialog(true)}
        className="p-10 border-lg rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
      >
        <h2 className="text-lg font-bold text-center">Add New Interview</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job
            </DialogTitle>
            <DialogDescription>
              Fill in the details about your job and job description
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={onSubmit}>
            <div>
              <h2>Add Details about your job, Job description</h2>
              <div className="mt-7 my-3">
                <label>Job Role</label>
                <Input
                  placeholder="Ex. Full stack developer"
                  required
                  onChange={(event) => setJobPosition(event.target.value)}
                />
              </div>
              <div className="my-3">
                <label>Tech Stack</label>
                <Textarea
                  placeholder="Ex. React,nodejs"
                  required
                  onChange={(event) => setJobDesc(event.target.value)}
                />
              </div>
              <div className="my-3">
                <label>Years of Experience</label>
                <Input
                  placeholder="Ex. 3"
                  type="number"
                  onChange={(event) => setJobExperience(event.target.value)}
                  required
                />
              </div>

              <div className="flex justify-end gap-5">
                <Button
                  onClick={() => setOpenDialog(false)}
                  type="button"
                  variant="ghost"
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <LoaderCircle className="animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Start Interview"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;
