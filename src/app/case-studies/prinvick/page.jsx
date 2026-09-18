"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CaseStudyPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen overflow-hidden bg-[#101010] text-[#eeeae4]">

      {/* =====================================================
          SECTION 01 — INTRO
      ===================================================== */}

      <section className="relative px-[5vw] pb-20 pt-8 sm:pb-24 sm:pt-10 md:pb-28 md:pt-12">

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
            02
          </span>

          <span className="h-px w-8 bg-[#eeeae4]/15" />

          <span className="text-[9px] tracking-[0.22em] text-[#eeeae4]/35 sm:text-[10px]">
            E-COMMERCE
          </span>

          <span className="text-[9px] tracking-[0.22em] text-[#eeeae4]/25 sm:text-[10px]">
            / 2026
          </span>

        </div>


        {/* TITLE */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            max-w-[1200px]
            text-[clamp(58px,10vw,150px)]
            font-normal
            uppercase
            leading-[0.82]
            tracking-[-0.07em]
            sm:mt-10
          "
        >
          <span className="block">
            PRINVICK
          </span>

          <span className="block text-[#eeeae4]/30">
            CUSTOM.
          </span>
        </motion.h1>


        {/* INTRO COPY */}

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
            delay: 0.2,
          }}
          className="mt-12 w-full sm:mt-16 md:mt-20"
        >

          <p
            className="
              max-w-[1180px]
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
            Prinvick is a custom T-shirt e-commerce experience built around
            the idea that buying a product can also be part of creating it.
            The project brings together product discovery, visual
            customization and a live preview experience to make the journey
            from choosing a T-shirt to imagining the final design feel simple,
            interactive and personal.
          </p>


          {/* LIVE WEBSITE */}

          <a
            href="https://www.prinvick.com"
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


        {/* BOTTOM META */}

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
            NEXT.JS / REACT / TAILWIND CSS
          </span>

          <span className="text-[8px] tracking-[0.18em] text-[#625d57] sm:text-[9px]">
            E-COMMERCE / CUSTOMIZATION
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

          <div
            className="
              space-y-10

              sm:space-y-12
              md:space-y-14
            "
          >

            <p
              className="
                max-w-[1200px]
                text-[18px]
                leading-8
                tracking-[-0.01em]
                text-[#eeeae4]/65

                sm:text-[22px]
                sm:leading-9

                md:text-[27px]
                md:leading-[1.55]
              "
            >
              Prinvick started with a simple idea: make custom clothing feel
              less like a complicated design process and more like something
              people can naturally explore and make their own. Instead of
              separating product browsing from customization, the experience
              was designed to bring those two moments together. The interface
              needed to make the products easy to discover while giving users
              enough control to experiment with their own designs.
            </p>


            <p
              className="
                max-w-[1200px]
                text-[16px]
                leading-7
                text-[#eeeae4]/45

                sm:text-[19px]
                sm:leading-8

                md:text-[22px]
                md:leading-9
              "
            >
              A major part of the experience became the live T-shirt preview.
              Users can work with different T-shirt colours, switch between
              the front and back of the product, and place their design
              directly onto the garment. Uploading a design becomes part of
              the interface rather than an isolated form interaction, with
              controls that allow the artwork to be positioned, resized and
              adjusted before the user decides on the final result.
            </p>


            <p
              className="
                max-w-[1200px]
                text-[16px]
                leading-7
                text-[#eeeae4]/45

                sm:text-[19px]
                sm:leading-8

                md:text-[22px]
                md:leading-9
              "
            >
              The customization experience was treated as a product in itself.
              Crop and positioning interactions had to feel understandable,
              the preview had to remain visually clear, and the transition
              between browsing and creating needed to stay natural. Rather
              than filling the interface with controls, the experience was
              structured around the actions that matter most when someone is
              trying to turn an idea into a wearable design.
            </p>


            <div className="h-px w-full bg-[#eeeae4]/10" />


            <p
              className="
                max-w-[1200px]
                text-[16px]
                leading-7
                text-[#eeeae4]/45

                sm:text-[19px]
                sm:leading-8

                md:text-[22px]
                md:leading-9
              "
            >
              From the storefront to the customization experience, the goal
              was to make technology feel invisible when it needed to be and
              useful when it mattered. Prinvick became a digital experience
              where commerce, interaction and visual design work together —
              giving users a clearer path from discovering a product to
              creating something that feels personal.
            </p>


            {/* CLOSING */}

            <p
              className="
                max-w-[1100px]
                pt-4
                text-[18px]
                leading-8
                text-[#eeeae4]/65

                sm:pt-6
                sm:text-[21px]
                sm:leading-9

                md:text-[25px]
                md:leading-[1.5]
              "
            >
              Prinvick is ultimately about giving people more ownership over
              what they buy — turning a T-shirt from a finished product into
              something they can shape themselves.
            </p>

          </div>


          {/* BOTTOM BACK */}

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

              BACK TO WORK
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}