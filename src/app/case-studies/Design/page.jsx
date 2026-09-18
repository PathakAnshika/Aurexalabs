"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CaseStudyPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#101010] text-[#eeeae4]">

      {/* =========================
          TOP BAR
      ========================== */}
      <div className="px-[5vw] pt-8 sm:pt-9 md:pt-10">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => router.back()}
            className="
              text-[9px]
              tracking-[0.2em]
              text-[#eeeae4]/40
              transition-colors
              duration-300
              hover:text-[#c7ff00]
            "
          >
            ← BACK
          </button>

          <span className="text-[9px] tracking-[0.2em] text-[#eeeae4]/25">
            06 / 2026
          </span>
        </div>
      </div>


      {/* =========================
          INTRO
      ========================== */}
      <section
        className="
          px-[5vw]
          pt-16
          pb-14
          sm:pt-20
          sm:pb-16
          md:pt-24
          md:pb-20
        "
      >
        <div className="max-w-[1500px]">

          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="md:col-span-8"
            >
              <p className="mb-5 text-[9px] tracking-[0.25em] text-[#c7ff00]">
                UI / UX · VISUAL DESIGN
              </p>

              <h1
                className="
                  text-[clamp(50px,7vw,108px)]
                  font-normal
                  uppercase
                  leading-[0.86]
                  tracking-[-0.065em]
                "
              >
                DESIGN
                <br />
                <span className="text-[#eeeae4]/30">
                  WITH PURPOSE.
                </span>
              </h1>
            </motion.div>


            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="
                mt-9
                md:col-span-4
                md:mt-16
                md:pl-8
              "
            >
              <div className="max-w-[360px]">

                <span className="mb-4 block text-[8px] tracking-[0.2em] text-[#eeeae4]/25">
                  THE IDEA
                </span>

                <p
                  className="
                    text-[14px]
                    leading-6
                    text-[#eeeae4]/50
                    sm:text-[15px]
                    sm:leading-7
                  "
                >
                  Digital design is more than how something looks. It is how
                  an idea becomes understandable, usable and memorable through
                  every interaction.
                </p>

              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================
          STORY
      ========================== */}
      <section
        className="
          px-[5vw]
          pb-20
          sm:pb-24
          md:pb-28
        "
      >
        <div
          className="
            max-w-[1500px]
            border-t
            border-[#eeeae4]/10
            pt-7
            sm:pt-8
            md:pt-10
          "
        >

          <div className="flex flex-col md:flex-row md:gap-14">

            {/* SIDE LABEL */}
            <div className="mb-6 shrink-0 md:mb-0 md:w-[140px]">
              <span className="text-[8px] tracking-[0.22em] text-[#eeeae4]/25">
                AUREXA
                <br />
                DESIGN
              </span>
            </div>


            {/* STORY */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >

              <p
                className="
                  w-full
                  max-w-[1250px]
                  text-[16px]
                  leading-[1.65]
                  tracking-[-0.01em]
                  text-[#eeeae4]/65
                  sm:text-[18px]
                  sm:leading-[1.6]
                  md:text-[20px]
                  md:leading-[1.6]
                "
              >
                We approach design by looking at the complete experience rather
                than a single screen. Visual identity, interface, hierarchy,
                interaction and usability all need to belong to the same idea.
                Sometimes the work begins with a blank canvas and a visual
                language has to be discovered. Sometimes an existing product
                simply needs clarity, structure and a stronger point of view.
                In both cases, the goal remains the same — create something
                that feels natural to use, distinctive enough to remember and
                considered enough that every detail feels intentional. Good
                design does not need to compete for attention. It should guide
                it. That is why we care about the small things — typography,
                spacing, motion, hierarchy and the feeling created between
                interactions. They are often what turns a functional digital
                product into an experience people actually want to return to.
              </p>


              {/* CTA */}
              <a
                href="/Lab"
                className="
                  mt-9
                  inline-flex
                  items-center
                  gap-4
                  text-[8px]
                  tracking-[0.22em]
                  text-[#c7ff00]
                  transition-all
                  duration-300
                  hover:gap-6
                "
              >
                EXPLORE THE DESIGN LAB
                <span className="text-sm">↗</span>
              </a>

            </motion.div>

          </div>


          {/* BOTTOM */}
          <div
            className="
              mt-14
              flex
              items-center
              justify-between
              border-t
              border-[#eeeae4]/10
              pt-5
              sm:mt-16
            "
          >
            <span className="text-[8px] tracking-[0.2em] text-[#eeeae4]/20">
              UI / UX / VISUAL SYSTEMS
            </span>

            <button
              type="button"
              onClick={() => router.back()}
              className="
                text-[8px]
                tracking-[0.2em]
                text-[#eeeae4]/30
                transition-colors
                duration-300
                hover:text-[#c7ff00]
              "
            >
              BACK TO WORK ↑
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}