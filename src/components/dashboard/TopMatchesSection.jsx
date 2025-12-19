// components/TopMatchesSection.jsx
import React from "react";

const TopMatchesSection = () => {
  const matches = [
    {
      title: "Senior Product Designer",
      company: "Techflow Inc",
      match: "94% match",
    },
    {
      title: "Design Lead",
      company: "Notion",
      match: "88% match",
    },
    {
      title: "UI Engineer",
      company: "Figma",
      match: "90% match",
    },
  ];

  return (
    <section className="bg-white border border-gray-200 rounded-lg p-5 mb-5 shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold">Top Matches for You</h2>
        <a
          href="#"
          className="text-blue-500 text-sm flex items-center gap-1 hover:underline"
        >
          view all →
        </a>
      </div>

      {matches.map((match, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-4 mb-4 bg-white"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="font-medium">{match.title}</div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h10l2 2h4a2 2 0 012 2v14a2 2 0 01-2 2z"></path>
                  <line x1="9" y1="7" x2="15" y2="7"></line>
                  <line x1="9" y1="12" x2="15" y2="12"></line>
                  <line x1="9" y1="17" x2="15" y2="17"></line>
                </svg>
                {match.company}
              </div>
            </div>
            <div className="font-bold text-blue-500 text-right">
              {match.match}
            </div>
          </div>
          <a
            href="#"
            className="text-blue-500 text-sm flex items-center gap-1 mt-2 hover:underline"
          >
            View details →
          </a>
        </div>
      ))}
    </section>
  );
};

export default TopMatchesSection;
