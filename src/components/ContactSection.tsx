"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="text-white py-24 px-6 flex flex-col items-center">
      <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400 drop-shadow-[0_0_25px_rgba(0,255,255,0.6)] animate-pulse">
        Get In Touch
      </h2>

      <p className="text-center text-gray-300 max-w-2xl mb-12">
        Let&apos;s collaborate on your next project or discuss exciting opportunities.
      </p>

      <form className="w-full max-w-3xl p-8 rounded-xl bg-black/50 border border-cyan-400/30 shadow-[0_0_30px_rgba(0,255,255,0.3)] backdrop-blur-md space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white w-full focus:border-cyan-400 outline-none"
          />
          <input
            type="email"
            placeholder="your.email@example.com"
            className="bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white w-full focus:border-cyan-400 outline-none"
          />
        </div>

        <input
          type="text"
          placeholder="Project Inquiry"
          className="bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white w-full focus:border-cyan-400 outline-none"
        />

        <textarea
          placeholder="Tell me about your project..."
          rows={5}
          className="bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white w-full focus:border-cyan-400 outline-none"
        ></textarea>

        <button className="w-full bg-cyan-400 text-black py-3 rounded-md font-semibold hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,255,0.6)]">
          Send Message
        </button>
      </form>

      {/* 🔗 Social Icons */}
      <div className="flex gap-6 mt-10 text-2xl text-cyan-300">
        <FaGithub className="hover:text-fuchsia-400 cursor-pointer transition-all duration-300" />
        <FaLinkedin className="hover:text-fuchsia-400 cursor-pointer transition-all duration-300" />
        <FaTwitter className="hover:text-fuchsia-400 cursor-pointer transition-all duration-300" />
        <FaEnvelope className="hover:text-fuchsia-400 cursor-pointer transition-all duration-300" />
      </div>
    </section>
  );
}
