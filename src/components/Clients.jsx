"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const clients = [
  {
    number: "01",
    name: "A K RAGHVAN",
    project: "SHRI CHANDRESHWAR DHAM",
    type: "WEBSITE",
    line1: "Our story, brought beautifully online.",
    line2: "A presence that truly feels like us.",
    slug: "shri-chandreshwar-dham-mandir",
  },
  {
    number: "02",
    name: "CYAMSYS TECHNOLOGIES",
    project: "DIGITAL PRESENCE",
    type: "WEBSITE",
    line1: "Clear, modern and thoughtfully built.",
    line2: "Exactly the direction we needed.",
    slug: "cyamsys-technologies",
  },
  {
    number: "03",
    name: "NIKITA SINGH",
    project: "VISUAL DIRECTION",
    type: "DESIGN",
    line1: "The idea was always there.",
    line2: "The design finally gave it a voice.",
    slug: "nikita-singh",
  },
  {
    number: "04",
    name: "ARJUN BANSAL",
    project: "DOCUMENT SCANNING & DATA MANAGEMENT",
    type: "APPLICATION",
    line1: "A complex workflow, made simple.",
    line2: "Clearer, faster and easier to manage.",
    slug: "md-shamim-durani",
  },
];

export default function Clients() {
  return (
    <section className="clients-section" id="clients">
      {/* HEADER */}
      <div className="clients-header">
        <motion.span
          className="clients-eyebrow"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          TRUSTED BY / 06
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Selected <em>clients.</em>
        </motion.h2>

        <motion.p
          className="clients-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          A few of the people, businesses and ideas we&apos;ve had
          the opportunity to build with.
        </motion.p>
      </div>

      {/* CLIENT CARDS */}
      <div className="clients-grid">
        {clients.map((client, index) => (
          <motion.div
            key={client.number}
            className="client-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* TOP */}
            <div className="client-card-top">
              <span>{client.number}</span>

              <span className="client-card-type">
                {client.type}
              </span>
            </div>

            {/* MAIN */}
            <div className="client-card-main">
              <span className="client-card-project">
                {client.project}
              </span>

              <h3>{client.name}</h3>

              {/* CLIENT WORDS */}
              <div className="client-words">
                <span className="client-quote-mark">“</span>

                <p>
                  {client.line1}
                  <br />
                  {client.line2}
                </p>

                <small>CLIENT PERSPECTIVE</small>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="client-card-bottom">
              <span className="client-card-label">
                PROJECT / {client.number}
              </span>

              <Link
                href={`/clients/${client.slug}`}
                className="client-card-arrow"
                aria-label={`View ${client.name} project`}
              >
                ↗
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER LINE */}
      <motion.div
        className="clients-footer-line"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span>PEOPLE / PROJECTS / PARTNERSHIPS</span>
        <span>04 SELECTED</span>
      </motion.div>
    </section>
  );
}