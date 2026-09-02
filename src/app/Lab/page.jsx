"use client";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

import { useRef } from "react";

const visuals = [
  {
    image: "/image/lab1.jpg",
    className: "lab-photo-1",
  },
  {
    image: "/image/lab2.jpg",
    className: "lab-photo-2",
  },
  {
    image: "/image/lab3.jpg",
    className: "lab-photo-3",
  },
  {
    image: "/image/lab4.png",
    className: "lab-photo-4",
  },
  {
    image: "/image/lab5.png",
    className: "lab-photo-5",
  },
  {
    image: "/image/lab6.png",
    className: "lab-photo-6",
  },
  {
    image: "/image/lab7.jpg",
    className: "lab-photo-7",
  },
  {
    image: "/image/lab8.png",
    className: "lab-photo-8",
  },
  {
    image: "/image/lab9.jpg",
    className: "lab-photo-9",
  },
  {
    image: "/image/lab10.jpg",
    className: "lab-photo-10",
  },
];

export default function Lab() {
  return (
    <main className="lab-page">

      {/* HERO */}

      <section className="lab-hero">
       
 <Link
    href="/"
    className="work-back"
    style={{
      position: "relative",
      top: "-45px",
    }}
  >
    ← BACK HOME
  </Link>



        <span className="lab-label">
          LAB / 09
        </span>

        <motion.h1
          initial={{
            opacity: 0,
            y: 80,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Ideas before
          <br />
          they become <em>products.</em>
        </motion.h1>

        <p>
          A visual space for experiments,
          ideas and things we simply
          wanted to make.
        </p>

      </section>


      {/* VISUAL GALLERY */}

      <section className="lab-gallery">

        {visuals.map((visual, index) => (
          <RevealImage
            key={visual.image}
            {...visual}
            index={index}
          />
        ))}

      </section>


      {/* END */}

      <section className="lab-end">

        <motion.h2
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
            amount: 0.4,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Keep
          <br />
          <em>exploring.</em>
        </motion.h2>

      </section>

    </main>
  );
}


/* =========================================
   SCROLL IMAGE
========================================= */
function RevealImage({ image, className, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center 35%"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    [0.78, 0.94, 1]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7],
    [0.25, 0.75, 1]
  );

  const blur = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7],
    [10, 4, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [100, 0, -20]
  );

  return (
    <div ref={ref} className={`lab-photo-wrap ${className}`}>
      <motion.div
        className="lab-photo"
        style={{
          scale,
          opacity,
          y,
        }}
      >
        <motion.div
  className="lab-photo-inner"
  style={{
    filter: useMotionTemplate`blur(${blur}px)`,
  }}
>
  <img
    src={image}
    alt={`Aurexa Labs Lab experiment ${index + 1}`}
  />
</motion.div>
      </motion.div>
    </div>
  );
}