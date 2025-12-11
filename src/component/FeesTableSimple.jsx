// FeesTableSimple.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * Simple hard-coded fees table with minimal animation.
 * Drop this component into any page.
 */

const ROWS = [
  { id: 1, course: "Online MBA", fee: "Rs 1,99,000", duration: "2 years" },
  { id: 2, course: "Online MBA", fee: "Rs 1,99,000", duration: "2 years" },
  { id: 3, course: "Online MBA", fee: "Rs 1,99,000", duration: "2 years" },
  { id: 4, course: "Online MBA", fee: "Rs 1,99,000", duration: "2 years" },
  { id: 5, course: "Online MBA", fee: "Rs 1,99,000", duration: "2 years" },
  { id: 6, course: "Online MBA", fee: "Rs 1,99,000", duration: "2 years" },
  { id: 7, course: "Online MBA", fee: "Rs 1,99,000", duration: "2 years" },
  { id: 8, course: "Online MBA", fee: "Rs 1,99,000", duration: "2 years" },
  { id: 9, course: "Online MBA", fee: "Rs 1,99,000", duration: "2 years" },
];

export default function FeesTableSimple() {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-[#FF5C35] mb-6">
          Updated Fees for Amity University
          <br />
          Online Courses in 2024-25
        </h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="bg-white rounded-xl border border-[#E6EEF6] overflow-hidden shadow-sm"
        >
          {/* header row */}
          <div className="bg-[#FF5C35] text-white px-4 sm:px-6 py-3 rounded-t-xl">
            <div className="hidden md:grid grid-cols-3 text-center font-semibold">
              <div>Courses</div>
              <div>Full Fees</div>
              <div>Duration</div>
            </div>

            {/* small screens: show labels */}
            <div className="md:hidden grid grid-cols-3 text-sm text-center font-semibold">
              <div>Courses</div>
              <div>Full Fees</div>
              <div>Duration</div>
            </div>
          </div>

          {/* body with zebra rows; horizontally scrollable on narrow screens */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-fixed">
              <colgroup>
                <col style={{ width: "40%" }} />
                <col style={{ width: "30%" }} />
                <col style={{ width: "30%" }} />
              </colgroup>

              <tbody className="divide-y divide-gray-200">
                {ROWS.map((r, idx) => {
                  const zebra = idx % 2 === 1;
                  return (
                    <tr
                      key={r.id}
                      className={`${zebra ? "bg-gray-100/60" : "bg-white"} hover:bg-gray-50 transition-colors`}
                    >
                      <td className="px-4 sm:px-6 py-5 text-left">
                        <div className="text-sm text-gray-900">{r.course}</div>
                      </td>

                      <td className="px-4 sm:px-6 py-5 text-center">
                        <div className="text-sm text-gray-800">{r.fee}</div>
                      </td>

                      <td className="px-4 sm:px-6 py-5 text-right">
                        <div className="text-sm text-gray-800">{r.duration}</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* bottom rounding fix */}
          <div className="h-4 bg-white rounded-b-xl" />
        </motion.div>
      </div>
    </section>
  );
}
