"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const MotionLink = motion(Link);

const services = [
  {
    number: "01",
    title: "DESIGNING",
    subtitle: "Visual & Brand Experiences",
    description:
      "From identity to interface, we create distinctive visual experiences that make brands feel consistent, memorable and modern.",
    items:
      "LOGO DESIGN · BRAND IDENTITY · UI/UX · WEBSITE UI · APP UI · POSTERS · SOCIAL CREATIVES · TEMPLATES · MARKETING · PACKAGING · DESIGN SYSTEMS",
    image: "/image/FW1.jpg",
    slug: "design",
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    subtitle: "Websites & Digital Experiences",
    description:
      "We build, redesign and modernize digital experiences — from business websites and landing pages to complete e-commerce platforms.",
    items:
      "BUSINESS WEBSITES · PORTFOLIOS · LANDING PAGES · E-COMMERCE · CUSTOM WEBSITES · CMS · RESPONSIVE DEVELOPMENT · REDESIGN · MODERNIZATION",
    image: "/image/FW2.jpg",
    slug: "web",
  },
  {
    number: "03",
    title: "APPLICATION DEVELOPMENT",
    subtitle: "Custom Digital Systems",
    description:
      "Powerful applications built around real business workflows, from internal tools to complete management platforms.",
    items:
      "WEB APPLICATIONS · BUSINESS APPS · DASHBOARDS · ERP · CRM · HRMS · INVENTORY · MANAGEMENT SYSTEMS · CUSTOM SOFTWARE · REDESIGN · MODERNIZATION",
    image: "/image/FW3.jpg",
    slug: "applications",
  },
  {
    number: "04",
    title: "AI + AUTOMATION",
    subtitle: "Intelligent Digital Solutions",
    description:
      "We bring intelligence into digital products through AI-powered experiences, smarter workflows and business automation.",
    items:
      "AI APPLICATIONS · AI ASSISTANTS · AI INTEGRATION · BUSINESS AUTOMATION · WORKFLOW AUTOMATION · INTELLIGENT SYSTEMS · SMART DASHBOARDS",
    image: "/image/FW4.jpg",
    slug: "ai",
  },
  {
    number: "05",
    title: "PRODUCT DEVELOPMENT",
    subtitle: "Ideas Into Digital Products",
    description:
      "From an early idea to a working product, we help shape, design and build digital products ready to evolve.",
    items:
      "MVP DEVELOPMENT · PROTOTYPING · SAAS · DIGITAL PRODUCTS · FEATURE DEVELOPMENT · PRODUCT ENGINEERING",
    image: "/image/FW5.jpg",
    slug: "product-development",
  },
  {
    number: "06",
    title: "DIGITAL TRANSFORMATION",
    subtitle: "Modernizing What Already Exists",
    description:
      "We transform outdated digital experiences and systems into modern, scalable and more effective products.",
    items:
      "LEGACY MODERNIZATION · UI/UX OVERHAUL · SYSTEM TRANSFORMATION · WEBSITE TRANSFORMATION · WORKFLOW IMPROVEMENT",
    image: "/image/FW6.jpg",
    slug: "digital-transformation",
  },
  {
    number: "07",
    title: "MAINTENANCE & GROWTH",
    subtitle: "Continuous Improvement",
    description:
      "We keep digital products evolving through ongoing improvements, optimization, new features and technical enhancements.",
    items:
      "MAINTENANCE · PERFORMANCE · FEATURE UPDATES · OPTIMIZATION · TECHNICAL IMPROVEMENTS · CONTINUOUS DEVELOPMENT",
    image: "/image/FW7.jpg",
    slug: "maintenance-growth",
  },
];

