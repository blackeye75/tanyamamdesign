// FooterWithMotion.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const FOOTER_BG = "#083b39"; // deep teal from screenshot
const ACCENT = "#F7D66A"; // yellow-ish accent for input button
const TEXT_MUTED = "rgba(255,255,255,0.85)";

const columnVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.45, ease: "easeOut" },
  }),
};

export default function FooterWithMotion() {
  return (
    <div className="" >
      <footer className="w-full" style={{ background: FOOTER_BG }}>
        <div className="max-w-7xl mx-auto px-6 py-8 text-white mt-24">
          {/* Top contact row */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 items-start md:items-center"
          >
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#F7D66A]" />
              <div className="text-sm" style={{ color: TEXT_MUTED }}>
                <div className="font-medium">Find us</div>
                <div>B 15, Second floor, Sector 2, Noida 201301</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#F7D66A]" />
                <div className="text-sm" style={{ color: TEXT_MUTED }}>
                  <div className="font-medium">Call us</div>
                  <div>+91-8336889553<br />+91-9008525443</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#F7D66A]" />
                <div className="text-sm" style={{ color: TEXT_MUTED }}>
                  <div className="font-medium">Mail us</div>
                  <div>hi@edukyu.com</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white/20 my-6" />

          {/* Main columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Brand + desc */}
            <motion.div
              custom={1}
              variants={columnVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="md:col-span-4"
            >
              <div className="mb-4">
                {/* Replace with logo SVG if available */}
                <div className="text-2xl font-bold" style={{ color: "white" }}>
                  EduKyū
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
                Edukyu, your trusted partner for Online education. We are a premier
                aggregator platform, bringing together a diverse range of
                specialized online courses from renowned Indian universities.
              </p>

              <div className="mt-6">
                <div className="text-sm font-medium mb-2">Subscribe</div>
                <p className="text-xs text-white/80">
                  Don't miss to subscribe to our new feeds, kindly fill the form below.
                </p>
              </div>
            </motion.div>

            {/* Useful Links */}
            <motion.div
              custom={2}
              variants={columnVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <h4 className="text-white font-medium mb-3">Useful Links</h4>
              <ul className="space-y-2 text-sm" style={{ color: TEXT_MUTED }}>
                <li className="hover:underline cursor-pointer">About Us</li>
                <li className="hover:underline cursor-pointer">Our Team</li>
                <li className="hover:underline cursor-pointer">Partner With Us</li>
                <li className="hover:underline cursor-pointer">Refer And Earn</li>
                <li className="hover:underline cursor-pointer">Blogs</li>
                <li className="hover:underline cursor-pointer">Contact Us</li>
              </ul>
            </motion.div>

            {/* Online Courses */}
            <motion.div
              custom={3}
              variants={columnVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <h4 className="text-white font-medium mb-3">Online Courses</h4>
              <ul className="space-y-2 text-sm" style={{ color: TEXT_MUTED }}>
                <li className="hover:underline cursor-pointer">Masters In Business Administration</li>
                <li className="hover:underline cursor-pointer">Bachelors In Business Administration</li>
                <li className="hover:underline cursor-pointer">Marketing Management (MBA)</li>
                <li className="hover:underline cursor-pointer">Human Resource Management (MBA)</li>
                <li className="hover:underline cursor-pointer">Financial Management (MBA)</li>
              </ul>
            </motion.div>

            {/* Locations + Subscribe input */}
            <motion.div
              custom={4}
              variants={columnVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <h4 className="text-white font-medium mb-3">Locations</h4>
              <ul className="space-y-2 text-sm mb-4" style={{ color: TEXT_MUTED }}>
                <li>Noida</li>
                <li>Bangalore</li>
                <li>Kolkata</li>
                <li>Lucknow</li>
              </ul>

              {/* Subscription form (right-aligned like screenshot) */}
              <div className="mt-4 flex items-center gap-3">
                <input
                  aria-label="Email address"
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 rounded-sm px-3 py-2 text-sm outline-none"
                  style={{ background: "white", color: "#0b2a29" }}
                />
                <button
                  aria-label="Subscribe"
                  className="px-3 py-2 rounded-sm font-medium"
                  style={{ background: ACCENT, color: "#083b39" }}
                >
                  →
                </button>
              </div>

              {/* Social icons row */}
              <div className="flex gap-3 mt-4">
                <a href="#" className="p-2 rounded bg-white/8 hover:bg-white/12">
                  <FaFacebookF />
                </a>
                <a href="#" className="p-2 rounded bg-white/8 hover:bg-white/12">
                  <FaTwitter />
                </a>
                <a href="#" className="p-2 rounded bg-white/8 hover:bg-white/12">
                  <FaInstagram />
                </a>
                <a href="#" className="p-2 rounded bg-white/8 hover:bg-white/12">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="p-2 rounded bg-white/8 hover:bg-white/12">
                  <FaYoutube />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating right social buttons */}
        <div className="fixed right-4 bottom-36 flex flex-col gap-3 z-50">
          <a
            href="#"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-[#0b7f61] text-white shadow-lg"
            title="Call"
          >
            📞
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-lg"
            title="Whatsapp"
          >
            💬
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-white/70 flex flex-col md:flex-row justify-between items-center gap-3">
            <div>
              By continuing past this page, you agree to our{" "}
              <span className="underline cursor-pointer">Terms of Service</span>
              , <span className="underline cursor-pointer">Privacy Policy</span> and{" "}
              <span className="underline cursor-pointer">Refund Policy</span>.
            </div>

            <div className="text-white/60">© 2024 - Edukyu Private Limited. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
