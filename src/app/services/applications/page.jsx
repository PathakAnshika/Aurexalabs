"use client";

import Link from "next/link";
import { useState } from "react";

const offerings = [
  {
    number: "01",
    title: "Mobile Applications",
    text: "Modern mobile experiences designed around your users, business goals and the way people interact with your product.",
    tags: ["Android", "iOS", "Cross Platform"],
  },
  {
    number: "02",
    title: "Business Applications",
    text: "Custom applications that simplify workflows, automate repetitive tasks and help businesses operate more efficiently.",
    tags: ["Automation", "Workflows", "Operations"],
  },
  {
    number: "03",
    title: "Admin & Management Systems",
    text: "Structured management interfaces that give businesses control over users, products, transactions and everyday operations.",
    tags: ["Admin Panels", "Management", "Analytics"],
  },
  {
    number: "04",
    title: "SaaS Applications",
    text: "Scalable software products designed for recurring users, subscriptions and growing digital businesses.",
    tags: ["SaaS", "Subscriptions", "Platforms"],
  },
  {
    number: "05",
    title: "Custom Software",
    text: "Purpose-built applications created around specific requirements where off-the-shelf software is not enough.",
    tags: ["Custom Systems", "Integrations", "APIs"],
  },
  {
    number: "06",
    title: "Application Modernization",
    text: "We improve existing applications with cleaner interfaces, better workflows and modern technology.",
    tags: ["Modernization", "Migration", "Optimization"],
  },
];

const process = [
  [
    "01",
    "Understand",
    "We understand the product, users, workflows and problems the application needs to solve.",
  ],
  [
    "02",
    "Plan",
    "We define the architecture, features, user flows and technology required for the product.",
  ],
  [
    "03",
    "Build",
    "We develop the application with a focus on reliability, usability and scalability.",
  ],
  [
    "04",
    "Launch",
    "We test, optimize and prepare the application for real-world use and future growth.",
  ],
];

const faqs = [
  {
    q: "What kind of applications do you build?",
    a: "We build mobile applications, business software, admin systems, SaaS products, dashboards and custom digital platforms.",
  },
  {
    q: "Can you build an application from an existing idea?",
    a: "Yes. We can take an existing concept or requirement and turn it into a structured, functional application.",
  },
  {
    q: "Can you work with an existing backend?",
    a: "Yes. Existing APIs and backend systems can be integrated with the new application when the required infrastructure is already available.",
  },
];

export default function ApplicationsPage() {
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
              03 / Applications
            </p>

            <h1 className="max-w-5xl text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.84] tracking-[-0.065em]">
              We turn
              <br />
              <span className="text-white/25">ideas</span>{" "}
              into{" "}
              <span className="text-[#d9ff3f]">
                products.
              </span>
            </h1>

            <div className="mt-7 h-px w-12 bg-[#d9ff3f]" />

            <p className="mt-7 max-w-[520px] text-sm leading-7 text-white/45 sm:text-base">
              We design and develop applications that solve real problems,
              simplify workflows and create better digital experiences.
            </p>

          </div>

          <div className="max-w-sm pb-2 lg:justify-self-end">

            <div className="border border-white/[0.07] bg-white/[0.015] p-7">

              <p className="text-[10px] uppercase tracking-[0.22em] text-white/30">
                AUREXA LABS
              </p>

              <div className="mt-10 h-px w-full bg-white/[0.07]" />

              <p className="mt-6 text-sm leading-7 text-white/35">
                Products, platforms and software built around real needs.
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
              From internal business systems to customer-facing products,
              we create applications that are
              <span className="text-white">
                {" "}useful, reliable and built to grow.
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
              What we build.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/35">
            From focused business tools to complete digital products,
            designed around your requirements.
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
              Technology should solve, not complicate.
            </h2>

          </div>

          <div className="flex min-h-[360px] items-end p-8 lg:p-14">

            <p className="max-w-xl text-xl leading-8 text-white/40 sm:text-2xl">
              The best software feels{" "}
              <span className="text-white">
                simple to use, even when what happens behind it is complex.
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
              From problem to product.
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
              Before we build.
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
                Have an idea?
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Let&apos;s build it.
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