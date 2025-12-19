import React from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center pt-6">
      <div
        className="
          w-[95%] max-w-[1488px]
          bg-[#F8FAFC]
          border border-gray-200
          rounded-xl
          shadow-md
          px-6
          py-4
          flex items-center justify-between
        "
      >
        <div className="flex items-center">
          <img
            src={assets.logo}
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm transition ${isActive
                  ? "bg-[#449FED] text-white"
                  : "text-gray-900 hover:bg-[#449FED] hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/how-it-works"
              className="px-4 py-2 rounded-md text-sm text-gray-900 hover:bg-[#449FED] hover:text-white transition"
            >
              How it works
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/opportunities"
              className="px-4 py-2 rounded-md text-sm text-gray-900 hover:bg-[#449FED] hover:text-white transition"
            >
              Opportunities
            </NavLink>
          </li>
        </ul>
        
        <div className="flex items-center gap-3">
          <Link
            to="/signin"
            className="
              px-5 py-2
              text-sm
              rounded-md
              border border-[#449FED]
              text-[#449FED]
              bg-white
              hover:bg-[#449FED]/10
              transition
            "
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="
              px-5 py-2
              text-sm
              rounded-md
              bg-[#449FED]
              text-white
              hover:[#449FED]/70
              transition
            "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

