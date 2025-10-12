"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SelectCriteria() {
  const router = useRouter();

  const handleSelect = (role: string) => {
    router.push(`/${role.toLowerCase()}`);
  };

  return (
    <div className="py-20 px-6 bg-red-500 text-white min-h-screen">
<div className="top-4 left-4 z-50">
  <Image
    src="/logo.png"
    alt="Personal logo"
    className="w-32 h-32 object-contain"
    width={400}
    height={200}
    priority
  />
</div>
      <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-3">
        
        {/* Box 1 */}
        <div
          onClick={() => handleSelect("stalker")}
          className="bg-yellow-500 py-10 px-4 rounded-xl shadow-md text-center font-semibold cursor-pointer transition-transform hover:scale-105 hover:bg-yellow-400"
        >
          Stalker
        </div>

        {/* Box 2 */}
        <div
onClick={() => router.push("/Interviewer")}
          className="bg-blue-500 py-10 px-4 rounded-xl shadow-md text-center font-semibold cursor-pointer transition-transform hover:scale-105 hover:bg-blue-400"
        >
          Interviewer
        </div>

        {/* Box 3 */}
        <div
          onClick={() => handleSelect("dhinchaak")}
          className="bg-green-500 py-10 px-4 rounded-xl shadow-md text-center font-semibold cursor-pointer transition-transform hover:scale-105 hover:bg-green-400"
        >
          Dhinchaak
        </div>

      </div>
    </div>
  );
}
 