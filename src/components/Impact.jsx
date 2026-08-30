
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const impacts = [
  {
    number: "01",
    title: "BUILT AROUND PEOPLE",
    description:
      "Digital experiences shaped around real people, real needs and meaningful interactions.",
  },
  {
    number: "02",
    title: "BUILT TO SCALE",
    description:
      "Flexible products and systems designed to grow as your business evolves.",
  },
  {
    number: "03",
    title: "DESIGNED WITH PURPOSE",
    description:
      "Every interaction has a reason — combining clarity, aesthetics and function.",
  },
  {
    number: "04",
    title: "READY FOR WHAT’S NEXT",
    description:
      "Modern technology and thoughtful foundations built for a constantly changing digital world.",
  },
];

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const labelVariants = {
  hidden: {
    opacity: 0,
    x: -25,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Impact() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.18,
  });

  return (
    <section
      ref={sectionRef}
      className="impact-section"
      id="impact"
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <motion.div
        className="impact-header"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={headingVariants}
      >

        {/* LABEL */}

        <motion.div
          className="impact-label"
          variants={labelVariants}
        >
          IMPACT / 05
        </motion.div>


        {/* HEADLINE */}

        <h2>

          <motion.span
            className="impact-line"
            variants={{
              hidden: {
                opacity: 0,
                y: 55,
                rotateX: -35,
                filter: "blur(7px)",
              },

              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.8,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            Built to make
          </motion.span>

          <br />

          <motion.span
            className="impact-line impact-emphasis"
            variants={{
              hidden: {
                opacity: 0,
                y: 65,
                rotateX: -40,
                scale: 0.96,
                filter: "blur(8px)",
              },

              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.9,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            an <em>impact.</em>
          </motion.span>

        </h2>

      </motion.div>


      {/* =================================================
          INTRO
      ================================================= */}

      <motion.div
        className="impact-intro"

        initial={{
          opacity: 0,
          y: 35,
          filter: "blur(5px)",
        }}

        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 35,
          filter: isInView
            ? "blur(0px)"
            : "blur(5px)",
        }}

        transition={{
          duration: 0.8,
          delay: isInView ? 0.32 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <p>
          We don’t just build digital products.
        </p>

        <strong>
          We build things people remember,
          <br />
          use and return to.
        </strong>

      </motion.div>


      {/* =================================================
          IMPACT LIST
      ================================================= */}

      <div className="impact-list">

        {impacts.map((item, index) => (

          <motion.div
            className="impact-item"
            key={item.number}

            initial={{
              opacity: 0,
              y: 40,
            }}

            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 40,
            }}

            transition={{
              duration: 0.75,
              delay: isInView
                ? 0.42 + index * 0.11
                : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="impact-number">
              {item.number}
            </div>

            <div className="impact-divider" />

            <div className="impact-title">
              {item.title}
            </div>

            <div className="impact-description">
              {item.description}
            </div>

            <div className="impact-arrow">
              ↗
            </div>

          </motion.div>

        ))}

      </div>


      {/* =================================================
          FOOTER
      ================================================= */}

      <motion.div
        className="impact-footer"

        initial={{
          opacity: 0,
          y: 25,
        }}

        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 25,
        }}

        transition={{
          duration: 0.8,
          delay: isInView ? 0.82 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <span>
          AUREXA LABS
        </span>

        <span>
          DIGITAL / DESIGN / TECHNOLOGY
        </span>

        <span className="impact-footer-accent">
          BEYOND THE ORDINARY.
        </span>

      </motion.div>

    </section>
  );
}

