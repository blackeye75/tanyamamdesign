import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * HeroEnquiryForm.jsx
 * - Drop this inside your Hero layout (e.g. position it on the right)
 * - The component animates while in view (repeats each time)
 * - Customize colors, sizes and image placement as needed
 */

const container = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, when: "beforeChildren" },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.46, ease: "easeOut" } },
};

export default function HeroEnquiryForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    mobile: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // simulate network
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
    if (onSubmit) onSubmit(form);
    // reset if you want: setForm({ name: "", email: "", location: "", mobile: "" });
  }

  return (
    <motion.aside
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="w-full max-w-md lg:max-w-sm"
      aria-labelledby="enquire-form-title"
    >
      <motion.div
        variants={item}
        className="bg-white/80 dark:bg-slate-900/30 backdrop-blur-sm border border-white/30 dark:border-slate-800/40 rounded-lg shadow-xl px-6 py-1 md:px-6 md:py-4"
      >
        <h3 id="enquire-form-title" className="text-lg font-semibold text-[#1E293B] dark:text-white">
          Enquire Now
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          Fill your details and our counsellor will get in touch.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-2" aria-label="Enquiry form">
          <motion.label variants={item} className="block">
            <span className="text-sm text-[#FF5C35] font-medium">Name</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter Your Name"
              className="mt-2 w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition"
            />
          </motion.label>

          <motion.label variants={item} className="block">
            <span className="text-sm text-[#FF5C35] font-medium">Mail Id</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter Your Mail Id"
              className="mt-2 w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition"
            />
          </motion.label>

          <motion.label variants={item} className="block">
            <span className="text-sm text-[#FF5C35] font-medium">Location</span>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Enter Your Location"
              className="mt-2 w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition"
            />
          </motion.label>

          <motion.label variants={item} className="block">
            <span className="text-sm text-[#FF5C35] font-medium">Mobile Number</span>
            <input
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              required
              placeholder="Enter Your Mobile Number"
              className="mt-2 w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition"
            />
          </motion.label>

          <motion.div variants={item} className="mt-1">
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#F97316] hover:bg-[#ff6b2a] text-white font-semibold shadow-md transition transform active:scale-98"
            >
              {loading ? (
                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeOpacity="0.16" strokeWidth="4" />
                  <path d="M22 12a10 10 0 00-10-10" stroke="white" strokeWidth="4" strokeLinecap="round" />
                </svg>
              ) : null}
              <span>{loading ? "Submitting..." : sent ? "Submitted" : "ENQUIRE NOW"}</span>
            </button>
          </motion.div>

          <motion.p variants={item} className="text-xs text-slate-500 mt-2">
            By submitting you agree to our <a href="#" className="text-[#4F46E5] underline">privacy policy</a>.
          </motion.p>
        </form>
      </motion.div>
    </motion.aside>
  );
}
