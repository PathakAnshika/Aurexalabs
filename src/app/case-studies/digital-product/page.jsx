"use client";

import { useRouter } from "next/navigation";

const screens = [
  {
    title: "PROJECT OVERVIEW",
    label: "01",
    description:
      "A single view of project progress, priorities and what needs attention next.",
    items: [
      ["BRIEF", "COMPLETED"],
      ["DESIGN", "COMPLETED"],
      ["DEVELOPMENT", "IN PROGRESS"],
      ["REVIEW", "UP NEXT"],
    ],
  },
  {
    title: "PROJECT WORKSPACE",
    label: "02",
    description:
      "Everything around a project stays connected instead of being scattered across different tools.",
    items: [
      ["OVERVIEW", "01"],
      ["BRIEF", "02"],
      ["DESIGN", "03"],
      ["DEVELOPMENT", "04"],
      ["FEEDBACK", "05"],
      ["FILES", "06"],
    ],
  },
  {
    title: "DESIGN REVIEW",
    label: "03",
    description:
      "Feedback stays close to the work, making conversations easier to understand and act on.",
    items: [
      ["COMMENT", "Can we make this section slightly quieter?"],
      ["STATUS", "IN REVIEW"],
      ["ACTION", "RESOLVE"],
    ],
  },
];

