"use client";
import ThreeBackground from "@/components/ThreeBackground";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";
import SkillsSection from "@/components/SkillsSection"
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});
export default function Hero() {

  return (
    <>
    <section className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background */}
      <ThreeBackground />

      {/* Overlay */}
      <div className="absolute inset-0  pointer-events-none" />

      {/* Content */}
      <div className="z-10 text-center space-y-8">
        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${orbitron.className} text-[0.8rem] sm:text-sm uppercase tracking-[0.25em] text-cyan-400/80`}
        >
          Full-Stack Developer
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className={`${orbitron.className} font-extrabold leading-tight`}
        >
          <span className="block text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] text-[#00eaff] drop-shadow-[0_0_12px_#00eaff80]">
            Vyas Dhruvil
          </span>
          <span className="block text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] text-[#ff44ff] drop-shadow-[0_0_12px_#ff44ff80]">
            Rakeshbhai
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-xl mx-auto text-gray-300 text-sm sm:text-base leading-relaxed opacity-85"
        >
          Crafting futuristic web experiences with{" "}
          <span className="text-cyan-400">JavaScript</span>,{" "}
          <span className="text-pink-400">Next.js</span>,{" "}
          <span className="text-fuchsia-400">Node.js</span>,{" "}
          <span className="text-blue-400">MongoDB</span>, and{" "}
          <span className="text-purple-400">DevOps</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center gap-6 pt-6"
        >
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-cyan-500/15 border border-cyan-400/60 text-cyan-300 rounded-full text-sm font-medium hover:bg-cyan-500/25 transition-all duration-300">
            View Projects
          </button>
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-pink-500/15 border border-pink-400/60 text-pink-300 rounded-full text-sm font-medium hover:bg-pink-500/25 transition-all duration-300">
            Get in Touch
          </button>
        </motion.div>

        {/* Scroll Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 animate-bounce text-cyan-300 text-xl"
        >
          ↓
        </motion.div>
      </div>
    </section>
    <SkillsSection/>
    <br />
    <br />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
