import React from "react";
import { motion } from "framer-motion";

/**
 * AboutAmity.jsx
 * - Copy / paste into your components folder and use <AboutAmity />
 * - Uses Tailwind classes (v3+) and framer-motion for entrance animations
 * - Content & visuals are hard-coded to match the screenshot (simple, pixel-similar)
 */

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function AboutAmity() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Top: heading and two-column layout */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.18 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left column: heading + paragraphs */}
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF5C35] mb-4">
              About Amity University Online
            </h2>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
              Amity University, recognized among India’s premier private institutions by the NIRF,
              extends its reputation to Amity Online University, a leader in online education.
              Endorsed by UGC-DEB, it offers a diverse range of undergraduate, postgraduate, and
              diploma programs delivered entirely online.
            </p>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
              The Amity University Online MBA courses are particularly renowned, featuring a globally
              benchmarked curriculum spanning fields such as Management, Information Technology, Arts &amp; Humanities,
              Commerce, and Media &amp; Journalism. The program’s distinction as Asia’s top-ranked online MBA,
              according to QS Global Rankings, further underscores its excellence.
            </p>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
              With competitive Amity University Online MBA fees, students gain access to high-quality e-learning resources,
              industry-focused case studies, and interactive sessions. Amity Online also offers short-term programs
              designed to meet current industry demands, making it a hub for cutting-edge online education.
            </p>

            {/* two small badge-info rows */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="flex items-start gap-4">
                <div className="flex-none w-10 h-10 rounded-md bg-[#FFF7ED] flex items-center justify-center text-[#F97316]">
                  {/* simple icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M3 12h18" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M3 6h12" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M3 18h12" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1F2937]">Amity University</div>
                  <div className="text-xs text-slate-500">Amity University, recognized among India’s</div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start gap-4">
                <div className="flex-none w-10 h-10 rounded-md bg-[#FFF7ED] flex items-center justify-center text-[#F97316]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 3v18" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M3 12h18" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1F2937]">Amity University</div>
                  <div className="text-xs text-slate-500">Amity University, recognized among India’s</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column: rounded placeholder image / card */}
          <motion.div variants={fadeUp} className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-xs md:max-w-sm">
              <div
                role="img"
                aria-label="decorative placeholder"
                className="w-full h-56 md:h-64 rounded-xl bg-slate-100 border border-slate-200"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)" }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom: 3 orange cards row */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[1, 2, 3].map((n) => (
            <motion.article
              key={n}
              variants={fadeUp}
              className="rounded-xl bg-[#FF5C35] text-white p-6 shadow-lg transform hover:-translate-y-1 transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex-none w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white">
                  {/* card icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M3 12h18" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 3v6v12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <h4 className="text-lg font-semibold">Rise of Online Degree Acceptance</h4>
                  <p className="mt-2 text-sm opacity-90">
                    Online degrees from government-approved universities are recognized globally by top employers,
                    akin to traditional degrees.
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
