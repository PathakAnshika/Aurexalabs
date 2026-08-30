
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "DISCOVER",
    statement: "Understand before we build.",
    description:
      "We start by understanding the problem, the people and the opportunity behind the idea.",
    words: "RESEARCH · QUESTIONS · INSIGHT",
  },
  {
    number: "02",
    title: "DEFINE",
    statement: "Turn direction into clarity.",
    description:
      "We shape the strategy, structure and experience so every decision has a purpose.",
    words: "STRATEGY · STRUCTURE · DIRECTION",
  },
  {
    number: "03",
    title: "CREATE",
    statement: "Design meets technology.",
    description:
      "We bring the experience to life through thoughtful design and purposeful technology.",
    words: "DESIGN · DEVELOP · ITERATE",
  },
  {
    number: "04",
    title: "DELIVER",
    statement: "Make it real. Then make it better.",
    description:
      "We launch, refine and evolve the product so it continues creating value beyond the first release.",
    words: "LAUNCH · OPTIMIZE · GROW",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 80,
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

export default function Process() {
  const headingRef = useRef(null);

  const headingInView = useInView(headingRef, {
    once: false,
    amount: 0.35,
  });

  return (
    <section
      className="process-section"
      id="process"
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <motion.div
        ref={headingRef}
        className="process-heading"
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        variants={reveal}
      >

        <span className="process-eyebrow">
          PROCESS / 04
        </span>

        <h2>
          From idea to{" "}
          <em>impact.</em>
        </h2>

      </motion.div>


      {/* =================================================
          PROCESS STEPS
      ================================================= */}

      <div className="process-list">

        {steps.map((step, index) => (
          <ProcessStep
            key={step.number}
            step={step}
            index={index}
          />
        ))}

      </div>


      {/* {/* =================================================
          FOOTER
      ================================================= */}

      {/* <div className="process-footer">

        <span>
          RESEARCH · STRATEGY · DESIGN · DEVELOPMENT
        </span>

        <span>
          AUREXA LABS
        </span>

      </div> */} 

    </section>
  );
}


/* =========================================================
   INDIVIDUAL STEP
========================================================= */

function ProcessStep({ step, index }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
    amount: 0.35,
  });

  return (
    <motion.article
      ref={ref}
      className={`process-step ${
        inView ? "is-visible" : ""
      }`}
    >

      {/* LEFT NUMBER */}

      <div className="process-step-index">

        <motion.span
          initial={{
            opacity: 0,
            x: -25,
          }}
          animate={{
            opacity: inView ? 1 : 0.2,
            x: inView ? 0 : -25,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {step.number}
        </motion.span>

        <div className="process-step-line">
          <motion.i
            initial={{
              scaleY: 0,
            }}
            animate={{
              scaleY: inView ? 1 : 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>

      </div>


      {/* MAIN CONTENT */}

      <div className="process-step-content">

        <motion.span
          className="process-step-label"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 20,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          STEP {step.number}
        </motion.span>


        <motion.h3
          initial={{
            opacity: 0,
            y: 70,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 70,
            filter: inView
              ? "blur(0px)"
              : "blur(8px)",
          }}
          transition={{
            duration: 0.85,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {step.title}
        </motion.h3>


        <motion.div
          className="process-step-copy"
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 35,
          }}
          transition={{
            duration: 0.7,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <h4>
            {step.statement}
          </h4>

          <p>
            {step.description}
          </p>

        </motion.div>


        <motion.span
          className="process-step-words"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: inView ? 0.55 : 0,
            y: inView ? 0 : 20,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
        >
          {step.words}
        </motion.span>

      </div>


      {/* RIGHT SIDE */}

      <motion.div
        className="process-step-side"
        initial={{
          opacity: 0,
          x: 30,
        }}
        animate={{
          opacity: inView ? 1 : 0,
          x: inView ? 0 : 30,
        }}
        transition={{
          duration: 0.7,
          delay: 0.25,
        }}
      >

        <span>
          {String(index + 1).padStart(2, "0")}
        </span>

        <span>
          / 04
        </span>

      </motion.div>

    </motion.article>
  );
}

