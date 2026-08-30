"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ShriChandreshwarDhamPage() {
  return (
    <main className="mandir-project-page">

      {/* NAV */}

      <nav className="mandir-nav">

        <Link href="/#clients" className="mandir-back">
          <span>←</span>
          <span>Back</span>
        </Link>

        <div className="mandir-nav-center">
          AUREXA LABS
        </div>

        <div className="mandir-nav-index">
          01 / 04
        </div>

      </nav>


      {/* HERO */}

      <section className="mandir-hero">

        <div className="mandir-hero-top">

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            CLIENT PROJECT — WEBSITE
          </motion.span>

          <span className="mandir-hero-line" />

          <span>SHRI CHANDRESHWAR DHAM</span>

        </div>


        <motion.div
          className="mandir-title"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <h1>
            Shri
            <br />
            Chandreshwar
            <br />
            <em>Dham.</em>
          </h1>

        </motion.div>


        <motion.div
          className="mandir-hero-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >

          <p>
            A digital space created to bring
            devotion, community and temple
            experiences closer to people.
          </p>

          <div className="mandir-scroll">
            <span>EXPLORE PROJECT</span>
            <span>↓</span>
          </div>

        </motion.div>

      </section>


      {/* VISUAL */}

      <section className="mandir-showcase">

        <div className="mandir-showcase-label">
          <span>01</span>
          <span>THE DIGITAL EXPERIENCE</span>
        </div>


        <motion.div
          className="mandir-website-preview"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="mandir-preview-image">

            <div className="mandir-preview-overlay">

              <span>
                SHRI CHANDRESHWAR DHAM
              </span>

              <h2>
                Faith.
                <br />
                <em>Service.</em>
              </h2>

              <a
                href="https://www.srichandreshwar.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
                <span>↗</span>
              </a>

            </div>

          </div>

        </motion.div>

      </section>


      {/* INTRO */}

      <section className="mandir-intro">

        <div className="mandir-section-tag">
          02 / THE IDEA
        </div>


        <div className="mandir-intro-content">

          <h2>
            Bringing a sacred
            <br />
            experience into
            <br />
            the <em>digital world.</em>
          </h2>


          <div className="mandir-intro-copy">

            <p>
              The website for Shri Chandreshwar Dham
              was designed as a digital home for the
              temple and its community.
            </p>

            <p>
              The experience brings together information
              about the temple, events, spiritual activities,
              community initiatives and ways for devotees
              to stay connected.
            </p>

          </div>

        </div>

      </section>



      {/* PILLARS */}

      <section className="mandir-pillars">

        <div className="mandir-section-tag">
          03 / EXPERIENCE
        </div>


        <div className="mandir-pillars-grid">

          <motion.div
            className="mandir-pillar"
            whileHover={{ y: -6 }}
          >
            <span>01</span>

            <h3>Devotion</h3>

            <p>
              A calm and respectful visual language
              designed around the spiritual identity
              of the temple.
            </p>
          </motion.div>


          <motion.div
            className="mandir-pillar"
            whileHover={{ y: -6 }}
          >
            <span>02</span>

            <h3>Connection</h3>

            <p>
              Helping devotees discover temple
              activities, events and community
              initiatives online.
            </p>
          </motion.div>


          <motion.div
            className="mandir-pillar"
            whileHover={{ y: -6 }}
          >
            <span>03</span>

            <h3>Service</h3>

            <p>
              Making important information and
              community-focused programs easier
              to access.
            </p>
          </motion.div>

        </div>

      </section>


      {/* PROJECT INFORMATION */}

      <section className="mandir-details">

        <div className="mandir-section-tag">
          04 / PROJECT
        </div>


        <div className="mandir-details-layout">

          <div className="mandir-details-title">

            <span>THE WORK</span>

            <h2>
              Designed with
              <br />
              <em>purpose.</em>
            </h2>

          </div>


          <div className="mandir-details-list">

            <div>
              <span>CLIENT</span>
              <strong>A.K. Raghvan</strong>
            </div>

            <div>
              <span>PROJECT</span>
              <strong>Website</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>Web Design & Development</strong>
            </div>

            <div>
              <span>PLATFORM</span>
              <strong>Web</strong>
            </div>

          </div>

        </div>

      </section>


      {/* WEBSITE LINK

      <section className="mandir-visit">

        <div className="mandir-visit-number">
          05
        </div>

        <div className="mandir-visit-content">

          <span>LIVE PROJECT</span>

          <h2>
            Experience the
            <br />
            <em>website.</em>
          </h2>

          <a
            href="https://www.srichandreshwar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mandir-visit-button"
          >
            <span>Visit srichandreshwar.com</span>
            <span>↗</span>
          </a>

        </div>

      </section>


      FINAL

      <section className="mandir-final">

        <span>
          NEXT PROJECT
        </span>

        <Link href="/clients/cyamsys-technologies">

          <h2>
            Cyamsys
            <br />
            <em>Technologies.</em>
          </h2>

          <span className="mandir-next-arrow">
            ↗
          </span>

        </Link>

      </section> */}
{/* START A PROJECT */}

<section className="mandir-start-project">

  <div className="mandir-start-project-inner">

    <span className="mandir-start-label">
      HAVE A PROJECT IN MIND?
    </span>

    <Link
      href="/#contact"
      className="mandir-start-button"
    >
      <span>Start a Project</span>
      <span>↗</span>
    </Link>

  </div>

</section>

      {/* FOOTER */}

      <footer className="mandir-footer">

        <span>
          © 2026 AUREXA LABS
        </span>

        <Link href="/#clients">
          ALL CLIENTS ↗
        </Link>

      </footer>

    </main>
  );
}