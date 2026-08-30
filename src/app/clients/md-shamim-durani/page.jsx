"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const workflow = [
  {
    no: "01",
    title: "Capture",
    text: "Scan a physical document directly through the application.",
  },
  {
    no: "02",
    title: "Recognize",
    text: "Read the scanned information and populate the relevant fields.",
  },
  {
    no: "03",
    title: "Verify",
    text: "Review the captured information before saving the record.",
  },
  {
    no: "04",
    title: "Store",
    text: "Save the verified information into the database for future use.",
  },
];

export default function MdShamimDuraniPage() {
  return (
    <main className="doc-project">

      {/* NAV */}
      <nav className="doc-nav">
        <Link href="/#clients" className="doc-back">
          <span>←</span>
          <span>Back</span>
        </Link>

        <span className="doc-brand">
          AUREXA LABS
        </span>

        <span className="doc-index">
          04 / 04
        </span>
      </nav>


      {/* HERO */}
      <section className="doc-hero">

        <div className="doc-eyebrow">
          <span>CLIENT PROJECT</span>
          <i />
          <span>APPLICATION</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          From paper
          <br />
          to <em>data.</em>
        </motion.h1>

        <div className="doc-hero-bottom">
          <p>
            A document-scanning application designed
            to turn physical information into structured,
            searchable digital records.
          </p>

          <div>
            <span>SCAN</span>
            <span>EXTRACT</span>
            <span>SAVE</span>
          </div>
        </div>

      </section>


      {/* MAIN VISUAL */}
      <section className="doc-showcase">

        <div className="doc-section-label">
          01 / THE APPLICATION
        </div>

        <div className="doc-showcase-stage">

          {/* DOCUMENT */}
          <motion.div
            className="doc-paper"
            initial={{
              opacity: 0,
              rotate: -7,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              rotate: -5,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="doc-photo">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85"
                alt="Document workspace"
              />

              <div className="doc-corners">
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="doc-scan-line" />
            </div>

            <div className="doc-paper-info">
              <span>DOCUMENT_018</span>
              <span>SCANNING...</span>
            </div>

          </motion.div>


          {/* CENTER SCAN */}
          <motion.div
            className="doc-scan-card"
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >

            <div className="doc-scan-card-top">
              <span>DOCUMENT SCANNER</span>
              <span className="online">
                ● LIVE
              </span>
            </div>

            <div className="doc-camera">

              <div className="camera-corners">
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="camera-document">
                <div />
                <div />
                <div />
                <div />
              </div>

              <div className="camera-line" />

            </div>

            <div className="doc-camera-bottom">
              <span>
                ALIGN DOCUMENT
              </span>

              <button>
                SCAN
                <b>↗</b>
              </button>
            </div>

          </motion.div>


          {/* DATA PANEL */}
          <motion.div
            className="doc-data-panel"
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
          >

            <div className="data-heading">
              <span>EXTRACTED DATA</span>
              <b>VERIFIED</b>
            </div>

            <div className="data-row">
              <span>DOCUMENT ID</span>
              <strong>DOC-01827</strong>
            </div>

            <div className="data-row">
              <span>NAME</span>
              <strong>Document Record</strong>
            </div>

            <div className="data-row">
              <span>REFERENCE</span>
              <strong>REF-48291</strong>
            </div>

            <div className="data-row">
              <span>STATUS</span>
              <strong className="green">
                READY
              </strong>
            </div>

            <div className="data-saved">
              <span>DATABASE</span>
              <strong>
                RECORD SAVED ✓
              </strong>
            </div>

          </motion.div>

        </div>

      </section>


      {/* INTRO */}
      <section className="doc-intro">

        <div className="doc-section-label">
          02 / THE IDEA
        </div>

        <div className="doc-intro-grid">

          <h2>
            Less manual
            <br />
            work.
            <br />
            <em>More control.</em>
          </h2>

          <div className="doc-copy">

            <p>
              The application was designed around a
              simple objective — reduce the amount of
              repetitive information entry required when
              processing physical documents.
            </p>

            <p>
              A document could be scanned, its information
              captured through the application, reviewed
              and then stored as a structured record.
            </p>

          </div>

        </div>

      </section>


      {/* WORKFLOW */}
      <section className="doc-workflow">

        <div className="doc-section-label">
          03 / WORKFLOW
        </div>

        <div className="doc-workflow-grid">

          {workflow.map((item, index) => (
            <motion.div
              className="doc-workflow-card"
              key={item.no}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
            >

              <span className="workflow-no">
                {item.no}
              </span>

              <div className="workflow-symbol">
                {index === 0 && "⌁"}
                {index === 1 && "⌘"}
                {index === 2 && "✓"}
                {index === 3 && "↓"}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

      </section>


      {/* DATABASE VISUAL */}
      <section className="doc-database">

        <div className="doc-section-label">
          04 / DATA MANAGEMENT
        </div>

        <div className="database-window">

          <div className="database-top">

            <div>
              <span>APPLICATION</span>
              <strong>DOCUMENT RECORDS</strong>
            </div>

            <span className="database-status">
              SYSTEM ONLINE
              <i />
            </span>

          </div>


          <div className="database-body">

            <aside className="database-sidebar">

              <span className="active">
                SCANNER
              </span>

              <span>
                DOCUMENTS
              </span>

              <span>
                RECORDS
              </span>

              <span>
                SETTINGS
              </span>

            </aside>


            <div className="database-content">

              <div className="database-heading">

                <div>
                  <span>
                    RECENT RECORDS
                  </span>

                  <h3>
                    Document Database
                  </h3>
                </div>

                <button>
                  + NEW SCAN
                </button>

              </div>


              <div className="record-table">

                <div className="record-head">
                  <span>DOCUMENT</span>
                  <span>REFERENCE</span>
                  <span>DATE</span>
                  <span>STATUS</span>
                </div>

                <div className="record-row">
                  <strong>DOCUMENT_018</strong>
                  <span>REF-48291</span>
                  <span>28 AUG 2026</span>
                  <b>VERIFIED</b>
                </div>

                <div className="record-row">
                  <strong>DOCUMENT_017</strong>
                  <span>REF-48284</span>
                  <span>28 AUG 2026</span>
                  <b>VERIFIED</b>
                </div>

                <div className="record-row">
                  <strong>DOCUMENT_016</strong>
                  <span>REF-48270</span>
                  <span>27 AUG 2026</span>
                  <b>VERIFIED</b>
                </div>

                <div className="record-row">
                  <strong>DOCUMENT_015</strong>
                  <span>REF-48262</span>
                  <span>27 AUG 2026</span>
                  <b className="duplicate">
                    DUPLICATE
                  </b>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* DUPLICATE */}
      <section className="doc-validation">

        <div className="doc-section-label">
          05 / VALIDATION
        </div>

        <div className="validation-grid">

          <div>

            <span className="validation-tag">
              RECORD VALIDATION
            </span>

            <h2>
              Already
              <br />
              <em>exists.</em>
            </h2>

            <p>
              When an existing document record is
              scanned again, the application identifies
              the duplicate instead of creating another
              entry.
            </p>

          </div>


          <motion.div
            className="duplicate-box"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
          >

            <div className="duplicate-icon">
              !
            </div>

            <span>
              DUPLICATE RECORD
            </span>

            <h3>
              This document
              <br />
              already exists.
            </h3>

            <div className="duplicate-id">
              <span>REFERENCE</span>
              <strong>REF-48262</strong>
            </div>

            <button>
              VIEW EXISTING RECORD
              <b>↗</b>
            </button>

          </motion.div>

        </div>

      </section>


      {/* DETAILS */}
      <section className="doc-details">

        <div className="doc-section-label">
          06 / PROJECT
        </div>

        <div className="doc-details-grid">

          <div className="details-title">

            <span>
              THE WORK
            </span>

            <h2>
              Built for
              <br />
              <em>accuracy.</em>
            </h2>

          </div>


          <div className="details-list">

            <div>
              <span>CLIENT</span>
              <strong>
                Arjun Bansal
              </strong>
            </div>

            <div>
              <span>PROJECT</span>
              <strong>
                Application
              </strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>
                Document Scanning & Data Management
              </strong>
            </div>

            <div>
              <span>WORKFLOW</span>
              <strong>
                Scan / Extract / Verify / Save
              </strong>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="doc-cta">

        <span>
          HAVE A PROJECT IN MIND?
        </span>

        <Link href="/#contact">
          <span>Start a Project</span>
          <b>↗</b>
        </Link>

      </section>


      {/* FOOTER */}
      <footer className="doc-footer">

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