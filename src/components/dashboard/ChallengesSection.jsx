// components/ChallengesSection.jsx
import React from "react";

const ChallengesSection = () => {
  const challenges = [
    {
      title: "Airbnb",
      badge: "Hot",
      description:
        "How would you redesign our host onboarding to reduce drop off?",
      reward: "Reward: Fast Track to Interview",
      responses: "10 responses",
    },
    {
      title: "Linear",
      badge: "Hot",
      description: "Propose a better way to visualize project dependencies?",
      reward: "Reward: Portfolio review section",
      responses: "4 responses",
    },
    {
      title: "Discord",
      badge: null,
      description:
        "Design a feature that will help communities discover relevant servers",
      reward: "Reward: Fast Track to Interview",
      responses: "12 responses",
    },
  ];

  return (
    <section className="bg-white border border-orange-500 rounded-lg p-5 mb-5 shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold flex items-center gap-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 19l9-7-9-7V19zM5 12H3v7h2v-7zm10 0v7h2v-7h-2z"></path>
          </svg>
          Challenges from Employers
        </h2>
        <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          3 new →
        </div>
      </div>

      {challenges.map((challenge, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-4 mb-4 bg-white"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="font-medium">{challenge.title}</div>
              {challenge.badge && (
                <div className="bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full inline-block mt-1">
                  {challenge.badge}
                </div>
              )}
            </div>
            <div className="text-sm text-gray-600">{challenge.responses}</div>
          </div>
          <div className="text-sm text-gray-600 mb-2">
            {challenge.description}
          </div>
          <div className="bg-blue-50 text-green-600 px-2 py-1 rounded text-xs flex items-center gap-1 mb-2">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 19l9-7-9-7V19zM5 12H3v7h2v-7zm10 0v7h2v-7h-2z"></path>
            </svg>
            {challenge.reward}
          </div>
          <a
            href="#"
            className="text-blue-500 text-sm flex items-center gap-1 hover:underline"
          >
            View details →
          </a>
        </div>
      ))}

      <a
        href="#"
        className="block bg-transparent border border-orange-500 text-orange-500 px-4 py-3 rounded-full text-center font-medium hover:bg-orange-500 hover:text-white transition-colors"
      >
        Browse all challenges
      </a>
    </section>
  );
};

export default ChallengesSection;
