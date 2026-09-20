"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  {
    number: "01",
    label: "WORK",
    href: "/#FeaturedWork",
  },
  {
    number: "03",
    label: "SERVICES",
    href: "/#services",
  },
  {
    number: "02",
    label: "INDUSTRIES",
    href: "/Industries",
  },
  {
    number: "05",
    label: "ABOUT",
    href: "/about",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu when clicking/tapping outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!menuOpen) return;

      const clickedInsideMenu =
        menuRef.current?.contains(event.target);

      const clickedButton =
        buttonRef.current?.contains(event.target);

      if (!clickedInsideMenu && !clickedButton) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "pointerdown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleWorkClick = (e) => {
    e.preventDefault();
    closeMenu();

    // Already on homepage
    if (window.location.pathname === "/") {
      const section =
        document.getElementById("FeaturedWork");

      if (section) {
        const y =
          section.getBoundingClientRect().top +
          window.scrollY -
          90;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }

      return;
    }

    // Coming from another page
    window.location.href = "/#FeaturedWork";
  };

  return (
    <header className="fixed left-0 top-0 z-[100] w-full px-[5vw] pt-5 sm:pt-6">

      {/* ================= DESKTOP ================= */}
      <div className="hidden items-center justify-between md:flex">

        {/* LOGO */}
       <Link
  href="/"
  className="flex items-center gap--1.5"
>
  <img
    src="/image/logo.png"
    alt="Aurexa Labs"
    className="h-7 w-auto object-contain"
  />

  <div className="flex flex-col leading-none">
    <span className="font-[var(--font-inter)] text-[10px] font-medium tracking-[0.16em] text-[#eeeae4]">
      AUREXA
    </span>

    <span className="mt-[3px] font-[var(--font-inter)] text-[6px] tracking-[0.34em] text-[#eeeae4]/45">
      LABS
    </span>
  </div>
</Link>

        {/* NAV */}
        <nav className="flex items-center gap-8 lg:gap-10">

          {links.map((link) =>
            link.label === "WORK" ? (
              <a
                key={link.number}
                href="/#FeaturedWork"
                onClick={handleWorkClick}
                className="group relative text-[9px] tracking-[0.2em] text-[#eeeae4]/55 transition-colors duration-300 hover:text-[#eeeae4]"
              >
                {link.label}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#c7ff00] transition-all duration-300 group-hover:w-full" />
              </a>
            ) : (
              <Link
                key={link.number}
                href={link.href}
                className="group relative text-[9px] tracking-[0.2em] text-[#eeeae4]/55 transition-colors duration-300 hover:text-[#eeeae4]"
              >
                {link.label}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#c7ff00] transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}

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
  className="flex items-center gap-1.5"
>
  <img
    src="/image/logo.png"
    alt="Aurexa Labs"
    className="h-5 w-auto object-contain sm:h-6"
  />

  <div className="flex flex-col leading-none">
    <span className="text-[9px] font-medium tracking-[0.1em] text-[#eeeae4]">
      AUREXA
    </span>

    <span className="mt-[2px] text-[4.5px] tracking-[0.24em] text-[#eeeae4]/45">
      LABS
    </span>
  </div>
</Link>

        {/* HAMBURGER / CLOSE BUTTON */}
        <button
          ref={buttonRef}
          type="button"
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={menuOpen}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#eeeae4]/15 bg-[#0b0b0b]/80 backdrop-blur-md"
        >
          <span
            className={`absolute h-px w-4 bg-[#eeeae4] transition-transform duration-300 ${
              menuOpen
                ? "rotate-45"
                : "-translate-y-1"
            }`}
          />

          <span
            className={`absolute h-px w-4 bg-[#eeeae4] transition-transform duration-300 ${
              menuOpen
                ? "-rotate-45"
                : "translate-y-1"
            }`}
          />
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        ref={menuRef}
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

          {links.map((link) =>
            link.label === "WORK" ? (
              <a
                key={link.number}
                href="/#FeaturedWork"
                onClick={handleWorkClick}
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
              </a>
            ) : (
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
            )
          )}

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