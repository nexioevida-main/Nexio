import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="py-16 sm:py-24 text-center bg-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Prove Your <span className="text-blue-500">Capability</span>
          <br />
          Not Just Your Resume
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Skip the CV. Skip LinkedIn. Show real work with measurable impact and
          get matched to companies actively looking for your proof.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a
            href="#"
            className="bg-transparent border border-blue-500 text-blue-500 px-6 py-4 rounded-full text-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            See How It Works
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white px-6 py-4 rounded-full text-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Start Building Proof
          </a>
        </div>

        <div className="bg-white py-10 px-4 sm:px-8 lg:px-16 mt-5">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Our Stats</h2>
          <p className="text-gray-600 mb-8">
            Evidence removes uncertainty and speeds up shortlisting.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2">
                3.2x
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                Higher callback rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2">
                92%
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                Placement ratio
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2">
                87%
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                Match accuracy
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2">
                12+
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                Companies viewing per profile
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
