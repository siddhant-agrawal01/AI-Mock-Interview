import React from "react";
import { Button } from "../../../../components/ui/button";

const InterviewItemCard = ({ interview }) => {
  const router = useRouter();
  const onStart = () => {
    router.push("/dashboard/interview/" + interview?.mockId);
  };

  const onFeedbackPress = () => {
    router.push("/dashboard/interview/" + interview?.mockId + "/feedback");
  };
  return (
    <div className="border shadow-sm rounded-lg p-3">
      <h2 className="font-bold text-blue-500">{interview?.jobPosition}</h2>
      <h2 className="text-gray-700 text-sm">
        {interview?.jobExperience} years
      </h2>
      <h2 className="text-gray-500 text-sm">
        Created At:
        {interview.createdAt}
      </h2>
      <div className="flex justify-between mt-2 gap-5">
        <Button
          onClick={onFeedbackPress}
          size="sm"
          variant="outline"
          className="w-full"
        >
          Feedback
        </Button>

        <Button onClick={onStart} size="sm" className="w-full">
          Start Interview
        </Button>
      </div>
    </div>
  );
};

export default InterviewItemCard;
