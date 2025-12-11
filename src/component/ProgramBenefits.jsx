import React from "react";
import { motion } from "framer-motion";

/**
 * ProgramBenefits.jsx
 * - Hard-coded section matching the provided design
 * - Requires Tailwind CSS
 * - Uses framer-motion for a small entrance animation (repeats on re-entry)
 *
 * Usage:
 * import ProgramBenefits from "./components/ProgramBenefits";
 * <ProgramBenefits />
 */

const items = [
  "QS placed Amity Online in the top 3% globally, with its online MBA ranked #1 in India and #37 worldwide.",
  "Doubled Chances for Top Company Selection with Industry Project",
  "Enhanced Career Support Services",
  "QS placed Amity Online in the top 3% globally, with its online MBA ranked #1 in India and #37 worldwide.",
  "Doubled Chances for Top Company Selection with Industry Project",
  "QS placed Amity Online in the top 3% globally, with its online MBA ranked #1 in India and #37 worldwide.",
];

const container = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, when: "beforeChildren" } },
};
const child = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

export default function ProgramBenefits() {
  return (
    <section className="w-full bg-[#EFF6F8] py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.18 }}
          className="bg-transparent rounded-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left column: heading + list */}
            <div className="lg:col-span-7">
              <motion.h3 variants={child} className="text-2xl font-semibold text-[#FF5C35] mb-6">
                Amity Online Program Benefits
              </motion.h3>

              <div className="space-y-4">
                {items.map((text, i) => (
                  <motion.div key={i} variants={child} className="flex gap-4 items-start">
                    {/* icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center border border-[#FEECE6] shadow-sm">
                        {/* small building / badge icon in orange */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <rect x="3" y="6" width="18" height="12" rx="1.5" stroke="#FF5C35" strokeWidth="1.6" />
                          <path d="M7 10h3M7 13h3M14 10h3M14 13h3" stroke="#FF5C35" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    {/* text */}
                    <div className="text-sm text-[#24303A] leading-snug">
                      {text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right column: rounded placeholder card */}
            <div className="lg:col-span-5">
              <motion.div
                variants={child}
                className="w-full h-[55vh]  rounded-xl bg-black border border-white/40 shadow-inner"
                style={{ boxShadow: "0 8px 30px rgba(2,6,23,0.04) inset" }}
                aria-hidden
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
