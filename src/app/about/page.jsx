
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const values = [
  ["01", "INNOVATION", "Exploring better ways to solve problems."],
  ["02", "ENGINEERING", "Building reliable digital solutions."],
  ["03", "PURPOSE", "Technology driven by real business needs."],
  ["04", "EVOLUTION", "Continuously learning and improving."],
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#101010] text-[#eeeae4]">

      {/* BACK */}
      <div className="px-[5vw] pt-6 sm:pt-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 text-[9px] tracking-[0.22em] text-[#625d57] transition-colors duration-300 hover:text-[#eeeae4]"
        >
          <span className="text-[14px] leading-none transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          <span>BACK TO HOME</span>
        </Link>
      </div>

      <section className="px-[5vw] pb-20 pt-12 sm:pb-24 sm:pt-14 md:pb-28 md:pt-16">

        {/* HERO */}
        <div className="max-w-[1000px]">
          <span className="text-[9px] tracking-[0.24em] text-[#625d57] sm:text-[10px]">
            ABOUT AUREXA LABS
          </span>

          <h1 className="mt-5 text-[clamp(48px,7vw,100px)] font-normal leading-[0.87] tracking-[-0.065em]">
            WHAT IS
            <br />
            <span className="text-[#eeeae4]/35">AUREXA?</span>
          </h1>

          <p className="mt-8 max-w-[650px] text-[14px] leading-7 text-[#817b75] sm:text-[16px] sm:leading-8">
            Aurexa Labs is a technology company focused on building digital
            products, custom software and intelligent business solutions
            that help organizations move forward.
          </p>
        </div>

        {/* OUR STORY */}
        <div className="mt-14 border-t border-[#eeeae4]/10 pt-8 sm:mt-16 sm:pt-10">

          <div className="mb-8 flex items-center gap-3">
            <span className="text-[9px] tracking-[0.22em] text-[#625d57] sm:text-[10px]">
              OUR STORY
            </span>
            <span className="h-px w-8 bg-[#eeeae4]/10 sm:w-12" />
          </div>

          <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr] md:gap-16">

            <div>
              <p className="max-w-[260px] text-[clamp(24px,3vw,38px)] leading-[1.15] tracking-[-0.04em] text-[#eeeae4]">
                It started with one idea.
                <span className="text-[#eeeae4]/35">
                  {" "}Today, we're building it together.
                </span>
              </p>
            </div>

            <div className="max-w-[780px] space-y-6">

              <p className="text-[15px] leading-8 text-[#eeeae4]/85 sm:text-[17px] sm:leading-9">
                Aurexa began as an individual initiative, driven by a
                passion for technology and the desire to create meaningful
                digital experiences. What started with one person's vision
                gradually developed into an ambition to build something
                bigger.
              </p>

              <p className="text-[13px] leading-7 text-[#817b75] sm:text-[14px] sm:leading-8">
                Building something from scratch comes with challenges.
                It involves learning, experimenting, solving problems
                and constantly finding better ways to bring ideas to life.
                Every project has been an opportunity to grow, improve
                and understand technology more deeply.
              </p>

              <p className="text-[13px] leading-7 text-[#817b75] sm:text-[14px] sm:leading-8">
                What began as one person's vision has gradually grown
                into a shared journey. Today, we bring together different
                skills, perspectives and ideas to build Aurexa Labs
                as a team.
              </p>

              <p className="text-[15px] leading-8 text-[#eeeae4]/85 sm:text-[17px] sm:leading-9">
                Our journey is still evolving, but our purpose remains
                clear: to create technology that solves real problems
                and makes a meaningful difference.
              </p>

            </div>
          </div>
        </div>

        {/* BIG STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="my-16 border-y border-[#eeeae4]/10 py-10 sm:my-20 sm:py-12 md:my-24 md:py-14"
        >
          <p className="w-full text-[clamp(24px,3.6vw,58px)] font-normal uppercase leading-[1.05] tracking-[0.055em] sm:tracking-[0.075em] md:tracking-[0.09em]">
            BUILT ON IDEAS.
            <span className="text-[#eeeae4]/35">
              {" "}DRIVEN BY TECHNOLOGY. DESIGNED FOR WHAT'S NEXT.
            </span>
          </p>
        </motion.div>

        {/* WHAT WE DO */}
        <div className="border-t border-[#eeeae4]/10 pt-8 md:pt-10">

          <div className="mb-8 flex items-center gap-3">
            <span className="text-[9px] tracking-[0.22em] text-[#625d57] sm:text-[10px]">
              WHAT WE DO
            </span>
            <span className="h-px w-8 bg-[#eeeae4]/10 sm:w-12" />
          </div>

          <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr] md:gap-16">

            <div>
              <p className="max-w-[280px] text-[clamp(24px,3vw,38px)] leading-[1.15] tracking-[-0.04em]">
                Technology that solves real problems.
                <span className="text-[#eeeae4]/35">
                  {" "}Solutions built to move businesses forward.
                </span>
              </p>
            </div>

            <div className="max-w-[780px] space-y-6">

              <p className="text-[15px] leading-8 text-[#eeeae4]/85 sm:text-[17px] sm:leading-9">
                Aurexa Labs develops custom software, web applications,
                e-commerce platforms and business management systems.
                We create digital products designed around real business
                requirements, with a focus on functionality, performance
                and user experience.
              </p>

              <p className="text-[13px] leading-7 text-[#817b75] sm:text-[14px] sm:leading-8">
                Our work also extends into AI-driven solutions,
                automation, SEO and digital marketing — helping
                businesses explore new opportunities through technology.
              </p>

              <p className="text-[13px] leading-7 text-[#817b75] sm:text-[14px] sm:leading-8">
                We bring design, development and technology together
                with a clear understanding of the problem, the people
                using the solution and the business behind it.
              </p>

              <p className="text-[15px] leading-8 text-[#eeeae4]/85 sm:text-[17px] sm:leading-9">
                From an initial concept to a complete digital solution,
                our focus is on creating work that is thoughtful,
                reliable and built to grow.
              </p>

            </div>
          </div>
        </div>

        {/* OUR APPROACH */}
        <div className="mt-16 border-t border-[#eeeae4]/10 pt-8 sm:mt-20 sm:pt-10">

          <div className="mb-8 flex items-center gap-3">
            <span className="text-[9px] tracking-[0.22em] text-[#625d57] sm:text-[10px]">
              OUR APPROACH
            </span>
            <span className="h-px w-8 bg-[#eeeae4]/10 sm:w-12" />
          </div>

          <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr] md:gap-16">

            <div>
              <p className="max-w-[280px] text-[clamp(24px,3vw,38px)] leading-[1.15] tracking-[-0.04em]">
                Good technology starts with understanding.
              </p>
            </div>

            <div className="max-w-[780px]">
              <p className="text-[15px] leading-8 text-[#eeeae4]/85 sm:text-[17px] sm:leading-9">
                We believe technology should do more than simply look
                impressive. It should simplify complex processes,
                solve genuine challenges and create lasting value.
                Our approach begins with understanding the need,
                choosing the right direction and building a solution
                with care at every stage.
              </p>
            </div>

          </div>
        </div>

        {/* VALUES */}
        <div className="mt-16 border-y border-[#eeeae4]/10 sm:mt-20">

          <div className="grid sm:grid-cols-4">
            {values.map(([number, title, description]) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="border-b border-[#eeeae4]/10 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-7 sm:last:border-r-0 lg:px-9"
              >
                <span className="text-[9px] tracking-[0.22em] text-[#625d57]">
                  {number}
                </span>

                <h3 className="mt-2 text-[17px] font-normal tracking-[-0.03em] text-[#eeeae4]/85">
                  {title}
                </h3>

                <p className="mt-2 text-[11px] text-[#625d57]">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-t border-[#eeeae4]/10 pt-8 sm:mt-20"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <h2 className="max-w-[850px] text-[clamp(38px,5vw,76px)] font-normal leading-[0.9] tracking-[-0.055em]">
              We're building
              <br />
              <span className="text-[#eeeae4]/35">
                what's next.
              </span>
            </h2>

            <div className="max-w-[320px]">
              <p className="text-[12px] leading-6 text-[#817b75]">
                Our vision is to become a technology partner businesses
                can rely on — embracing innovation, delivering thoughtful
                solutions and building technology that makes a difference.
              </p>

              <Link
                href="/Let's-talk"
                className="group mt-6 inline-flex items-center gap-5 border-b border-[#eeeae4]/25 pb-3 text-[9px] tracking-[0.24em] text-[#eeeae4] transition-all duration-300 hover:border-[#eeeae4]"
              >
                <span>LET'S TALK</span>
                <span className="text-[17px] leading-none transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>
            </div>

          </div>
        </motion.div>

      </section>
    </main>
  );
}
