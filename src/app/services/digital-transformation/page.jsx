"use client";

import Link from "next/link";
import { useState } from "react";

const offerings = [
  {
    number: "01",
    title: "Digital Strategy",
    text: "We help businesses define a practical digital direction by identifying opportunities, priorities and the right technology.",
    tags: ["Strategy", "Planning", "Roadmap"],
  },
  {
    number: "02",
    title: "Process Digitization",
    text: "We transform manual and disconnected processes into structured digital workflows that are easier to manage.",
    tags: ["Workflows", "Digitization", "Operations"],
  },
  {
    number: "03",
    title: "Business Automation",
    text: "We reduce repetitive work by connecting systems and automating processes across your everyday operations.",
    tags: ["Automation", "Integrations", "Efficiency"],
  },
  {
    number: "04",
    title: "System Modernization",
    text: "We modernize outdated software and digital systems to make them more reliable, usable and ready for growth.",
    tags: ["Modernization", "Migration", "Optimization"],
  },
  {
    number: "05",
    title: "Data & Reporting",
    text: "We bring scattered business information together into clearer dashboards, reports and decision-making tools.",
    tags: ["Dashboards", "Analytics", "Reporting"],
  },
  {
    number: "06",
    title: "Digital Platforms",
    text: "We build connected digital platforms that bring customers, teams, processes and business data together.",
    tags: ["Platforms", "Systems", "Integrations"],
  },
];

const process = [
  [
    "01",
    "Understand",
    "We understand your current systems, workflows, challenges and long-term business goals.",
  ],
  [
    "02",
    "Identify",
    "We identify where technology can remove friction, improve efficiency and create new opportunities.",
  ],
  [
    "03",
    "Transform",
    "We design and implement practical digital solutions around your actual business needs.",
  ],
  [
    "04",
    "Evolve",
    "We continuously improve the systems as your business, customers and requirements change.",
  ],
];

const faqs = [
  {
    q: "What does digital transformation mean for a business?",
    a: "Digital transformation means using technology to improve the way a business operates, serves customers, manages information and grows.",
  },
  {
    q: "Do you work with existing systems?",
    a: "Yes. We can work with existing software, databases, APIs and workflows instead of replacing everything from scratch.",
  },
  {
    q: "Can you automate our existing business processes?",
    a: "Yes. We can identify repetitive or disconnected processes and create digital workflows and integrations to make them more efficient.",
  },
];

