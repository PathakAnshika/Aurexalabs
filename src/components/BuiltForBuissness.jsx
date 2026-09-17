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
      className="relative overflow-hidden bg-[#101010] px-[5vw] pb-20 pt-10 text-[#eeeae4] sm:pb-24 sm:pt-14 md:pb-32 md:pt-16"
    >
      {/* =====================================================
          HEADING
      ===================================================== */}

      <div className="mt-2 max-w-[900px] sm:mt-4 md:mt-6">
        <span className="text-[9px] tracking-[0.22em] text-[#625d57] sm:text-[10px] sm:tracking-[0.24em]">
          ONE STUDIO. MANY DISCIPLINES.
        </span>

        <h2 className="mt-5 text-[clamp(44px,6.5vw,96px)] font-normal leading-[0.87] tracking-[-0.065em] sm:mt-6">
          ONE CLEAR
          <br />
          <span className="text-[#eeeae4]/35">PURPOSE.</span>
        </h2>
      </div>


      {/* =====================================================
          CARDS
      ===================================================== */}

      <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">

        {reasons.map((reason) => (
          <motion.article
            key={reason.number}
            initial="rest"
            whileHover="hover"
            className="
              group
              relative
              min-h-[330px]
              overflow-hidden
              border
              border-[#eeeae4]/10
              bg-[#101010]
              p-6
              transition-colors
              duration-500
              hover:border-[#c7ff00]/30

              sm:min-h-[360px]
              sm:p-7

              md:min-h-[390px]
              md:p-8

              lg:min-h-[430px]
              lg:p-10
            "
          >

            {/* TOP */}

            <div className="flex items-start justify-between">

              <motion.span
                variants={{
                  rest: {
                    color: "rgba(238,234,228,0.25)",
                  },
                  hover: {
                    color: "#c7ff00",
                  },
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
                className="text-[16px] text-[#c7ff00] sm:text-[17px]"
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
              className="
                mt-20
                sm:mt-24
                md:mt-24
                lg:mt-28
              "
            >
              <h3
                className="
                  text-[clamp(29px,6vw,52px)]
                  font-normal
                  leading-[0.87]
                  tracking-[-0.055em]

                  sm:text-[clamp(31px,4.5vw,48px)]

                  lg:text-[clamp(32px,3.5vw,52px)]
                "
              >
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
                  y: 10,
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
              className="
                absolute
                bottom-7
                left-6
                right-6
                max-w-[380px]
                text-[11px]
                leading-5
                text-[#eeeae4]

                sm:bottom-7
                sm:left-7
                sm:right-7
                sm:text-[12px]
                sm:leading-6

                md:bottom-8
                md:left-8
                md:right-8
                md:text-[12px]
                md:leading-6

                lg:bottom-10
                lg:left-10
                lg:right-10
                lg:text-[13px]
                lg:leading-7
              "
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


      {/* =====================================================
          BOTTOM STATEMENT
      ===================================================== */}

      <div
        className="
          mt-10
          flex
          flex-col
          gap-4
          border-t
          border-[#eeeae4]/10
          pt-5

          sm:mt-12
          sm:pt-6

          md:flex-row
          md:items-center
          md:justify-between
        "
      >

        <span className="text-[8px] tracking-[0.18em] text-[#625d57] sm:text-[9px] sm:tracking-[0.2em]">
          THINK / DESIGN / BUILD / EVOLVE
        </span>


        <span
          className="
            max-w-[420px]
            text-[10px]
            leading-5
            text-[#eeeae4]/25

            sm:text-[11px]

            md:text-right
          "
        >
          Different disciplines. One studio working toward the same
          outcome.
        </span>

      </div>

    </section>
  );
}