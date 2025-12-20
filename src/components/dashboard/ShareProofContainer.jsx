// components/ShareProofContainer.jsx
import React from "react";

const ShareProofContainer = () => {
  const proofs = [
    {
      title: "E-commerce Platform Redesign",
      description: "Redesigned checkout flow, increasing conversion by 34%",
      metrics: {
        views: "47 Views",
        matches: "8 Matches",
        interest: "High Interest",
      },
      stats: "+34% conversion, -22% cart abandonment",
    },
    {
      title: "E-commerce Design System",
      description: "Created comprehensive design system with 200+ components",
      metrics: {
        views: "32 Views",
        matches: "5 Matches",
        interest: "Medium Interest",
      },
      stats: "200+ components, 4.2k downloads",
    },
    {
      title: "E-commerce Platform Redesign",
      description: "Redesigned checkout flow, increasing conversion by 34%",
      metrics: {
        views: "120 Views",
        matches: "12 Matches",
        interest: "High Interest",
      },
      stats: "+34% conversion, -22% cart abandonment",
    },
  ];

  return (
    <section className="bg-white border border-gray-200 rounded-lg p-5 mb-5 shadow-sm">
      <h3 className="text-base font-bold mb-3">Share Your Proof</h3>
      <p className="text-sm text-gray-600 mb-4">
        Show your work to potential employers
      </p>

      {proofs.map((proof, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-4 mb-4 bg-white"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="font-medium">{proof.title}</div>
              <div className="text-sm text-gray-600">{proof.description}</div>
            </div>
            <div className="font-bold text-blue-500 text-right">
              {proof.stats}
            </div>
          </div>
          <div className="flex gap-4 text-sm text-gray-600 mb-3">
            <span className="flex items-center gap-1">
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
              {proof.metrics.views}
            </span>
            <span className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
              </svg>
              {proof.metrics.matches}
            </span>
            <span className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
              </svg>
              {proof.metrics.interest}
            </span>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#"
              className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm flex items-center gap-1 hover:bg-blue-600 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8v-2H8v2zm-6-8h6v2H2v-2zm12 0h6v2h-6v-2z"></path>
              </svg>
              Copy Link
            </a>
            <a
              href="#"
              className="bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded-full text-sm flex items-center gap-1 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              Share on LinkedIn
            </a>
          </div>
        </div>
      ))}

      <section className="bg-blue-50 border border-gray-200 rounded-lg p-4 mt-4">
        <h3 className="text-base font-bold mb-2">Share Your Portfolio</h3>
        <p className="text-sm text-gray-600 mb-4">
          Share all your proofs at once with a single portfolio link
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm flex items-center gap-1 hover:bg-blue-600 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8v-2H8v2zm-6-8h6v2H2v-2zm12 0h6v2h-6v-2z"></path>
            </svg>
            Copy Portfolio Link
          </a>
          <a
            href="#"
            className="bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded-full text-sm flex items-center gap-1 hover:bg-blue-500 hover:text-white transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            Share on LinkedIn
          </a>
        </div>
      </section>
    </section>
  );
};

export default ShareProofContainer;
