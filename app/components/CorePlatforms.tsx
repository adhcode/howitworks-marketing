import Image from "next/image";

type Platform = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  accentColor: string;
  surfaceClassName: string;
  playStoreUrl: string;
  appStoreUrl: string;
};

const PLATFORMS: Platform[] = [
  {
    title: "Home Connect",
    subtitle: "Connecting people to pathways of home ownership",
    description:
      "A guided product for buyers navigating NHF registration, mortgage readiness, trusted property access, and realtor support in one clearer experience.",
    highlights: [
      "NHF registration and compliance guidance",
      "Mortgage access education and support",
      "Developer and institutional housing partnerships",
      "Expert realtor assistance throughout the process",
    ],
    image: "/honecare.png",
    imageAlt: "Home Connect product showcase",
    accentColor: "#1FD2AF",
    surfaceClassName: "bg-[#F2F8F6]",
    playStoreUrl: "#",
    appStoreUrl: "#",
  },
  {
    title: "HomeCare",
    subtitle: "Property management and lifestyle support in one place",
    description:
      "A service product built for property owners and residents who need reliable day-to-day management, maintenance coordination, and long-term asset care.",
    highlights: [
      "Property and facility management tools",
      "Maintenance coordination and support",
      "Rental and tenant management workflows",
      "Cleaning, utility, and security coordination",
    ],
    image: "/honecare.png",
    imageAlt: "HomeCare product showcase",
    accentColor: "#FFB300",
    surfaceClassName: "bg-[#FBF7EE]",
    playStoreUrl: "#",
    appStoreUrl: "#",
  },
];

export default function CorePlatforms() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#F4F5F7] py-20 sm:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#1A2A52]/55">
            Our Products
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#1A2A52] sm:text-4xl lg:text-5xl">
            Two focused products, properly built around real housing needs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3A3A3C] sm:text-lg">
            Home Connect and HomeCare are the company&apos;s two core offerings.
            This section now showcases each product clearly, with visuals and
            direct paths to download.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-10">
          {PLATFORMS.map((platform, index) => {
            const reverseOnDesktop = index % 2 === 1;

            return (
              <article
                key={platform.title}
                className={`overflow-hidden rounded-[2rem] border border-white/70 bg-white/82 p-4 sm:p-5 lg:p-6 ${platform.surfaceClassName}`}
              >
                <div className="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-6">
                  <div
                    className={`relative overflow-hidden rounded-[1.7rem] bg-white ${
                      reverseOnDesktop ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-[1.08] w-full">
                      <Image
                        src={platform.image}
                        alt={platform.imageAlt}
                        fill
                        sizes="(max-width: 1023px) 100vw, 55vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/12 to-transparent" />

                    <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2A52]">
                      {platform.title}
                    </div>

                    <div className="absolute bottom-4 right-4 rounded-full bg-white/92 px-3 py-1.5 text-sm font-medium text-[#1A2A52]">
                      Available on iOS & Android
                    </div>
                  </div>

                  <div
                    className={`rounded-[1.7rem] border border-white/80 bg-white/88 p-6 sm:p-7 lg:p-8 ${
                      reverseOnDesktop ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div
                      className="mb-5 h-1.5 w-20 rounded-full"
                      style={{ backgroundColor: platform.accentColor }}
                    />

                    <h3 className="text-3xl font-semibold leading-tight text-[#1A2A52] sm:text-4xl">
                      {platform.title}
                    </h3>
                    <p className="mt-2 text-lg font-medium text-[#1A2A52]/70">
                      {platform.subtitle}
                    </p>
                    <p className="mt-5 text-base leading-relaxed text-[#3A3A3C] sm:text-lg">
                      {platform.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {platform.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[#3A3A3C]"
                        >
                          <span
                            className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full"
                            style={{ backgroundColor: platform.accentColor }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <StoreBadge
                        href={platform.playStoreUrl}
                        store="Google Play"
                        label="Get it on"
                      />
                      <StoreBadge
                        href={platform.appStoreUrl}
                        store="App Store"
                        label="Download on the"
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StoreBadge({
  href,
  label,
  store,
}: {
  href: string;
  label: string;
  store: string;
}) {
  const isGooglePlay = store === "Google Play";

  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 rounded-2xl border border-[#1A2A52]/10 bg-[#1A2A52] px-4 py-3 text-white transition-colors duration-300 hover:bg-[#132040]"
      aria-label={`${label} ${store}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
        {isGooglePlay ? <GooglePlayIcon /> : <AppleIcon />}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] uppercase tracking-[0.16em] text-white/70">
          {label}
        </span>
        <span className="text-base font-semibold">{store}</span>
      </span>
    </a>
  );
}

function AppleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-white"
    >
      <path d="M16.365 12.307c-.02-2.116 1.73-3.132 1.81-3.18-.988-1.444-2.521-1.642-3.06-1.664-1.303-.132-2.543.768-3.205.768-.661 0-1.683-.749-2.766-.729-1.42.021-2.732.826-3.463 2.1-1.478 2.563-.378 6.355 1.061 8.435.704 1.018 1.543 2.164 2.643 2.123 1.061-.042 1.461-.686 2.742-.686 1.282 0 1.642.686 2.763.665 1.142-.02 1.862-1.038 2.562-2.06.809-1.183 1.142-2.326 1.162-2.386-.024-.01-2.229-.856-2.249-3.386ZM14.063 5.958c.586-.71.983-1.697.875-2.679-.845.034-1.869.563-2.475 1.272-.544.628-1.021 1.633-.892 2.595.942.073 1.906-.48 2.492-1.188Z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none"
    >
      <path d="M4.5 4.5L13.8 12 4.5 19.5V4.5Z" fill="#34A853" />
      <path d="M13.8 12L17.1 8.9 20.7 10.9C21.6 11.4 21.6 12.6 20.7 13.1L17.1 15.1 13.8 12Z" fill="#FBBC04" />
      <path d="M4.5 4.5L17.1 8.9 13.8 12 4.5 4.5Z" fill="#EA4335" />
      <path d="M4.5 19.5L13.8 12 17.1 15.1 4.5 19.5Z" fill="#4285F4" />
    </svg>
  );
}
