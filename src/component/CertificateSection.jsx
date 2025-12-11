// CertificateSection.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * CertificateSection
 * - Left: reserved image area (replace placeholder with your image src)
 * - Right: headline, subheading, bullet list
 * - Responsive: stacks on mobile
 * - Small entrance animation (repeats on each in-view)
 *
 * Replace `/images/certificate-placeholder.png` with your actual image in /public
 */

export default function CertificateSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.18 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-28 items-start"
        >
          {/* LEFT: Image area - replace the placeholder with your certificate image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="w-full max-w-sm lg:max-w-[360px]">
              {/* If you have an image file, replace the <div> below with:
                  <img src="/images/your-certificate.png" alt="Certificate" className="w-full h-auto rounded shadow-md" />
               */}
              <div
                aria-hidden
                className="w-full h-[420px] bg-gray-50 border border-gray-200 rounded shadow-sm flex items-center justify-center"
              >
                <span className="text-sm text-gray-400">Certificate image placeholder</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Text content */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#FF5C35] leading-tight">
              Get a Prestigious Degree from Amity University Online
            </h2>

            <p className="mt-4 text-lg font-semibold text-[#1F2937]">An Exemplary Certificate from Amity University Online</p>

            <ul className="mt-5 space-y-3 text-gray-700 list-none">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 text-[#FF5C35] flex-none" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="10" stroke="#FF5C35" strokeWidth="1.6" />
                  <path d="M9.5 12.5l1.8 1.8L15 10" stroke="#FF5C35" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>First in India to receive UGC approval for online programs</span>
              </li>

              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 text-[#FF5C35] flex-none" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="10" stroke="#FF5C35" strokeWidth="1.6" />
                  <path d="M9.5 12.5l1.8 1.8L15 10" stroke="#FF5C35" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Doubled chances for top company selection with industry projects</span>
              </li>

              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 text-[#FF5C35] flex-none" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="10" stroke="#FF5C35" strokeWidth="1.6" />
                  <path d="M9.5 12.5l1.8 1.8L15 10" stroke="#FF5C35" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Enhanced career support services and industry-linked curriculum</span>
              </li>

              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 text-[#FF5C35] flex-none" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="10" stroke="#FF5C35" strokeWidth="1.6" />
                  <path d="M9.5 12.5l1.8 1.8L15 10" stroke="#FF5C35" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Ranked in global listings with strong recognition by employers</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
