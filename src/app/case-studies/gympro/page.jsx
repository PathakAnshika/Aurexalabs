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
            01 / 2026
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
            GYMPRO
          </p>


          <h1 className="max-w-[1050px] text-[clamp(42px,5.8vw,78px)] font-normal leading-[0.94] tracking-[-0.06em]">
            A modern gym experience,
            <br />
            <span className="text-[#c7ff00]">
              built for the digital age.
            </span>
          </h1>


          <p className="mt-11 max-w-[1150px] text-[16px] leading-[1.85] text-[#eeeae4]/50 sm:text-[17px]">
            GymPro is a digital experience created for a modern gym management
            platform — bringing product positioning, interface design and a
            clear SaaS experience together into one focused digital presence.
          </p>


          {/* LIVE WEBSITE */}

          <a
            href="https://gym-frontend-seven-tawny.vercel.app/"
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
              GymPro began with a simple idea: a gym management platform
              should feel as modern and considered as the businesses using it.
              The experience needed to communicate that from the very first
              interaction.
            </p>


            <div className="mt-12 space-y-7">

              <p className="max-w-[1180px] text-[15px] leading-[1.85] text-[#eeeae4]/47 sm:text-[16px]">
                The project was not approached as just another gym website.
                GymPro needed a digital identity that could position the
                product clearly while making the experience easy to understand
                for the people discovering it.
              </p>


              <p className="max-w-[1180px] text-[15px] leading-[1.85] text-[#eeeae4]/47 sm:text-[16px]">
                That meant finding a balance between product communication and
                interface design. The platform had to feel capable and
                professional without becoming complicated or overwhelming.
                Every part of the experience needed to support that balance.
              </p>


              <p className="max-w-[1180px] text-[15px] leading-[1.85] text-[#eeeae4]/47 sm:text-[16px]">
                We focused on creating a clear visual language around the
                product — giving the interface enough structure to communicate
                functionality while keeping the overall experience modern,
                direct and approachable.
              </p>


              <p className="max-w-[1180px] text-[15px] leading-[1.85] text-[#eeeae4]/47 sm:text-[16px]">
                The result was designed around clarity. Instead of making the
                product compete for attention with unnecessary visual elements,
                the design gives the core experience room to speak for itself.
              </p>

            </div>


            {/* SUBTLE TRANSITION */}

            <div className="my-20 h-px w-full bg-[#eeeae4]/10 sm:my-24" />


            {/* SECOND PART */}

            <p className="max-w-[1200px] text-[clamp(23px,2.8vw,38px)] leading-[1.12] tracking-[-0.04em] text-[#eeeae4]/78">
              The goal was never to make a system look complicated. It was to
              make something powerful feel simple.
            </p>


            <div className="mt-12 space-y-7">

              <p className="max-w-[1180px] text-[15px] leading-[1.85] text-[#eeeae4]/47 sm:text-[16px]">
                Product positioning and UI design were therefore treated as
                parts of the same experience. The visual direction was built
                to give GymPro a distinct presence while keeping the product
                itself at the centre.
              </p>


              <p className="max-w-[1180px] text-[15px] leading-[1.85] text-[#eeeae4]/47 sm:text-[16px]">
                From the structure of the pages to the hierarchy of the
                interface, the experience was kept intentional. Information
                needed to be easy to scan, interactions needed to feel natural,
                and the overall product needed to communicate confidence
                without unnecessary complexity.
              </p>


              <p className="max-w-[1180px] text-[15px] leading-[1.85] text-[#eeeae4]/47 sm:text-[16px]">
                GymPro ultimately became a digital experience that connects
                the product story with the interface itself — giving the
                platform a clearer identity and creating a more focused way for
                people to understand what it offers.
              </p>


              <p className="max-w-[1180px] text-[15px] leading-[1.85] text-[#eeeae4]/47 sm:text-[16px]">
                It is a reminder that good product design does not always need
                to say more. Sometimes, the strongest experience comes from
                knowing what matters and giving it the space to be understood.
              </p>

            </div>


            {/* CLOSING */}

            <div className="mt-20 border-t border-[#eeeae4]/10 pt-10 sm:mt-24">

              <p className="max-w-[1050px] text-[clamp(26px,3.3vw,46px)] leading-[1.08] tracking-[-0.045em] text-[#eeeae4]/78">
                A digital experience designed to make a complex product feel
                <span className="text-[#c7ff00]">
                  {" "}clear.
                </span>
              </p>


              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[8px] tracking-[0.2em] text-[#eeeae4]/22">
                <span>GYMPRO</span>
                <span>UI DESIGN</span>
                <span>WEB DEVELOPMENT</span>
                <span>SAAS EXPERIENCE</span>
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