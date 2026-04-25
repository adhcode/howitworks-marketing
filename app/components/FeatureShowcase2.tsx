type Feature = {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  accentColor: string;
  tag: string;
};

const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Real Estate Facilitation and Advisory",
    description:
      "We provide expert guidance that helps clients navigate property decisions with greater clarity, confidence, and structure.",
    bgColor: "#F4F5F7",
    accentColor: "#1FD2AF",
    tag: "Expert-led advisory",
  },
  {
    id: 2,
    title: "Housing Access Through Structured Financing",
    description:
      "We simplify access to housing opportunities through structured financing pathways designed to be easier to understand and use.",
    bgColor: "#FFFFFF",
    accentColor: "#FFB300",
    tag: "Smarter access",
  },
  {
    id: 3,
    title: "Property and Facility Management",
    description:
      "Our management services help maintain property value through organized oversight, efficient operations, and dependable coordination.",
    bgColor: "#F4F5F7",
    accentColor: "#1FD2AF",
    tag: "Managed well",
  },
  {
    id: 4,
    title: "Lifestyle and Home Support Services",
    description:
      "We support everyday living with practical home and lifestyle services that make the client experience more seamless.",
    bgColor: "#FFFFFF",
    accentColor: "#FFB300",
    tag: "Everyday ease",
  },
  {
    id: 5,
    title: "Partnerships with Developers, Institutions, and Organizations",
    description:
      "We work with developers, institutions, and organizations to create stronger pathways into housing, property, and service opportunities.",
    bgColor: "#F4F5F7",
    accentColor: "#1FD2AF",
    tag: "Built together",
  },
  {
    id: 6,
    title: "End-to-End Client Guidance Through Expert-Trained Realtors",
    description:
      "Our realtors guide clients from first inquiry to final decision, helping each step feel informed, supported, and easier to navigate.",
    bgColor: "#FFFFFF",
    accentColor: "#FFB300",
    tag: "Guided all the way",
  },
  {
    id: 7,
    title: "Preventive and Proactive Property Maintenance Solutions",
    description:
      "We focus on preventive and proactive maintenance that helps reduce issues early and keeps properties performing better over time.",
    bgColor: "#F4F5F7",
    accentColor: "#1FD2AF",
    tag: "Proactive care",
  },
];

export default function FeatureShowcase2() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f7f8fb_42%,_#eef2f6_100%)] py-12 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.74),rgba(255,255,255,0.18))]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-[1.85rem] border border-white/75 bg-white/82 px-5 py-5  sm:mb-8 sm:px-6 sm:py-6 lg:mx-auto lg:mb-12 lg:max-w-3xl lg:px-8 lg:py-8 lg:text-center">
          <div className="mb-3 inline-flex items-center gap-3 rounded-full border border-[#1A2A52]/10 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1A2A52]/70">
            <span className="h-2 w-2 rounded-full bg-[#1FD2AF]" />
            What We Offer
          </div>

          <h2 className="text-3xl font-semibold leading-tight text-[#1A2A52] sm:text-4xl lg:text-5xl">
            What We Do
          </h2>
          <p className="mt-2 max-w-2xl text-base leading-relaxed text-[#3A3A3C] sm:text-lg lg:mx-auto">
            At a glance, these are the services and support systems we provide
            across housing, property, and everyday living.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:flex-wrap lg:items-stretch">
          {FEATURES.map((feature) => (
            <article
              key={feature.id}
              className="flex min-h-[320px] flex-col justify-between rounded-[1.75rem] border border-white/75 bg-white/78 p-6 sm:p-7 lg:min-h-[360px] lg:w-[calc(50%-0.75rem)] lg:flex-none lg:p-8"
              style={{ backgroundColor: feature.bgColor }}
            >
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1A2A52]/10 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2A52]/70">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: feature.accentColor }}
                  />
                  {feature.tag}
                </div>

                <h3 className="max-w-[18ch] text-[1.9rem] font-semibold leading-[1.02] text-[#1A2A52] sm:text-[2.2rem] lg:text-[2.5rem]">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-[#3A3A3C] sm:text-lg">
                  {feature.description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div
                  className="h-1.5 w-14 rounded-full"
                  style={{ backgroundColor: feature.accentColor }}
                />
                <div className="rounded-full border border-[#1A2A52]/10 bg-white/70 px-3 py-1.5 text-sm font-medium text-[#1A2A52]/60">
                  Tailored support
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
