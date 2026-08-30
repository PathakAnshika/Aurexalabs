"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const templates = [
  {
    number: "01",
    title: "Editorial",
    category: "Creative Landing Page",
    image:
      "https://cdn.dribbble.com/userupload/45990426/file/still-a2f71ebc697ea3d75ae56ea3fda79163.png?resize=1440x1080",
  },
  {
    number: "02",
    title: "Fashion",
    category: "Editorial Website",
    image:
      "https://cdn.dribbble.com/userupload/17103770/file/original-d35a7cf1b0afa2d4c7c3adbf8d51c7b3.png?resize=1600x1200",
  },
  {
    number: "03",
    title: "Studio",
    category: "Creative Portfolio",
    image:
      "https://cdn.dribbble.com/userupload/7961094/file/still-ece3234124c6f2867d173c4f294188c3.png?resize=1600x1200",
  },
];

export default function NikitaSinghPage() {
  return (
    <main className="nikita-project-page">

      {/* NAV */}

      <nav className="nikita-nav">

        <Link href="/#clients" className="nikita-back">
          <span>←</span>
          <span>Back</span>
        </Link>

        <span className="nikita-brand">
          AUREXA LABS
        </span>

        <span className="nikita-index">
          03 / 04
        </span>

      </nav>


      {/* HERO */}

      <section className="nikita-hero">

        <div className="nikita-hero-label">
          <span>CLIENT PROJECT</span>
          <i />
          <span>TEMPLATE DESIGN</span>
        </div>


        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Designing
          <br />
          <em>Templates.</em>
        </motion.h1>


        <div className="nikita-hero-bottom">

          <p>
            A collection of thoughtfully designed
            digital templates focused on clean
            layouts, visual hierarchy and usability.
          </p>

          <span>
            SCROLL ↓
          </span>

        </div>

      </section>


      {/* INTRO */}

      <section className="nikita-intro">

        <div className="nikita-section-label">
          01 / THE PROJECT
        </div>


        <div className="nikita-intro-grid">

          <h2>
            Design that
            <br />
            gives ideas
            <br />
            a <em>form.</em>
          </h2>


          <div className="nikita-intro-copy">

            <p>
              The project focused on creating modern
              and versatile website templates with
              strong visual structure and a polished
              digital aesthetic.
            </p>

            <p>
              Each template was designed to feel
              distinctive while remaining intuitive,
              responsive and easy to adapt.
            </p>

          </div>

        </div>

      </section>


      {/* TEMPLATE SHOWCASE */}

      <section className="nikita-showcase">

        <div className="nikita-section-label">
          02 / SELECTED TEMPLATES
        </div>


        <div className="nikita-template-list">

          {templates.map((template, index) => (

            <motion.article
              className={`nikita-template template-${index + 1}`}
              key={template.number}
              initial={{
                opacity: 0,
                y: 60,
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
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <div className="nikita-template-image">

                <img
                  src={template.image}
                  alt={`${template.title} website template`}
                />

                <div className="nikita-image-overlay">
                  <span>VIEW TEMPLATE</span>
                  <span>↗</span>
                </div>

              </div>


              <div className="nikita-template-info">

                <div>
                  <span>{template.number}</span>
                  <h3>{template.title}</h3>
                </div>

                <p>
                  {template.category}
                </p>

              </div>

            </motion.article>

          ))}

        </div>

      </section>


      {/* DESIGN APPROACH */}

      <section className="nikita-approach">

        <div className="nikita-section-label">
          03 / DESIGN APPROACH
        </div>


        <div className="nikita-approach-grid">

          <h2>
            Clean
            <br />
            <em>visuals.</em>
          </h2>


          <div className="nikita-approach-list">

            <div>
              <span>01</span>
              <p>Strong visual hierarchy</p>
            </div>

            <div>
              <span>02</span>
              <p>Modern typography</p>
            </div>

            <div>
              <span>03</span>
              <p>Responsive layouts</p>
            </div>

            <div>
              <span>04</span>
              <p>Reusable design systems</p>
            </div>

          </div>

        </div>

      </section>


      {/* PROJECT INFO */}

      <section className="nikita-details">

        <div className="nikita-section-label">
          04 / DETAILS
        </div>


        <div className="nikita-details-grid">

          <div className="nikita-details-heading">

            <span>THE CLIENT</span>

          <h2>
  Art of
  <br />
  <em>Expression.</em>
</h2>

          </div>


          <div className="nikita-details-list">

            <div>
              <span>PROJECT</span>
              <strong>Designing Template</strong>
            </div>

            <div>
              <span>SERVICE</span>
              <strong>UI / Template Design</strong>
            </div>

            <div>
              <span>TYPE</span>
              <strong>Digital Design</strong>
            </div>

            <div>
              <span>YEAR</span>
              <strong>2026</strong>
            </div>

          </div>

        </div>

      </section>


      {/* START PROJECT */}

      <section className="nikita-start">

        <span>
          HAVE A PROJECT IN MIND?
        </span>

        <Link href="/#contact">
          <span>Start a Project</span>
          <span>↗</span>
        </Link>

      </section>


      {/* FOOTER */}

      <footer className="nikita-footer">

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