function OverviewScreen() {
  return (
    <div className="relative overflow-hidden border border-[#eeeae4]/10 bg-[#151515]">
      <div className="flex items-center justify-between border-b border-[#eeeae4]/10 px-5 py-4 sm:px-7">
        <span className="text-[8px] uppercase tracking-[0.2em] text-[#eeeae4]/35">
          FRAME / PROJECT
        </span>

        <span className="text-[8px] uppercase tracking-[0.18em] text-[#c7ff00]/70">
          72%
        </span>
      </div>

      <div className="grid md:grid-cols-[1.1fr_.9fr]">
        <div className="border-b border-[#eeeae4]/10 p-5 sm:p-7 md:border-b-0 md:border-r">
          <p className="text-[8px] uppercase tracking-[0.2em] text-[#eeeae4]/30">
            PROJECT
          </p>

          <h3 className="mt-3 text-[24px] uppercase tracking-[-0.04em] text-[#eeeae4] sm:text-[30px]">
            AUREXA WEBSITE
          </h3>

          <div className="mt-8 h-[2px] w-full bg-[#eeeae4]/10">
            <div className="h-full w-[72%] bg-[#c7ff00]" />
          </div>

          <div className="mt-3 flex justify-between text-[8px] uppercase tracking-[0.15em]">
            <span className="text-[#eeeae4]/30">PROJECT PROGRESS</span>
            <span className="text-[#eeeae4]/60">72%</span>
          </div>
        </div>

        <div className="p-5 sm:p-7">
          <p className="mb-5 text-[8px] uppercase tracking-[0.2em] text-[#eeeae4]/30">
            PROJECT FLOW
          </p>

          <div className="space-y-4">
            {[
              ["BRIEF", "✓", true],
              ["DESIGN", "✓", true],
              ["DEVELOPMENT", "→", false],
              ["REVIEW", "○", false],
            ].map(([name, icon, done]) => (
              <div
                key={name}
                className="flex items-center justify-between border-b border-[#eeeae4]/7 pb-3"
              >
                <span className="text-[9px] uppercase tracking-[0.16em] text-[#eeeae4]/55">
                  {name}
                </span>

                <span
                  className={`text-[10px] ${
                    done ? "text-[#c7ff00]" : "text-[#eeeae4]/25"
                  }`}
                >
                  {icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkspaceScreen() {
  const navigation = [
    "OVERVIEW",
    "BRIEF",
    "DESIGN",
    "DEVELOPMENT",
    "FEEDBACK",
    "FILES",
  ];

  return (
    <div className="relative overflow-hidden border border-[#eeeae4]/10 bg-[#151515]">
      <div className="border-b border-[#eeeae4]/10 px-5 py-4 sm:px-7">
        <span className="text-[8px] uppercase tracking-[0.2em] text-[#eeeae4]/35">
          FRAME / WORKSPACE
        </span>
      </div>

      <div className="grid md:grid-cols-[210px_1fr]">
        <div className="border-b border-[#eeeae4]/10 p-5 md:border-b-0 md:border-r sm:p-7">
          <p className="text-[8px] uppercase tracking-[0.2em] text-[#eeeae4]/25">
            PROJECT
          </p>

          <p className="mt-3 text-[17px] uppercase tracking-[-0.03em]">
            AUREXA
          </p>

          <div className="mt-7 space-y-3">
            {navigation.map((item, index) => (
              <div
                key={item}
                className={`flex items-center justify-between py-1 text-[8px] uppercase tracking-[0.15em] ${
                  index === 0
                    ? "text-[#c7ff00]"
                    : "text-[#eeeae4]/30"
                }`}
              >
                <span>{item}</span>
                {index === 0 && <span>→</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 sm:p-7">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[8px] uppercase tracking-[0.2em] text-[#eeeae4]/25">
                OVERVIEW
              </p>

              <h3 className="mt-2 text-[25px] uppercase tracking-[-0.04em] sm:text-[32px]">
                Project Space
              </h3>
            </div>

            <span className="hidden text-[8px] uppercase tracking-[0.15em] text-[#eeeae4]/25 sm:block">
              06 SECTIONS
            </span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {[
              ["BRIEF", "READY"],
              ["DESIGN", "READY"],
              ["DEV", "72%"],
              ["FEEDBACK", "04"],
              ["FILES", "18"],
              ["TEAM", "05"],
            ].map(([title, value]) => (
              <div
                key={title}
                className="border border-[#eeeae4]/8 p-4"
              >
                <p className="text-[7px] uppercase tracking-[0.16em] text-[#eeeae4]/25">
                  {title}
                </p>

                <p className="mt-5 text-[11px] uppercase tracking-[0.1em] text-[#eeeae4]/65">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewScreen() {
  return (
    <div className="relative overflow-hidden border border-[#eeeae4]/10 bg-[#151515]">
      <div className="flex items-center justify-between border-b border-[#eeeae4]/10 px-5 py-4 sm:px-7">
        <span className="text-[8px] uppercase tracking-[0.2em] text-[#eeeae4]/35">
          FRAME / DESIGN REVIEW
        </span>

        <span className="text-[8px] uppercase tracking-[0.18em] text-[#c7ff00]/70">
          IN REVIEW
        </span>
      </div>

      <div className="grid md:grid-cols-[1.2fr_.8fr]">
        <div className="relative flex aspect-[1.25/1] items-center justify-center overflow-hidden border-b border-[#eeeae4]/10 bg-[#1b1b1b] md:border-b-0 md:border-r">
          <div className="absolute left-[10%] top-[12%] h-[76%] w-[80%] border border-[#eeeae4]/10">
            <div className="border-b border-[#eeeae4]/10 px-4 py-3">
              <div className="h-2 w-20 bg-[#eeeae4]/15" />
            </div>

            <div className="grid grid-cols-2 gap-3 p-5">
              <div className="h-20 border border-[#eeeae4]/8" />
              <div className="h-20 border border-[#eeeae4]/8" />
              <div className="col-span-2 h-24 border border-[#c7ff00]/20 bg-[#c7ff00]/5" />
            </div>
          </div>

          <span className="absolute bottom-5 left-5 text-[7px] uppercase tracking-[0.18em] text-[#eeeae4]/20">
            DESIGN / HOMEPAGE
          </span>
        </div>

        <div className="p-5 sm:p-7">
          <p className="text-[8px] uppercase tracking-[0.2em] text-[#eeeae4]/25">
            COMMENT
          </p>

          <p className="mt-5 text-[18px] leading-[1.35] tracking-[-0.025em] text-[#eeeae4]/75">
            “Can we make this section slightly quieter?”
          </p>

          <div className="mt-8 border-t border-[#eeeae4]/10 pt-5">
            <p className="text-[7px] uppercase tracking-[0.18em] text-[#eeeae4]/25">
              ANSHIKA
            </p>

            <p className="mt-2 text-[8px] uppercase tracking-[0.15em] text-[#eeeae4]/35">
              2 HOURS AGO
            </p>
          </div>

          <button className="mt-7 border border-[#c7ff00]/30 px-4 py-3 text-[7px] uppercase tracking-[0.2em] text-[#c7ff00]">
            RESOLVE →
          </button>
        </div>
      </div>
    </div>
  );
}

function ApprovalScreen() {
  const rows = [
    ["Homepage", "APPROVED"],
    ["Navigation", "APPROVED"],
    ["Mobile UI", "IN REVIEW"],
    ["Animations", "PENDING"],
  ];

  return (
    <div className="relative overflow-hidden border border-[#eeeae4]/10 bg-[#151515]">
      <div className="flex items-center justify-between border-b border-[#eeeae4]/10 px-5 py-4 sm:px-7">
        <span className="text-[8px] uppercase tracking-[0.2em] text-[#eeeae4]/35">
          FRAME / APPROVALS
        </span>

        <span className="text-[8px] uppercase tracking-[0.18em] text-[#eeeae4]/25">
          04 ITEMS
        </span>
      </div>

      <div className="p-5 sm:p-7">
        {rows.map(([name, status], index) => (
          <div
            key={name}
            className={`flex items-center justify-between py-5 ${
              index !== rows.length - 1
                ? "border-b border-[#eeeae4]/8"
                : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-[7px] text-[#eeeae4]/20">
                0{index + 1}
              </span>

              <span className="text-[10px] uppercase tracking-[0.15em] text-[#eeeae4]/60">
                {name}
              </span>
            </div>

            <span
              className={`text-[7px] uppercase tracking-[0.18em] ${
                status === "APPROVED"
                  ? "text-[#c7ff00]"
                  : "text-[#eeeae4]/30"
              }`}
            >
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineScreen() {
  const steps = [
    ["01", "BRIEF", true],
    ["02", "DESIGN", true],
    ["03", "REVIEW", true],
    ["04", "DEVELOPMENT", false],
    ["05", "LAUNCH", false],
  ];

  return (
    <div className="border border-[#eeeae4]/10 bg-[#151515] p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="text-[8px] uppercase tracking-[0.2em] text-[#eeeae4]/30">
          PROJECT TIMELINE
        </span>

        <span className="text-[8px] uppercase tracking-[0.18em] text-[#eeeae4]/20">
          FRAME
        </span>
      </div>

      <div className="mt-9 overflow-x-auto">
        <div className="flex min-w-[620px] items-start">
          {steps.map(([number, title, done], index) => (
            <div
              key={title}
              className="relative flex-1"
            >
              <div className="flex items-center">
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center border text-[7px] ${
                    done
                      ? "border-[#c7ff00]/40 text-[#c7ff00]"
                      : "border-[#eeeae4]/10 text-[#eeeae4]/25"
                  }`}
                >
                  {number}
                </div>

                {index !== steps.length - 1 && (
                  <div
                    className={`h-px flex-1 ${
                      done
                        ? "bg-[#c7ff00]/30"
                        : "bg-[#eeeae4]/10"
                    }`}
                  />
                )}
              </div>

              <p
                className={`mt-4 text-[7px] uppercase tracking-[0.16em] ${
                  done
                    ? "text-[#eeeae4]/60"
                    : "text-[#eeeae4]/25"
                }`}
              >
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DigitalProductCaseStudy() {
  const router = useRouter();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#101010] text-[#eeeae4]">

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="px-[5vw] pb-20 pt-8 sm:pb-24 sm:pt-10 md:pb-28 md:pt-12">

        <button
          onClick={() => router.back()}
          className="group mb-14 flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-[#eeeae4]/40 transition-colors duration-300 hover:text-[#c7ff00] sm:mb-16"
        >
          <span className="text-sm transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back
        </button>

        <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[8px] uppercase tracking-[0.22em] text-[#eeeae4]/30 sm:mb-8 sm:text-[9px]">
          <span>08</span>
          <span>/</span>
          <span>FRAME</span>
          <span>/</span>
          <span>DIGITAL PRODUCT</span>
          <span>/</span>
          <span>2026</span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-8">
          <h1 className="text-[clamp(58px,12vw,170px)] font-normal uppercase leading-[0.82] tracking-[-0.065em]">
            FRAME
          </h1>

          <span className="mb-2 border border-[#c7ff00]/25 px-3 py-2 text-[7px] uppercase tracking-[0.2em] text-[#c7ff00]/70">
            SELF-INITIATED
          </span>
        </div>

        <div className="mt-10 max-w-[900px] sm:mt-12 md:mt-14">
          <p className="text-[18px] leading-[1.55] tracking-[-0.02em] text-[#eeeae4]/60 sm:text-[21px] sm:leading-[1.5] md:text-[25px]">
            A conceptual collaboration product designed to bring clients,
            designers and developers into one clear creative workflow.
          </p>
        </div>

        <div className="mt-12 grid max-w-[900px] grid-cols-2 gap-x-8 gap-y-8 border-t border-[#eeeae4]/10 pt-8 sm:mt-14 sm:grid-cols-4 md:mt-16">
          <div>
            <p className="mb-2 text-[7px] uppercase tracking-[0.2em] text-[#eeeae4]/25">
              TYPE
            </p>
            <p className="text-[10px] uppercase tracking-[0.12em] text-[#eeeae4]/65">
              Digital Product
            </p>
          </div>

          <div>
            <p className="mb-2 text-[7px] uppercase tracking-[0.2em] text-[#eeeae4]/25">
              YEAR
            </p>
            <p className="text-[10px] uppercase tracking-[0.12em] text-[#eeeae4]/65">
              2026
            </p>
          </div>

          <div>
            <p className="mb-2 text-[7px] uppercase tracking-[0.2em] text-[#eeeae4]/25">
              ROLE
            </p>
            <p className="text-[10px] uppercase tracking-[0.12em] text-[#eeeae4]/65">
              Product Design
            </p>
          </div>

          <div>
            <p className="mb-2 text-[7px] uppercase tracking-[0.2em] text-[#eeeae4]/25">
              SCOPE
            </p>
            <p className="text-[10px] uppercase tracking-[0.12em] text-[#eeeae4]/65">
              UI / UX · Product
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          STORY
      ===================================================== */}
      <section className="border-t border-[#eeeae4]/10 px-[5vw] py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-[1250px]">

          <div className="mb-10 flex items-center justify-between sm:mb-12">
            <span className="text-[8px] uppercase tracking-[0.24em] text-[#eeeae4]/30">
              02 / STORY
            </span>

            <span className="text-[8px] uppercase tracking-[0.2em] text-[#eeeae4]/20">
              PRODUCT / COLLABORATION
            </span>
          </div>


          {/* Opening */}
          <p className="max-w-[1180px] text-[clamp(23px,3.2vw,42px)] font-normal leading-[1.08] tracking-[-0.045em] text-[#eeeae4]">
            Creative projects rarely live in one place. An idea begins in a
            conversation, moves into a brief, becomes a design, collects
            feedback, changes direction and eventually becomes something real.
            The problem is not the work itself. It is everything that happens
            between those moments.
          </p>


          {/* Body */}
          <div className="mt-12 max-w-[1180px] space-y-8 text-[16px] leading-[1.75] tracking-[-0.01em] text-[#eeeae4]/55 sm:mt-14 sm:space-y-9 sm:text-[18px] md:mt-16 md:text-[20px]">

            <p>
              FRAME was imagined around that gap — a shared digital workspace
              where everyone involved in a project can understand what is
              happening, what needs attention and what comes next.
            </p>

            <p>
              Instead of separating briefs, conversations, files, feedback
              and approvals across different tools, the experience brings
              them into one connected project space.
            </p>

          </div>


          {/* Product Visual 01 */}
          <div className="mt-14 sm:mt-16 md:mt-20">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[7px] uppercase tracking-[0.2em] text-[#eeeae4]/25">
                01 / PROJECT OVERVIEW
              </span>

              <span className="text-[7px] uppercase tracking-[0.2em] text-[#eeeae4]/20">
                FRAME
              </span>
            </div>

            <OverviewScreen />
          </div>


          {/* Continuation */}
          <div className="mt-14 max-w-[1180px] text-[16px] leading-[1.75] tracking-[-0.01em] text-[#eeeae4]/55 sm:mt-16 sm:text-[18px] md:mt-20 md:text-[20px]">

            <p>
              The interface was designed around visibility. A client should be
              able to understand progress without entering the details. A
              designer should be able to see feedback in context. A developer
              should know what has been approved and what is still moving.
            </p>

          </div>


          {/* Product Visual 02 */}
          <div className="mt-12 sm:mt-14 md:mt-16">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[7px] uppercase tracking-[0.2em] text-[#eeeae4]/25">
                02 / WORKSPACE
              </span>

              <span className="text-[7px] uppercase tracking-[0.2em] text-[#eeeae4]/20">
                CONNECTED WORKFLOW
              </span>
            </div>

            <WorkspaceScreen />
          </div>


          {/* More story */}
          <div className="mt-14 max-w-[1180px] space-y-8 text-[16px] leading-[1.75] tracking-[-0.01em] text-[#eeeae4]/55 sm:mt-16 sm:space-y-9 sm:text-[18px] md:mt-20 md:text-[20px]">

            <p>
              The product therefore becomes less about managing tasks and more
              about keeping everyone aligned. The goal is to make the state of
              a project understandable without forcing every person to follow
              every conversation.
            </p>

            <p>
              Every interaction was designed to reduce unnecessary
              back-and-forth — from leaving feedback directly on a design to
              reviewing project milestones and moving an item from discussion
              to approved.
            </p>

          </div>


          {/* Product Visual 03 + 04 */}
          <div className="mt-14 grid gap-4 sm:mt-16 md:mt-20 md:grid-cols-2">

            <div>
              <div className="mb-4">
                <span className="text-[7px] uppercase tracking-[0.2em] text-[#eeeae4]/25">
                  03 / DESIGN REVIEW
                </span>
              </div>

              <ReviewScreen />
            </div>

            <div>
              <div className="mb-4">
                <span className="text-[7px] uppercase tracking-[0.2em] text-[#eeeae4]/25">
                  04 / APPROVALS
                </span>
              </div>

              <ApprovalScreen />
            </div>

          </div>


          {/* Closing story */}
          <div className="mt-14 max-w-[1180px] text-[16px] leading-[1.75] tracking-[-0.01em] text-[#eeeae4]/55 sm:mt-16 sm:text-[18px] md:mt-20 md:text-[20px]">

            <p>
              Visually, FRAME follows the same philosophy. Strong hierarchy,
              restrained typography and controlled spacing create an interface
              that feels professional without becoming heavy. The product
              stays quiet enough for the work to remain the focus.
            </p>

          </div>


          {/* Timeline */}
          <div className="mt-12 sm:mt-14 md:mt-16">
            <TimelineScreen />
          </div>


          {/* Final thought */}
          <div className="mt-14 max-w-[1050px] sm:mt-16 md:mt-20">
            <p className="text-[clamp(21px,2.6vw,34px)] leading-[1.15] tracking-[-0.035em] text-[#eeeae4]">
              FRAME is a product concept built around a simple idea: when
              everyone can see the same picture, better work can happen.
            </p>
          </div>


          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2 sm:mt-14">
            {[
              "DIGITAL PRODUCT",
              "PRODUCT DESIGN",
              "UI / UX",
              "COLLABORATION",
              "CONCEPT",
            ].map((tag) => (
              <span
                key={tag}
                className="border border-[#eeeae4]/10 px-3 py-2 text-[7px] uppercase tracking-[0.18em] text-[#eeeae4]/35"
              >
                {tag}
              </span>
            ))}
          </div>


          {/* Bottom Back */}
          <button
            onClick={() => router.back()}
            className="group mt-16 flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-[#eeeae4]/40 transition-colors duration-300 hover:text-[#c7ff00] sm:mt-20"
          >
            <span className="text-sm transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Case Studies
          </button>

        </div>
      </section>
    </main>
  );
}