// components/YourProofProfile.jsx
import React from "react";

const YourProofProfile = () => {
  const proofs = [
    {
      title: "Ecommerce Website Redesign",
      meta: "+34% conversion • 47 views",
      status: "Verified",
      statusClass: "",
    },
    {
      title: "Design System",
      meta: "200+ components • 32 views",
      status: "In Review",
      statusClass: "bg-yellow-500 text-gray-900",
    },
    {
      title: "Debbugging Succession",
      meta: "Resolved production memory • 120 views",
      status: "Verified",
      statusClass: "",
    },
  ];

  return (
    <section className="bg-white border border-gray-200 rounded-lg p-5 mb-5 shadow-sm">
      <h2 className="text-lg font-bold mb-3">Your Proof Profile</h2>

      {proofs.map((proof, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-4 mb-3 bg-white"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="font-medium">{proof.title}</div>
              <div className="text-sm text-gray-600">{proof.meta}</div>
            </div>
            <div
              className={`px-2 py-1 rounded text-xs font-medium ${
                proof.statusClass || "bg-gray-100"
              }`}
            >
              {proof.status}
            </div>
          </div>
        </div>
      ))}

      <a
        href="#"
        className="block bg-transparent border border-blue-500 text-blue-500 px-4 py-3 rounded-full text-center font-medium hover:bg-blue-500 hover:text-white transition-colors flex items-center justify-center gap-1"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        Add Proof
      </a>
    </section>
  );
};

export default YourProofProfile;
