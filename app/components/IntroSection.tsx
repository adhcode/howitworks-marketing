const MISSION_POINTS = [
  "To simplify complex systems for everyday people",
  "To provide access to affordable and sustainable housing solutions",
  "To deliver reliable property and lifestyle management services",
  "To empower individuals through education, guidance, and structured platforms",
];

export default function IntroSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F8FA] py-16 sm:py-20 lg:py-24"
    >


      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#1A2A52]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1A2A52]/70">
            <span className="h-2 w-2 rounded-full bg-[#1FD2AF]" />
            About Us
          </div>

          <h2 className="text-3xl font-semibold leading-tight text-[#1A2A52] sm:text-4xl lg:text-5xl">
            About How It Works Group
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.92fr)_minmax(0,0.92fr)] lg:items-stretch lg:gap-6">
          <article className="flex h-full flex-col rounded-4xl border border-white/75 bg-white/84 p-7 sm:p-8 lg:min-h-[540px] lg:p-9">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1A2A52]/10 bg-[#F7F8FA] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2A52]/70">
              <span className="h-2 w-2 rounded-full bg-[#1FD2AF]" />
              About Us
            </div>

            <div className="space-y-4 text-[0.98rem] leading-relaxed text-[#3A3A3C] sm:text-[1.02rem] lg:space-y-5">
              <p>
                How It Works Group is an innovative, solutions-driven company
                committed to simplifying access to essential services across
                real estate, housing, and lifestyle support systems.
              </p>
              <p>
                We exist to bridge the gap between individuals, organizations,
                and structured opportunities by creating platforms that are easy
                to understand, accessible, and impactful.
              </p>
              <p>
                Our approach is centered on clarity, trust, and practical
                solutions—helping people not just understand how things work,
                but also benefit from them.
              </p>
              <p>
                Our team of expert-trained realtors is dedicated to guiding
                clients every step of the way, ensuring informed decisions and a
                seamless experience from start to finish.
              </p>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-4xl border border-white/75 bg-[#FBF7EE] p-7 sm:p-8 lg:min-h-[540px] lg:p-9">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1A2A52]/10 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2A52]/70">
              <span className="h-2 w-2 rounded-full bg-[#FFB300]" />
              Our Vision
            </div>

            <h3 className="max-w-[10ch] text-[1.7rem] font-semibold leading-[1.06] text-[#1A2A52] sm:text-[1.95rem] lg:text-[2.15rem]">
              Our Vision
            </h3>

            <p className="mt-6 text-base leading-relaxed text-[#3A3A3C] sm:text-lg lg:mt-7">
              To become a leading platform in Africa that connects people to
              life-enhancing opportunities in housing, property management, and
              structured financial systems.
            </p>

            <div className="mt-auto pt-8">
              <div className="h-1.5 w-14 rounded-full bg-[#FFB300]" />
            </div>
          </article>

          <article className="flex h-full flex-col rounded-4xl border border-white/75 bg-[#F2F8F6] p-7 sm:p-8 lg:min-h-[540px] lg:p-9">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1A2A52]/10 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2A52]/70">
              <span className="h-2 w-2 rounded-full bg-[#1FD2AF]" />
              Our Mission
            </div>

            <h3 className="max-w-[10ch] text-[1.7rem] font-semibold leading-[1.06] text-[#1A2A52] sm:text-[1.95rem] lg:text-[2.15rem]">
              Our Mission
            </h3>

            <div className="mt-6 space-y-4 lg:mt-7">
              {MISSION_POINTS.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1FD2AF]" />
                  <p className="text-sm leading-relaxed text-[#3A3A3C] sm:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <div className="h-1.5 w-14 rounded-full bg-[#1FD2AF]" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
