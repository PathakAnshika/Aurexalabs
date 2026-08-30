
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);

 const isInView = useInView(sectionRef, {
  once: false,
  amount: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      className="about-section"
      id="about"
    >

  
{/* HEADER */}

<div className="about-header">

  <motion.span
    className="about-label"
    initial={{
      opacity: 0,
      x: -20,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    viewport={{
      once: false,
      amount: 0.5,
    }}
    transition={{
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    ABOUT / 06
  </motion.span>


  <h2>

    <motion.span
      className="about-heading-line"
      initial={{
        opacity: 0,
        y: 55,
        rotateX: -35,
        filter: "blur(7px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.5,
      }}
      transition={{
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      The people
    </motion.span>

    <br />

    <motion.span
      className="about-heading-line"
      initial={{
        opacity: 0,
        y: 65,
        rotateX: -40,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.5,
      }}
      transition={{
        duration: 0.9,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      behind <em>Aurexa.</em>
    </motion.span>

  </h2>

</div>


      {/* INTRO */}

      <motion.div
        className="about-intro"

        initial={{
          opacity: 0,
          y: 25,
        }}

        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 25,
        }}

        transition={{
          duration: 0.85,
          delay: isInView ? 0.3 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <p>
          Aurexa is a digital studio built around people,
          ideas and technology.
        </p>

        <span>
          AUREXA LABS
        </span>

      </motion.div>


      {/* PEOPLE + STORY */}

      <div className="about-grid">

        {/* PEOPLE */}

        <motion.div
          className="about-column"

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 30,
          }}

          transition={{
            duration: 0.85,
            delay: isInView ? 0.42 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="about-column-label">
            <span>01</span>
            THE PEOPLE
          </div>

          <div className="about-person">

            <div className="about-person-image">
              <img
                src="/image/owner.png"
                alt="Aurexa founder"
              />
            </div>

            <div className="about-person-info">

              <h3>
                Anshika Pathak
              </h3>

              <span>
                FOUNDER / CREATIVE & TECHNOLOGY
              </span>

              <p>
                Building Aurexa at the intersection of
                design, technology and ideas that matter.
              </p>

            </div>

          </div>

        </motion.div>


        {/* STORY */}

        <motion.div
          className="about-column"

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 30,
          }}

          transition={{
            duration: 0.85,
            delay: isInView ? 0.52 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="about-column-label">
            <span>02</span>
            HOW IT STARTED
          </div>

          <h3 className="about-story-title">
            Started with an
            <br />
            <em>idea.</em>
          </h3>

          <p className="about-story-text">
            Aurexa started with a simple belief — digital
            experiences could be more thoughtful, useful
            and human.
          </p>

          <p className="about-story-text">
            That idea became a studio focused on creating
            websites, applications and digital systems
            that help businesses move forward.
          </p>

        </motion.div>

      </div>


      {/* BOTTOM */}

      <motion.div
        className="about-bottom"

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
          delay: isInView ? 0.7 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <span>PEOPLE</span>
        <i>→</i>

        <span>IDEAS</span>
        <i>→</i>

        <span>TECHNOLOGY</span>
        <i>→</i>

        <strong>IMPACT.</strong>

      </motion.div>

    </section>
  );
}

