const REASONS = [
  {
    title: "Clear and transparent processes",
    accentColor: "#1FD2AF",
    surfaceColor: "#F4F5F7",
  },
  {
    title: "Strong understanding of housing systems in Nigeria",
    accentColor: "#FFB300",
    surfaceColor: "#FFFFFF",
  },
  {
    title: "Reliable and professional service delivery",
    accentColor: "#1FD2AF",
    surfaceColor: "#F4F5F7",
  },
  {
    title: "Expert realtors guiding each step",
    accentColor: "#FFB300",
    surfaceColor: "#FFFFFF",
  },
  {
    title: "Strong industry partnerships and insight",
    accentColor: "#1FD2AF",
    surfaceColor: "#F4F5F7",
  },
  {
    title: "A practical, customer-first approach",
    accentColor: "#FFB300",
    surfaceColor: "#FFFFFF",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#F7F8FA] py-16 sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#1A2A52]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1A2A52]/70">
            <span className="h-2 w-2 rounded-full bg-[#1FD2AF]" />
            Why Choose Us
          </div>

          <h2 className="text-3xl font-semibold leading-tight text-[#1A2A52] sm:text-4xl lg:text-5xl">
            Why people choose us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3A3A3C] sm:text-lg">
            We keep the experience clear, dependable, and easy to work through.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
          {REASONS.map((reason, index) => (
            <article
              key={reason.title}
              className="rounded-[1.75rem] border border-white/75 p-6 sm:p-7 lg:min-h-[220px] lg:p-8"
              style={{ backgroundColor: reason.surfaceColor }}
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <div
                  className="h-1.5 w-14 rounded-full"
                  style={{ backgroundColor: reason.accentColor }}
                />
                <span className="text-sm font-medium tracking-[0.2em] text-[#1A2A52]/30">
                  0{index + 1}
                </span>
              </div>

              <p className="max-w-[18ch] text-[1.55rem] font-semibold leading-[1.08] text-[#1A2A52] sm:text-[1.8rem]">
                {reason.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
