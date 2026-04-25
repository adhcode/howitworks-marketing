import Image from "next/image";

const QUICK_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
];

const PRODUCT_LINKS = [
  { label: "Home Connect", href: "#products" },
  { label: "HomeCare", href: "#products" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Who We Serve", href: "#who-we-serve" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "X", href: "#", icon: XIcon },
];

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative overflow-hidden bg-[#102040] py-16 text-white sm:py-20"
    >
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="mb-8 rounded-[2rem] border border-white/10 bg-white/6 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)]">
            <div>
              <div className="mb-6 inline-flex rounded-2xl bg-white px-4 py-3">
                <Image
                  src="/HIW-Logo.svg"
                  alt="How It Works Group"
                  width={128}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>

              <h2 className="max-w-[12ch] text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Making systems work for people.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg">
                We connect people to housing opportunities, property support,
                and structured services with more clarity and confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="rounded-full bg-[#1FD2AF] px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-[#1AB89A]"
                >
                  Explore Products
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-white/18 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-white/8"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
                Quick Links
              </p>
              <ul className="space-y-4">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base text-white/78 transition-colors duration-300 hover:text-[#1FD2AF]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
                Explore
              </p>
              <ul className="space-y-4">
                {PRODUCT_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base text-white/78 transition-colors duration-300 hover:text-[#FFB300]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
                  Follow Us
                </p>
                <div id="footer-social" className="flex flex-wrap gap-3">
                  {SOCIAL_LINKS.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        aria-label={item.label}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/7 text-white/88 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/12 hover:text-white"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>How It Works Group. Making housing and essential services simpler.</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="1.8"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.7" r="1" className="fill-current stroke-none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm-1.69-5A1.97 1.97 0 0 0 3.25 5.5c0 1.08.8 1.95 1.95 1.95h.02c1.18 0 1.97-.87 1.97-1.95A1.94 1.94 0 0 0 5.27 3.5h-.02ZM20.75 12.93c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.09-3.37 1.86V8.5H9.69c.04.81 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.12-.92.27-.68.9-1.39 1.95-1.39 1.38 0 1.93 1.05 1.93 2.58V20h3.37v-7.07Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
    >
      <path d="M13.63 20v-6.53h2.2l.33-2.55h-2.53V9.3c0-.74.2-1.24 1.26-1.24H16.3V5.78c-.24-.03-1.07-.1-2.03-.1-2.01 0-3.39 1.23-3.39 3.5v1.74H8.6v2.55h2.28V20h2.75Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 4.5 19 19.5" />
      <path d="M19 4.5 5 19.5" />
    </svg>
  );
}
