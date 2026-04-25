'use client';

import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[1.6rem] border border-white/70 bg-white/88 shadow-[0_16px_40px_rgba(26,42,82,0.08)]">
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-7">
            <a
              href="#top"
              className="inline-flex shrink-0 items-center rounded-2xl bg-white px-3 py-2"
              aria-label="How It Works Group home"
            >
              <Image
                src="/HIW-Logo.svg"
                alt="How It Works Group"
                width={124}
                height={40}
                className="h-8 w-auto sm:h-9"
                priority
              />
            </a>

            <nav className="hidden lg:flex lg:flex-1 lg:justify-center">
              <div className="inline-flex items-center gap-1 rounded-full border border-[#1A2A52]/8 bg-[#F7F8FA] p-1.5">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-[#3A3A3C] transition-colors duration-300 hover:bg-white hover:text-[#1A2A52]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <a
                href="#products"
                className="rounded-full bg-[#1FD2AF] px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#1AB89A]"
              >
                Our Products
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1A2A52]/10 bg-[#F7F8FA] text-[#1A2A52] transition-colors duration-300 hover:bg-white lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div
              id="mobile-navigation"
              className="border-t border-[#1A2A52]/8 px-4 pb-4 pt-3 sm:px-6 lg:hidden"
            >
              <nav className="rounded-[1.5rem] bg-[#F7F8FA] p-3">
                <div className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block rounded-[1rem] px-4 py-3 text-base font-medium text-[#1A2A52] transition-colors duration-300 hover:bg-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <a
                  href="#products"
                  className="mt-3 block rounded-full bg-[#1FD2AF] px-5 py-3 text-center font-medium text-white transition-colors duration-300 hover:bg-[#1AB89A]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Products
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
