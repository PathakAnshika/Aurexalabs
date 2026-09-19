"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CaseStudyPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#101010] text-[#eeeae4]">

      {/* =====================================================
          SECTION 01 — INTRO
      ===================================================== */}

      <section className="px-[5vw] pb-20 pt-6 sm:pb-24 sm:pt-8 md:pb-32 md:pt-10">

        {/* BACK */}
        <button
          type="button"
          onClick={() => router.back()}
          className="mb-14 inline-flex items-center gap-3 text-[8px] tracking-[0.22em] text-[#eeeae4]/45 transition-colors duration-300 hover:text-[#c7ff00] sm:mb-20 md:mb-28 md:text-[9px]"
        >
          <span className="text-[11px]">←</span>
          BACK
        </button>

        {/* PROJECT META */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[8px] tracking-[0.18em] text-[#eeeae4]/40 sm:mb-7 sm:gap-x-5 sm:text-[9px] sm:tracking-[0.2em]"
        >
          <span>05</span>
          <span>/</span>
          <span>TENNECO</span>
          <span>/</span>
          <span>PRODUCTION TOOL</span>
          <span>/</span>
          <span>2024–2025</span>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="
            max-w-[1200px]
            text-[clamp(52px,17vw,150px)]
            font-normal
            uppercase
            leading-[0.84]
            tracking-[-0.065em]
            sm:text-[clamp(62px,9vw,150px)]
          "
        >
          TENNECO
          <br />
          <span className="text-[#eeeae4]/35">
            PRODUCTION.
          </span>
        </motion.h1>

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 max-w-[900px] sm:mt-14 md:mt-20"
        >
          <p className="text-[16px] leading-7 tracking-[-0.01em] text-[#eeeae4]/65 sm:text-[18px] sm:leading-7 md:text-[23px] md:leading-9 md:tracking-[-0.015em]">
            A production part validation tool developed for Tenneco
            Automotive, designed to streamline the scanning and tracking
            of automotive components while improving data accuracy,
            duplicate detection and traceability throughout the workflow.
          </p>
        </motion.div>

        {/* PROJECT INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="
            mt-14
            grid
            grid-cols-2
            gap-x-6
            gap-y-7
            border-t
            border-[#eeeae4]/10
            pt-6
            text-[8px]
            tracking-[0.16em]
            text-[#eeeae4]/40
            sm:mt-20
            sm:flex
            sm:flex-wrap
            sm:gap-x-16
            sm:gap-y-8
            sm:pt-7
            sm:text-[9px]
            sm:tracking-[0.18em]
            md:mt-28
          "
        >
          <div>
            <span className="mb-2 block text-[#eeeae4]/20">
              CLIENT
            </span>
            TENNECO AUTOMOTIVE
          </div>

          <div>
            <span className="mb-2 block text-[#eeeae4]/20">
              CATEGORY
            </span>
            PRODUCTION APPLICATION
          </div>

          <div>
            <span className="mb-2 block text-[#eeeae4]/20">
              CONTEXT
            </span>
            PROFESSIONAL EXPERIENCE
          </div>
        </motion.div>
      </section>


      {/* =====================================================
          PROJECT VISUAL
      ===================================================== */}

      <section className="px-[5vw] pb-20 sm:pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden border border-[#eeeae4]/10"
        >
          <img
            src="/image/Tenneco-systems.png"
            alt="Tenneco Production Part Validation Tool"
            className="block h-auto w-full"
          />
        </motion.div>
      </section>


      {/* =====================================================
          SECTION 02 — THE STORY
      ===================================================== */}

      <section className="border-t border-[#eeeae4]/10 px-[5vw] py-20 sm:py-24 md:py-32">

        {/* STORY LABEL */}
        <div className="mb-12 flex items-center justify-between sm:mb-16 md:mb-24">
          <span className="text-[8px] tracking-[0.22em] text-[#eeeae4]/35 sm:text-[9px]">
            02 / THE STORY
          </span>

          <span className="hidden text-[9px] tracking-[0.2em] text-[#eeeae4]/25 md:block">
            PRODUCTION / VALIDATION / TENNECO
          </span>
        </div>

        {/* OPENING */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="
            max-w-[1200px]
            text-[23px]
            leading-8
            tracking-[-0.025em]
            text-[#eeeae4]
            sm:text-[25px]
            sm:leading-8
            md:text-[38px]
            md:leading-[1.12]
          "
        >
          The goal was to make the production validation process
          faster, more reliable and easier to manage.
        </motion.p>

        {/* STORY */}
        <div className="mt-14 max-w-[1250px] sm:mt-20 md:mt-28">

          {/* STORY 01 */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="text-[16px] leading-7 tracking-[-0.01em] text-[#eeeae4]/55 sm:text-[17px] sm:leading-7 md:text-[22px] md:leading-9"
          >
            Tenneco Automotive needed a digital tool to validate and
            track a specific automotive component — a socket that came
            in two parts: front and rear. During the production process,
            these parts needed to be scanned using a scanner so that the
            relevant information could be captured accurately inside
            the software.
          </motion.p>

          {/* STORY 02 */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-10 text-[16px] leading-7 tracking-[-0.01em] text-[#eeeae4]/55 sm:mt-12 sm:text-[17px] sm:leading-7 md:mt-16 md:text-[22px] md:leading-9"
          >
            The scanning process was designed to reduce manual data
            entry. Once a component was scanned, the information from
            the scan automatically populated the required input fields
            in the application. This allowed the operator to capture
            the product information directly through the scanning
            workflow instead of entering it manually.
          </motion.p>

          {/* STORY 03 */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-10 text-[16px] leading-7 tracking-[-0.01em] text-[#eeeae4]/55 sm:mt-12 sm:text-[17px] sm:leading-7 md:mt-16 md:text-[22px] md:leading-9"
          >
            After the information was captured, the data was stored in
            the database. This created a digital record of the scanned
            component and allowed the production workflow to maintain
            the information associated with each processed part.
          </motion.p>

          {/* SUBTLE DIVIDER */}
          <div className="my-12 h-px w-full bg-[#eeeae4]/10 sm:my-16 md:my-24" />

          {/* STORY 04 */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="text-[16px] leading-7 tracking-[-0.01em] text-[#eeeae4]/55 sm:text-[17px] sm:leading-7 md:text-[22px] md:leading-9"
          >
            One of the important requirements was preventing the same
            product from being processed twice. The system checked the
            scanned information against the existing records and could
            identify when a component had already been scanned.
          </motion.p>

          {/* STORY 05 */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-10 text-[16px] leading-7 tracking-[-0.01em] text-[#eeeae4]/55 sm:mt-12 sm:text-[17px] sm:leading-7 md:mt-16 md:text-[22px] md:leading-9"
          >
            If an already scanned component was scanned again, the
            application identified it as a duplicate. This validation
            helped prevent duplicate processing and ensured that the
            production record represented unique components moving
            through the workflow.
          </motion.p>

          {/* STORY 06 */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-10 text-[16px] leading-7 tracking-[-0.01em] text-[#eeeae4]/55 sm:mt-12 sm:text-[17px] sm:leading-7 md:mt-16 md:text-[22px] md:leading-9"
          >
            Once validated, the product could continue forward in the
            workflow for transportation. What started as a simple
            scanning requirement therefore became a focused production
            system connecting barcode input, automatic data capture,
            database storage and duplicate validation in one place.
          </motion.p>

          {/* CLOSING THOUGHT */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              mt-14
              max-w-[1050px]
              text-[21px]
              leading-7
              tracking-[-0.025em]
              text-[#eeeae4]
              sm:mt-20
              sm:text-[24px]
              sm:leading-8
              md:mt-28
              md:text-[36px]
              md:leading-[1.15]
            "
          >
            A production validation tool designed to bring accuracy and
            traceability into the manufacturing process.
          </motion.p>

          {/* TAGS */}
          <div className="mt-12 flex flex-wrap gap-x-4 gap-y-2 text-[7px] tracking-[0.18em] text-[#eeeae4]/30 sm:mt-16 sm:gap-x-6 sm:text-[8px] sm:tracking-[0.2em] md:mt-20">
            <span>PRODUCTION TOOL</span>
            <span>•</span>
            <span>BARCODE SCANNING</span>
            <span>•</span>
            <span>VALIDATION</span>
            <span>•</span>
            <span>DATABASE</span>
          </div>

          {/* BOTTOM BACK */}
          <div className="mt-16 border-t border-[#eeeae4]/10 pt-7 sm:mt-24 sm:pt-8 md:mt-32">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-3 text-[8px] tracking-[0.22em] text-[#eeeae4]/40 transition-colors duration-300 hover:text-[#c7ff00] sm:text-[9px]"
            >
              <span>←</span>
              BACK
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}