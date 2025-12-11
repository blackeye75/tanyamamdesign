import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, when: "beforeChildren" } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function BadgeBar() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="w-full px-4 sm:px-6 lg:px-0"
    >
      <div className=" max-w-full flex items-center">
        <div className="relative rounded-xl bg-[#EFF3F6] border border-[#DDE3EA] shadow-sm overflow-hidden">
          
          {/* Bottom blue line */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#3B82F6]" />

          <div className="flex items-center justify-between px-6 py-6 md:px-10 md:py-10 gap-6 w-[85vw]">
            {/* LEFT TEXT BLOCK */}
            <motion.div variants={item}>
              <h3 className="text-xl md:text-2xl font-semibold text-[#FF5C35] leading-tight">
                Amity University Online
              </h3>
              <p className="text-[#2A3642] text-base md:text-lg mt-1">
                Accreditation & Recognition
              </p>
            </motion.div>

            {/* BADGES */}
            <motion.div
              variants={item}
              className="flex items-center gap-4 md:gap-6 overflow-x-auto no-scrollbar pr-2"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <motion.div
                  key={n}
                  whileHover={{ scale: 1.06 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center bg-white border border-[#E3EAF1] shadow-sm shrink-0"
                >
                  <img
                    src="/download.jpeg"
                    alt={`NAAC Badge ${n}`}
                    className="max-w-[70%] max-h-[70%] object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
