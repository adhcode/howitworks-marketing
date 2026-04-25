const CONTACT_PATHS = [
  {
    title: "General enquiries",
    description:
      "Reach out if you want to learn more about our products, services, or how we can support your next step.",
    accentColor: "#1FD2AF",
    surfaceColor: "#F4F5F7",
  },
  {
    title: "Partnership conversations",
    description:
      "We work with developers, institutions, and organizations building stronger pathways into housing and property services.",
    accentColor: "#FFB300",
    surfaceColor: "#FFFFFF",
  },
  {
    title: "Service guidance",
    description:
      "If you need help understanding where to begin, we can point you toward the right product, service, or support path.",
    accentColor: "#1FD2AF",
    surfaceColor: "#F4F5F7",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-stretch">
          <article className="flex flex-col rounded-[2rem] bg-[#1A2A52] p-7 text-white sm:p-8 lg:p-10">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/72">
              <span className="h-2 w-2 rounded-full bg-[#1FD2AF]" />
              Contact Us
            </div>

            <h2 className="max-w-[12ch] text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s help you find the right next step.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/74 sm:text-lg">
              Whether you are exploring housing options, property support, or a
              partnership conversation, we are here to guide you with more
              clarity.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#footer-social"
                className="rounded-full bg-[#1FD2AF] px-6 py-3 text-center font-medium text-white transition-colors duration-300 hover:bg-[#1AB89A]"
              >
                Follow Our Socials
              </a>
              <a
                href="#products"
                className="rounded-full border border-white/16 px-6 py-3 text-center font-medium text-white transition-colors duration-300 hover:bg-white/8"
              >
                Explore Our Products
              </a>
            </div>

            <div className="mt-auto pt-10">
              <div className="h-1.5 w-16 rounded-full bg-[#FFB300]" />
            </div>
          </article>

          <div className="grid gap-5 sm:gap-6">
            {CONTACT_PATHS.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-white/75 p-6 sm:p-7 lg:p-8"
                style={{ backgroundColor: item.surfaceColor }}
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div
                    className="h-1.5 w-14 rounded-full"
                    style={{ backgroundColor: item.accentColor }}
                  />
                  <span className="text-sm font-medium tracking-[0.2em] text-[#1A2A52]/30">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-[1.45rem] font-semibold leading-tight text-[#1A2A52] sm:text-[1.7rem]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-[#3A3A3C] sm:text-lg">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