export default function Services() {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);

  const [active, setActive] = useState(null);
  const [page, setPage] = useState(0);

  /* =========================
     SCROLL REVEAL
  ========================= */

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.18,
  });

  // 7 services, 2 visible at once = 6 positions
  const totalPages = services.length - 1;

  const getCardStep = () => {
    const track = trackRef.current;

    if (!track) return 0;

    const card = track.querySelector(".service-card");

    if (!card) return 0;

    const gap = 24;

    return card.getBoundingClientRect().width + gap;
  };

  const updatePage = () => {
    const track = trackRef.current;

    if (!track) return;

    const step = getCardStep();

    if (!step) return;

    const currentPage = Math.round(
      track.scrollLeft / step
    );

    const maxPage = services.length - 2;

    setPage(
      Math.max(
        0,
        Math.min(currentPage, maxPage)
      )
    );
  };

  const slideNext = () => {
    const track = trackRef.current;

    if (!track) return;

    const step = getCardStep();

    if (!step) return;

    const maxPage = services.length - 2;

    const nextPage = Math.min(
      page + 1,
      maxPage
    );

    track.scrollTo({
      left: nextPage * step,
      behavior: "smooth",
    });

    setPage(nextPage);
  };

  const slidePrev = () => {
    const track = trackRef.current;

    if (!track) return;

    const step = getCardStep();

    if (!step) return;

    const previousPage = Math.max(
      page - 1,
      0
    );

    track.scrollTo({
      left: previousPage * step,
      behavior: "smooth",
    });

    setPage(previousPage);
  };

  const handleWheel = (e) => {
    const track = trackRef.current;

    if (!track) return;

    if (
      Math.abs(e.deltaY) >
      Math.abs(e.deltaX)
    ) {
      e.preventDefault();

      track.scrollLeft += e.deltaY;

      requestAnimationFrame(updatePage);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="services-section"
      id="services"
    >

      {/* =========================
          HEADER
      ========================= */}

    <motion.div
  className="services-header"
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  }}
>
  <div>

    <motion.p
      className="services-eyebrow"
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
          letterSpacing: "0.05em",
        },
        visible: {
          opacity: 1,
          y: 0,
          letterSpacing: "0.18em",
          transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      SERVICES / 07
    </motion.p>


    <h2>

      <motion.span
        className="services-heading-line"
        variants={{
          hidden: {
            opacity: 0,
            y: 55,
            rotateX: -35,
            filter: "blur(5px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            transition: {
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
      >
        We shape
      </motion.span>

      <br />

      <motion.span
        className="services-heading-line services-heading-accent"
        variants={{
          hidden: {
            opacity: 0,
            y: 65,
            rotateX: -40,
            scale: 0.94,
            filter: "blur(7px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              duration: 1.15,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
      >
        <em>digital.</em>
      </motion.span>

    </h2>

  </div>


  <motion.div
    className="services-header-right"
    variants={{
      hidden: {
        opacity: 0,
        x: 30,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
  >

    <p>
      From first idea to final experience,
      we design, develop and transform
      digital products that move businesses
      forward.
    </p>

  </motion.div>

</motion.div>


      {/* =========================
          CAROUSEL HEADING
      ========================= */}

      <motion.div
        className="services-carousel-heading"
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
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <span>
          EXPLORE SERVICES
        </span>

        <span>
          DRAG / SCROLL TO EXPLORE
        </span>

      </motion.div>


      {/* =========================
          CAROUSEL
      ========================= */}

      <div
        className="services-carousel"
        ref={trackRef}
        onScroll={updatePage}
        onWheel={handleWheel}
      >

        <div className="services-track">

          {services.map((service, index) => {

            const isActive =
              active === index;

            return (
              <MotionLink
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`service-card ${
                  isActive
                    ? "is-active"
                    : ""
                } ${
                  active !== null &&
                  !isActive
                    ? "is-dimmed"
                    : ""
                }`}

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
                  delay:
                    0.35 +
                    index * 0.12,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}

                onMouseEnter={() =>
                  setActive(index)
                }

                onMouseLeave={() =>
                  setActive(null)
                }
              >

                {/* IMAGE */}

                <div className="service-card-image">

                  <img
                    src={service.image}
                    alt=""
                  />

                  <div className="service-image-shade" />

                  <span className="service-image-number">
                    {service.number}
                  </span>

                  {/* <span className="service-image-arrow">
                    ↗
                  </span> */}

                </div>


                {/* CONTENT */}

                <div className="service-card-content">

                  <div className="service-card-top">

                    <span>
                      {service.number}
                    </span>

                    <span>
                      AUREXA LABS
                    </span>

                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p className="service-card-subtitle">
                    {service.subtitle}
                  </p>

                  <div className="service-card-details">

                    <p>
                      {service.description}
                    </p>

                    <span>
                      {service.items}
                    </span>

                  </div>

                </div>


                {/* CARD FOOTER */}

                {/* <div className="service-card-footer">

                  <span>
                    VIEW SERVICE
                  </span>

                  <span className="service-card-footer-arrow">
                    ↗
                  </span>

                </div> */}


                {/* ANIMATED LINE */}

                <span className="service-card-line" />

              </MotionLink>
            );
          })}

        </div>

      </div>


      {/* =========================
          CAROUSEL NAVIGATION
      ========================= */}

      <div className="services-carousel-nav">

        <button
          type="button"
          onClick={slidePrev}
          disabled={page === 0}
          aria-label="Previous services"
        >
          ←
        </button>

        <div className="services-counter">

          <span>
            {String(page + 1).padStart(2, "0")}
          </span>

          <i>/</i>

          <span>
            {String(services.length).padStart(2, "0")}
          </span>

        </div>

        <button
          type="button"
          onClick={slideNext}
          disabled={page >= totalPages}
          aria-label="Next services"
        >
          →
        </button>

      </div>


      {/* =========================
          BOTTOM
      ========================= */}

      <div className="services-bottom">

        <div className="services-progress">

          <span
            style={{
              width: `${
                ((page + 1) /
                  totalPages) *
                100
              }%`,
            }}
          />

        </div>

        <div className="services-bottom-row">

          <div className="services-bottom-flow">

            <span>IDEA</span>

            <i>→</i>

            <span>DESIGN</span>

            <i>→</i>

            <span>BUILD</span>

            <i>→</i>

            <span>EXPERIENCE</span>

          </div>

          <span className="services-bottom-count">
            {String(page + 1).padStart(2, "0")}
            {" / "}
            {String(totalPages).padStart(2, "0")}
          </span>

        </div>

      </div>

    </section>
  );
}