const STEPS = [
  {
    number: "01",
    title: "Understand your needs",
    description:
      "We start by listening to your situation, your goals, and the kind of support you actually need.",
  },
  {
    number: "02",
    title: "Match you to the right path",
    description:
      "We connect you to the right product, service, or opportunity instead of forcing a one-size-fits-all process.",
  },
  {
    number: "03",
    title: "Guide each next step",
    description:
      "From documentation to coordination, we help simplify what comes next so the process feels clearer.",
  },
  {
    number: "04",
    title: "Support beyond the first win",
    description:
      "Our work continues with longer-term service, management, and support designed to keep things working well.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#1A2A52]/10 bg-[#F7F8FA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1A2A52]/70">
            <span className="h-2 w-2 rounded-full bg-[#1FD2AF]" />
            How It Works
          </div>

          <h2 className="text-3xl font-semibold leading-tight text-[#1A2A52] sm:text-4xl lg:text-5xl">
            A simpler flow from first conversation to long-term support
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3A3A3C] sm:text-lg">
            We keep the process structured, human, and easier to follow so you
            always know what happens next.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {STEPS.map((step) => (
            <article
              key={step.number}
              className="rounded-[1.75rem] border border-[#1A2A52]/8 bg-[#F7F8FA] p-6 sm:p-7"
            >
              <div className="mb-8 flex items-center gap-3">
                <div className="text-4xl font-semibold tracking-tight text-[#1A2A52]/18">
                  {step.number}
                </div>
                <div className="h-px flex-1 bg-[#1A2A52]/10" />
              </div>

              <h3 className="text-xl font-semibold leading-tight text-[#1A2A52] sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#3A3A3C]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
