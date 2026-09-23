"use client";

import Link from "next/link";

export default function Hero() {
  return (
   <section className="hero">
  {/* Geometric background */}
  <div className="hero-shapes" aria-hidden="true">
    <span className="shape shape-1" />
    <span className="shape shape-2" />
    <span className="shape shape-3" />
    <span className="shape shape-4" />
    <span className="shape shape-5" />
  </div>

 {/* Left visual */}
<div className="hero-image">
  <img
    src="/image/hero-bg.png"
    alt="Aurexa Labs visual"
  />

  {/* Soft fade into background */}
  <div className="hero-image-fade" aria-hidden="true" />
</div>

  {/* Right content */}
  <div className="hero-content">

    <p className="hero-label">
      DIGITAL STUDIO
    </p>

<h1 className="relative -left-[10px] max-w-[760px] text-[clamp(50px,5.1vw,88px)] font-normal leading-[0.88] tracking-[-0.06em]">

  <span className="block text-[#eeeae4]">
    THE DIGITAL
  </span>

  <span className="block text-[#c7ff00]">
    PARTNER FOR
  </span>

  <span className="block text-[#eeeae4]">
    AMBITIOUS BUSINESSES.
  </span>

</h1>

    <div className="hero-line" />

{/* DESKTOP */}
<p className="hero-description hero-description-desktop">
  We help businesses turn ideas, challenges and everyday processes
  into meaningful digital experiences — from websites and e-commerce
  to custom applications, business systems and intelligent solutions.
</p>

{/* MOBILE */}
<p className="hero-description hero-description-mobile">
  We help businesses turn ideas and challenges
  <br />
  into meaningful digital experiences —
  <br />
  from websites and e-commerce to custom
  <br />
  applications, business systems and
  <br />
  intelligent solutions.
</p>

<div className="hero-actions">
  <a href="#FeaturedWork" className="hero-cta">
    EXPLORE OUR WORK
    <span>↗</span>
  </a>

  <a href="#StartProject" className="hero-cta hero-cta-secondary">
    TELL US ABOUT YOUR BUSINESS
    <span>↗</span>
  </a>
</div>

<p className="hero-supporting-text">
  Not sure what you need? That's okay — we'll help you figure it out.
</p>
</div>
  {/* Bottom categories */}
  <div className="hero-bottom">
    <span>DESIGN</span>
    <i>/</i>
    <span>DEVELOPMENT</span>
    <i>/</i>
    <span>AI SOLUTIONS</span>
  </div>
</section>
  );
}