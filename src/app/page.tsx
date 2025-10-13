"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function SelectCriteria() {
  const [day, setDay] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date().getDay();
    setDay(days[today]);
  }, []);

  const handleSelect = (role: string) => {
    setLoading(true);
    setTimeout(() => {
      router.push(`/${role.toLowerCase()}`);
    }, 200);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <img
            src="https://cdn.dribbble.com/users/760347/screenshots/7341673/loading_ps.gif"
            alt="Loading..."
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
        </div>
      )}

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/bg.png" // optional poster for mobile fallback
        >
          <source src="/animation.webm" type="video/webm" />
          {/* Add mp4 fallback for older browsers */}
          <source src="/animation.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Logo */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Personal logo"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain drop-shadow-lg cursor-pointer"
            width={96}
            height={96}
            priority
          />
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 py-16 sm:py-20 text-center animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-10 drop-shadow-lg">
          Happy <span className="text-yellow-300">{day}</span>!
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-14">
          Choose your vibe for today — each path leads to a different world of creativity 🌟
        </p>

        {/* Options Grid */}
        <div className="max-w-5xl mx-auto grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Box 1 */}
          <div
            onClick={() => handleSelect("stalker")}
            className="p-6 sm:p-8 bg-white/10 border border-white/20 rounded-2xl shadow-xl backdrop-blur-md hover:bg-white/20 cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-yellow-300">
              Stalker
            </h2>
            <p className="text-sm sm:text-base text-gray-200">
              Dive deep into curiosity and exploration 👀
            </p>
          </div>

          {/* Box 2 */}
          <div
            onClick={() => handleSelect("interviewer")}
            className="p-6 sm:p-8 bg-white/10 border border-white/20 rounded-2xl shadow-xl backdrop-blur-md hover:bg-white/20 cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-300">
              Interviewer
            </h2>
            <p className="text-sm sm:text-base text-gray-200">
              A normal portfolio with high-level project section 🎤
            </p>
          </div>

          {/* Box 3 */}
          <div
            onClick={() => handleSelect("dhinchaak")}
            className="p-6 sm:p-8 bg-white/10 border border-white/20 rounded-2xl shadow-xl backdrop-blur-md hover:bg-white/20 cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-green-300">
              Dhinchaak
            </h2>
            <p className="text-sm sm:text-base text-gray-200">
              Bring energy and fun vibes in journey of exploring 🎵
            </p>
          </div>
        </div>

        <p className="mt-12 sm:mt-16 text-gray-300 text-sm sm:text-base tracking-wide">
          Every section is a unique project — dive in and explore the creativity! ✨
        </p>
      </div>

      {/* Fade-in Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out;
        }
      `}</style>
    </div>
  );
}
