// components/WelcomeSection.jsx
import React from "react";

const WelcomeSection = () => {
  return (
    <section className="mb-5">
      <div className="text-2xl font-bold mb-1">Welcome back, Ayomide</div>
      <div className="text-sm text-gray-600 mb-3">
        You are ahead of 90% of designers in the world
      </div>
      <div className="bg-blue-50 text-blue-500 px-2 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
        </svg>
        Active
      </div>
    </section>
  );
};

export default WelcomeSection;
