import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#180a64] to-[#7b11f3] text-white text-center py-16 mt-24">
      {/* Floating Card - "Start a Project" */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-[#0d102b] text-white w-11/12 md:w-3/4 rounded-2xl py-8 px-6 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-800">
        <div>
          <h2 className="text-4xl md:text-4xl font-semibold tracking-tight">
            want a project
          </h2>
          <p className="text-gray-300 mt-4 text-md md:text-base">
            Interested in working together? Let&apos;s meet this sunday. I&apos;ll buy the coffee.
          </p>
        </div>
        <a
href="https://wa.me/919979089031?text=Hi%20there%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
          className="border text-teal-400 bg-gradient-to-r from-indigo-600 to-pink-600 px-6 py-3 rounded-full font-medium hover:bg-teal-400 hover:text-[#0d102b] transition-all flex items-center gap-2"
        >
          🤘 Let&apos;s do this
        </a>
      </div>

      {/* Main Footer Content */}
      <div className="mt-28 flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="bg-white/10 p-3 rounded-2xl">
          <span className="text-3xl font-extrabold tracking-wider">VDR</span>
        </div>

        {/* Text */}
        <p className="text-lg font-light">
          Living, learning & leveling up one day at a time.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/DhruviilVyas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/dhruvilvyas03"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:dhruvilvyas03@gmail.com"
            className="hover:text-gray-300 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Bottom Text */}
        <p className="text-sm text-gray-300">
          Handcrafted by <span className="font-medium">Dhruvil Vyas</span> ©2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
