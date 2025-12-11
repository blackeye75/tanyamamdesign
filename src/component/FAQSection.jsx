import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";

const faqData = [
  "Is Amity University online MBA degree valid?",
  "How much does an Amity University Online MBA cost?",
  "What Kind Of Study Material is Given?",
  "What is the placement package for Amity Online MBA?",
  "What is the ranking of the Amity University Online program?"
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-10 border-2 border-dashed border-[#1DA1F2] rounded-lg">
      {/* Heading */}
      <h2 className="text-center text-[#F15A24] text-xl font-semibold mb-6">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="mx-auto max-w-3xl">
        {faqData.map((q, i) => (
          <div
            key={i}
            className="border-b last:border-none cursor-pointer"
            onClick={() => toggleFAQ(i)}
          >
            {/* Row */}
            <div className="flex justify-between items-center py-4 px-3">
              <div className="flex items-center gap-3">
                <FaStar className="text-[#F0C419] text-lg" />
                <p className="text-gray-700">{q}</p>
              </div>

              <IoChevronDownSharp
                className={`text-gray-600 text-xl transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""
                  }`}
              />
            </div>

            {/* Dropdown Content */}
            {openIndex === i && (
              <div className="px-10 pb-4 text-gray-600 text-sm">
                This is sample content for the FAQ answer. Replace it with actual content.
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
