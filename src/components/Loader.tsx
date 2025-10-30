"use client";

import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      
        <Image
        src="https://cdn.dribbble.com/users/760347/screenshots/7341673/loading_ps.gif"
        alt="Loading..."
        className="w-24 h-24"
        height={96}
        width={96}
      />
    </div>
  );
}
