"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CaseStudyPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0b] text-[#eeeae4]">

      {/* =====================================================
          SECTION 01 — INTRO
      ===================================================== */}

      <section className="px-[5vw] pt-7 pb-24 sm:pt-9 sm:pb-28 lg:pb-32">

        {/* BACK */}

        <div className="flex items-center justify-between border-b border-[#eeeae4]/10 pb-5">

          <button
            type="button"
            onClick={() => router.back()}
            className="group flex items-center gap-3 text-[9px] tracking-[0.22em] text-[#eeeae4]/40 transition-colors duration-300 hover:text-[#eeeae4]"
          >
            <span className="text-[#c7ff00] transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            BACK
          </button>

          <span className="hidden text-[9px] tracking-[0.22em] text-[#eeeae4]/20 sm:block">
            03 / 2026
          </span>

        </div>


        {/* INTRO */}

        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="mt-24 lg:mt-32"
        >

          <p className="mb-7 text-[9px] tracking-[0.22em] text-[#eeeae4]/30">
            CENTRE FOR HUMAN CARE
          </p>


          <h1 className="max-w-[1050px] text-[clamp(42px,5.8vw,78px)] font-normal leading-[0.94] tracking-[-0.06em]">
            Technology built around
            <br />
            <span className="text-[#c7ff00]">
              human care.
            </span>
          </h1>


          <p className="mt-11 max-w-[1150px] text-[16px] leading-[1.85] text-[#eeeae4]/50 sm:text-[17px]">
            Centre for Human Care needed a digital experience that could bring
            its work, people and everyday operations into a clearer and more
            connected space. The project focused on creating a structured
            digital platform without losing sight of the people behind it.
          </p>


          {/* LIVE WEBSITE */}

          <a
            href="https://center-for-human-care.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 border-b border-[#c7ff00]/40 pb-2 text-[9px] tracking-[0.2em] text-[#c7ff00] transition-colors duration-300 hover:border-[#c7ff00] hover:text-[#eeeae4]"
          >
            VISIT WEBSITE
            <span>↗</span>
          </a>

        </motion.div>

      </section>


      {/* =====================================================
          SECTION 02 — THE STORY
      ===================================================== */}

      <section className="border-t border-[#eeeae4]/10 px-[5vw] py-24 sm:py-28 lg:py-32">

        <div className="grid lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-20">

          {/* SECTION LABEL */}

          <div className="mb-10 lg:mb-0">
            <span className="text-[9px] tracking-[0.22em] text-[#eeeae4]/25">
              02 / THE STORY
            </span>
          </div>


          {/* STORY */}

          <motion.article
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full max-w-[1250px]"
          >

            {/* OPENING */}

            <p className="max-w-[1200px] text-[clamp(24px,3vw,40px)] leading-[1.12] tracking-[-0.04em] text-[#eeeae4]/82">
              When we started working on Centre for Human Care, the challenge
              was not simply to put information online. It was to create a
              digital experience that could make the organisation easier to
              understand while keeping the human side of its work at the
              centre.
            </p>


            <div className="mt-12 space-y-7">

              <p className="max-w-[1180px] text-[15px] leading-[1.85] text-[#eeeae4]/47 sm:text-[16px]">
                Human-focused organisations often work across people, projects,
                teams and day-to-day responsibilities. When those different
                pieces grow, the digital experience needs to bring structure
                without making everything feel complicated.
              </p>


              <p className="max-w-[1180px] text-[15px] leading-[1.85] text-[#eeeae4]/47 sm:text-[16px]">
                We approached the project by looking at the experience from the
                people using it. Information needed to be easier to find,
                workflows needed to feel more organised, and the overall
                interface needed to communicate clarity rather than adding
                another layer of complexity.
              </p>


              <p className="max-w-[1180px] text-[15px] leading-[1.85] text-[#eeeae4]/47 sm:text-[16px]">
                The design therefore focused on creating a calm and structured
                digital environment. Clear hierarchy, considered spacing and
                straightforward interactions helped turn a potentially complex
                system into something easier to navigate.
              </p>


              <p className="max-w-[1180px] text-[15px] leading-[1.85] text-[#eeeae4]/47 sm:text-[16px]">
                Rather than treating the platform as a collection of isolated
                screens, we thought about it as one connected experience —
                where each part has a purpose and contributes to the larger
                picture.
              </p>

            </div>


            {/* SUBTLE TRANSITION */}

            <div className="my-20 h-px w-full bg-[#eeeae4]/10 sm:my-24" />


            {/* SECOND PART */}

            <p className="max-w-[1200px] text-[clamp(23px,2.8vw,38px)] leading-[1.12] tracking-[-0.04em] text-[#eeeae4]/78">
              The technology should organise the work, not get in the way of
              the people doing it.
            </p>


            <div className="mt-12 space-y-7">

              <p className="max-w-[1180px] text-[15px] leading-[1.85] text-[#eeeae4]/47 sm:text-[16px]">
                That principle shaped the way the experience was designed and
                developed. Every interaction was considered in terms of
                usefulness — how quickly someone could understand where they
                were, what they needed to do and where they needed to go next.
              </p>


              <p className="max-w-[1180px] text-[15px] leading-[1.85] text-[#eeeae4]/47 sm:text-[16px]">
                The result is a digital platform that gives Centre for Human
                Care a more organised way to present its work and manage its
                digital experience. The interface remains focused, while the
                underlying structure gives the platform room to support
                everyday operations.
              </p>


              <p className="max-w-[1180px] text-[15px] leading-[1.85] text-[#eeeae4]/47 sm:text-[16px]">
                The experience was also designed with different screen sizes
                and real-world usage in mind, so the platform remains
                accessible whether someone discovers it from a desktop,
                tablet or mobile device.
              </p>


              <p className="max-w-[1180px] text-[15px] leading-[1.85] text-[#eeeae4]/47 sm:text-[16px]">
                Ultimately, the project became an exercise in using technology
                to create more clarity — giving the organisation a digital
                space that feels structured, purposeful and centred around the
                people it exists to serve.
              </p>

            </div>


            {/* CLOSING */}

            <div className="mt-20 border-t border-[#eeeae4]/10 pt-10 sm:mt-24">

              <p className="max-w-[1050px] text-[clamp(26px,3.3vw,46px)] leading-[1.08] tracking-[-0.045em] text-[#eeeae4]/78">
                A digital experience where technology stays in the background,
                so
                <span className="text-[#c7ff00]">
                  {" "}people stay at the centre.
                </span>
              </p>


              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[8px] tracking-[0.2em] text-[#eeeae4]/22">
                <span>CENTRE FOR HUMAN CARE</span>
                <span>WEB APPLICATION</span>
                <span>UI DESIGN</span>
                <span>DEVELOPMENT</span>
              </div>

            </div>

          </motion.article>

        </div>

      </section>


      {/* BACK */}

      <section className="border-t border-[#eeeae4]/10 px-[5vw]">

        <button
          type="button"
          onClick={() => router.back()}
          className="group flex w-full items-center justify-between py-10 text-left"
        >

          <div>

            <span className="text-[8px] tracking-[0.22em] text-[#eeeae4]/22">
              AUREXA LABS
            </span>

            <p className="mt-3 text-[17px] tracking-[-0.02em] text-[#eeeae4]/55 transition-colors duration-300 group-hover:text-[#eeeae4]">
              Back
            </p>

          </div>


          <span className="text-xl text-[#c7ff00] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </span>

        </button>

      </section>


      {/* FOOTER */}

      <footer className="flex flex-col gap-3 border-t border-[#eeeae4]/10 px-[5vw] py-6 text-[8px] tracking-[0.18em] text-[#eeeae4]/22 sm:text-[9px] md:flex-row md:items-center md:justify-between">

        <span>AUREXA LABS</span>

        <span>DIGITAL / DESIGN / TECHNOLOGY</span>

        <span>BEYOND THE ORDINARY.</span>

      </footer>

    </main>
  );
}