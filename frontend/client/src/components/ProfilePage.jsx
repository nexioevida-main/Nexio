import React from "react";
import { MapPin, Briefcase, Mail, Globe, BarChart2, Target, Eye, Award, Settings, LogOut, Edit2, Zap } from "lucide-react";
import { assets } from "../assets/assets";

const ProfilePage = () => {

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <nav className="w-full flex justify-center">
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
            <li className="flex items-center gap-1 text-[#475569]">
              <img
                src={assets.dashboard_icon}
                alt="Dashboard"
                className="w-[18px] h-[18px]"
              /> Dashboard
            </li>
            <li className="flex items-center gap-1 text-[#475569]">
              <Target size={18} /> Active Matches
            </li>
            <li className="flex items-center gap-1 text-[#475569]">
              <img
                src={assets.build}
                alt="Dashboard"
                className="w-[18px] h-[18px]"
              />Build Proof
            </li>
          </ul>

          <div className="flex items-center gap-4 text-[#475569]">
            <img
              src={assets.profile_image}
              alt="avatar"
              className="w-8 h-8 rounded-full border border-blue-200"
            />
            <div className="flex items-center gap-1 cursor-pointer">
              <Settings size={18} /> Logout
            </div>
          </div>
        </div>
      </nav>

      <div className="w-full max-w-[1648px] mx-auto p-6 bg-[#F3F4F6] rounded-xl shadow-md">

        <div className="flex flex-col md:flex-row md:justify-between gap-6">

          <div className="flex flex-col items-start gap-4">
            <img
              src={assets.profile_image}
              alt="Profile"
              className="w-30 h-30"
            />
            <h1 className="text-3xl font-bold text-[#0F172A]">Ayomide</h1>
            <p className="text-[#0F172A] font-semibold">Senior Product Designer</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                <MapPin size={16} /> Lagos, Nigeria
              </span>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                <Briefcase size={16} /> 8 years experience
              </span>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                <Mail size={16} /> tolayomide@gmail.com
              </span>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                <Globe size={16} /> Remote
              </span>
            </div>
          </div>

          <div className="flex items-start md:items-center gap-4 mt-4 md:mt-0">
            <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> Active
            </span>
            <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition">
              <Edit2 size={16} /> Edit Profile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="flex flex-col bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 text-[#475569] font-medium">
              <img
                src={assets.frame_icon}
                alt="icon"
                className="w-[30px] h-[30px]"
              /> Selection Score
            </div>
            <span className="text-3xl text-[#449FED] mt-2">89/100</span>
          </div>

          <div className="flex flex-col bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 text-[#475569] font-medium">
              <Target size={16} /> Active Matches
            </div>
            <span className="text-3xl text-[#449FED] mt-2">24</span>
          </div>

          <div className="flex flex-col bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 text-[#475569] font-medium">
              <Eye size={16} /> Profile Views
            </div>
            <span className="text-3xl text-[#449FED] mt-2">56</span>
          </div>

          <div className="flex flex-col bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 text-[#475569] font-medium">
              <Award size={16} /> Proof Score
            </div>
            <span className="text-3xl text-[#449FED] mt-2">89/100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
