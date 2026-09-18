"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const reveal = {
  hidden: {
    opacity: 0,
    y: 18,
  },

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
    <main className="min-h-screen overflow-hidden bg-[#101010] text-[#eeeae4]">

      {/* =====================================================
          SECTION 01 — INTRO
      ===================================================== */}

      <section className="px-[5vw] pb-20 pt-8 sm:pb-24 sm:pt-10 md:pb-28 md:pt-12">

        {/* BACK */}

        <button
          type="button"
          onClick={() => router.back()}
          className="
            group
            inline-flex
            items-center
            gap-3
            text-[10px]
            font-medium
            tracking-[0.2em]
            text-[#eeeae4]/60
            transition-colors
            duration-300
            hover:text-[#c7ff00]
            sm:text-[11px]
          "
        >
          <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>

          BACK
        </button>


        {/* PROJECT META */}

        <div className="mt-16 flex flex-wrap items-center gap-4 sm:mt-20">

          <span className="text-[9px] tracking-[0.22em] text-[#c7ff00] sm:text-[10px]">
            01
          </span>

          <span className="h-px w-8 bg-[#eeeae4]/15" />

          <span className="text-[9px] tracking-[0.22em] text-[#eeeae4]/35 sm:text-[10px]">
            WEBSITE / SAAS / UI DESIGN
          </span>

          <span className="text-[9px] tracking-[0.22em] text-[#eeeae4]/25 sm:text-[10px]">
            / 2026
          </span>

        </div>


        {/* TITLE */}

        <motion.h1
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="
            mt-8
            max-w-[1200px]
            text-[clamp(58px,9vw,140px)]
            font-normal
            uppercase
            leading-[0.82]
            tracking-[-0.07em]
            sm:mt-10
          "
        >
          <span className="block">
            GYM
          </span>

          <span className="block text-[#eeeae4]/30">
            PRO
          </span>
        </motion.h1>


        {/* INTRO COPY */}

        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="mt-12 w-full sm:mt-16 md:mt-20"
        >

          <p
            className="
              max-w-[1200px]
              text-left
              text-[16px]
              leading-7
              tracking-[-0.01em]
              text-[#eeeae4]/55

              sm:text-[19px]
              sm:leading-8

              md:text-[23px]
              md:leading-9
            "
          >
            GymPro is a digital experience created for a modern gym management
            platform — bringing product positioning, interface design and a
            clear SaaS experience together into one focused digital presence.
            The project was designed to make a technology-driven product feel
            approachable, structured and easy to understand.
          </p>


          {/* LIVE WEBSITE */}

          <a
            href="https://gym-frontend-seven-tawny.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              border-b
              border-[#c7ff00]/40
              pb-2
              text-[9px]
              tracking-[0.2em]
              text-[#c7ff00]
              transition-colors
              duration-300
              hover:border-[#c7ff00]
              hover:text-[#eeeae4]
              sm:mt-10
            "
          >
            VISIT WEBSITE
            <span>↗</span>
          </a>

        </motion.div>


        {/* META */}

        {/* <div
          className="
            mt-16
            flex
            flex-wrap
            items-center
            justify-between
            gap-5
            border-t
            border-[#eeeae4]/10
            pt-5

            sm:mt-20
            sm:pt-6
          "
        >

          <span className="text-[8px] tracking-[0.18em] text-[#625d57] sm:text-[9px]">
            PRODUCT / UI DESIGN / DEVELOPMENT
          </span>

          <span className="text-[8px] tracking-[0.18em] text-[#625d57] sm:text-[9px]">
            SAAS EXPERIENCE
          </span>

        </div> */}

      </section>


      {/* =====================================================
          SECTION 02 — STORY
      ===================================================== */}

      <section
        className="
          border-t
          border-[#eeeae4]/10
          px-[5vw]
          py-20

          sm:py-24
          md:py-28
        "
      >

        <div className="mx-auto max-w-[1250px]">

          {/* STORY LABEL */}

          <div className="mb-12 flex items-center gap-4 sm:mb-16">

            <span className="text-[9px] tracking-[0.22em] text-[#c7ff00] sm:text-[10px]">
              THE STORY
            </span>

            <span className="h-px w-10 bg-[#eeeae4]/15" />

          </div>


          {/* STORY */}

          <motion.article
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="w-full"
          >

            {/* OPENING */}

            <p
              className="
                max-w-[1200px]
                text-[19px]
                leading-8
                tracking-[-0.015em]
                text-[#eeeae4]/70

                sm:text-[22px]
                sm:leading-9

                md:text-[27px]
                md:leading-[1.5]
              "
            >
              GymPro began with a simple idea: a gym management platform
              should feel as modern and considered as the businesses using it.
              The experience needed to communicate that from the very first
              interaction.
            </p>


            {/* STORY CONTINUES */}

            <div className="mt-12 space-y-8 sm:mt-14 sm:space-y-10">

              <p
                className="
                  max-w-[1200px]
                  text-[16px]
                  leading-7
                  text-[#eeeae4]/45

                  sm:text-[18px]
                  sm:leading-8

                  md:text-[21px]
                  md:leading-9
                "
              >
                The project was not approached as just another gym website.
                GymPro needed a digital identity that could position the
                product clearly while making the experience easy to understand
                for the people discovering it.
              </p>


              <p
                className="
                  max-w-[1200px]
                  text-[16px]
                  leading-7
                  text-[#eeeae4]/45

                  sm:text-[18px]
                  sm:leading-8

                  md:text-[21px]
                  md:leading-9
                "
              >
                That meant finding a balance between product communication and
                interface design. The platform had to feel capable and
                professional without becoming complicated or overwhelming.
                Every part of the experience needed to support that balance.
              </p>


              <p
                className="
                  max-w-[1200px]
                  text-[16px]
                  leading-7
                  text-[#eeeae4]/45

                  sm:text-[18px]
                  sm:leading-8

                  md:text-[21px]
                  md:leading-9
                "
              >
                We focused on creating a clear visual language around the
                product — giving the interface enough structure to communicate
                functionality while keeping the overall experience modern,
                direct and approachable.
              </p>


              <p
                className="
                  max-w-[1200px]
                  text-[16px]
                  leading-7
                  text-[#eeeae4]/45

                  sm:text-[18px]
                  sm:leading-8

                  md:text-[21px]
                  md:leading-9
                "
              >
                The result was designed around clarity. Instead of making the
                product compete for attention with unnecessary visual elements,
                the design gives the core experience room to speak for itself.
              </p>

            </div>


            {/* SUBTLE DIVIDER */}

            <div className="my-16 h-px w-full bg-[#eeeae4]/10 sm:my-20" />


            {/* CONTINUATION */}

            <p
              className="
                max-w-[1200px]
                text-[19px]
                leading-8
                tracking-[-0.015em]
                text-[#eeeae4]/65

                sm:text-[22px]
                sm:leading-9

                md:text-[26px]
                md:leading-[1.5]
              "
            >
              The goal was never to make a system look complicated. It was to
              make something powerful feel simple.
            </p>


            <div className="mt-12 space-y-8 sm:mt-14 sm:space-y-10">

              <p
                className="
                  max-w-[1200px]
                  text-[16px]
                  leading-7
                  text-[#eeeae4]/45

                  sm:text-[18px]
                  sm:leading-8

                  md:text-[21px]
                  md:leading-9
                "
              >
                Product positioning and UI design were therefore treated as
                parts of the same experience. The visual direction was built
                to give GymPro a distinct presence while keeping the product
                itself at the centre.
              </p>


              <p
                className="
                  max-w-[1200px]
                  text-[16px]
                  leading-7
                  text-[#eeeae4]/45

                  sm:text-[18px]
                  sm:leading-8

                  md:text-[21px]
                  md:leading-9
                "
              >
                From the structure of the pages to the hierarchy of the
                interface, the experience was kept intentional. Information
                needed to be easy to scan, interactions needed to feel natural,
                and the overall product needed to communicate confidence
                without unnecessary complexity.
              </p>


              <p
                className="
                  max-w-[1200px]
                  text-[16px]
                  leading-7
                  text-[#eeeae4]/45

                  sm:text-[18px]
                  sm:leading-8

                  md:text-[21px]
                  md:leading-9
                "
              >
                GymPro ultimately became a digital experience that connects
                the product story with the interface itself — giving the
                platform a clearer identity and creating a more focused way
                for people to understand what it offers.
              </p>


              <p
                className="
                  max-w-[1200px]
                  text-[16px]
                  leading-7
                  text-[#eeeae4]/45

                  sm:text-[18px]
                  sm:leading-8

                  md:text-[21px]
                  md:leading-9
                "
              >
                It is a reminder that good product design does not always need
                to say more. Sometimes, the strongest experience comes from
                knowing what matters and giving it the space to be understood.
              </p>

            </div>


            {/* CLOSING — PART OF STORY */}

            <div className="mt-16 border-t border-[#eeeae4]/10 pt-10 sm:mt-20">

              <p
                className="
                  max-w-[1100px]
                  text-[20px]
                  leading-8
                  tracking-[-0.02em]
                  text-[#eeeae4]/70

                  sm:text-[23px]
                  sm:leading-9

                  md:text-[27px]
                  md:leading-[1.45]
                "
              >
                A digital experience designed to make a complex product feel
                <span className="text-[#c7ff00]">
                  {" "}clear.
                </span>
              </p>


              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[8px] tracking-[0.2em] text-[#eeeae4]/22">
                <span>GYMPRO</span>
                <span>UI DESIGN</span>
                <span>WEB DEVELOPMENT</span>
                <span>SAAS EXPERIENCE</span>
              </div>

            </div>

          </motion.article>


          {/* BACK */}

          <div className="mt-20 border-t border-[#eeeae4]/10 pt-6 sm:mt-24">

            <button
              type="button"
              onClick={() => router.back()}
              className="
                group
                inline-flex
                items-center
                gap-3
                text-[9px]
                tracking-[0.2em]
                text-[#eeeae4]/40
                transition-colors
                duration-300
                hover:text-[#c7ff00]
              "
            >
              <span className="text-base transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>

              BACK
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}