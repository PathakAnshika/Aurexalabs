"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CyamsysPage() {
  return (
    <main className="client-detail-page">

      {/* =========================
          TOP NAV
      ========================= */}

      <nav className="detail-nav">
        <Link href="/#clients" className="detail-back">
          <span>←</span>
          <span>Back</span>
        </Link>

        <span className="detail-brand">
          AUREXA LABS
        </span>

        <span className="detail-index">
          02 / 04
        </span>
      </nav>


      {/* =========================
          HERO
      ========================= */}

      <section className="detail-hero">

        <motion.div
          className="detail-hero-small"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          CLIENT PROJECT
          <span>—</span>
          WEBSITE
        </motion.div>


        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Cyamsys
          <br />
          <span>Technologies.</span>
        </motion.h1>


        <motion.div
          className="detail-hero-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            A professional digital experience
            designed and developed for
            Cyamsys Technologies.
          </p>

          <div className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <span>↓</span>
          </div>
        </motion.div>

      </section>


      {/* =========================
          MAIN PROJECT VISUAL
      ========================= */}

      <section className="detail-visual-section">

        <div className="detail-section-number">
          01 / PROJECT
        </div>

        <motion.div
          className="website-frame"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Browser bar */}

          <div className="browser-bar">

            <div className="browser-dots">
              <span />
              <span />
              <span />
            </div>

            <div className="browser-url">
              CYAMSYS TECHNOLOGIES
            </div>

          </div>


          {/* Website preview */}

          <div className="website-preview">

            <div className="preview-content">

              <span className="preview-label">
                CYAMSYS TECHNOLOGIES
              </span>

              <h2>
                Technology.
                <br />
                <i>Made Simple.</i>
              </h2>

              <p>
                Digital solutions built for
                modern businesses.
              </p>

             <a
  href="https://www.cyamsys.com"
  target="_blank"
  rel="noopener noreferrer"
  className="preview-button"
>
  Explore
  <span>↗</span>
</a>

            </div>

            <div className="preview-glow" />

          </div>

        </motion.div>

      </section>


      {/* =========================
          PROJECT INFO
      ========================= */}

      <section className="detail-info-section">

        <div className="detail-section-number">
          02 / OVERVIEW
        </div>


        <div className="detail-info-grid">

          <div className="detail-info-heading">
            <h2>
              Building a digital
              <br />
              <em>presence.</em>
            </h2>
          </div>


          <div className="detail-info-text">

            <p>
              Cyamsys Technologies needed a modern
              digital presence that could communicate
              its services clearly while maintaining a
              professional and trustworthy appearance.
            </p>

            <p>
              The website was designed with a focus on
              clean layouts, strong typography and a
              smooth user experience across devices.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          PROJECT DETAILS
      ========================= */}

      <section className="detail-data-section">

        <div className="detail-section-number">
          03 / DETAILS
        </div>


        <div className="detail-data-grid">

          <div className="detail-data-item">
            <span>CLIENT</span>
            <strong>Cyamsys Technologies</strong>
          </div>

          <div className="detail-data-item">
            <span>PROJECT</span>
            <strong>Website</strong>
          </div>

          <div className="detail-data-item">
            <span>SERVICE</span>
            <strong>Web Design & Development</strong>
          </div>

          <div className="detail-data-item">
            <span>YEAR</span>
            <strong>2024</strong>
          </div>

        </div>

      </section>


      {/* =========================
          APPROACH
      ========================= */}

      <section className="detail-approach-section">

        <div className="detail-section-number">
          04 / APPROACH
        </div>


        <div className="approach-content">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Simple.
            <br />
            <em>Intentional.</em>
            <br />
            Effective.
          </motion.h2>


          <div className="approach-list">

            <div>
              <span>01</span>
              <p>Clear visual hierarchy</p>
            </div>

            <div>
              <span>02</span>
              <p>Modern responsive interface</p>
            </div>

            <div>
              <span>03</span>
              <p>Focused user experience</p>
            </div>

            <div>
              <span>04</span>
              <p>Professional brand presentation</p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FINAL
      ========================= */}

      <section className="detail-final">

        <span>SELECTED CLIENT / 02</span>

        <h2>
          Let's build
          <br />
          something <em>great.</em>
        </h2>

        <Link href="/#contact">
          Start a project
          <span>↗</span>
        </Link>

      </section>


      {/* FOOTER */}

      <footer className="detail-footer">

        <span>© 2026 AUREXA LABS</span>

        <Link href="/#clients">
          ALL CLIENTS ↗
        </Link>

      </footer>

    </main>
  );
}