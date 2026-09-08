"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const industries = [
  {
    number: "01",
    title: "STARTUPS",
    intro:
      "Helping new businesses turn ideas into credible digital products and scalable foundations.",
    work: [
      "Websites & landing pages",
      "MVP development",
      "SaaS platforms",
      "Product interfaces",
    ],
  },
  {
    number: "02",
    title: "HEALTHCARE",
    intro:
      "Clear, accessible digital experiences for healthcare businesses and services where trust matters.",
    work: [
      "Healthcare websites",
      "Patient-facing platforms",
      "Management systems",
      "Digital workflows",
    ],
  },
  {
    number: "03",
    title: "RETAIL & ECOMMERCE",
    intro:
      "Commerce experiences designed to make products easier to discover, understand and purchase.",
    work: [
      "Ecommerce websites",
      "Product catalogues",
      "Custom storefronts",
      "Commerce integrations",
    ],
  },
  {
    number: "04",
    title: "FITNESS & WELLNESS",
    intro:
      "Digital tools that help fitness and wellness businesses manage customers, operations and growth.",
    work: [
      "Gym & fitness platforms",
      "Membership systems",
      "Business dashboards",
      "Booking & management tools",
    ],
  },
  {
    number: "05",
    title: "RELIGIOUS & CULTURAL",
    intro:
      "Digital experiences that respect identity while making cultural and spiritual institutions more accessible online.",
    work: [
      "Institutional websites",
      "Donation platforms",
      "Event experiences",
      "Digital storytelling",
    ],
  },
  {
    number: "06",
    title: "PROFESSIONAL SERVICES",
    intro:
      "Digital systems that help service-based businesses communicate their value and operate more efficiently.",
    work: [
      "Business websites",
      "Client portals",
      "Internal platforms",
      "Workflow automation",
    ],
  },
  {
    number: "07",
    title: "EDUCATION",
    intro:
      "Useful digital platforms that make learning, information and communication easier to access.",
    work: [
      "Education websites",
      "Learning platforms",
      "Management systems",
      "Information portals",
    ],
  },
  {
    number: "08",
    title: "LOCAL BUSINESSES",
    intro:
      "Practical digital solutions for businesses looking to establish a stronger presence and simplify everyday work.",
    work: [
      "Business websites",
      "Digital presence",
      "Management systems",
      "Customer experiences",
    ],
  },
];

