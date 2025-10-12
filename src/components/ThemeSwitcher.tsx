// components/ThemeSwitcher.tsx
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
   <button
  className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-950
    ${
      theme === "bright"
        ? "bg-gray-200 text-gray-800 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-white shadow-md hover:scale-105 focus:ring-indigo-500"
        : "bg-gray-800 text-gray-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white shadow-md hover:scale-105 focus:ring-cyan-400"
    }`}
  onClick={() => setTheme(theme === "dark" ? "bright" : "dark")}
  aria-label="Toggle theme"
>
  {theme === "bright" ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
  <span className="font-medium">Too  {theme === "bright" ? "bright?" : "dark?"}</span>
</button>

  );
};