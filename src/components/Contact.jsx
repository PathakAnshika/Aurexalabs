
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      className="contact-section"
      id="contact"
    >
      {/* LABEL */}
      <motion.div
        className="contact-label"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        CONTACT / 07
      </motion.div>

      {/* HEADING */}
      <div className="contact-heading">
        <h2>
          <motion.span
            className="contact-heading-line"
            initial={{
              opacity: 0,
              y: 55,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 55,
              filter: isInView ? "blur(0px)" : "blur(6px)",
            }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Have something
          </motion.span>

          <br />

          <motion.span
            className="contact-heading-line contact-heading-accent"
            initial={{
              opacity: 0,
              y: 60,
              filter: "blur(7px)",
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 60,
              filter: isInView ? "blur(0px)" : "blur(7px)",
            }}
            transition={{
              duration: 1.2,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            worth <em>building?</em>
          </motion.span>
        </h2>
      </div>

      {/* COMPACT EDITORIAL FOOTER */}
      <footer className="aurexa-editorial-footer">

        <div className="editorial-footer-main">

          {/* BRAND */}
          <div className="editorial-brand">
            <a href="/" className="editorial-logo">
              AUREXA LABS<span>.</span>
            </a>

            <p>
              Technology that moves businesses forward.
            </p>
          </div>

          {/* NAVIGATION */}
          <nav className="editorial-nav">
            <a href="/about">COMPANY</a>
            <a href="/services">SOLUTIONS</a>
            <a href="/case-studies">WORK</a>
            <a href="#contact">CONTACT</a>
          </nav>

          {/* SOCIAL */}
          <div className="editorial-social">
            <a href="mailto:work.aurexalabs@gmail.com">
              EMAIL <span>↗</span>
            </a>

            <a
              href="https://wa.me/918815631914"
              target="_blank"
              rel="noopener noreferrer"
            >
              WHATSAPP <span>↗</span>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN <span>↗</span>
            </a>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="editorial-footer-bottom">
          <span>© 2026 AUREXA LABS</span>

          <span>INDIA / WORLDWIDE</span>

          <span>ALL RIGHTS RESERVED.</span>

          <span className="editorial-footer-motto">
            IMAGINE. BUILD. EVOLVE.
          </span>
        </div>

      </footer>

      <style jsx global>{`

        .aurexa-editorial-footer {
          width: 100%;
          margin-top: 125px;
          padding-top: 25px;
          border-top: 1px solid rgba(238,234,228,.15);
          color: #eeeae4;
          box-sizing: border-box;
          font-family: var(--font-inter), sans-serif;
        }

        .editorial-footer-main {
          display: grid;
          grid-template-columns: 1.1fr 1.2fr 1fr;
          align-items: center;
          gap: 30px;
          padding-bottom: 25px;
        }

        /* BRAND */

        .editorial-brand {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .editorial-logo {
          width: fit-content;
          color: #eeeae4;
          font-size: 17px;
          font-weight: 500;
          letter-spacing: -.055em;
          text-decoration: none;
        }

        .editorial-logo span {
          color: #c7ff00;
        }

        .editorial-brand p {
          margin: 0;
          color: #77716b;
          font-size: 10px;
          font-weight: 300;
          line-height: 1.6;
        }

        /* NAVIGATION */

        .editorial-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: clamp(14px, 2vw, 27px);
        }

        .editorial-nav a,
        .editorial-social a {
          color: #aaa49d;
          font-size: 8px;
          font-weight: 400;
          letter-spacing: .13em;
          text-decoration: none;
          white-space: nowrap;
          transition: color .25s ease;
        }

        .editorial-nav a:hover,
        .editorial-social a:hover {
          color: #c7ff00;
        }

        /* SOCIAL LINKS */

        .editorial-social {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: clamp(10px, 1.5vw, 20px);
        }

        .editorial-social a span {
          color: #c7ff00;
          margin-left: 2px;
        }

        /* COPYRIGHT */

        .editorial-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          min-height: 42px;
          border-top: 1px solid rgba(238,234,228,.09);
          color: #625d57;
          font-size: 8px;
          letter-spacing: .12em;
        }

        .editorial-footer-motto {
          color: #aaa49d;
        }

        /* TABLET */

        @media (max-width: 1000px) {
          .editorial-footer-main {
            grid-template-columns: 1fr 1fr;
            row-gap: 22px;
          }

          .editorial-nav {
            justify-content: flex-end;
          }

          .editorial-social {
            grid-column: 1 / -1;
            justify-content: flex-start;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .aurexa-editorial-footer {
            margin-top: 50px;
            padding-top: 22px;
          }

          .editorial-footer-main {
            grid-template-columns: 1fr;
            gap: 23px;
            padding-bottom: 22px;
          }

          .editorial-nav {
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 17px;
          }

          .editorial-social {
            grid-column: auto;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 16px;
          }

          .editorial-footer-bottom {
            min-height: auto;
            padding: 14px 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            font-size: 7px;
          }

          .editorial-footer-motto {
            text-align: right;
          }
        }

      `}</style>

    </section>
  );
}
