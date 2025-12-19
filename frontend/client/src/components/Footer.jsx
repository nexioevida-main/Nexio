import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full">

      <div className="flex flex-col md:flex-row items-start justify-between py-10 border-b border-gray-500/30">

        <div className="max-w-96 flex-shrink-0">
          <img
            className="w-40 md:w-48"
            src={assets.logo}
            alt="logo"
          />
          <p className="mt-6 text-sm text-gray-500">
            Empowering talent to prove capability <br /> and connect with real opportunities.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-16 mt-8 md:mt-0">

          <div className="mb-6 sm:mb-0">
            <h2 className="font-semibold text-gray-900 mb-4">Talent</h2>
            <ul className="text-sm text-gray-500 space-y-2 list-none">
              <li><a href="#" className="hover:underline">Create Profile</a></li>
              <li><a href="#" className="hover:underline">Skill Assesment</a></li>
              <li><a href="#" className="hover:underline">Browse Jobs</a></li>
              <li><a href="#" className="hover:underline">Resources</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 mb-4">Company</h2>
            <ul className="text-sm text-gray-500 space-y-2 list-none">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Blogy</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between py-4">
        <p className="text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} nexio. All rights reserved
        </p>

        <ul className="flex gap-6 text-sm text-gray-500 mt-2 md:mt-0">
          <li>
            <a href="#" className="hover:underline">Privacy</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Terms</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Cookies</a>
          </li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer