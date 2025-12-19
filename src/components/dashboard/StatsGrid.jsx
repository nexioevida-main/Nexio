// components/StatsGrid.jsx
import React from "react";

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-2">
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
        </div>
        <div className="text-2xl font-bold text-blue-500 mb-1">89/100</div>
        <div className="text-xs text-gray-600">Selection Score</div>
        <div className="text-xs text-green-500 mt-1">+12%</div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-2">
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
            <line x1="12" y1="2" x2="12" y2="4"></line>
            <line x1="12" y1="20" x2="12" y2="22"></line>
            <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"></line>
            <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"></line>
            <line x1="2" y1="12" x2="4" y2="12"></line>
            <line x1="20" y1="12" x2="22" y2="12"></line>
            <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"></line>
            <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"></line>
          </svg>
        </div>
        <div className="text-2xl font-bold text-blue-500 mb-1">24</div>
        <div className="text-xs text-gray-600">Active Matches</div>
        <div className="text-xs text-green-500 mt-1">8 New</div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 12 18"></polyline>
            <polyline points="12 12 18 12"></polyline>
            <polyline points="12 12 6 12"></polyline>
          </svg>
        </div>
        <div className="text-2xl font-bold text-blue-500 mb-1">7</div>
        <div className="text-xs text-gray-600">Application Out</div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </div>
        <div className="text-2xl font-bold text-blue-500 mb-1">56</div>
        <div className="text-xs text-gray-600">Profile Views</div>
      </div>
    </div>
  );
};

export default StatsGrid;
