// app/interviewer/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
import { ThemeSwitcher } from "@/components/ThemeSwitcher"; // Adjust path if needed
import Image from "next/image";

import { FaQuoteLeft, FaStar } from "react-icons/fa";

// Import all icons needed for BOTH themes
import {
  FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaPython, FaFigma,
  FaLaptopCode, FaServer, FaCloudUploadAlt, FaUniversity, FaBriefcase,
  FaInstagram
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql, SiMongodb
} from "react-icons/si";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

// ===================================================================
// ===== 1.  WHITE THEME DESIGN IN ITS OWN COMPONENT ====
// ===================================================================
const WhiteThemeComponent = () => {
  

  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen"> {/* Added min-h-screen for consistent height */}
    <div className="fixed top-4 left-4 z-50">
 <Link href="/">
 <Image src="/logo.png" alt="Logo" className="w-32 h-32 md:w-24 md:h-24 object-contain"     width={400}
              height={200}/>
</Link>
</div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hello, I&apos;m{" "} {/* Replaced ' with &apos; */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
              Dhruvil Vyas
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            A passionate <strong>Full Stack Developer</strong> focused on
            building scalable web applications with clean architecture,
            intuitive design, and efficient backend logic. I aim to bridge
            functionality and aesthetics seamlessly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919979089031?text=Hi%20there%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-transform hover:-translate-y-1"
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1ybmuTFouCBMLKrDlYXPr6BkqEnYxQgnX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-transform hover:-translate-y-1 flex items-center"
            >
              Resume
              <ArrowDownTrayIcon className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== SKILL SECTION (Like Screenshot) ===== */}
      <section className="relative bg-gradient-to-b from-indigo-700 to-purple-600 text-white py-24">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h3 className="max-w-4xl mx-auto text-gray-200 mb-20 text-lg leading-relaxed">
            Since beginning my journey as a full-stack developer, I&apos;ve built {/* Replaced ' with &apos; */}
            projects, learned from experience, and collaborated with amazing
            teams. I&apos;m quietly confident, naturally curious, and always working {/* Replaced ' with &apos; */}
            on improving my skills every day.
          </h3>

          {/* Floating White Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white text-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
              <div className="text-indigo-500 text-5xl mb-6">
                <FaLaptopCode />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Frontend Developer</h3>
              <p className="text-gray-600 mb-4 max-w-xs">
                I value simple structure, clean design patterns, and creating
                intuitive user experiences.
              </p>
              <p className="text-indigo-600 font-semibold">Languages I Use:</p>
              <p className="text-gray-700 mb-3">JavaScript, TypeScript, HTML, CSS</p>
              <p className="text-indigo-600 font-semibold">Frameworks & Tools:</p>
              <p className="text-gray-700">React, Next.js, Tailwind CSS, Figma</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
              <div className="text-indigo-500 text-5xl mb-6">
                <FaServer />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Backend Developer</h3>
              <p className="text-gray-600 mb-4 max-w-xs">
                I love building fast, secure APIs and scalable backend systems.
              </p>
              <p className="text-indigo-600 font-semibold">Technologies I Use:</p>
              <p className="text-gray-700 mb-3">Node.js, Express.js, Python</p>
              <p className="text-indigo-600 font-semibold">Databases:</p>
              <p className="text-gray-700">MongoDB, PostgreSQL, MySQL</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-indigo-500 text-5xl mb-6">
                <FaCloudUploadAlt />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Deployment & DevOps</h3>
              <p className="text-gray-600 mb-4 max-w-xs">
                I&apos;m experienced in deployment, automation, and modern {/* Replaced ' with &apos; */}
                cloud-based environments.
              </p>
              <p className="text-indigo-600 font-semibold">DevOps Stack:</p>
              <p className="text-gray-700 mb-3">Docker, CI/CD, GitHub Actions</p>
              <p className="text-indigo-600 font-semibold">Cloud Platforms:</p>
              <p className="text-gray-700">AWS, Vercel, Netlify, Render</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEW: AUTO-MOVING TECH SCROLLER ===== */}
      <section className="py-16 bg-gray-900"> {/* Added bg-gray-900 for gradient effect */}
          <Marquee 
            gradient={true} 
            gradientColor="rgb(249, 250, 251)" // RGB for bg-gray-50
            gradientWidth={100}
            speed={40} 
            pauseOnHover={true}
          >
            <div className="flex items-center space-x-16 mx-8">
              <SiJavascript className="text-5xl text-gray-400 hover:text-yellow-400 transition-colors" />
              <SiTypescript className="text-5xl text-gray-400 hover:text-blue-500 transition-colors" />
              <FaReact className="text-5xl text-gray-400 hover:text-cyan-400 transition-colors" />
              <SiNextdotjs className="text-5xl text-gray-400 hover:text-white transition-colors" />
              <FaNodeJs className="text-5xl text-gray-400 hover:text-green-500 transition-colors" />
              <FaPython className="text-5xl text-gray-400 hover:text-yellow-300 transition-colors" />
              <SiTailwindcss className="text-5xl text-gray-400 hover:text-teal-400 transition-colors" />
              <SiPostgresql className="text-5xl text-gray-400 hover:text-blue-400 transition-colors" />
              <SiMongodb className="text-5xl text-gray-400 hover:text-green-600 transition-colors" />
              <FaAws className="text-5xl text-gray-400 hover:text-orange-500 transition-colors" />
              <FaDocker className="text-5xl text-gray-400 hover:text-blue-600 transition-colors" />
              <FaGitAlt className="text-5xl text-gray-400 hover:text-orange-600 transition-colors" />
              <FaFigma className="text-5xl text-gray-400 hover:text-pink-500 transition-colors" />
            </div>
          </Marquee>
      </section>

      {/* ===== PROJECT SECTION (Simple Placeholder) ===== */}
      <section className="relative bg-gradient-to-b from-indigo-700 to-purple-600 text-white py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My Recent <span className="text-black">Work</span>
        </h2>
        <p className="text-black mb-12 max-w-2xl mx-auto">
          A few of my best web applications and experiments. Want to see more?
          <a href="https://wa.me/919979089031?text=Hi%20there%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
            className="text-indigo-600 hover:underline ml-1">
            Email me.
          </a>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
          <div className="bg-white p-8 rounded-xl shadow-lg h-64 flex items-center justify-center text-gray-400">
            Project Card 1
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg h-64 flex items-center justify-center text-gray-400">
            Project Card 2
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg h-64 flex items-center justify-center text-gray-400">
            Project Card 3
          </div>
        </div>
      </section>

      {/* ===== EDUCATION SECTION ===== */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 mb-16"
        >
          🎓 Education
        </motion.h2>

        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* === BCA Card === */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
          >
            {/* Fixed logo container */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md p-3 z-10">
              <Image
                src="/gls.png"
                alt="GLS University"
                    width={400}
              height={200}
                className="w-16 h-16 object-contain"
              />
            </div>

            <div className="mt-10 text-center">
              <h3 className="text-2xl font-bold text-indigo-700">
                Bachelor of Computer Applications
              </h3>
              <p className="text-gray-600 font-medium mt-1">GLS University</p>
              <p className="text-sm text-gray-500 mb-4">June 2023 - April 2026</p>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Ranked in the <strong>top 10%</strong> of the university; focused on
                Web Development, Networking, and System Design.
              </p>
              <div className="text-sm text-gray-600">
                <p>Semester 1: 8.0 CGPA | Semester 2: 8.2 CGPA</p>
                <p>Semester 3: 9.0 CGPA | Semester 4: 8.7 CGPA</p>
                <p>Semester 5: -Soon- | Semester 6: -Soon-</p>
              </div>
            </div>
          </motion.div>

          {/* === MCA Card === */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md p-3 z-10">
              <Image
                src="/gls.png"
                alt="GLS University"
                    width={400}
              height={200}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="mt-10 text-center">
              <h3 className="text-2xl font-bold text-indigo-700">
                Master of Computer Applications
              </h3>
              <p className="text-gray-600 font-medium mt-1">GLS University</p>
              <p className="text-sm text-gray-500 mb-4">July 2026 - April 2028</p>
              <p className="text-gray-700 leading-relaxed">
                Aspiring to deepen expertise in advanced systems, AI, and DevOps.
                Progress updates will be shared post BCA completion.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-gray-500 text-sm"
        >
          &ldquo;Each semester brings growth &mdash; in logic, creativity, and discipline.&rdquo; {/* Replaced with &ldquo; &rdquo; and &mdash; */}
        </motion.p>
      </section>

      {/* ===== EXPERIENCES SECTION ===== */}
      <section className="relative bg-gradient-to-b from-indigo-700 to-purple-600 text-white py-24 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          💼 Experiences
        </motion.h2>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* === CARD 1: FREELANCING === */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all text-center border border-white/10"
          >
            <div className="flex justify-center mb-6">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md p-3">
                <Image
                  src="/linkdin.png"
                  alt="Freelancing Icon" // Added alt text
                  className="w-16 h-16 object-contain"
                      width={400}
              height={200}
                />
              </div>
            </div>
            <h3 className="text-2xl text-black font-semibold mb-2">Freelancing Projects</h3>
            <p className="text-black font-medium mb-2">
              Frontend Developer &mdash; June 2025 {/* Replaced - with &mdash; */}
            </p>
            <p className="text-gray-400 leading-relaxed">
              Designed and developed responsive UIs for client projects using React,
              Next.js, and Tailwind CSS. Focused on performance, modern design, and
              smooth user experience.
            </p>
          </motion.div>

          {/* === CARD 2: BRAHMA IT SOLUTION === */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all text-center border border-white/10"
          >
            <div className="flex justify-center mb-6">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md p-3">
                <Image
  src="/cyber.png"
alt="Brahma IT Solution Logo" // Added alt text
                  className="w-16 h-16 object-contain"
                      width={400}
              height={200}
                />
              </div>
            </div>
            <h3 className="text-2xl text-black font-semibold mb-2">Brahma IT Solution</h3>
            <p className="text-black font-medium mb-2">
              Web Developer Intern &mdash; 2025 {/* Replaced - with &mdash; */}
            </p>
            <p className="text-gray-400 leading-relaxed">
              Contributed to real-world SDP projects under company guidance. Worked on
              admin dashboards, RESTful APIs, and front-end integrations with clean,
              reusable code patterns.
            </p>
          </motion.div>

          {/* === CARD 3: VISHWA ELECTRONICS === */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all text-center border border-white/10"
          >
            <div className="flex justify-center mb-6">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md p-3">
                <Image
                  src="/vishwa.png"
                  alt="Vishwa Electronics Logo" // Added alt text
                  className="w-16 h-16 object-contain"
                      width={400}
              height={200}
                />
              </div>
            </div>
            <h3 className="text-2xl text-black font-semibold mb-2">Vishwa Electronics</h3>
            <p className="text-black font-medium mb-2">
              Frontend Developer &mdash; 2024 {/* Replaced - with &mdash; */}
            </p>
            <p className="text-gray-400 leading-relaxed">
              Built a modern company website with product showcase, inquiry forms, and
              responsive design using HTML, CSS, and React. Improved accessibility and
              layout consistency.
            </p>
          </motion.div>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-gray-400 text-sm"
        >
          &ldquo;Each experience shaped my approach &mdash; clean code, collaboration, and
          creativity.&rdquo; {/* Replaced ' with &ldquo; &rdquo; and - with &mdash; */}
        </motion.p>
      </section>

      {/* ===== CERTIFICATES SECTION ===== */}
      <section className="relative py-24 bg-white text-gray-900 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          🏅 Certificates & Achievements
        </motion.h2>

        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* === GLS Hackathon === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col items-center text-center"
          >
            <Image
              src="/gls.png"
              alt="GLS Hackathon"
              className="w-20 h-20 object-contain mb-4"
                  width={400}
              height={200}
            />
            <h3 className="text-lg font-semibold">GLS Hackathon Winner</h3>
            <p className="text-gray-500 text-sm mb-2">GLS University &mdash; 2025</p> {/* Replaced - with &mdash; */}
            <p className="text-gray-600 text-sm mb-4">
              Secured top position for developing an innovative full-stack web
              solution during a 24-hour challenge.
            </p>
            <a
              href="https://drive.google.com/file/d/1u68jHaB06v_Vmyjt4xqIQrSKYDLX7Nup/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500 text-sm font-medium underline"
            >
              View Certificate
            </a>
          </motion.div>

          {/* === CyberShdez === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col items-center text-center"
          >
            <Image
              src="/cyber.png"
              alt="CyberShdez 2025"
              className="w-20 h-20 object-contain mb-4"
                  width={400}
              height={200}
            />
            <h3 className="text-lg font-semibold">CyberShdez 2025</h3>
            <p className="text-gray-500 text-sm mb-2">Cyber Security Workshop</p>
            <p className="text-gray-600 text-sm mb-4">
              Gained hands-on cybersecurity experience in penetration testing and
              network defense modules.
            </p>
            <a
              href="https://drive.google.com/file/d/1u68jHaB06v_Vmyjt4xqIQrSKYDLX7Nup/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500 text-sm font-medium underline"
            >
              View Certificate
            </a>
          </motion.div>

          {/* === Oracle === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col items-center text-center"
          >
            <Image
              src="/oracle.png"
              alt="Oracle Certificate"
              className="w-20 h-20 object-contain mb-4"
                  width={400}
              height={200}
            />
            <h3 className="text-lg font-semibold">Oracle Certified Associate</h3>
            <p className="text-gray-500 text-sm mb-2">Oracle Academy &mdash; 2025</p> {/* Replaced - with &mdash; */}
            <p className="text-gray-600 text-sm mb-4">
              Certified for Java programming and database management using Oracle SQL
              Developer tools.
            </p>
            <a
              href="https://drive.google.com/file/d/1u68jHaB06v_Vmyjt4xqIQrSKYDLX7Nup/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500 text-sm font-medium underline"
            >
              View Certificate
            </a>
          </motion.div>

          {/* === Google Batch === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col items-center text-center"
          >
            <Image
              src="/google.png"
              alt="Google Batch"
              className="w-20 h-20 object-contain mb-4"
                  width={400}
              height={200}
            />
            <h3 className="text-lg font-semibold">Google Batch Completion</h3>
            <p className="text-gray-500 text-sm mb-2">Google Developer Program</p>
            <p className="text-gray-600 text-sm mb-4">
              Completed backend engineering mentorship with focus on scalable APIs and
              clean architecture.
            </p>
            <a
              href="https://drive.google.com/file/d/1u68jHaB06v_Vmyjt4xqIQrSKYDLX7Nup/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500 text-sm font-medium underline"
            >
              View Certificate
            </a>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-gray-500 text-sm"
        >
          &ldquo;Each certificate represents a new milestone in learning and innovation.&rdquo; {/* Replaced ' with &ldquo; &rdquo; */}
        </motion.p>
      </section>

      <section id="testimonials" className="py-24 bg-gradient-to-b from-indigo-700 to-purple-600 text-white ">
        <div className="container mx-auto px-6 md:px-12">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What <span className="text-cyan-400">People Say</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* --- Testimonial 1 --- */}
            <motion.div
              className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-cyan-500 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-cyan-400 text-3xl mb-4" />
              <p className="text-gray-300 mb-6 leading-relaxed">
                Dhruvil is an exceptionally talented developer. His attention to
                detail, quick learning ability, and dedication to quality make him
                stand out. It was a pleasure collaborating on the project.
              </p>
              <div className="flex items-center space-x-4">
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="user"
                  className="w-14 h-14 rounded-full border-2 border-cyan-400"
                      width={400}
              height={200}
                />
                <div>
                  <h4 className="font-semibold text-white">Rahul Sharma</h4>
                  <p className="text-sm text-gray-400">Software Engineer, TCS</p>
                  <div className="flex mt-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --- Testimonial 2 --- */}
            <motion.div
              className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-cyan-500 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-cyan-400 text-3xl mb-4" />
              <p className="text-gray-300 mb-6 leading-relaxed">
                Working with Dhruvil was a fantastic experience. He is a team
                player, creative thinker, and highly skilled in front-end
                technologies. His work exceeded our expectations.
              </p>
              <div className="flex items-center space-x-4">
                <Image
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="user"
                  className="w-14 h-14 rounded-full border-2 border-cyan-400"
                      width={400}
              height={200}
                />
                <div>
                  <h4 className="font-semibold text-white">Priya Patel</h4>
                  <p className="text-sm text-gray-400">UI/UX Designer, Infosys</p>
                  <div className="flex mt-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

// ===================================================================
// ===== 2. YOUR COMPLETE BLACK THEME DESIGN IN ITS OWN COMPONENT ====
// ===================================================================
const DarkThemeComponent = () => {
  return (
    <main className="bg-gray-950 min-h-screen"> {/* Added min-h-screen */}
      {/* ===== HERO & FLOATING CARDS CONTAINER ===== */}
       
      <div className="relative">
         
        <section className="text-white min-h-screen flex items-center bg-gray-900">  <div className="absolute top-6 left-6">
  <Link href="/">
    <Image
      src="/logo.png"
      alt="Logo"
      width={400}
      height={200}
      className="w-24 h-24 md:w-20 md:h-20 object-contain"
    />
    </Link>
  </div>
          <div className="container mx-auto px-6 md:px-12 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center justify-between">

              {/* Left Side: Text Content */}
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                  Hello, I&apos;m <br /> {/* Replaced ' with &apos; */}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                    Dhruvil Vyas
                  </span>
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  A passionate Full Stack Developer with a knack for building beautiful and functional web applications.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a
                    href="https://wa.me/919979089031?text=Hi%20there%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                  >
                    Contact Me
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1ybmuTFouCBMLKrDlYXPr6BkqEnYxQgnX/view?usp=sharing" // Update with your resume path
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center"
                  >
                    My Resume
                    <ArrowDownTrayIcon className="h-5 w-5 ml-2" />
                  </a>
                </div>
              </div>

              {/* Right Side: Image/Animation */}
              <div className="md:w-1/2 flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/sani2.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                    width={400}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="what-i-do" className="relative container mx-auto px-6 md:px-12 -mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-2xl text-center transition-transform transform hover:-translate-y-2">
              <div className="text-indigo-500 text-5xl mb-6 flex justify-center"><FaLaptopCode /></div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Frontend Development</h3>
              <p className="text-gray-600">TypeScript, React, Next.js, Tailwind CSS</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-2xl text-center transition-transform transform hover:-translate-y-2">
              <div className="text-indigo-500 text-5xl mb-6 flex justify-center"><FaServer /></div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Backend Development</h3>
              <p className="text-gray-600">Node.js, Express, Python, PostgreSQL, MongoDB</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-2xl text-center transition-transform transform hover:-translate-y-2">
              <div className="text-indigo-500 text-5xl mb-6 flex justify-center"><FaCloudUploadAlt /></div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Deployment & Tools</h3>
              <p className="text-gray-600">AWS, Vercel, Docker, CI/CD, Git, GitHub Actions</p>
            </div>
          </div>
        </section>
      </div>

      <section className="py-16 bg-gray-950"> {/* Ensured correct background for dark theme gradient */}
        <Marquee gradient={true} gradientColor="rgb(16, 23, 42)" gradientWidth={100} speed={40} pauseOnHover={true}> {/* RGB for bg-gray-950 */}
          <div className="flex items-center space-x-16 mx-8">
            <SiJavascript className="text-5xl text-gray-400 hover:text-yellow-400 transition-colors" /><SiTypescript className="text-5xl text-gray-400 hover:text-blue-500 transition-colors" /><FaReact className="text-5xl text-gray-400 hover:text-cyan-400 transition-colors" /><SiNextdotjs className="text-5xl text-gray-400 hover:text-white transition-colors" /><FaNodeJs className="text-5xl text-gray-400 hover:text-green-500 transition-colors" /><FaPython className="text-5xl text-gray-400 hover:text-yellow-300 transition-colors" /><SiTailwindcss className="text-5xl text-gray-400 hover:text-teal-400 transition-colors" /><SiPostgresql className="text-5xl text-gray-400 hover:text-blue-400 transition-colors" /><SiMongodb className="text-5xl text-gray-400 hover:text-green-600 transition-colors" /><FaAws className="text-5xl text-gray-400 hover:text-orange-500 transition-colors" /><FaDocker className="text-5xl text-gray-400 hover:text-blue-600 transition-colors" /><FaGitAlt className="text-5xl text-gray-400 hover:text-orange-600 transition-colors" /><FaFigma className="text-5xl text-gray-400 hover:text-pink-500 transition-colors" />
          </div>
        </Marquee>
      </section>


      <section id="projects" className="pt-8 pb-24 text-white bg-gradient-to-b from-indigo-700 to-purple-600">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Recent <span className="text-cyan-400">Work</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">Here are a few projects I&apos;ve worked on recently. Want to see more? {/* Replaced ' with &apos; */}
            <a href="https://wa.me/919979089031?text=Hi%20there%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              className="text-cyan-400 hover:underline">Email me.</a></p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-64 flex items-center justify-center text-gray-500">Project Card 1</div><div className="bg-gray-800 p-6 rounded-lg shadow-lg h-64 flex items-center justify-center text-gray-500">Project Card 2</div><div className="bg-gray-800 p-6 rounded-lg shadow-lg h-64 flex items-center justify-center text-gray-500">Project Card 3</div>
          </div>
        </div>
      </section>

      <section id="education" className="py-24 bg-gray-950 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Education</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-700 rounded-full"></div>
            <motion.div className="relative mb-12" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-950"></div>
              <div className="w-full md:w-[calc(50%-2rem)] md:ml-auto bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
                <div className="flex items-center space-x-4 mb-3">
                  <Image src="/gls.png" alt="GLS University Logo" className="h-12 w-12 bg-white rounded-full p-1"     width={400}
              height={200}/>
                  <div>
                    <h3 className="text-xl font-bold">GLS University</h3>
                    <p className="text-sm text-gray-400">Ahmedabad, Gujarat</p>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-cyan-300">Bachelor of Computer Applications</h4>
                <p className="text-sm text-gray-400 mb-4">June 2023 - April 2026</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                  <p>Sem-1: <span className="font-bold text-white">8.0 CGPA</span></p>
                  <p>Sem-2: <span className="font-bold text-white">8.2 CGPA</span></p>
                  <p>Sem-3: <span className="font-bold text-white">9.0 CGPA</span></p>
                  <p>Sem-4: <span className="font-bold text-white">8.7 CGPA</span></p>
                </div>
              </div>
            </motion.div>
            <motion.div className="relative mb-12" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-950"></div>
              <div className="w-full md:w-[calc(50%-2rem)] bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="h-12 w-12 bg-gray-800 rounded-full p-1 flex items-center justify-center">
                    <FaUniversity className="text-2xl text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Future Goal</h3>
                    <p className="text-sm text-gray-400">Post-Graduation Plan</p>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-cyan-300">Master of Computer Applications</h4>
                <p className="text-sm text-gray-400">Expected: July 2026 - April 2028</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Experience</h2>

          <div className="relative max-w-3xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-700 rounded-full"></div>

            {/* --- Experience 1 --- */}
            <motion.div
              className="relative mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>

              {/* Card */}
              <div className="w-full md:w-[calc(50%-2rem)] md:ml-auto bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="h-12 w-12 bg-gray-700 rounded-full p-1 flex items-center justify-center">
                    <FaBriefcase className="text-2xl text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Freelancing</h3>
                    <p className="text-sm text-gray-400">LinkedIn (Remote)</p>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-cyan-300">Data Inspection (Intern)</h4>
                <p className="text-sm text-gray-400 mb-4">2024 &mdash; 2025</p> {/* Replaced - with &mdash; */}
                <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                  <li>Developed and maintained responsive user interfaces using React and Tailwind CSS.</li>
                  <li>Collaborated with backend developers to integrate RESTful APIs.</li>
                  <li>Worked in agile sprints and participated in daily stand-ups.</li>
                </ul>
              </div>
            </motion.div>

            {/* --- Experience 2 --- */}
            <motion.div
              className="relative mb-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>

              {/* Card */}
              <div className="w-full md:w-[calc(50%-2rem)] md:mr-auto bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="h-12 w-12 bg-gray-700 rounded-full p-1 flex items-center justify-center">
                    <FaBriefcase className="text-2xl text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Brahma IT Solution</h3>
                    <p className="text-sm text-gray-400">Ahmedabad (Remote)</p> {/* Corrected Ahemdabad */}
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-cyan-300">SDP Project (Intern)</h4>
                <p className="text-sm text-gray-400 mb-4">2025</p>
                <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                  <li>Contributed to a team project under company guidance.</li>
                  <li>Implemented key modules with modern front-end and backend tools.</li>
                  <li>Gained hands-on experience with deployment and API integration.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ===== NEW: ABOUT ME SECTION ===== */}
      <section id="about" className="py-24 bg-gray-900 text-white"> {/* Corrected bg-black-900 to bg-gray-900 */}
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Column: Image */}
            <motion.div
              className="w-full md:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/sani2.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                      width={400}
              height={200}
                />
              </div>
            </motion.div>

            {/* Right Column: Text Content */}
            <motion.div
              className="w-full md:w-2/3 text-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-6">
                Hello! I&apos;m Dhruvil, a Full Stack Developer based in Ahmedabad, Gujarat. My fascination with technology began with a simple curiosity about how websites worked, which has since blossomed into a full-fledged passion for building elegant and efficient solutions to complex problems. {/* Replaced ' with &apos; */}
              </p>
              <p className="text-gray-300 mb-6">
                I thrive on the challenge of bridging the gap between an idea and a tangible, user-friendly digital experience. My approach is rooted in a commitment to clean code, scalable architecture, and a user-centric mindset. I am a firm believer in continuous learning and am always exploring new technologies to stay at the forefront of the ever-evolving world of web development.
              </p>
              <p className="text-gray-300 mb-8">
                Beyond the code, I&apos;m an avid cricket fan and enjoy exploring new sci-fi movies and web series. I find that these passions outside of tech help me bring a fresh and creative perspective to my work. {/* Replaced ' with &apos; */}
              </p>
              <div className="flex items-center space-x-6">
                <p className="font-semibold">Let&apos;s connect:</p> {/* Replaced ' with &apos; */}
                <a
                  href="https://www.instagram.com/dhruvil._.vyas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-3xl"
                >
                  <FaInstagram />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

// ===================================================================
// ===== 3. THE MAIN PAGE THAT DECIDES WHICH COMPONENT TO RENDER =====
// ===================================================================
export default function Page() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so we can safely check the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Until the component is mounted, we don't render anything to avoid hydration errors
  if (!mounted) {
    return null;
  }

  // This is the main logic. It checks the theme and renders the correct component.
  return (
    <>
      {/* The switcher sits outside so it's always visible */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeSwitcher />
      </div>

      {/* Conditional Rendering: If theme is dark, show DarkThemeComponent, otherwise show WhiteThemeComponent */}
      {theme === 'dark' ? <DarkThemeComponent /> : <WhiteThemeComponent />}
    </>
  );
}