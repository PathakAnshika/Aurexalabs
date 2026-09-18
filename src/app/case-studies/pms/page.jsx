"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CaseStudyPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#101010] text-[#eeeae4]">

      {/* =====================================================
          SECTION 01 — INTRO
      ===================================================== */}

      <section className="px-[5vw] pt-8 pb-24 md:pt-10 md:pb-32">

        {/* BACK */}
        <button
          type="button"
          onClick={() => router.back()}
          className="mb-20 inline-flex items-center gap-3 text-[9px] tracking-[0.22em] text-[#eeeae4]/45 transition-colors duration-300 hover:text-[#c7ff00] md:mb-28"
        >
          <span>←</span>
          BACK
        </button>

        {/* PROJECT META */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[9px] tracking-[0.2em] text-[#eeeae4]/40"
        >
          <span>03</span>
          <span>/</span>
          <span>PROJECT MANAGEMENT</span>
          <span>/</span>
          <span>APPLICATION</span>
          <span>/</span>
          <span>2026</span>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-[1200px] text-[clamp(58px,9vw,150px)] font-normal uppercase leading-[0.82] tracking-[-0.065em]"
        >
          PROJECT
          <br />
          <span className="text-[#eeeae4]/35">MANAGEMENT</span>
        </motion.h1>

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-14 max-w-[900px] md:mt-20"
        >
          <p className="text-[18px] leading-7 tracking-[-0.015em] text-[#eeeae4]/65 md:text-[23px] md:leading-9">
            A structured project management platform designed to bring
            projects, tasks, teams and everyday operations into one clear
            digital workspace — helping businesses organise their work,
            track progress and keep everything moving from a single place.
          </p>

          {/* LIVE WEBSITE */}
          <a
            href="https://pms-frontend-topaz-one.vercel.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 border-b border-[#c7ff00]/40 pb-2 text-[9px] tracking-[0.2em] text-[#c7ff00] transition-colors duration-300 hover:border-[#c7ff00] hover:text-[#eeeae4]"
          >
            VISIT WEBSITE
            <span>↗</span>
          </a>
        </motion.div>

        {/* PROJECT INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 flex flex-wrap gap-x-16 gap-y-8 border-t border-[#eeeae4]/10 pt-7 text-[9px] tracking-[0.18em] text-[#eeeae4]/40 md:mt-28"
        >
          <div>
            <span className="mb-2 block text-[#eeeae4]/20">
              CATEGORY
            </span>
            APPLICATION
          </div>

          <div>
            <span className="mb-2 block text-[#eeeae4]/20">
              YEAR
            </span>
            2026
          </div>

          <div>
            <span className="mb-2 block text-[#eeeae4]/20">
              TYPE
            </span>
            PROJECT MANAGEMENT
          </div>
        </motion.div>
      </section>


      {/* =====================================================
          SECTION 02 — THE STORY
      ===================================================== */}

      <section className="border-t border-[#eeeae4]/10 px-[5vw] py-24 md:py-32">

        {/* STORY LABEL */}
        <div className="mb-16 flex items-center justify-between md:mb-24">
          <span className="text-[9px] tracking-[0.22em] text-[#eeeae4]/35">
            02 / THE STORY
          </span>

          <span className="hidden text-[9px] tracking-[0.2em] text-[#eeeae4]/25 md:block">
            PROJECT MANAGEMENT / AUREXA
          </span>
        </div>

        {/* OPENING */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-[1200px] text-[25px] leading-8 tracking-[-0.025em] text-[#eeeae4] md:text-[38px] md:leading-[1.12]"
        >
          The idea was simple: project management should make work feel
          clearer, not more complicated. The platform was created around
          that principle — bringing the moving parts of everyday projects
          into one structured experience.
        </motion.p>

        {/* STORY */}
        <div className="mt-20 max-w-[1250px] md:mt-28">

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="text-[17px] leading-7 tracking-[-0.01em] text-[#eeeae4]/55 md:text-[22px] md:leading-9"
          >
            Projects naturally become complicated as more people, tasks,
            deadlines and responsibilities come into the picture. The
            challenge was to create a system that could bring those
            elements together without making the experience feel heavy.
            Instead of spreading information across different places, the
            platform gives teams a central space where work can be organised,
            followed and understood.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-12 text-[17px] leading-7 tracking-[-0.01em] text-[#eeeae4]/55 md:mt-16 md:text-[22px] md:leading-9"
          >
            The experience was shaped around the everyday flow of a team.
            Projects provide the larger picture, while tasks break the work
            into something that can actually be managed. Team members,
            progress and activity become part of the same workflow, making
            it easier to understand what is happening and what needs
            attention next.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-12 text-[17px] leading-7 tracking-[-0.01em] text-[#eeeae4]/55 md:mt-16 md:text-[22px] md:leading-9"
          >
            A major part of the design was keeping information easy to scan.
            The interface uses clear hierarchy and structured layouts so
            users can quickly understand their projects without having to
            search through unnecessary layers. The goal was not to fill the
            dashboard with information, but to make the right information
            visible at the right moment.
          </motion.p>

          {/* SUBTLE DIVIDER */}
          <div className="my-16 h-px w-full bg-[#eeeae4]/10 md:my-24" />

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="text-[17px] leading-7 tracking-[-0.01em] text-[#eeeae4]/55 md:text-[22px] md:leading-9"
          >
            From the dashboard to individual project views, the system was
            designed to connect different levels of information without
            breaking the user's sense of context. Moving from a project
            overview into tasks and team activity should feel natural,
            rather than like moving between completely separate tools.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-12 text-[17px] leading-7 tracking-[-0.01em] text-[#eeeae4]/55 md:mt-16 md:text-[22px] md:leading-9"
          >
            The result is a digital workspace that treats project
            management as more than a collection of features. It connects
            structure, visibility and everyday action into one experience,
            giving teams a clearer way to understand their work and move it
            forward.
          </motion.p>

          {/* CLOSING THOUGHT */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-20 max-w-[1050px] text-[24px] leading-8 tracking-[-0.025em] text-[#eeeae4] md:mt-28 md:text-[36px] md:leading-[1.15]"
          >
            A project management experience designed to turn complex
            workflows into something teams can understand, organise and
            move forward.
          </motion.p>

          {/* TAGS */}
          <div className="mt-16 flex flex-wrap gap-x-6 gap-y-3 text-[8px] tracking-[0.2em] text-[#eeeae4]/30 md:mt-20">
            <span>PROJECT MANAGEMENT</span>
            <span>•</span>
            <span>WEB APPLICATION</span>
            <span>•</span>
            <span>UI / UX</span>
            <span>•</span>
            <span>BUSINESS SYSTEM</span>
          </div>

          {/* BOTTOM BACK */}
          <div className="mt-24 border-t border-[#eeeae4]/10 pt-8 md:mt-32">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-3 text-[9px] tracking-[0.22em] text-[#eeeae4]/40 transition-colors duration-300 hover:text-[#c7ff00]"
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