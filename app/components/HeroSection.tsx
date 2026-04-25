'use client';

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8FA] pt-16 sm:pt-20">
      {/* Mobile: Full Width Image */}
      <div className="lg:hidden px-0 sm:px-8">
        <div className="relative h-[500px] w-full overflow-hidden">
          <Image
            src="/hero111.jpg"
            alt="How It Works Group"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F7F8FA]" />
        </div>
      </div>

      {/* Desktop: Split Layout with Image Full Right */}
      <div className="relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-0">
          {/* Text Content - Left Side */}
          <div className="mx-auto max-w-7xl lg:max-w-none px-6 sm:px-8 lg:pl-12 xl:pl-24 py-12 lg:py-20 flex items-center">
            <div className="max-w-2xl">
             

              <h1 className="text-4xl font-semibold leading-[0.98] text-[#1A2A52] sm:text-5xl lg:text-6xl xl:text-[4.5rem] animate-fade-in-up">
Connecting People to Opportunities, Services, and Sustainable Living              </h1>

             

              <div className="mt-8 flex flex-col gap-4 sm:flex-row animate-fade-in-up animation-delay-400">
                <a
                  href="#products"
                  className="rounded-full bg-[#1FD2AF] px-8 py-4 text-center font-medium text-white transition-all duration-300 hover:bg-[#1AB89A]"
                >
                  Our Products
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-full border-2 border-[#1A2A52] px-8 py-4 text-center font-medium text-[#1A2A52] transition-all duration-300 hover:bg-[#1A2A52] hover:text-white"
                >
                  See How It Works
                </a>
              </div>
            </div>
          </div>

          {/* Image - Right Side (Desktop Only) */}
          <div className="hidden lg:block relative min-h-[600px]">
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <Image
                src="/hero112.png"
                alt="How It Works Group"
                fill
                priority
                sizes="50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,42,82,0.02)_0%,rgba(26,42,82,0.1)_100%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
