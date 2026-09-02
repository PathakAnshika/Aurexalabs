"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
  {
    number: "01",
    client: "SHRI CHANDRESHWAR DHAM",
    category: "DIGITAL EXPERIENCE",
    year: "2026",
    description:
      "A complete digital experience created to bring the spiritual identity of Shri Chandreshwar Dham online — connecting devotees, visitors and the wider community through a thoughtful and accessible platform.",
    slug: "shri-chandreshwar",
  },
  {
    number: "02",
    client: "PRINVICK",
    category: "ECOMMERCE",
    year: "2026",
    description:
      "An ecommerce experience designed around product discovery, clear navigation and a smoother path from browsing to purchase.",
    slug: "prinvick",
  },
  {
    number: "03",
    client: "INVENTORY MANAGEMENT",
    category: "APPLICATION",
    year: "2026",
    description:
      "A practical management system built to bring products, stock and operational workflows into one focused digital environment.",
    slug: "inventory-management",
  },
  {
    number: "04",
    client: "ERP / HRMS",
    category: "SYSTEM DESIGN",
    year: "2026",
    description:
      "A structured digital system bringing business operations and people management together through a clear, scalable interface.",
    slug: "erp-hrms",
  },
  {
    number: "05",
    client: "TENNECO SYSTEM",
    category: "APPLICATION",
    year: "2026",
    description:
      "An application experience designed around real-world workflows, information visibility and everyday usability.",
    slug: "tenneco-system",
  },
  {
    number: "06",
    client: "BRAND / UIUX",
    category: "DESIGN",
    year: "2026",
    description:
      "From visual direction to interface thinking, this project explores how branding and digital design can work as one system.",
    slug: "brand-uiux",
  },
  {
    number: "07",
    client: "AI AUTOMATION",
    category: "AI / AUTOMATION",
    year: "2026",
    description:
      "An automation concept connecting AI with everyday business processes to reduce manual work and create faster customer experiences.",
    slug: "ai-automation",
  },
  {
    number: "08",
    client: "DIGITAL PRODUCT",
    category: "PRODUCT DESIGN",
    year: "2026",
    description:
      "A reusable digital product concept focused on clarity, flexibility and a polished experience from the first interaction.",
    slug: "digital-product",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0b] text-[#eeeae4]">

      {/* =====================================================
          HERO
      ===================================================== */}

     <section className="relative flex min-h-0 flex-col justify-start px-[5vw] pb-10 pt-16 sm:pb-12 sm:pt-20 md:min-h-[92vh] md:justify-between md:pb-16 md:pt-24">

        <Link
          href="/"
          className="group inline-flex w-fit items-center gap-3 text-[10px] font-medium tracking-[0.2em] text-[#eeeae4]/60 transition-colors duration-300 hover:text-[#c7ff00] sm:text-[11px]"
        >
          <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>

          BACK HOME
        </Link>


        <div className="mt-[125px] md:mt-auto">

          {/* LABEL */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mb-7 flex items-center gap-3 text-[9px] tracking-[0.2em] text-[#eeeae4]/45 sm:mb-8 sm:gap-4 sm:text-[11px] sm:tracking-[0.22em]"
          >
            <span>CASE STUDIES</span>

            <span className="h-px w-8 bg-[#eeeae4]/20 sm:w-12" />

            <span>08 STORIES</span>
          </motion.div>


          {/* TITLE */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[1200px] text-[18vw] font-semibold leading-[0.78] tracking-[-0.075em] sm:text-[15vw] md:text-[13vw]"
          >
            CASE
            <br />

            <span className="text-[#c7ff00]">
              STUDIES.
            </span>
          </motion.h1>


          {/* SUBTITLE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
            className="mt-8 max-w-[600px] sm:mt-12 md:ml-[32%]"
          >
            <p className="text-base leading-relaxed text-[#eeeae4]/65 sm:text-lg md:text-xl">
              The work is only half the story.
              <br />
              Here&apos;s what happened behind it.
            </p>
          </motion.div>

        </div>


        {/* HERO BOTTOM */}

        <div className="mt-12 flex items-end justify-between border-t border-[#eeeae4]/10 pt-4 text-[8px] tracking-[0.17em] text-[#eeeae4]/35 sm:mt-16 sm:pt-5 sm:text-[10px] sm:tracking-[0.2em] md:mt-20">

          <span className="max-w-[180px] leading-4 sm:max-w-none">
            STRATEGY / DESIGN / DEVELOPMENT
          </span>

          <span className="hidden md:block">
            SCROLL TO EXPLORE ↓
          </span>

          <span>
            2026
          </span>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="relative border-t border-[#eeeae4]/10 px-[5vw] py-20 sm:py-24 md:py-32">

        <div className="grid gap-12 md:grid-cols-[0.75fr_2.25fr] md:gap-16">

          {/* LEFT */}

          <div>

            <span className="text-[9px] tracking-[0.25em] text-[#c7ff00] sm:text-[10px]">
              WHAT WE DO
            </span>

            <div className="mt-6 text-[9px] leading-5 tracking-[0.16em] text-[#eeeae4]/30 sm:mt-8 sm:text-[10px] sm:tracking-[0.18em]">
              <p>THINK.</p>
              <p>CREATE.</p>
              <p>REFINE.</p>
            </div>

          </div>


          {/* RIGHT */}

          <div>

            <h2 className="max-w-[1000px] text-[clamp(44px,7vw,100px)] font-medium leading-[0.9] tracking-[-0.06em]">
              Ideas become
              <br />

              <span className="text-[#eeeae4]/35">
                experiences.
              </span>
            </h2>


            <div className="mt-10 flex flex-col gap-7 border-t border-[#eeeae4]/10 pt-7 sm:mt-12 sm:gap-8 sm:pt-8 md:flex-row md:items-start md:justify-between">

              <p className="max-w-[520px] text-sm leading-6 text-[#eeeae4]/45 sm:text-base sm:leading-7 md:text-lg">
                From the first idea to the final interaction,
                we turn complex problems into digital experiences
                that feel simple, intentional and useful.
              </p>

              <span className="text-[9px] tracking-[0.18em] text-[#eeeae4]/25 sm:text-[10px] sm:tracking-[0.2em]">
                DESIGN × TECHNOLOGY
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CASE STUDIES LIST
      ===================================================== */}

      <section className="px-[5vw] pb-20 sm:pb-24 md:pb-32">

        {/* SECTION HEADER */}

        <div className="mb-10 flex items-end justify-between sm:mb-14 md:mb-16">

          <div>

            <span className="text-[9px] tracking-[0.25em] text-[#c7ff00] sm:text-[10px]">
              SELECTED CASES
            </span>

            <p className="mt-3 text-xs text-[#eeeae4]/25 sm:text-sm">
              A closer look at the work.
            </p>

          </div>

          <span className="hidden text-[9px] tracking-[0.2em] text-[#eeeae4]/20 sm:block">
            08 PROJECTS
          </span>

        </div>


        {/* PROJECT LIST */}

        <div>

          {caseStudies.map((study) => (

            <motion.article
              key={study.slug}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="group border-t border-[#eeeae4]/10"
            >

              <div className="relative py-10 sm:py-12 md:py-14">

                {/* NEON HOVER LINE */}

                <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-[#c7ff00] transition-transform duration-500 group-hover:scale-y-100" />


                <div className="grid gap-6 pl-4 sm:pl-6 md:grid-cols-[90px_1fr_100px] md:gap-10 md:pl-8">

                  {/* NUMBER */}

                  <div className="flex items-start gap-3">

                    <span className="text-[10px] tracking-[0.2em] text-[#c7ff00]">
                      {study.number}
                    </span>

                    <span className="mt-1 hidden h-px w-5 bg-[#eeeae4]/15 md:block" />

                  </div>


                  {/* CONTENT */}

                  <div className="min-w-0">

                    {/* PROJECT NAME + TYPE */}

                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-5">

                      <h2 className="text-[clamp(30px,5vw,64px)] font-medium leading-[0.9] tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-1">
                        {study.client}
                      </h2>

                      <span className="w-fit text-[8px] tracking-[0.2em] text-[#c7ff00] sm:text-[9px] md:text-[10px]">
                        {study.category}
                      </span>

                    </div>


                    {/* DESCRIPTION */}

                    <p className="mt-5 max-w-[680px] text-sm leading-6 text-[#eeeae4]/40 transition-colors duration-500 group-hover:text-[#eeeae4]/60 sm:mt-6 sm:text-base sm:leading-7">
                      {study.description}
                    </p>


                    {/* READ CASE STUDY */}

                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="group/link mt-7 inline-flex items-center gap-4 text-[9px] tracking-[0.2em] sm:mt-8 sm:text-[10px]"
                    >

                      <span className="border-b border-[#eeeae4]/20 pb-2 transition-colors duration-300 group-hover/link:border-[#c7ff00] group-hover/link:text-[#c7ff00]">
                        READ CASE STUDY
                      </span>

                      <span className="text-lg transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                        ↗
                      </span>

                    </Link>

                  </div>


                  {/* YEAR */}

                  <div className="hidden pt-1 text-right text-[9px] tracking-[0.2em] text-[#eeeae4]/20 md:block">
                    {study.year}
                  </div>

                </div>


                {/* MOBILE META */}

                <div className="mt-7 flex items-center justify-between pl-4 sm:pl-6 md:hidden">

                  <span className="text-[8px] tracking-[0.2em] text-[#eeeae4]/20">
                    {study.year}
                  </span>

                  <span className="text-[8px] tracking-[0.2em] text-[#eeeae4]/15">
                    CASE {study.number}
                  </span>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </section>


      {/* =====================================================
          END CTA
      ===================================================== */}

      <section className="relative overflow-hidden border-t border-[#eeeae4]/10 px-[5vw] py-14 sm:py-16 md:py-20">

        <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16">

          {/* LEFT */}

          <div className="min-w-0">

            <div className="mb-6 flex items-center gap-3 sm:mb-7">

              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c7ff00]" />

              <span className="text-[8px] tracking-[0.22em] text-[#eeeae4]/40 sm:text-[9px] sm:tracking-[0.25em]">
                HAVE AN IDEA?
              </span>

            </div>


            <h2 className="text-[clamp(48px,10vw,100px)] font-medium leading-[0.84] tracking-[-0.07em]">
              Let&apos;s make
              <br />

              <span className="text-[#c7ff00]">
                it happen.
              </span>
            </h2>

          </div>


          {/* RIGHT */}

          <div className="flex w-full flex-col items-start gap-7 md:w-auto md:max-w-[360px] md:gap-8 md:pb-1">

            <p className="max-w-[330px] text-xs leading-5 text-[#eeeae4]/35 sm:text-sm sm:leading-6">
              Have a product, idea or problem worth solving?
              Let&apos;s build something meaningful together.
            </p>


            <Link
              href="/start-a-project"
              className="group inline-flex items-center gap-5 border-b border-[#eeeae4]/20 pb-3 text-[9px] tracking-[0.2em] transition-colors duration-300 hover:border-[#c7ff00] sm:text-[10px]"
            >

              <span className="transition-colors duration-300 group-hover:text-[#c7ff00]">
                START A PROJECT
              </span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>

            </Link>

          </div>

        </div>


        {/* BOTTOM LINE */}

        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[#eeeae4]/10 pt-4 text-[7px] tracking-[0.18em] text-[#eeeae4]/25 sm:mt-12 sm:gap-4 sm:text-[8px]">

          <span>DIGITAL</span>

          <span className="text-[#c7ff00]/50">×</span>

          <span>DESIGN</span>

          <span className="text-[#c7ff00]/50">×</span>

          <span>TECHNOLOGY</span>

          <span className="ml-auto hidden md:block">
            BEYOND THE ORDINARY.
          </span>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="flex flex-col gap-3 border-t border-[#eeeae4]/10 px-[5vw] py-6 text-[8px] tracking-[0.18em] text-[#eeeae4]/30 sm:gap-4 sm:py-7 sm:text-[9px] md:flex-row md:items-center md:justify-between">

        <span>
          AUREXA LABS
        </span>

        <span>
          DIGITAL / DESIGN / TECHNOLOGY
        </span>

        <span>
          BEYOND THE ORDINARY.
        </span>

      </footer>

    </main>
  );
}