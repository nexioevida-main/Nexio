// components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-3">
      <div className="container mx-auto px-4 flex justify-between items-center flex-wrap gap-3">
        <div className="text-xl font-bold text-blue-500">Nexio</div>

        <nav className="hidden md:block">
          <ul className="flex gap-4">
            <li>
              <a
                href="#dashboard"
                className="text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-1 active:bg-blue-500 active:text-white"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#active-matches"
                className="text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-1"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
                Active Matches
              </a>
            </li>
            <li>
              <a
                href="#build-your-proof"
                className="text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-1"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M13 2L3 14h9l-1 8 10-18z"></path>
                </svg>
                Build Proof
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&q=80"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="bg-transparent border-none cursor-pointer flex items-center gap-1 p-2 rounded-full hover:bg-gray-100 transition-colors">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
