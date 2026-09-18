"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const labWorks = [
  {
    number: "01",
    title: "DESIGNED FOR THE RAIN.",
    type: "VISUAL CAMPAIGN",
    image: "/image/work6.png",
    shape: "rectangle",
    story:
      "A visual campaign built around the mood of the monsoon — combining atmospheric photography, oversized editorial typography and a muted palette to create a sense of quiet drama. The composition brings fashion and environment together, turning a rainy landscape into a strong visual identity.",
    designer: "Anshika",
    role: "Art Direction · Visual Design",
  },
  {
    number: "02",
    title: "COFFEE, WITH CHARACTER.",
    type: "BRAND / VISUAL DESIGN",
    image: "/image/lab3.jpg",
    shape: "square",
    story:
      "A visual identity study for a coffee concept built around warmth, simplicity and personality. Bold typography, rich coffee tones and a close-up product composition create a playful campaign language that feels approachable while giving the product a strong visual presence.",
    designer: "Anshika",
    role: "Brand Design · Visual Direction",
  },
  {
    number: "03",
    title: "A DIGITAL HOME FOR DEVOTION.",
    type: "DIGITAL EXPERIENCE",
    image: "/image/SCM3.png",
    shape: "rectangle",
    story:
      "A digital experience created to bring the spiritual identity of Chandreshwar Mandir into an accessible online space. The design combines a calm visual language, devotional imagery and simple navigation to make temple information, events and spiritual experiences feel clear, welcoming and connected.",
    designer: "Anshika",
    role: "UI / UX · Visual Design · Development",
  },
  {
    number: "04",
    title: "A PORTFOLIO WITH A POINT OF VIEW.",
    type: "WEB / UI DESIGN",
    image: "/image/lab7.jpg",
    shape: "square",
    story:
      "A personal portfolio concept designed to turn a body of creative work into a distinct digital identity. Editorial typography, restrained layouts and carefully framed project previews create a visual experience that feels personal, confident and focused on the work itself.",
    designer: "Anshika",
    role: "Web Design · UI / UX · Visual Direction",
  },
  {
    number: "05",
    title: "A WORD, MANY DIRECTIONS.",
    type: "TYPOGRAPHY / IDENTITY",
    image: "/image/Aurexa.png",
    shape: "rectangle",
    story:
      "An exploration of Aurexa's visual identity through typography, proportion and colour. Different letterforms, compositions and treatments were tested to understand how one name could take on different personalities while still feeling recognisably Aurexa.",
    designer: "Anshika",
    role: "Typography · Brand Identity · Visual Design",
  },
  {
    number: "06",
    title: "A DIGITAL EXPERIENCE WITH A SCENT OF LUXURY.",
    type: "WEB DESIGN",
    image: "/image/lab6.png",
    shape: "square",
    story:
      "A luxury fragrance website concept built around atmosphere, storytelling and visual presence. Warm lighting, refined typography and immersive product imagery create a premium digital experience, while a simple navigation and focused call to action keep the journey clear and effortless.",
    designer: "Anshika",
    role: "Web Design · UI / UX · Art Direction",
  },
  {
    number: "07",
    title: "ONE SYSTEM, EVERY DETAIL.",
    type: "DESIGN SYSTEM",
    image: "/image/gymC.png",
    shape: "rectangle",
    story:
      "A visual system created for a modern gym management platform, bringing product interface, typography, colour, components and content into one consistent experience. From the navigation and calls to action to dashboards, statistics and feature sections, every element follows the same visual language so the product feels clear, connected and easy to understand.",
    designer: "Anshika",
    role: "UI / UX · Design System · Visual Direction",
  },
  {
    number: "08",
    title: "MUSIC IN VISUAL FORM.",
    type: "EDITORIAL / POSTER",
    image: "/image/digital.png",
    shape: "square",
    story:
      "A visual poster study exploring how music can be translated into imagery, typography and composition. Bold oversized lettering, a deep red palette and a layered portrait create a dramatic editorial treatment designed to capture the energy and emotion behind a song.",
    designer: "Anshika",
    role: "Art Direction · Typography · Visual Design",
  },
  {
    number: "09",
    title: "INTERFACE LANGUAGE",
    type: "UI / UX",
    image: "/image/Interface.png",
    shape: "rectangle",
    story:
      "A visual exploration of how an interface can communicate through type, structure and small details. Navigation, buttons, inputs, imagery and spacing were brought together into one calm visual language — designed to feel clear, considered and consistent across the experience.",
    designer: "Anshika",
    role: "UI / UX · Visual Design",
  },
  {
    number: "10",
    title: "DESIGNED FOR DAILY FLOW.",
    type: "MOBILE UI / UX",
    image: "/image/work3.jpg",
    shape: "square",
    story:
      "A mobile interface concept designed to make everyday tasks feel simple, organised and easy to follow. Clear categories, visual priority, familiar interactions and a lightweight layout work together to help users understand what needs attention and move through their day without unnecessary friction.",
    designer: "Anshika",
    role: "Mobile UI · UX Design · Visual Design",
  },
];

