"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { number: "01", label: "WORK", href: "/work" },
  { number: "02", label: "CASE STUDIES", href: "/case-studies" },
  { number: "03", label: "SERVICES", href: "/#services" },
  { number: "04", label: "LAB", href: "/Lab" },
  { number: "05", label: "ABOUT", href: "/#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-[100] w-full px-[5vw] pt-5 sm:pt-6">

      {/* ================= DESKTOP ================= */}
      <div className="hidden items-center justify-between md:flex">

        {/* LOGO */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-[10px] font-medium tracking-[0.22em] text-[#eeeae4] transition-colors duration-300 hover:text-[#c7ff00]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#c7ff00] transition-transform duration-300 group-hover:scale-125" />
          AUREXA LABS
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-8 lg:gap-10">

          {links.map((link) => (
            <Link
              key={link.number}
              href={link.href}
              className="group relative text-[9px] tracking-[0.2em] text-[#eeeae4]/55 transition-colors duration-300 hover:text-[#eeeae4]"
            >
              {link.label}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#c7ff00] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/Let's-talk"
            className="group ml-2 inline-flex items-center gap-3 border-b border-[#eeeae4]/25 pb-2 text-[9px] tracking-[0.2em] text-[#eeeae4] transition-all duration-300 hover:border-[#c7ff00] hover:text-[#c7ff00]"
          >
            <span>LET'S TALK</span>

            <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>

        </nav>
      </div>


      {/* ================= MOBILE HEADER ================= */}
      <div className="flex items-center justify-between md:hidden">

        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3 text-[9px] tracking-[0.22em] text-[#eeeae4]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#c7ff00]" />
          AUREXA LABS
        </Link>

        {/* HAMBURGER */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#eeeae4]/15 bg-[#0b0b0b]/80 backdrop-blur-md"
        >
          <span
            className={`absolute h-px w-4 bg-[#eeeae4] transition-transform duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-1"
            }`}
          />

          <span
            className={`absolute h-px w-4 bg-[#eeeae4] transition-transform duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </div>


      {/* ================= MOBILE MENU ================= */}
      <div
        className={`absolute left-[5vw] right-[5vw] top-[72px] overflow-hidden rounded-2xl border border-[#eeeae4]/10 bg-[#111111]/95 shadow-2xl backdrop-blur-xl transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >

        {/* LABEL */}
        <div className="border-b border-[#eeeae4]/10 px-5 py-5">
          <span className="text-[8px] tracking-[0.24em] text-[#eeeae4]/30">
            AUREXA / NAVIGATION
          </span>
        </div>


        {/* LINKS */}
        <nav className="px-5">

          {links.map((link) => (
            <Link
              key={link.number}
              href={link.href}
              onClick={closeMenu}
              className="group flex items-center gap-4 border-b border-[#eeeae4]/10 py-5"
            >
              <span className="w-6 text-[8px] tracking-[0.18em] text-[#c7ff00]">
                {link.number}
              </span>

              <span className="flex-1 text-[11px] tracking-[0.18em] text-[#eeeae4]/75 transition-colors duration-300 group-hover:text-[#eeeae4]">
                {link.label}
              </span>

              <span className="text-base text-[#eeeae4]/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c7ff00]">
                ↗
              </span>
            </Link>
          ))}

        </nav>


        {/* MOBILE CTA */}
        <Link
          href="/Let's-talk"
          onClick={closeMenu}
          className="group flex items-center justify-between px-5 py-6"
        >
          <span className="text-[10px] tracking-[0.2em] text-[#eeeae4] transition-colors duration-300 group-hover:text-[#c7ff00]">
            LET'S TALK
          </span>

          <span className="text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </span>
        </Link>

      </div>

    </header>
  );
}