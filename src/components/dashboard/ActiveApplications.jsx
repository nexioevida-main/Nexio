// components/ActiveApplications.jsx
import React from "react";

const ActiveApplications = () => {
  const applications = [
    {
      title: "Senior Product Designer",
      company: "Techflow Inc",
      applied: "Applied a month ago",
      match: "94% match",
      status: "Final round",
      statusClass: "",
    },
    {
      title: "Design Lead",
      company: "Notion",
      applied: "Applied a week ago",
      match: "88% match",
      status: "Interview",
      statusClass: "bg-green-500 text-white",
    },
    {
      title: "UI Engineer",
      company: "Figma",
      applied: "Applied two weeks ago",
      match: "90% match",
      status: "Under Review",
      statusClass: "bg-yellow-500 text-gray-900",
    },
  ];

  return (
    <section className="bg-white border border-gray-200 rounded-lg p-5 mb-5 shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold">Active Application</h2>
        <a
          href="#"
          className="text-blue-500 text-sm flex items-center gap-1 hover:underline"
        >
          view all →
        </a>
      </div>

      {applications.map((app, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg p-4 mb-4"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="font-medium">{app.title}</div>
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
                {app.company}
              </div>
              <div className="text-sm text-gray-600 mt-1">{app.applied}</div>
            </div>
            <div>
              <div className="font-bold text-blue-500">{app.match}</div>
              <div
                className={`px-2 py-1 rounded text-xs font-medium mt-1 ${
                  app.statusClass || "bg-gray-100"
                }`}
              >
                {app.status}
              </div>
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

export default ActiveApplications;
