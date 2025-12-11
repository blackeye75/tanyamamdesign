export default function HiringPartners() {
  return (
    <section className="py-10 w-full">
      {/* Title */}
      <h2 className="text-center text-[#F15A24] font-semibold text-lg mb-8">
        Hiring Partner of Amity University Online
      </h2>

      {/* Logo Boxes */}
      <div className="flex justify-center gap-6 flex-wrap">
        {Array(7)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="w-28 h-14 bg-[#E5E5E5] rounded-xl"
            ></div>
          ))}
      </div>
    </section>
  );
}
