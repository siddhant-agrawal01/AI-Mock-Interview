import React from "react";

const InterviewItemCard = ({ interview }) => {
  return (
    <div className="border shadow-sm rounded-lg p-3">
      <h2 className="font-bold text-primary">{interview?.jobPosition}</h2>
    </div>
  );
};

export default InterviewItemCard;
