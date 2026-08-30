"use client";

export default function Hero() {
  return (
    <section className="hero">

      {/* =================================================
          DESKTOP HERO
      ================================================= */}

      <div className="hero-desktop">

        <div className="hero-shapes" aria-hidden="true">
          <span className="shape shape-1" />
          <span className="shape shape-2" />
          <span className="shape shape-3" />
          <span className="shape shape-4" />
          <span className="shape shape-5" />
        </div>

        <div className="hero-image">
          <img
            src="/image/hero-bg.png"
            alt="Aurexa Labs visual"
          />
        </div>

        <div className="hero-content">

          <p className="hero-label">
            DIGITAL STUDIO
          </p>

          <h1>
            <span>DIGITAL</span>
            <br />
            <span>DESIGN &</span>
            <br />
            <span>DEVELOPMENT</span>
          </h1>

          <div className="hero-line" />

       {/* DESKTOP DESCRIPTION */}
<p className="hero-description hero-description-desktop">
  We craft meaningful digital experiences where strategy,
  design and technology come together to create products
  people remember, use and return to — built with purpose,
  designed for people and ready for what comes next.
</p>

{/* MOBILE DESCRIPTION */}
<p className="hero-description hero-description-mobile">
  We craft meaningful digital experiences
  <br />
  where strategy, design and technology
  <br />
  come together to create products people
  <br />
  remember, use and return to — built with
  <br />
  purpose, designed for people and ready
  <br />
  for what comes next.
</p>
          <a
            href="#work"
            className="hero-cta"
          >
            VIEW OUR WORK
            <span>↗</span>
          </a>

        </div>

        <div className="hero-bottom">
          <span>DESIGN</span>
          <i>/</i>
          <span>DEVELOPMENT</span>
          <i>/</i>
          <span>AI SOLUTIONS</span>
        </div>

      </div>


      {/* =================================================
          MOBILE HERO
      ================================================= */}

      <div className="hero-mobile">

        <div className="mobile-grid" />

        <div className="mobile-ghost">
          AUREXA
        </div>


        {/* TOP */}

        {/* <div className="mobile-top">

          <div className="mobile-brand">
            <span />
            AUREXA LABS
          </div>

          <div className="mobile-menu">
            <span />
            <span />
          </div>

        </div> */}


        {/* CENTER */}

        <div className="mobile-main">

          <div className="mobile-label">
            DIGITAL STUDIO
          </div>


          <div className="mobile-line-top" />


          <h1 className="mobile-aurexa">
            AUREXA
          </h1>


          <div className="mobile-subline">

            <span>IMAGINE.</span>

            <span className="accent">
              BUILD.
            </span>

            <span>EVOLVE.</span>

          </div>


          <div className="mobile-positioning">

            <span>DIGITAL EXPERIENCES</span>

            <strong>
              BUILT WITH PURPOSE.
            </strong>

          </div>


          <p className="mobile-description">
            We create meaningful digital
            experiences where design meets tech.
          </p>


          <a
            href="#work"
            className="mobile-cta"
          >
            <span>VIEW OUR WORK</span>
            <b>↗</b>
          </a>

        </div>


        {/* BOTTOM */}

        <div className="mobile-bottom">

          <div className="mobile-services">
            <span>DESIGN</span>
            <i>/</i>
            <span>DEVELOPMENT</span>
            <i>/</i>
            <span>AI</span>
          </div>

          <div className="mobile-scroll">
            <span>SCROLL</span>
            <b>↓</b>
          </div>

        </div>

      </div>

    </section>
  );
}