export default function LabPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#101010] text-[#eeeae4]">

      {/* =========================
          HEADER
      ========================== */}
      <section className="px-[5vw] pt-10 pb-12 sm:pt-12 sm:pb-14 md:pt-14 md:pb-16">

        <div className="flex items-center justify-between">

          {/* BACK BUTTON */}
          <button
            type="button"
            onClick={() => router.back()}
            className="
              group
              inline-flex
              items-center
              gap-2
              text-[8px]
              tracking-[0.22em]
              text-[#eeeae4]/35
              transition-colors
              duration-300
              hover:text-[#c7ff00]
            "
          >
            <span className="text-[11px] transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            <span>BACK</span>
          </button>

          <span className="text-[8px] tracking-[0.22em] text-[#eeeae4]/25">
            01 — 10
          </span>

        </div>

        <div className="mt-12 max-w-[1100px] sm:mt-14 md:mt-16">

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-[clamp(54px,8vw,120px)]
              font-normal
              uppercase
              leading-[0.84]
              tracking-[-0.065em]
            "
          >
            THE
            <br />
            <span className="text-[#eeeae4]/30">
              LAB.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
              mt-7
              max-w-[700px]
              text-[15px]
              leading-7
              text-[#eeeae4]/45
              sm:text-[17px]
              sm:leading-8
            "
          >
            A space for visual experiments, interfaces, ideas and everything
            that happens behind the finished work. Some become projects.
            Some simply help us understand what comes next.
          </motion.p>

        </div>
      </section>


      {/* =========================
          LAB WORK
      ========================== */}
      <section className="px-[5vw] pb-24 sm:pb-28 md:pb-36">

        <div className="space-y-20 sm:space-y-24 md:space-y-28">

          {labWorks.map((work, index) => (

            <motion.article
              key={work.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.7 }}
              className="
                grid
                grid-cols-1
                items-start
                gap-8
                md:grid-cols-12
                md:gap-12
              "
            >

              {/* =========================
                  IMAGE
              ========================== */}
              <div
                className={`
                  ${
                    work.shape === "square"
                      ? "md:col-span-6"
                      : "md:col-span-7"
                  }
                `}
              >

                <div
                  className={`
                    group
                    relative
                    w-full
                    overflow-hidden
                    bg-[#171717]
                    ${
                      work.shape === "square"
                        ? "aspect-square max-w-[620px]"
                        : "aspect-[16/10]"
                    }
                  `}
                >

                  <img
                    src={work.image}
                    alt={work.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.025]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[#101010]/0
                      transition-colors
                      duration-500
                      group-hover:bg-[#101010]/10
                    "
                  />

                </div>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-[8px] tracking-[0.2em] text-[#eeeae4]/25">
                    {work.number}
                  </span>

                  <span className="text-[8px] tracking-[0.2em] text-[#eeeae4]/25">
                    {work.type}
                  </span>

                </div>

              </div>


              {/* =========================
                  STORY
              ========================== */}
              <div
                className={`
                  md:col-span-5
                  ${index % 2 !== 0 ? "md:pt-8" : "md:pt-16"}
                `}
              >

                <div className="max-w-[520px]">

                  <div className="mb-5 flex items-center gap-4">

                    <span className="text-[8px] tracking-[0.2em] text-[#c7ff00]">
                      {work.type}
                    </span>

                    <span className="h-px w-7 bg-[#eeeae4]/15" />

                  </div>

                  <h2
                    className="
                      text-[clamp(28px,3vw,48px)]
                      font-normal
                      uppercase
                      leading-[0.92]
                      tracking-[-0.045em]
                    "
                  >
                    {work.title}
                  </h2>

                  <p
                    className="
                      mt-6
                      text-[14px]
                      leading-7
                      tracking-[-0.005em]
                      text-[#eeeae4]/50
                      sm:text-[15px]
                      sm:leading-7
                    "
                  >
                    {work.story}
                  </p>


                  {/* DETAILS */}
                  <div
                    className="
                      mt-7
                      grid
                      grid-cols-2
                      gap-6
                      border-t
                      border-[#eeeae4]/10
                      pt-5
                    "
                  >

                    <div>

                      <span className="mb-2 block text-[7px] tracking-[0.2em] text-[#eeeae4]/25">
                        DESIGNER
                      </span>

                      <span className="text-[10px] tracking-[0.08em] text-[#eeeae4]/55">
                        {work.designer}
                      </span>

                    </div>

                    <div>

                      <span className="mb-2 block text-[7px] tracking-[0.2em] text-[#eeeae4]/25">
                        ROLE
                      </span>

                      <span className="text-[10px] leading-5 text-[#eeeae4]/55">
                        {work.role}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </section>


      {/* =========================
          END
      ========================== */}
      <section className="border-t border-[#eeeae4]/10 px-[5vw] py-8 sm:py-10">

        <div className="flex items-center justify-between">

          <span className="text-[8px] tracking-[0.2em] text-[#eeeae4]/20">
            AUREXA LAB / DESIGN / EXPERIMENTS
          </span>

          <span className="text-[8px] tracking-[0.2em] text-[#c7ff00]/60">
            KEEP EXPLORING ↗
          </span>

        </div>

      </section>

    </main>
  );
}