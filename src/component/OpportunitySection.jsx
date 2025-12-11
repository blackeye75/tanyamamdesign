export default function OpportunitySection() {
  return (
    <div className="flex justify-center py-12">
      <section className="bg-[#F15A24] w-[90vw] py-14  px-6 rounded-3xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

          {/* Left Image Placeholder */}
          <div className="bg-[#DDDDDD] w-full md:w-1/2 h-[350px] rounded-2xl"></div>

          {/* Right Content */}
          <div className="text-white md:w-1/2">
            <h2 className="text-3xl font-semibold leading-tight mb-5">
              Our Students Get an <br /> Opportunity to Work With
            </h2>

            <h3 className="text-xl font-medium mb-4">
              Our Students Get an Opportunity to Work With
            </h3>

            <ul className="space-y-2 mb-7">
              <li className="flex gap-2 items-start">
                <span className="text-lg">-</span>
                <p>300+ Hiring Partners</p>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-lg">-</span>
                <p>Doubled Chances for Top Company Selection with Industry Project</p>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-lg">-</span>
                <p>Enhanced Career Support Services</p>
              </li>
            </ul>

            {/* Button */}
            <button className="bg-white text-[#F15A24] font-medium px-8 py-3 rounded-md hover:opacity-90 transition">
              Apply To University
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
