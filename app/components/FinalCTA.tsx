const COMMITMENTS = [
  {
    number: "01",
    title: "Making systems easy to understand",
    accentColor: "#1FD2AF",
    surfaceClassName: "bg-white",
  },
  {
    number: "02",
    title: "Delivering real value and results",
    accentColor: "#FFB300",
    surfaceClassName: "bg-[#FBF7EE]",
  },
  {
    number: "03",
    title: "Building trust through consistency and transparency",
    accentColor: "#1FD2AF",
    surfaceClassName: "bg-[#F2F8F6]",
  },
];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#1A2A52] py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/72">
            <span className="h-2 w-2 rounded-full bg-[#1FD2AF]" />
            Our Commitment
          </div>

          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            At How It Works Group, we are committed to:
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:gap-6 lg:grid-cols-3">
          {COMMITMENTS.map((item) => (
            <article
              key={item.number}
              className={`rounded-[1.75rem] border border-white/10 p-6 shadow-[0_18px_40px_rgba(16,32,64,0.16)] sm:p-7 lg:min-h-[240px] lg:p-8 ${item.surfaceClassName}`}
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <div
                  className="h-1.5 w-14 rounded-full"
                  style={{ backgroundColor: item.accentColor }}
                />
                <span className="text-sm font-medium tracking-[0.2em] text-[#1A2A52]/28">
                  {item.number}
                </span>
              </div>

              <p className="max-w-[16ch] text-[1.55rem] font-semibold leading-[1.08] text-[#1A2A52] sm:text-[1.8rem]">
                {item.title}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/8 px-6 py-7 text-center sm:px-8 lg:px-10">
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/84 sm:text-xl">
            We exist to make every next step feel clearer, more practical, and
            easier to trust.
          </p>
        </div>
      </div>
    </section>
  );
}