export default function Industries() {
  return (
    <main className="bg-[#101010] text-[#eeeae4]">


{/* BACK BUTTON */}
<div className="px-[5vw] pt-8 sm:pt-10">
  <Link
    href="/"
    className="group inline-flex items-center gap-3 text-[9px] tracking-[0.22em] text-[#625d57] transition-colors duration-300 hover:text-[#eeeae4]"
  >
    <span className="text-[14px] leading-none transition-transform duration-300 group-hover:-translate-x-1">
      ←
    </span>

    <span>BACK</span>
  </Link>
</div>
      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        id="industries"
        className="relative overflow-hidden px-[5vw] pt-14 pb-24 sm:pt-16 sm:pb-28 md:pt-20 md:pb-32"
      >
        <div className="max-w-[780px]">
          <span className="text-[9px] tracking-[0.24em] text-[#625d57] sm:text-[10px]">
            DIGITAL, SHAPED AROUND BUSINESS.
          </span>

          <h1 className="mt-5 text-[clamp(44px,6vw,82px)] font-normal leading-[0.9] tracking-[-0.06em]">
            Technology built
            <br />
            <span className="text-[#eeeae4]/35">
              around the way you
            </span>
            <br />
            <span className="text-[#eeeae4]/35">
              work.
            </span>
          </h1>
        </div>

        <div className="mt-14 border-t border-[#eeeae4]/10 sm:mt-16 md:mt-20" />

        <div className="grid gap-10 pt-10 sm:pt-12 md:grid-cols-2 md:gap-20">
          <p className="max-w-[650px] text-[12px] leading-6 text-[#817b75] sm:text-[13px] sm:leading-7">
            Aurexa Labs builds the digital layer behind modern businesses.
            From websites and ecommerce experiences to custom applications,
            internal platforms and business systems, we turn ideas and
            operational needs into technology that is clear, useful and
            built to scale.
          </p>

          <p className="max-w-[650px] text-[12px] leading-6 text-[#817b75] sm:text-[13px] sm:leading-7">
            Our work adapts to the business behind it. We combine design,
            development, automation, AI, SEO and digital marketing to create
            digital ecosystems that are easier to use, easier to manage and
            ready to evolve as the business grows.
          </p>
        </div>

        <div className="mt-14 sm:mt-16">
          <a
            href="#industry-list"
            className="group inline-flex items-center gap-4"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eeeae4]/25 text-[16px] transition-all duration-300 group-hover:border-[#eeeae4]/60 group-hover:translate-y-1">
              ↓
            </span>

            <span className="text-[9px] tracking-[0.24em] text-[#eeeae4]/70 transition-colors duration-300 group-hover:text-[#eeeae4]">
              EXPLORE INDUSTRIES
            </span>
          </a>
        </div>
      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section
        id="industry-list"
        className="border-t border-[#eeeae4]/10 px-[5vw]"
      >
        {/* HEADER */}
        <div className="flex flex-col gap-3 border-b border-[#eeeae4]/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[9px] tracking-[0.24em] text-[#625d57] sm:text-[10px]">
            INDUSTRIES WE WORK WITH
          </span>

          <span className="text-[9px] tracking-[0.2em] text-[#625d57] sm:text-[10px]">
            08 AREAS / ONE APPROACH
          </span>
        </div>


        {/* INDUSTRY ITEMS */}
        <div>
          {industries.map((industry, index) => (
            <motion.article
              key={industry.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
              }}
              className="group border-b border-[#eeeae4]/10"
            >
              <div className="py-10 sm:py-12 md:py-14">

                {/* TOP ROW */}
                <div className="grid gap-5 md:grid-cols-[70px_1fr_auto] md:items-start md:gap-10">

                  {/* NUMBER */}
                  <span className="text-[9px] tracking-[0.2em] text-[#625d57]">
                    {industry.number}
                  </span>


                  {/* TITLE */}
                  <h2 className="text-[clamp(28px,3.4vw,48px)] font-normal leading-none tracking-[-0.045em] text-[#eeeae4]/80 transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#eeeae4]">
                    {industry.title}
                  </h2>


                  {/* ARROW */}
                  <span className="hidden text-[18px] text-[#eeeae4]/25 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#eeeae4]/70 md:block">
                    ↗
                  </span>
                </div>


                {/* DETAILS */}
                <div className="mt-7 grid gap-8 md:ml-[70px] md:grid-cols-[1fr_1fr] md:gap-16">

                  {/* INTRO */}
                  <p className="max-w-[550px] text-[12px] leading-6 text-[#817b75] sm:text-[13px] sm:leading-7">
                    {industry.intro}
                  </p>


                  {/* WHAT WE DO */}
                  <div>
                    <span className="text-[8px] tracking-[0.22em] text-[#625d57]">
                      WHAT WE BUILD
                    </span>

                    <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                      {industry.work.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 text-[11px] text-[#817b75]"
                        >
                          <span className="h-px w-4 bg-[#eeeae4]/20" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>


      {/* =====================================================
          CLOSING STATEMENT
      ===================================================== */}

      <section className="px-[5vw] py-24 sm:py-28 md:py-36">
        <div className="border-t border-[#eeeae4]/10 pt-8">

          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

            <h2 className="max-w-[720px] text-[clamp(36px,5vw,70px)] font-normal leading-[0.92] tracking-[-0.055em]">
              Different businesses.
              <br />
              <span className="text-[#eeeae4]/30">
                Different needs.
              </span>
            </h2>

            <p className="max-w-[350px] text-[12px] leading-6 text-[#625d57] md:text-right">
              We don't believe in one-size-fits-all digital solutions.
              Every business has its own way of working — and the technology
              should reflect that.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          LET'S TALK
      ===================================================== */}

      <section className="border-t border-[#eeeae4]/10 px-[5vw] py-24 sm:py-28 md:py-36">

        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">

          {/* LEFT */}
          <div className="max-w-[850px]">

            <span className="text-[9px] tracking-[0.24em] text-[#625d57] sm:text-[10px]">
              HAVE A BUSINESS IN MIND?
            </span>

            <h2 className="mt-5 text-[clamp(44px,6vw,86px)] font-normal leading-[0.88] tracking-[-0.06em]">
              Let&apos;s build
              <br />
              <span className="text-[#eeeae4]/30">
                something useful.
              </span>
            </h2>

          </div>


          {/* RIGHT */}
          <div className="flex flex-col items-start gap-6 md:items-end">

            <p className="max-w-[320px] text-[12px] leading-6 text-[#625d57] md:text-right">
              Tell us what you&apos;re working on, what needs to change,
              or simply where you want to go next.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-5 border-b border-[#eeeae4]/30 pb-3 text-[10px] tracking-[0.24em] transition-all duration-300 hover:border-[#eeeae4] "
            >
              <span>LET&apos;S TALK</span>

              <span className="text-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}