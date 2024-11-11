import React from "react";

const InterviewItemCard = ({ interview }) => {
  return (
    <div>
      <h2 className="border shadow-sm rounded-lg p-3">
        {interview.jobPosition}
      </h2>
    </div>
  );
};

export default InterviewItemCard;
