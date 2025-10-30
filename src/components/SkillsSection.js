import React, { useMemo } from 'react';

// --- Apne skills yahan daalein ---
const SKILLS = [
  'Java', 'Spring Boot', 'React', 'JavaScript', 'Node.js',
  'Tailwind CSS', 'Next.js', 'MongoDB', 'Git', 'Docker', 'AWS'
];

function SkillsSection() {

  // --- YEH HAI ERROR FIX (useMemo) ---
  // Yeh random styles (position, color) ko sirf ek baar calculate karta hai
  // taaki skills har render par flicker na karein.
  const styledSkills = useMemo(() => {
    return SKILLS.map((skill, i) => ({
      name: skill,
      key: i,
      style: {
        position: 'absolute',
        top: `${Math.random() * 60}%`, // Aapki original value
        left: "-15%", // Aapki original value
        color: `hsl(${Math.random() * 360}, 100%, 75%)`, // Aapki original value
        textShadow:
          "0 0 6px currentColor, 0 0 12px currentColor, 0 0 20px currentColor", // Aapki original value
        animationDelay: `${i * 1}s`, // Thoda zyada delay (1s)
      },
    }));
  }, []); // [] ka matlab hai: 'Sirf ek baar run karo'

  return (
    // --- YEH RAHA AAPKA SECTION CODE ---
    <section className="relative w-full flex flex-col items-center justify-center text-white py-8 overflow-hidden">
      {/* ☄️ SKILLS */}
      <div className="w-full flex flex-col items-center z-10">
  
<h2 className="text-5xl sm:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 drop-shadow-[0_0_25px_rgba(255,0,255,0.6)] animate-pulse">
 ☄️ Comet Skills Zone      </h2>
        <div className="relative w-full h-16 overflow-hidden">
          {/* Yahan hum 'styledSkills' ka istemaal kar rahe hain */}
          {styledSkills.map((skill) => (
            <span
              key={skill.key}
              className="absolute text-lg sm:text-2xl font-extrabold tracking-wide whitespace-nowrap animate-smooth-comet font-[Orbitron] uppercase"
              style={skill.style} // Style object yahan apply kiya
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes smooth-comet {
          0% {
            transform: translateX(0) scale(0.85);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          50% {
            transform: translateX(60vw) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(120vw) scale(1.05);
            opacity: 0;
          }
        }

        .animate-smooth-comet {
          /* --- YEH HAI ANIMATION UPGRADE (infinite loop) --- */
          animation: smooth-comet 8s ease-in-out infinite;
        }
      `}</style>
    </section>
    // --- SECTION CODE YAHAN KHATAM ---
  );
}

export default SkillsSection;