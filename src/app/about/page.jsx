"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="bg-[#101010] text-[#eeeae4]">

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


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="px-[5vw] pb-20 pt-12 sm:pb-24 sm:pt-14 md:pb-28 md:pt-16">

        {/* HERO */}

        <div className="max-w-[900px]">

          <span className="text-[9px] tracking-[0.24em] text-[#625d57] sm:text-[10px]">
            A LITTLE SOMETHING ABOUT ME.
          </span>

          <h1 className="mt-5 text-[clamp(48px,7vw,96px)] font-normal leading-[0.87] tracking-[-0.065em]">
            WHAT IS
            <br />
            <span className="text-[#eeeae4]/35">
              AUREXA?
            </span>
          </h1>

        </div>


        {/* =====================================================
            STORY
        ===================================================== */}

        <div className="mt-12 border-t border-[#eeeae4]/10 pt-8 sm:mt-14 sm:pt-9 md:pt-10">

          <div className="mb-7 flex items-center gap-3">
            <span className="text-[9px] tracking-[0.22em] text-[#625d57] sm:text-[10px]">
              THE STORY
            </span>

            <span className="h-px w-8 bg-[#eeeae4]/10 sm:w-12" />
          </div>


          <div className="max-w-[1100px] space-y-5">

            <p className="text-[16px] leading-8 text-[#eeeae4]/85 sm:text-[18px] sm:leading-9">
              Hello, I&apos;m Anshika. Aurexa is something I&apos;m building
              from a place that is very personal to me — my love for
              technology and the joy I find in creating things. I&apos;ve
              always enjoyed understanding how things work, figuring out how
              they could work better, and then sitting down and actually
              building them.
            </p>

            <p className="text-[13px] leading-7 text-[#817b75] sm:text-[14px] sm:leading-8">
              I can spend hours working on something that might look like a
              very small detail from the outside. Changing something,
              testing it, breaking it, trying another way and eventually
              seeing it come together. And honestly, I enjoy that process.
            </p>

            <p className="text-[13px] leading-7 text-[#817b75] sm:text-[14px] sm:leading-8">
              The learning. The experimenting. The frustration when
              something refuses to work. And that small moment when it
              finally does. There is something about creating something
              from nothing that keeps me coming back to technology again
              and again.
            </p>

            <p className="text-[13px] leading-7 text-[#817b75] sm:text-[14px] sm:leading-8">
              Starting something of my own hasn&apos;t always been easy.
              There have been plenty of things I didn&apos;t know, problems
              I had to figure out on my own, ideas that didn&apos;t work the
              first time and days when progress felt much slower than I
              wanted it to.
            </p>

            <p className="text-[13px] leading-7 text-[#817b75] sm:text-[14px] sm:leading-8">
              But I kept working. I kept learning. I kept trying different
              things. Because even when the process gets difficult, I still
              genuinely love the work itself.
            </p>

          </div>

        </div>


        {/* =====================================================
            BIG STATEMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="my-16 border-y border-[#eeeae4]/10 py-10 sm:my-20 sm:py-12 md:my-24 md:py-14"
        >

         <p
  className="
    w-full
    text-[clamp(24px,3.6vw,58px)]
    font-normal
    uppercase
    leading-[1.05]
    tracking-[0.055em]
    text-[#eeeae4]
    sm:tracking-[0.075em]
    md:tracking-[0.09em]
  "
>
  I BUILT AUREXA FROM
  <span className="text-[#eeeae4]/35">
    {" "}CURIOSITY, CONSISTENCY &amp; A GENUINE LOVE FOR TECHNOLOGY.
  </span>
</p>

        </motion.div>


        {/* =====================================================
            CONTINUATION
        ===================================================== */}

        <div className="border-t border-[#eeeae4]/10 pt-8 md:pt-10">

          <div className="mb-7 flex items-center gap-3">
            <span className="text-[9px] tracking-[0.22em] text-[#625d57] sm:text-[10px]">
              KEEPING GOING
            </span>

            <span className="h-px w-8 bg-[#eeeae4]/10 sm:w-12" />
          </div>


          <div className="max-w-[1100px] space-y-5">

            <p className="text-[13px] leading-7 text-[#817b75] sm:text-[14px] sm:leading-8">
              Over time, that curiosity became something bigger. Aurexa is
              now a digital studio where I build websites, ecommerce
              experiences, applications, software and digital systems for
              businesses. I also work with AI, automation, SEO and digital
              marketing where they can genuinely add value.
            </p>

            <p className="text-[13px] leading-7 text-[#817b75] sm:text-[14px] sm:leading-8">
              But I don&apos;t see these as separate things. Good digital
              work happens when design, technology and the problem you are
              trying to solve all make sense together.
            </p>

            <p className="text-[13px] leading-7 text-[#817b75] sm:text-[14px] sm:leading-8">
              That is the kind of work I want Aurexa to be known for —
              thoughtful, useful and built with enough care that it can keep
              growing long after the first version is finished.
            </p>

            <p className="text-[13px] leading-7 text-[#817b75] sm:text-[14px] sm:leading-8">
              I&apos;m still at the beginning of this journey. I&apos;m still
              learning, still experimenting and still figuring things out.
              Aurexa is growing alongside me, and I like that it isn&apos;t
              a finished story yet.
            </p>

            <p className="pt-1 text-[15px] leading-8 text-[#eeeae4]/75 sm:text-[17px] sm:leading-9">
              I love taking an idea that exists only in my head and slowly
              turning it into something real — something that can be used,
              experienced and actually make someone&apos;s work a little
              better.
            </p>

            <p className="text-[13px] leading-7 text-[#817b75] sm:text-[14px] sm:leading-8">
              I don&apos;t have everything figured out yet. But I know I want
              to keep building, keep improving and see how far this can go.
            </p>

          </div>

        </div>


        {/* =====================================================
            PHILOSOPHY
        ===================================================== */}

        <div className="mt-16 border-y border-[#eeeae4]/10 sm:mt-20">

          <div className="grid sm:grid-cols-4">

            {[
              ["01", "CURIOUS", "Always learning."],
              ["02", "BUILD", "Ideas into reality."],
              ["03", "CARE", "Details matter."],
              ["04", "EVOLVE", "Never stop improving."],
            ].map(([number, title, text]) => (

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

                <h3 className="mt-2 text-[18px] font-normal tracking-[-0.03em] text-[#eeeae4]/80">
                  {title}
                </h3>

                <p className="mt-1 text-[11px] text-[#625d57]">
                  {text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>


        {/* =====================================================
            FINAL
        ===================================================== */}

        <div className="mt-16 border-t border-[#eeeae4]/10 pt-7 sm:mt-20">

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <h2 className="max-w-[900px] text-[clamp(38px,5vw,72px)] font-normal leading-[0.9] tracking-[-0.055em]">
              I&apos;m still building it.
              <br />
              <span className="text-[#eeeae4]/35">
                And that&apos;s the exciting part.
              </span>
            </h2>


            <div className="max-w-[320px]">

              <p className="text-[12px] leading-6 text-[#625d57]">
                There is still so much I want to learn, so much I want to
                build and so much further I want Aurexa to go.
              </p>

              <Link
                href="/Let's-talk"
                className="group mt-6 inline-flex items-center gap-5 border-b border-[#eeeae4]/25 pb-3 text-[9px] tracking-[0.24em] text-[#eeeae4] transition-all duration-300 hover:border-[#eeeae4]"
              >
                <span>LET&apos;S TALK</span>

                <span className="text-[17px] leading-none transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}