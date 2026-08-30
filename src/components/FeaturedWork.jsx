"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    title: "WEB",
    subtitle: "Websites & Digital Experiences",
    description:
      "Immersive websites, e-commerce experiences and digital platforms.",
    number: "01",
    image: "/image/work2.jpg",
    slug: "web",
  },
  {
    title: "APPLICATIONS",
    subtitle: "Custom Digital Systems",
    description:
      "Modern business applications, intelligent dashboards and scalable digital systems.",
    number: "02",
    image: "/image/S2.jpg",
    slug: "applications",
  },
  {
    title: "DESIGN",
    subtitle: "Visual & Brand Experiences",
    description:
      "Brand identities, UI/UX, posters, templates and visual systems.",
    number: "03",
    image: "/image/S3.jpg",
    slug: "design",
  },
  {
    title: "AI",
    subtitle: "Intelligent Digital Solutions",
    description:
      "AI-powered products, automation and intelligent digital experiences.",
    number: "04",
    image: "/image/work7.jpg",
    slug: "ai",
  },
];

export default function FeaturedWork() {
  const [active, setActive] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2,
  });

  const handleMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width - 0.5) * 12;

    const y =
      ((e.clientY - rect.top) / rect.height - 0.5) * 12;

    setMouse({ x, y });
    setActive(index);
  };

  return (
    <section
      ref={sectionRef}
      className="featured-work"
      id="work"
    >

      {/* ================= HEADING ================= */}

      <div className="work-heading">

        <div>

          <motion.p
            className="work-eyebrow"
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
            SELECTED WORK
          </motion.p>


          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 35,
            }}
            transition={{
              duration: 1,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            What we
            <br />
            <em>create.</em>
          </motion.h2>

        </div>


        {/* DESCRIPTION */}

        <motion.p
          className="work-description"
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
            delay: 0.22,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          From digital experiences to intelligent
          applications, we create work designed
          to move brands forward.
        </motion.p>

      </div>


      {/* ================= GRID ================= */}

      <div className="category-grid">

        {categories.map((category, index) => (

          <motion.div
            key={category.slug}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 30,
            }}
            transition={{
              duration: 0.8,
              delay: 0.35 + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <Link
              href={`/work/${category.slug}`}
              className="category-card"

              onMouseEnter={() => setActive(index)}

              onMouseLeave={() => setActive(null)}

              onMouseMove={(e) =>
                handleMove(e, index)
              }
            >

              {/* IMAGE */}

              <div className="category-image">

                <img
                  src={category.image}
                  alt={category.title}
                  style={{
                    transform:
                      active === index
                        ? `scale(1.07) translate(${mouse.x}px, ${mouse.y}px)`
                        : "scale(1)",
                  }}
                />

                <div className="category-overlay" />

                <span className="category-number">
                  {category.number}
                </span>

                <span className="category-arrow">
                  ↗
                </span>

                <div className="category-center">
                  <span>EXPLORE</span>
                  <span>↗</span>
                </div>

              </div>


              {/* CONTENT */}

              <div className="category-content">

                <div>

                  <h3>
                    {category.title}
                  </h3>

                  <p className="category-subtitle">
                    {category.subtitle}
                  </p>

                </div>

                <p className="category-description">
                  {category.description}
                </p>

              </div>

            </Link>

          </motion.div>

        ))}

      </div>

    </section>
  );
}