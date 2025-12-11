// CourseGrid.jsx
import React from "react";

/**
 * Lightweight course card grid
 * - Place your thumbnail images in /public/courses/
 * - Default: animate = false (very light). Pass animate={true} to enable small hover scale.
 *
 * Example:
 * <CourseGrid animate={false} />
 */

const COURSES = [
  {
    id: 1,
    title: "Online MBA",
    subtitle: "The Right Step to Gain Skills",
    img: "https://storage.googleapis.com/edukyu-1.firebasestorage.app/college-images/Images/courseBanner/mba.jpg",
  },
  {
    id: 2,
    title: "Online MBA(DUAL)",
    subtitle: "The Right Step to Gain Skills",
    img: "https://storage.googleapis.com/edukyu-1.firebasestorage.app/college-images/Images/courseBanner/mca.png",
  },
  {
    id: 3,
    title: "Online BBA",
    subtitle: "The Right Step to Gain Skills",
    img: "https://storage.googleapis.com/edukyu-1.firebasestorage.app/college-images/Images/courseBanner/ma.png",
  },
  {
    id: 4,
    title: "Online MCA",
    subtitle: "The Right Step to Gain Skills",
    img: "https://storage.googleapis.com/edukyu-1.firebasestorage.app/college-images/Images/courseBanner/mcom.jpg ",
  },
];

export default function CourseGrid({ animate = false }) {
  // small helper classes
  const cardBase =
    "bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm flex flex-col";
  const imgWrapper = "w-full aspect-[4/3] bg-gray-100 flex p-2 items-center justify-center relative overflow-hidden";
  const content = "p-4 flex-1 flex flex-col justify-between";

  const hoverClass = animate
    ? "transition-transform duration-200 hover:scale-[1.02] active:scale-[0.995]"
    : "";

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-xl md:text-2xl font-semibold text-[#FF5C35] mb-6">
          Amity University Online Courses
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((c) => (
            <article
              key={c.id}
              className={`${cardBase} ${hoverClass}`}
              aria-labelledby={`course-${c.id}-title`}
            >
              <div className={imgWrapper}>
                {/* lazy-loading for performance */}
                <img src="https://www.amity.edu/images/logo.png" className="absolute z-20 w-28 top-6 left-3"  alt="" />
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-md hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className={content}>
                <div>
                  <div id={`course-${c.id}-title`} className="text-sm font-medium text-gray-900 mb-1">
                    {c.title}
                  </div>
                  <p className="text-xs text-gray-500">{c.subtitle}</p>
                </div>

                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-block text-sm font-semibold text-[#4F46E5] hover:underline"
                    aria-label={`View ${c.title}`}
                  >
                    View program
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
