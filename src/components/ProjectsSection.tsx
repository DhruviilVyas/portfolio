"use client";
import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      name: "AI-Powered Dashboard",
      desc: "Real-time analytics platform with machine learning predictions built with Next.js and TensorFlow.",
      tags: ["Next.js", "TypeScript", "TensorFlow", "MongoDB"],
      color: "cyan",
    },
    {
      name: "3D E-Commerce Platform",
      desc: "Interactive shopping experience with Three.js product visualization and seamless checkout.",
      tags: ["React", "Three.js", "Node.js", "Stripe"],
      color: "fuchsia",
    },
    {
      name: "DevOps Automation Suite",
      desc: "CI/CD pipeline management system with container orchestration and monitoring.",
      tags: ["Docker", "Kubernetes", "AWS", "Terraform"],
      color: "cyan",
    },
    {
      name: "Real-Time Collaboration Tool",
      desc: "WebSocket-based collaborative workspace with live editing and video conferencing.",
      tags: ["WebRTC", "Socket.io", "React", "Express"],
      color: "fuchsia",
    },
  ];

  return (
    <section className="min-h-screen text-white py-20 px-6 flex flex-col items-center">
      <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 drop-shadow-[0_0_25px_rgba(255,0,255,0.6)] animate-pulse">
        Featured Projects
      </h2>

      <p className="text-center max-w-2xl text-gray-300 mb-14">
        Explore my latest work showcasing innovative solutions and technical
        excellence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`p-8 rounded-xl border border-${project.color}-500/40 shadow-[0_0_30px_rgba(0,255,255,0.4)] bg-black/40 backdrop-blur-md hover:scale-[1.02] transition-all duration-500`}
          >
            <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className="text-xs border border-cyan-400/40 px-2 py-1 rounded-full text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="px-4 py-2 text-sm border border-cyan-400 rounded-lg text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all duration-300">
                🔗 Live Demo
              </button>
              <button className="px-4 py-2 text-sm border border-fuchsia-400 rounded-lg text-fuchsia-300 hover:bg-fuchsia-400 hover:text-black transition-all duration-300">
                🧠 Source
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
