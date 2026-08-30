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

        initial={{
          opacity: 0,
          y: 20,
        }}

        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}

        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        CONTACT / 08
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
              filter: isInView
                ? "blur(0px)"
                : "blur(6px)",
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
              filter: isInView
                ? "blur(0px)"
                : "blur(7px)",
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


      {/* BOTTOM */}

      <div className="contact-bottom">

        <motion.div
          className="contact-copy"

          initial={{
            opacity: 0,
            y: 25,
          }}

          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 25,
          }}

          transition={{
            duration: 0.9,
            delay: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <p>
            Have an idea, a product or a problem
            worth solving? Let’s talk about what
            we can build together.
          </p>

          <span>
            AUREXA LABS / INDIA / WORLDWIDE
          </span>

        </motion.div>


        {/* CTA */}

        <motion.a
          href="/start-a-project"
          className="contact-button"

          initial={{
            opacity: 0,
            y: 25,
            scale: 0.96,
          }}

          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 25,
            scale: isInView ? 1 : 0.96,
          }}

          transition={{
            duration: 0.9,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          START A PROJECT
          <span>↗</span>
        </motion.a>

      </div>

    </section>
  );
}