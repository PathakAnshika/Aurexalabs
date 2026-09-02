"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    name: "WEB PAGE",
    // type: "WEBSITE",
    image: "/image/work1.jpg",
    slug: "shri-chandreshwar",
  },
  {
    number: "02",
    name: "WEB PAGE",
    // type: "ECOMMERCE",
    image: "/image/work2.jpg",
    slug: "prinvick",
  },
  {
    number: "03",
    name: "APPLICATION",
    // type: "APPLICATIONS",
    image: "/image/work3.jpg",
    slug: "inventory-management",
  },
  {
    number: "04",
    name: "DASHBOARD",
    // type: "SYSTEMS",
    image: "/image/work4.jpg",
    slug: "erp-hrms",
  },
  {
    number: "05",
    name: "APPLICATION",
    // type: "APPLICATIONS",
    image: "/image/work5.jpg",
    slug: "tenneco-system",
  },
  {
    number: "06",
    name: "BRAND / UIUX",
    // type: "DESIGN",
    image: "/image/work6.png",
    slug: "brand-uiux",
  },
  {
    number: "07",
    name: "AI AUTOMATION",
    // type: "AI",
    image: "/image/work7.png",
    slug: "ai-automation",
  },
  {
    number: "08",
    name: "DIGITAL PRODUCT",
    // type: "TEMPLATES",
    image: "/image/work8.png",
    slug: "digital-product",
  },
];

export default function WorkPage() {
  return (
    <main className="work-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="work-hero">

        <Link
          href="/"
          className="work-back"
        >
          ← BACK HOME
        </Link>

        <div className="work-hero-label">
          WORK / 08
        </div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Selected <em>work.</em>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          A collection of digital experiences,
          systems, products and ideas we've built.
        </motion.p>

      </section>


      {/* =========================
          PROJECT GRID
      ========================= */}

      <section className="work-grid">

        {projects.map((project, index) => (

          <motion.div
            key={project.slug}
            className={`work-card-wrap work-card-${index + 1}`}

            initial={{
              opacity: 0,
              y: 55,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.15,
            }}

            transition={{
              duration: 0.85,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <Link
              href={`/work/${project.slug}`}
              className="work-card"
            >

              {/* =========================
                  IMAGE
              ========================= */}

              <div className="work-card-image">

                <img
                  src={project.image}
                  alt={project.name}
                  loading={index === 0 ? "eager" : "lazy"}
                />

                <div className="work-card-overlay" />

                <span className="work-card-number">
                  {project.number}
                </span>

                <span className="work-card-arrow">
                  ↗
                </span>

                <div className="work-card-hover">

                  <span>
                    VIEW CASE STUDY
                  </span>

                  <span>
                    ↗
                  </span>

                </div>

              </div>


              {/* =========================
                  INFO
              ========================= */}

              <div className="work-card-info">

                <div>

                  <h2>
                    {project.name}
                  </h2>

                  <span>
                    {project.type}
                  </span>

                </div>

                <span className="work-card-info-number">
                  {project.number}
                </span>

              </div>

            </Link>

          </motion.div>

        ))}

      </section>


      {/* =========================
          BOTTOM
      ========================= */}

      <motion.section
        className="work-bottom"

        initial={{
          opacity: 0,
          y: 20,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: 0.8,
        }}
      >

        <span>
          AUREXA LABS
        </span>

        <span>
          DIGITAL / DESIGN / TECHNOLOGY
        </span>

        <strong>
          BEYOND THE ORDINARY.
        </strong>

      </motion.section>

    </main>
  );
}