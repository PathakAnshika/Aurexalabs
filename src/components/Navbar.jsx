"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* ================= DESKTOP ================= */}

      <nav className="nav-links">
        <Link href="/work">Work</Link>
        <Link href="/Lab">Lab</Link>
        <Link href="#about">About</Link>
        <Link href="#process">Process</Link>

        <Link href="/Let's-talk" className="nav-cta">
          <span>Let's Talk</span>
          <span className="nav-arrow">↗</span>
        </Link>
      </nav>


      {/* ================= MOBILE NAV ================= */}

      <div className="mobile-navbar">

        <Link
          href="/"
          className="mobile-nav-logo"
          onClick={closeMenu}
        >
          <span />
          AUREXA LABS
        </Link>


        <button
          type="button"
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

      </div>


      {/* ================= MOBILE CARD ================= */}

      <div
        className={`mobile-nav-card ${
          menuOpen ? "open" : ""
        }`}
      >

        <div className="mobile-card-label">
          AUREXA / NAVIGATION
        </div>


        <nav>

          <Link href="/work" onClick={closeMenu}>
            <span>01</span>
            WORK
            <b>↗</b>
          </Link>

          <Link href="/Lab" onClick={closeMenu}>
            <span>02</span>
            LAB
            <b>↗</b>
          </Link>

          <Link href="#about" onClick={closeMenu}>
            <span>03</span>
            ABOUT
            <b>↗</b>
          </Link>

          <Link href="#process" onClick={closeMenu}>
            <span>04</span>
            PROCESS
            <b>↗</b>
          </Link>

        </nav>


        <Link
          href="/Let's-talk"
          className="mobile-card-talk"
          onClick={closeMenu}
        >
          <span>LET'S TALK</span>
          <b>↗</b>
        </Link>

      </div>

    </header>
  );
}