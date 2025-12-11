export default function HighlightSection() {
  return (
    <div className="flex justify-center py-12">
      <section className="bg-[#F15A24] w-[80vw] hover:scale-110 transition-transform duration-300 py-14 px-6 rounded-3xl">
        <div className="max-w-4xl mx-auto text-center">

          {/* Center Text */}
          <p className="text-white text-2xl font-semibold leading-relaxed inline-block border border-dashed border-[#1DA1F2] px-6 py-3 rounded-md">
            Lorem Ipsum is
            <span className="text-yellow-300 font-semibold"> simply dummy text </span>
            of the printing and typesetting industry.
          </p>

          {/* Button */}
          <div className="mt-6">
            <button className="bg-white text-[#F15A24] font-medium px-8 py-2 rounded-md border border-dashed border-[#1DA1F2] hover:opacity-90 transition">
              Talk to Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
