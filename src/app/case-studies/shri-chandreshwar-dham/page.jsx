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

        <div className="mt-16 flex items-center gap-4 sm:mt-20">

          <span className="text-[9px] tracking-[0.22em] text-[#c7ff00] sm:text-[10px]">
            01
          </span>

          <span className="h-px w-8 bg-[#eeeae4]/15" />

          <span className="text-[9px] tracking-[0.22em] text-[#eeeae4]/35 sm:text-[10px]">
            WEB / DIGITAL EXPERIENCE
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
            text-[clamp(52px,8vw,125px)]
            font-normal
            uppercase
            leading-[0.84]
            tracking-[-0.07em]
            sm:mt-10
          "
        >
          <span className="block">
            SHRI
          </span>

          <span className="block text-[#eeeae4]/30">
            CHANDRESHWAR DHAM
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
            Shri Chandreshwar Dham needed a digital presence that could bring
            its story, community and everyday information together without
            losing the feeling of the place itself. The project was about
            finding a thoughtful balance between a modern digital experience
            and an identity rooted in faith, culture and community.
          </p>


          {/* LIVE WEBSITE */}

          <a
            href="https://www.srichandreshwar.com"
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
            DESIGN / DEVELOPMENT / DIGITAL EXPERIENCE
          </span>

          <span className="text-[8px] tracking-[0.18em] text-[#625d57] sm:text-[9px]">
            SHRI CHANDRESHWAR DHAM
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
              When we began working on Shri Chandreshwar Dham, the challenge
              was never simply to make a website. It was to understand what
              the Dham represents and find a way to communicate that feeling
              online.
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
                Shri Chandreshwar Dham is deeply connected with devotion,
                spirituality and the local community. For people who already
                knew the Dham, the digital experience needed to feel familiar.
                For someone discovering it for the first time, it needed to
                provide enough context to understand its story, purpose and
                significance.
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
                There was a lot that needed to come together — the story of the
                Dham, festivals and important updates, donations, scholarship
                initiatives, the gallery, contact details and location
                information. The challenge was bringing all of this together
                without making the experience feel like a conventional
                information portal.
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
                We approached the project from the visitor&apos;s perspective.
                What would someone want to know first? What would help them
                understand the Dham? Which information needed to be immediately
                accessible, and what could be discovered naturally as they
                explored?
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
                Instead of treating every piece of information as an isolated
                page, we focused on creating one calm digital journey. The
                information architecture was kept clear, the storytelling was
                given room to breathe, and the visual language was designed to
                support the identity of the Dham rather than compete with it.
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
              The idea was simple: technology should make the experience
              easier to understand without taking attention away from the
              place itself.
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
                Typography, spacing, hierarchy and interaction were therefore
                treated as tools rather than decoration. The experience needed
                to feel modern and accessible while remaining respectful to
                the spiritual and cultural identity behind it.
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
                The final website brings the different sides of Shri
                Chandreshwar Dham together in one connected digital experience.
                Its story has space to be understood, festivals and updates
                can be communicated clearly, and donation and scholarship
                initiatives make the community work behind the Dham easier to
                discover.
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
                A dedicated gallery adds a visual layer, while contact and
                location information remain simple to find. The experience was
                also designed to work naturally across mobile, tablet and
                desktop, so the quality of the experience does not depend on
                where someone discovers it.
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
                In the end, the website became more than a collection of pages.
                It became a digital point of connection between the Dham, its
                existing community and people discovering it for the first
                time.
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
                A digital experience built not just to inform, but to create a
                first connection with a place of{" "}
                <span className="text-[#c7ff00]">
                  faith.
                </span>
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[8px] tracking-[0.2em] text-[#eeeae4]/22">
                <span>SHRI CHANDRESHWAR DHAM</span>
                <span>DESIGN</span>
                <span>DEVELOPMENT</span>
                <span>DIGITAL EXPERIENCE</span>
              </div>

            </div>

          </motion.article>


          {/* BACK TO CASE STUDIES */}

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