export default function DigitalTransformationPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="min-h-screen bg-[#070707] text-[#f1f1ed]">

      {/* ================= HEADER ================= */}

      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-10 lg:px-12 lg:pb-28 lg:pt-14">

        <Link
          href="/#services"
          className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/35 transition-colors duration-300 hover:text-[#d9ff3f]"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to services
        </Link>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">

          <div>

            <p className="mb-7 text-xs uppercase tracking-[0.28em] text-[#d9ff3f]">
              06 / Digital Transformation
            </p>

            <h1 className="max-w-5xl text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.84] tracking-[-0.065em]">
              We move
              <br />
              <span className="text-white/25">businesses</span>{" "}
              <span className="text-[#d9ff3f]">
                forward.
              </span>
            </h1>

            <div className="mt-7 h-px w-12 bg-[#d9ff3f]" />

            <p className="mt-7 max-w-[520px] text-sm leading-7 text-white/45 sm:text-base">
              We help businesses replace outdated processes, connect their
              systems and build better digital ways of working.
            </p>

          </div>

          <div className="max-w-sm pb-2 lg:justify-self-end">

            <div className="border border-white/[0.07] bg-white/[0.015] p-7">

              <p className="text-[10px] uppercase tracking-[0.22em] text-white/30">
                AUREXA LABS
              </p>

              <div className="mt-10 h-px w-full bg-white/[0.07]" />

              <p className="mt-6 text-sm leading-7 text-white/35">
                Better systems, smarter workflows and technology that grows
                with your business.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= INTRO STRIP ================= */}

      <section className="border-y border-white/[0.08]">

        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[0.45fr_1fr]">

          <div className="border-b border-white/[0.08] px-6 py-7 lg:border-b-0 lg:border-r lg:px-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#d9ff3f]">
              What we do
            </span>
          </div>

          <div className="px-6 py-10 lg:px-16 lg:py-14">

            <p className="max-w-4xl text-2xl leading-[1.45] tracking-[-0.02em] text-white/70 sm:text-3xl">
              Transformation is not about changing everything.
              It is about making the important things
              <span className="text-white">
                {" "}work better.
              </span>
            </p>

          </div>

        </div>

      </section>

      {/* ================= OFFERINGS ================= */}

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">

        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#d9ff3f]">
              Capabilities
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              What we transform.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/35">
            Practical digital solutions that improve the way your business
            operates, connects and grows.
          </p>

        </div>

        <div className="border-t border-white/[0.1]">

          {offerings.map((item) => (
            <div
              key={item.number}
              className="group grid border-b border-white/[0.1] py-8 transition-all duration-500 lg:grid-cols-[90px_1fr_1.1fr] lg:items-center lg:py-10"
            >

              <span className="text-xs text-white/25 transition-colors group-hover:text-[#d9ff3f]">
                {item.number}
              </span>

              <h3 className="mt-4 text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl lg:mt-0">
                {item.title}
              </h3>

              <div className="mt-5 lg:mt-0 lg:pl-12">

                <p className="max-w-xl text-sm leading-6 text-white/40">
                  {item.text}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-[0.16em] text-white/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              <span className="mt-5 text-lg text-white/20 transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#d9ff3f] lg:hidden">
                ↗
              </span>

            </div>
          ))}

        </div>

      </section>

      {/* ================= STATEMENT ================= */}

      <section className="border-y border-white/[0.08]">

        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-2">

          <div className="min-h-[360px] border-b border-white/[0.08] p-8 lg:border-b-0 lg:border-r lg:p-14">

            <span className="text-[10px] uppercase tracking-[0.25em] text-[#d9ff3f]">
              Our philosophy
            </span>

            <h2 className="mt-20 max-w-lg text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              Digital should remove friction.
            </h2>

          </div>

          <div className="flex min-h-[360px] items-end p-8 lg:p-14">

            <p className="max-w-xl text-xl leading-8 text-white/40 sm:text-2xl">
              The right technology should make your business
              <span className="text-white">
                {" "}simpler to operate, easier to understand and ready for
                what comes next.
              </span>
            </p>

          </div>

        </div>

      </section>

      {/* ================= PROCESS ================= */}

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">

        <div className="grid gap-16 lg:grid-cols-[0.45fr_1fr]">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-[#d9ff3f]">
              Approach
            </p>

            <h2 className="mt-5 max-w-sm text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              From complexity to clarity.
            </h2>

          </div>

          <div className="border-t border-white/[0.1]">

            {process.map(([number, title, text]) => (
              <div
                key={number}
                className="grid gap-5 border-b border-white/[0.1] py-8 sm:grid-cols-[70px_180px_1fr] sm:items-start"
              >

                <span className="text-xs text-[#d9ff3f]">
                  {number}
                </span>

                <h3 className="text-lg font-medium">
                  {title}
                </h3>

                <p className="max-w-md text-sm leading-6 text-white/35">
                  {text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="border-t border-white/[0.08]">

        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[0.45fr_1fr]">

          <div className="border-b border-white/[0.08] px-6 py-10 lg:border-b-0 lg:border-r lg:px-12 lg:py-14">

            <p className="text-xs uppercase tracking-[0.25em] text-[#d9ff3f]">
              Questions
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em]">
              Before we transform.
            </h2>

          </div>

          <div className="px-6 py-4 lg:px-16">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className="border-b border-white/[0.1]"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  >

                    <span className="text-sm font-medium text-white/75 sm:text-base">
                      {faq.q}
                    </span>

                    <span
                      className={`text-xl font-light text-[#d9ff3f] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>

                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-7"
                        : "grid-rows-[0fr]"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <p className="max-w-2xl text-sm leading-7 text-white/35">
                        {faq.a}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">

        <div className="relative overflow-hidden border border-white/[0.1] bg-[#0c0c0c] px-7 py-12 sm:px-12 lg:px-16 lg:py-16">

          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#d9ff3f]/[0.035] blur-[100px]" />

          <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#d9ff3f]">
                Ready to evolve?
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Let&apos;s move your business forward.
              </h2>

            </div>

            <Link
              href="/start-a-project"
              className="group inline-flex w-fit items-center gap-5 border-b border-[#d9ff3f]/40 pb-2 text-sm text-white transition-colors hover:border-[#d9ff3f] hover:text-[#d9ff3f]"
            >
              Start a project

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}