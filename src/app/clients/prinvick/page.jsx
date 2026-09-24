"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrinvickPage() {
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
          01 / 04
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
          E-COMMERCE
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
          Prinvick
          <br />
          <span>Wear Your Idea.</span>
        </motion.h1>


        <motion.div
          className="detail-hero-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            A custom T-shirt shopping experience
            where personal style meets creativity
            and technology.
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
              PRINVICK / CUSTOM T-SHIRTS
            </div>

          </div>


          {/* Website preview */}

          <div className="website-preview">

            <div className="preview-content">

              <span className="preview-label">
                PRINVICK / CUSTOM APPAREL
              </span>

              <h2>
                Your Style.
                <br />
                <i>Your Rules.</i>
              </h2>

              <p>
                Create something that is
                uniquely yours.
              </p>

              <a
                href="https://prinvick-website.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="preview-button"
              >
                Explore Store
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
              Making every
              <br />
              <em>idea wearable.</em>
            </h2>
          </div>


          <div className="detail-info-text">

            <p>
              Prinvick is a custom T-shirt
              e-commerce experience built around
              personal expression and creative freedom.
              Instead of choosing only from finished
              products, users can make a design
              their own.
            </p>

            <p>
              The experience brings together product
              discovery, customization and live
              previews, allowing customers to explore
              T-shirts, upload their own artwork and
              personalize the front and back of
              their products.
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
            <strong>Prinvick</strong>
          </div>

          <div className="detail-data-item">
            <span>PROJECT</span>
            <strong>Custom T-Shirt E-commerce</strong>
          </div>

          <div className="detail-data-item">
            <span>SERVICE</span>
            <strong>
              UI / UX Design & Development
            </strong>
          </div>

          <div className="detail-data-item">
            <span>YEAR</span>
            <strong>2026</strong>
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
            Made to
            <br />
            <em>explore.</em>
            <br />
            Built to create.
          </motion.h2>


          <div className="approach-list">

            <div>
              <span>01</span>
              <p>Intuitive product discovery</p>
            </div>

            <div>
              <span>02</span>
              <p>Interactive T-shirt customization</p>
            </div>

            <div>
              <span>03</span>
              <p>Live front and back previews</p>
            </div>

            <div>
              <span>04</span>
              <p>Personalized shopping experience</p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FINAL
      ========================= */}

      <section className="detail-final">

        <span>SELECTED CLIENT / 01</span>

        <h2>
          Your idea.
          <br />
          Your <em>creation.</em>
        </h2>

        <a
          href="https://prinvick-website.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Prinvick
          <span>↗</span>
        </a>

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