"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "DESIGN +",
    title2: "TECHNOLOGY",
    text: "Creative thinking backed by real technology. We bring design and development together to create digital work that looks considered and works beautifully.",
  },
  {
    number: "02",
    title: "BUILT AROUND",
    title2: "PEOPLE",
    text: "Digital experiences designed to actually be used. We keep people, purpose and usability at the centre of every decision.",
  },
  {
    number: "03",
    title: "READY TO",
    title2: "EVOLVE",
    text: "We build with what comes next in mind — creating digital systems and experiences that can grow with your business.",
  },
];

export default function WhyAurexa() {
  return (
   <section
  id="why-aurexa"
  className="relative overflow-hidden bg-[#101010] px-[5vw] pt-10 pb-24 text-[#eeeae4] sm:pt-14 sm:pb-28 md:pt-16 md:pb-32"
>
      {/* TOP META */}
      {/* <div className="flex items-center justify-between border-t border-[#eeeae4]/10 pt-5">
        <span className="text-[9px] tracking-[0.25em] text-[#c7ff00] sm:text-[10px]">
          07 / WHY AUREXA
        </span>

        <span className="text-[9px] tracking-[0.2em] text-[#eeeae4]/20 sm:text-[10px]">
          THE DIFFERENCE
        </span>
      </div> */}

      {/* HEADING */}
      <div className="mt-4 max-w-[900px] sm:mt-6 md:mt-8">
        <span className="text-[10px] tracking-[0.24em] text-[#625d57] sm:text-[11px]">
          ONE STUDIO. MANY DISCIPLINES.
        </span>

        <h2 className="mt-6 text-[clamp(48px,6.5vw,96px)] font-normal leading-[0.86] tracking-[-0.065em]">
          ONE CLEAR
          <br />
          <span className="text-[#eeeae4]/35">PURPOSE.</span>
        </h2>
      </div>

      {/* CARDS */}
    <div className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-3 md:gap-5">
        {reasons.map((reason) => (
          <motion.article
            key={reason.number}
            initial="rest"
            whileHover="hover"
            className="group relative min-h-[360px] overflow-hidden border border-[#eeeae4]/10 bg-[#101010] p-7 transition-colors duration-500 hover:border-[#c7ff00]/30 sm:min-h-[400px] sm:p-9 md:min-h-[430px] md:p-10"
          >
            {/* TOP */}
            <div className="flex items-start justify-between">
              <motion.span
                variants={{
                  rest: { color: "rgba(238,234,228,0.25)" },
                  hover: { color: "#c7ff00" },
                }}
                className="text-[9px] tracking-[0.2em]"
              >
                {reason.number}
              </motion.span>

              <motion.span
                variants={{
                  rest: {
                    opacity: 0,
                    x: -8,
                    y: 8,
                  },
                  hover: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                  },
                }}
                transition={{ duration: 0.35 }}
                className="text-[17px] text-[#c7ff00]"
              >
                ↗
              </motion.span>
            </div>

            {/* TITLE */}
            <motion.div
              variants={{
                rest: { y: 0 },
                hover: { y: -5 },
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-24 sm:mt-28"
            >
              <h3 className="text-[clamp(32px,3.5vw,52px)] font-normal leading-[0.85] tracking-[-0.055em]">
                {reason.title}
                <br />
                <span className="text-[#eeeae4]/45">
                  {reason.title2}
                </span>
              </h3>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              variants={{
                rest: {
                  opacity: 0.35,
                  y: 12,
                },
                hover: {
                  opacity: 0.65,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-10 left-7 right-7 max-w-[360px] text-[12px] leading-6 text-[#eeeae4] sm:left-9 sm:right-9 sm:bottom-9 sm:text-[13px] sm:leading-7 md:left-10 md:right-10 md:bottom-10"
            >
              {reason.text}
            </motion.p>

            {/* HOVER ACCENT */}
            <motion.div
              variants={{
                rest: { scaleX: 0 },
                hover: { scaleX: 1 },
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#c7ff00]"
            />
          </motion.article>
        ))}
      </div>

      {/* BOTTOM STATEMENT */}
      <div className="mt-12 flex flex-col gap-4 border-t border-[#eeeae4]/10 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-[9px] tracking-[0.2em] text-[#625d57] sm:text-[10px]">
          THINK / DESIGN / BUILD / EVOLVE
        </span>

        <span className="max-w-[420px] text-[10px] leading-5 text-[#eeeae4]/25 sm:text-right sm:text-[11px]">
          Different disciplines. One studio working toward the same
          outcome.
        </span>
      </div>
    </section>
  );
}