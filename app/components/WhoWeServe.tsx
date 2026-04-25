const AUDIENCES = [
  "Individuals seeking home ownership",
  "Families",
  "Property owners and investors",
  "Corporate organizations",
  "Developers and institutions",
];

export default function WhoWeServe() {
  return (
    <section
      id="who-we-serve"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#1A2A52]/10 bg-[#F7F8FA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1A2A52]/70">
            <span className="h-2 w-2 rounded-full bg-[#1FD2AF]" />
            Who We Serve
          </div>

          <h2 className="text-3xl font-semibold leading-tight text-[#1A2A52] sm:text-4xl lg:text-5xl">
            Built for different people across housing and property needs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3A3A3C] sm:text-lg">
            We support individuals, households, and organizations looking for
            more clarity and structure.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {AUDIENCES.map((audience, index) => (
            <article
              key={audience}
              className="rounded-[1.75rem] border border-[#1A2A52]/8 bg-[#F7F8FA] p-6 sm:p-7 lg:p-8"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div
                  className={`h-1.5 w-14 rounded-full ${
                    index % 2 === 0 ? "bg-[#1FD2AF]" : "bg-[#FFB300]"
                  }`}
                />
                <span className="text-sm font-medium tracking-[0.2em] text-[#1A2A52]/30">
                  0{index + 1}
                </span>
              </div>

              <p className="max-w-[20ch] text-[1.5rem] font-semibold leading-[1.08] text-[#1A2A52] sm:text-[1.75rem]">
                {audience}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-white/75 bg-[#1A2A52] px-6 py-8 text-center sm:px-8 lg:px-10">
          <p className="text-xl font-semibold leading-relaxed text-white sm:text-2xl">
            If you value clarity, structure, and long-term support, you&apos;re
            in the right place.
          </p>
        </div>
      </div>
    </section>
  );
}
