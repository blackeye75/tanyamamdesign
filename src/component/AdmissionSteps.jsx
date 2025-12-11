import { FaSchool } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Step 1",
    desc: "Visit the official website of Amity Online (Note: Separate websites exist for online and on-campus programs).",
    link: "",
    active: true,
  },
  {
    id: 2,
    title: "Step 2",
    desc: "Visit the official website of Amity Online (Note: Separate websites exist for online and on-campus programs).",
    link: "Visit Website",
    active: true,
  },
  {
    id: 3,
    title: "Step 3",
    desc: "Visit the official website of Amity Online (Note: Separate websites exist for online and on-campus programs).",
    link: "",
    active: true,
  },
  {
    id: 4,
    title: "Step 4",
    desc: "Visit the official website of Amity Online (Note: Separate websites exist for online and on-campus programs).",
    link: "",
    active: true,
  },
  {
    id: 5,
    title: "Step 5",
    desc: "Visit the official website of Amity Online (Note: Separate websites exist for online and on-campus programs).",
    link: "",
    active: true,
  },
];

export default function AdmissionSteps() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-center text-[#F15A24] mb-12">
        Amity University Online Admission Process
      </h2>

      <div className="space-y-24 max-w-3xl mx-auto">
        {steps.map((step) => (
          <div key={step.id} className="flex gap-4 items-start">

            {/* Bullet + Icon side-by-side */}
            <div className="flex items-center gap-3 pt-1">
              <div
                className={`w-2 h-2 rounded-full ${
                  step.active ? "bg-[#F15A24]" : "bg-gray-300"
                }`}
              ></div>

              <FaSchool
                className="text-[#F15A24] text-2xl"
              />
            </div>

            {/* Text */}
            <div className="-mb-7"  >
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>

              <p className="text-gray-600 leading-relaxed">
                {step.desc}{" "}
                {step.link && (
                  <span className="text-[#F15A24] font-medium cursor-pointer hover:underline">
                    {step.link}
                  </span>
                )}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
