"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const clients = [
  {
    number: "01",
    name: "A K Raghvan",
    type: "Website",
    slug: "shri-chandreshwar-dham-mandir",
  },
  {
    number: "02",
    name: "Cyamsys Technologies",
    type: "Website",
    slug: "cyamsys-technologies",
  },
  {
    number: "03",
    name: "Nikita Singh",
    type: "Designing Template",
    slug: "nikita-singh",
  },
  {
    number: "04",
    name: "Arjun Bansal",
    type: "Application (Document Scanning & Data Management)",
    slug: "md-shamim-durani",
  },
];

export default function Clients() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      className="clients-section"
      id="clients"
    >
     
{/* HEADER */}

<div className="clients-header">

  <motion.span
    initial={{
      opacity: 0,
      y: 20,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: false,
      amount: 0.5,
    }}
    transition={{
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    TRUSTED BY / 07
  </motion.span>


  <h2>

    <motion.span
      className="clients-heading-reveal"
      initial={{
        y: 55,
        filter: "blur(8px)",
      }}
      whileInView={{
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.5,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      Selected <em>clients.</em>
    </motion.span>

  </h2>

</div>



      {/* CLIENTS */}

      <div className="clients-grid">
        {clients.map((client, index) => (
          <motion.div
            className="client-card"
            key={client.number}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 30,
            }}
            transition={{
              duration: 0.75,
              delay: 0.25 + index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="client-number">
              {client.number}
            </span>

            <div className="client-card-main">
              <h3>{client.name}</h3>

              <p>{client.type}</p>
            </div>

            <Link
              href={`/clients/${client.slug}`}
              className="client-arrow"
              aria-label={`View ${client.name} project`}
            >
              ↗
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}