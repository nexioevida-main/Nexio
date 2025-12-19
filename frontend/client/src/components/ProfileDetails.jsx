import React, { useState } from "react";
import { Eye, Link, Edit2, CheckCircle, Target } from "lucide-react";
import { assets, problemSolvingResponses, proofProjects } from "../assets/assets";

const ProfileDetails = () => {
  const proofPortfolio = [
    {
      title: "E-commerce Platform Redesign",
      type: "Product Design",
      description: "Redesigned checkout flow, increasing conversion by 34%",
      stats: "+34% conversion, -22% cart abandonment",
      views: 47,
      matches: 8,
      link: "#"
    },
    {
      title: "Enterprise Design System",
      type: "Design System",
      description: "Built component library used by 50+ designers across 3 products",
      stats: "200+ components, 12 months project",
      views: 32,
      matches: 12,
      link: "#"
    },
    {
      title: "Live Debug",
      type: "Code",
      description: "Resolved production memory leak in real-time",
      stats: "",
      views: 120,
      matches: 12,
      link: "#"
    }
  ];

  const activities = [
    { text: "Airbnb viewed your profile", time: "2 hours ago" },
    { text: "8 new matches added", time: "1 day ago" },
    { text: "Your proof reached 50 views", time: "3 days ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">What I am Looking For</h2>
              <button className="text-[#449FED] flex items-center gap-1">
                Edit  →
              </button>
            </div>
            <p className="text-gray-700 mb-2">
              I'm seeking a Senior Product Designer role at a growth-stage company where I can drive product strategy through user-centered design. I thrive in environments that value measurable impact and want to work on products that solve real problems at scale.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-[#ECF5FD] text-[#449FED] font-semibold text-sm border border-[#449FED] rounded-md">Growth Stage</span>
              <span className="px-2 py-1 bg-[#ECF5FD] text-[#449FED] font-semibold text-sm border border-[#449FED] rounded-md">B2C</span>
              <span className="px-2 py-1 bg-[#ECF5FD] text-[#449FED] font-semibold text-sm border border-[#449FED] rounded-md">Remote First</span>
              <span className="px-2 py-1 bg-[#ECF5FD] text-[#449FED] font-semibold text-sm border border-[#449FED] rounded-md">₦2M-₦4M</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <span> <img src={assets.light_icon} alt="icon" /></span> Proof Portfolio
              </h2>
              <button className="text-[#FFA012] flex items-center gap-1">Add More →</button>
            </div>

            {proofPortfolio.map((item, idx) => (
              <div key={idx} className="border border-[#FFA012] rounded-lg p-4 space-y-2">
                <h3 className="font-semibold">{item.title}</h3>
                <span className="text-[#FFA012] text-sm border border-[#FFA012] rounded-full px-2 bg-[#FFF6E7]">{item.type}</span>
                <p className="text-gray-700">{item.description}</p>
                {item.stats && <p className="text-[#3F8F6B] text-sm">{item.stats}</p>}
                <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><Eye size={16} /> {item.views} Views</span>
                    <span>{item.matches} Matches</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <a href={item.link} className="text-[#449FED] flex items-center gap-1">View Project <Link size={16} /></a>
                    <button className="flex items-center gap-1 text-gray-600 hover:text-[#449FED]">Edit → </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span> <img src={assets.light_bulb} alt="light-bulb" /></span> Problem Solving Responses
            </h2>

            {problemSolvingResponses.map((item, idx) => (
              <div
                key={idx}
                className="p-4 border rounded-lg bg-white shadow-sm flex flex-col space-y-2"
              >
                <p className="font-medium">{item.question}</p>
                <p className="text-gray-700">{item.answer}</p>

                <div className="flex items-center justify-between mt-2">
                  <p className="text-[#3F8F6B] font-semibold">{item.result}</p>
                  <div className="flex items-center space-x-4 text-sm text-[#475569]">
                    <Eye size={18} />
                    <p>{item.views} Views</p>
                    <button className="text-[#475569] font-medium hover:underline">
                      Edit →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">

            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-lg bg-blue-50 flex items-center justify-center">

                <img src={assets.share_icon} alt="share-icon" />
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">
                  Share Your Proof
                </h2>
                <p className="text-sm text-gray-500">
                  Show your work to potential employers
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {proofProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-100 p-4"
                >

                  <div className="flex justify-between items-start gap-4">
                    <div className="flex gap-3">
                      <span
                        className={`mt-1 h-3 w-3 rounded-full ${idx === 0
                            ? "bg-indigo-600"
                            : idx === 1
                              ? "bg-teal-400"
                              : "bg-pink-500"
                          }`}
                      />

                      <div>
                        <p className="font-semibold text-gray-900">
                          {project.title}
                        </p>
                        <p className="text-sm text-gray-600">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-400 cursor-pointer"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="18" cy="5" r="2" />
                      <circle cx="6" cy="12" r="2" />
                      <circle cx="18" cy="19" r="2" />
                      <path d="M8 12l8-7" />
                      <path d="M8 12l8 7" />
                    </svg>
                  </div>

                  <div className="flex justify-between items-center text-sm mt-3">
                    <span className="text-gray-500">
                      {project.category}
                    </span>
                    <span className="text-[#3F8F6B]">
                      {project.stats}
                    </span>
                  </div>

                  <div className="my-3 h-px bg-gray-100" />

                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Eye size={18} />  {project.views} Views
                    </div>
                    <div className="flex items-center gap-1">
                      <img src={assets.circle_tick} alt="" /> {project.matches} Matches
                    </div>
                    <div className="flex items-center gap-1 text-[#449FED]">
                      <Target size={14} />  {project.interest}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#ECF5FD] rounded-xl p-6 mt-6">
              <h2 className="font-semibold text-gray-900 mb-1">
                Share Your Portfolio
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Share all your proofs at once with a single portfolio link
              </p>

              <div className="flex flex-wrap gap-3">

                <button className="flex items-center gap-2 rounded-lg border border-[#449FED] px-4 py-2 text-sm font-medium text-[#449FED] hover:bg-blue-100 transition">
                  <img src={assets.linkedin} alt="icon" />

                  Share on LinkedIn
                </button>

                <button className="flex items-center gap-2 rounded-lg bg-[#449FED] px-4 py-2 text-sm font-medium text-white hover:bg-[#449FED]/90 transition">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 13a5 5 0 0 0 7.07 0l1.42-1.42a5 5 0 0 0-7.07-7.07L10 6" />
                    <path d="M14 11a5 5 0 0 0-7.07 0L5.5 12.5a5 5 0 0 0 7.07 7.07L14 18" />
                  </svg>
                  Copy Portfolio Link
                </button>
              </div>
            </div>

          </div>
        </div>
        <div className="lg:col-span-4 space-y-6">

          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="flex items-center gap-2 font-semibold text-lg text-gray-900 mb-4">
              <Eye size={18} />
              Visibility Control
            </h2>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-gray-100 p-4">
                <div>
                  <p className="font-medium text-gray-900">
                    Show to all companies
                  </p>
                  <p className="text-sm text-gray-500">
                    Maximum visibility to employers
                  </p>
                </div>

                <button className="relative inline-flex h-6 w-11 items-center rounded-full border border-[#449FED] bg-[#F8FAFC] transition">
                  <span className="inline-block h-5 w-5 translate-x-5 transform rounded-full bg-[#449FED] transition" />
                </button>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-100 p-4">
                <div>
                  <p className="font-medium text-gray-900">
                    Hide from current employer
                  </p>
                  <p className="text-sm text-gray-500">
                    Your company won't see your profile
                  </p>
                </div>

                <button className="relative inline-flex h-6 w-11 items-center rounded-full border border-[#449FED] bg-[#F8FAFC] transition">
                  <span className="inline-block h-5 w-5 translate-x-5 transform rounded-full bg-[#449FED] transition" />
                </button>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-100 p-4">
                <div>
                  <p className="font-medium text-gray-900">
                    Anonymous browsing
                  </p>
                  <p className="text-sm text-gray-500">
                    Browse without being tracked
                  </p>
                </div>

                <button className="relative inline-flex h-6 w-11 items-center rounded-full border border-[#94A3B8] bg-[#F8FAFC] cursor-not-allowed">
                  <span className="inline-block h-5 w-5 translate-x-1 transform rounded-full bg-[#94A3B8]" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="font-semibold text-lg text-gray-900 mb-4">
              Profile Strength
            </h2>
            <p className="text-sm text-gray-600 mb-2">Overall Score</p>
            <div className="h-3 w-full rounded-full bg-[#A9D3F7] mb-2">
              <div className="h-3 w-[89%] rounded-full bg-[#449FED]" />
            </div>
            <div className="flex justify-end mb-4">
              <span className="font-semibold text-[#449FED]">89/100</span>
            </div>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center font-semibold gap-2 text-[#449FED]">
                <CheckCircle size={16} />
                2 verified proofs
              </li>
              <li className="flex items-center font-semibold gap-2 text-[#449FED]">
                <CheckCircle size={16} />
                Intent statement added
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <CheckCircle size={16} />
                Add 1 more proof to reach top 5%
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="font-semibold text-lg text-gray-900 mb-4">
              Recent Activities
            </h2>

            <div className="space-y-3">
              <div className="flex gap-3 rounded-xl border border-gray-100 p-4">
                <span className="mt-1 h-3 w-3 rounded-full bg-purple-500" />
                <div>
                  <p className="font-medium text-gray-900">
                    Airbnb viewed your profile
                  </p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>

              <div className="flex gap-3 rounded-xl border border-gray-100 p-4">
                <span className="mt-1 h-3 w-3 rounded-full bg-[#3F8F6B]" />
                <div>
                  <p className="font-medium text-gray-900">
                    8 new matches added
                  </p>
                  <p className="text-sm text-gray-500">1 day ago</p>
                </div>
              </div>

              <div className="flex gap-3 rounded-xl border border-gray-100 p-4">
                <span className="mt-1 h-3 w-3 rounded-full bg-yellow-700" />
                <div>
                  <p className="font-medium text-gray-900">
                    Your proof reached 50 views
                  </p>
                  <p className="text-sm text-gray-500">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
