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
            {/* Decorative Icon/Badge */}
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1FD2AF]/20 to-[#1FD2AF]/5 sm:h-16 sm:w-16">
                <svg
                  className="h-8 w-8 text-[#1FD2AF] sm:h-9 sm:w-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#1FD2AF]">
                  Who We Are
                </span>
                <span className="mt-0.5 block text-sm font-medium text-[#1A2A52]/70">
                  Since 2020
                </span>
              </div>
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
            {/* Decorative Icon */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFB300]/20 to-[#FFB300]/5 sm:h-16 sm:w-16">
              <svg
                className="h-8 w-8 text-[#FFB300] sm:h-9 sm:w-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
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
            {/* Decorative Icon */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1FD2AF]/20 to-[#1FD2AF]/5 sm:h-16 sm:w-16">
              <svg
                className="h-8 w-8 text-[#1FD2AF] sm:h-9 sm:w-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 className="max-w-[10ch] text-[1.7rem] font-semibold leading-[1.06] text-[#1A2A52] sm:text-[1.95rem] lg:text-[2.15rem]">
              Our Mission
            </h3>

            <div className="mt-6 space-y-4 lg:mt-7">
              {/* Mission Point 1: Simplify complex systems */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1FD2AF]/10">
                  <svg
                    className="h-4 w-4 text-[#1FD2AF]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed text-[#3A3A3C] sm:text-base">
                  {MISSION_POINTS[0]}
                </p>
              </div>

              {/* Mission Point 2: Affordable housing */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1FD2AF]/10">
                  <svg
                    className="h-4 w-4 text-[#1FD2AF]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed text-[#3A3A3C] sm:text-base">
                  {MISSION_POINTS[1]}
                </p>
              </div>

              {/* Mission Point 3: Property management */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1FD2AF]/10">
                  <svg
                    className="h-4 w-4 text-[#1FD2AF]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                    />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed text-[#3A3A3C] sm:text-base">
                  {MISSION_POINTS[2]}
                </p>
              </div>

              {/* Mission Point 4: Empower individuals */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1FD2AF]/10">
                  <svg
                    className="h-4 w-4 text-[#1FD2AF]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed text-[#3A3A3C] sm:text-base">
                  {MISSION_POINTS[3]}
                </p>
              </div>
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
