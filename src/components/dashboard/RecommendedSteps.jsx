// components/RecommendedSteps.jsx
import React from "react";

const RecommendedSteps = () => {
  const steps = [
    {
      title: "Preparation for Interview",
      description: "Due soon",
    },
    {
      title: "Review 8 New Matches",
      description: "High match score",
    },
    {
      title: "Preparation for Interview",
      description: "Due soon",
    },
  ];

  return (
    <section className="bg-white border border-gray-200 rounded-lg p-5 mb-5 shadow-sm">
      <h2 className="text-lg font-bold mb-3">Recommended Steps</h2>

      {steps.map((step, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-4 mb-3 bg-white"
        >
          <div className="font-medium">{step.title}</div>
          <div className="text-sm text-gray-600">{step.description}</div>
        </div>
      ))}
    </section>
  );
};

export default RecommendedSteps;
