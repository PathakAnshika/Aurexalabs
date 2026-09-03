"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = {
  "shri-chandreshwar": {
    number: "01",
    client: "SHRI CHANDRESHWAR DHAM",
    category: "DIGITAL EXPERIENCE",
    year: "2026",

    title: "Building a digital presence for a place of faith.",

    intro:
      "A thoughtful digital experience designed to bring the spiritual identity of Shri Chandreshwar Dham into the digital world while keeping its sense of faith, culture and community at the centre.",

    overview:
      "Shri Chandreshwar Dham is a place deeply connected with devotion, spirituality and the local community. The challenge was not simply to create a website, but to create a digital space that could communicate the essence of the Dham to people before they ever arrived.",

    challenge:
      "The digital experience needed to balance two very different worlds. It had to feel modern and accessible while remaining respectful to the spiritual and cultural identity of the place. Information such as the Dham's story, upcoming festivals, donations, scholarship initiatives, gallery and contact details needed to be organised in a way that felt natural rather than overwhelming.",

    approach:
      "We approached the project by first understanding the identity behind the Dham. Instead of treating it like a conventional informational website, we focused on creating a calm digital journey where visitors could discover the place, understand its purpose and find important information without friction.",

    built: [
      "A structured digital presence for the Dham",
      "Clear storytelling around its spiritual identity",
      "Dedicated sections for festivals and important updates",
      "Donation and community-focused information",
      "Scholarship programme communication",
      "Gallery and visual storytelling",
      "Accessible contact and location information",
      "Responsive experience across devices",
    ],

    outcome:
      "The result is a digital presence that gives Shri Chandreshwar Dham a clearer voice online. The website brings together spirituality, information and community initiatives in one experience while preserving the calm and meaningful character of the place.",

    closing:
      "A digital experience built not just to inform, but to create a first connection with a place of faith.",
  },

  prinvick: {
    number: "02",
    client: "PRINVICK",
    category: "ECOMMERCE",
    year: "2026",

    title: "Turning a product catalogue into a digital storefront.",

    intro:
      "An ecommerce experience focused on clarity, product discovery and a smoother path from browsing to purchase.",

    overview:
      "Prinvick needed a digital storefront that could present its products clearly while making the overall shopping journey simple and intuitive.",

    challenge:
      "The challenge was to organise product information without making the experience feel crowded. Customers needed to quickly understand what was available, explore products and move towards purchase with minimal friction.",

    approach:
      "We focused on a clean information hierarchy, straightforward navigation and product-first interactions. Every part of the experience was considered around one question: how can the customer find what they need faster?",

    built: [
      "Product-focused ecommerce structure",
      "Clear category and navigation system",
      "Responsive product presentation",
      "Simplified browsing experience",
      "Conversion-focused interaction patterns",
      "Mobile-friendly shopping journey",
    ],

    outcome:
      "The resulting experience gives the product catalogue a stronger digital structure and creates a more focused path between discovery and purchase.",

    closing:
      "Less friction. Better discovery. A storefront designed around the customer.",
  },

  "inventory-management": {
    number: "03",
    client: "INVENTORY MANAGEMENT",
    category: "APPLICATION",
    year: "2026",

    title: "Making complex inventory workflows feel simple.",

    intro:
      "A practical digital system designed to bring clarity to inventory operations and everyday workflows.",

    overview:
      "Inventory management can quickly become complicated when products, quantities, transactions and operational data live across disconnected processes.",

    challenge:
      "The system needed to handle operational complexity without passing that complexity on to the people using it every day.",

    approach:
      "We focused on simplifying information architecture and making important actions easy to discover. The experience was structured around the actual workflow rather than around the technical complexity behind it.",

    built: [
      "Inventory tracking workflows",
      "Structured product information",
      "Operational dashboards",
      "Data-focused interfaces",
      "Simplified daily actions",
      "Responsive application experience",
    ],

    outcome:
      "The system turns a complex operational process into a more understandable and manageable digital workflow.",

    closing:
      "Complex systems don't have to feel complicated.",
  },

  "erp-hrms": {
    number: "04",
    client: "ERP / HRMS",
    category: "SYSTEM DESIGN",
    year: "2026",

    title: "Designing systems people can actually work with.",

    intro:
      "A structured enterprise experience designed around people, processes and everyday business operations.",

    overview:
      "ERP and HRMS platforms contain large amounts of information and often serve different users with different responsibilities.",

    challenge:
      "The challenge was to make a powerful system feel understandable while maintaining the depth required for business operations.",

    approach:
      "We focused on hierarchy, consistency and predictable interactions. Instead of overwhelming users with information, the interface guides them towards the tasks and data relevant to their role.",

    built: [
      "Structured enterprise navigation",
      "Dashboard and workflow design",
      "HR-focused interfaces",
      "Data management experiences",
      "Consistent component patterns",
      "Role-oriented information hierarchy",
    ],

    outcome:
      "The resulting system provides a more coherent foundation for everyday business operations and makes complex workflows easier to understand.",

    closing:
      "Good system design gets out of the user's way.",
  },

  "tenneco-system": {
    number: "05",
    client: "TENNECO SYSTEM",
    category: "APPLICATION",
    year: "2026",

    title: "A focused digital system for operational efficiency.",

    intro:
      "A purpose-built application experience created around operational clarity and efficiency.",

    overview:
      "The Tenneco system required a focused interface capable of supporting structured operational workflows.",

    challenge:
      "The experience needed to make important information accessible while reducing unnecessary steps in day-to-day usage.",

    approach:
      "We designed the system around workflow first. Information was organised according to how users actually interact with the application, creating a more direct relationship between data and action.",

    built: [
      "Operational workflows",
      "Structured application interface",
      "Data organisation",
      "Task-focused interactions",
      "Responsive system design",
      "Reusable UI patterns",
    ],

    outcome:
      "The application creates a more focused environment for operational work and provides a clearer structure for everyday tasks.",

    closing:
      "When the workflow is clear, the work becomes clearer too.",
  },

  "brand-uiux": {
    number: "06",
    client: "BRAND / UIUX",
    category: "DESIGN",
    year: "2026",

    title: "Creating visual systems that give ideas a voice.",

    intro:
      "A design-led exploration of identity, interface and visual language.",

    overview:
      "Strong digital products need more than functional interfaces. They need a visual language that communicates who they are and why they matter.",

    challenge:
      "The challenge was to create an identity and interface language that could remain distinctive while still being practical and scalable.",

    approach:
      "We explored typography, spacing, composition and interaction as parts of one connected system rather than treating branding and UI as separate exercises.",

    built: [
      "Visual identity direction",
      "Typography system",
      "Interface language",
      "UI/UX design",
      "Design system foundations",
      "Digital brand applications",
    ],

    outcome:
      "The work creates a stronger visual foundation where identity and user experience speak the same language.",

    closing:
      "A good visual system doesn't decorate an idea. It gives it a voice.",
  },

  "ai-automation": {
    number: "07",
    client: "AI AUTOMATION",
    category: "AI / AUTOMATION",
    year: "2026",

    title: "Replacing repetitive work with intelligent workflows.",

    intro:
      "An automation-focused digital system exploring how AI can remove repetitive work and create more efficient processes.",

    overview:
      "Many business processes contain repetitive actions that consume time without creating meaningful value. AI and automation can change that relationship.",

    challenge:
      "The goal was not to add AI simply because it was possible. The real challenge was identifying where intelligent automation could genuinely improve the workflow.",

    approach:
      "We focused on practical use cases where automation could reduce manual effort, improve response times and create a more consistent experience.",

    built: [
      "AI-assisted workflows",
      "Customer support automation",
      "Automated repetitive processes",
      "Structured information handling",
      "Intelligent response systems",
      "Workflow optimisation",
    ],

    outcome:
      "The resulting approach demonstrates how AI can become part of the workflow itself rather than simply being another feature added on top.",

    closing:
      "The best automation is the work users no longer have to think about.",
  },

  "digital-product": {
    number: "08",
    client: "DIGITAL PRODUCT",
    category: "PRODUCT DESIGN",
    year: "2026",

    title: "Designing digital products people want to keep using.",

    intro:
      "A product design exploration focused on usefulness, simplicity and long-term interaction.",

    overview:
      "Digital products compete for attention, but the products people return to are usually the ones that make something easier, clearer or more enjoyable.",

    challenge:
      "The challenge was to create an experience that felt immediately understandable while still offering enough depth to remain useful over time.",

    approach:
      "We focused on the core user journey first, then built the experience around clarity, hierarchy and repeatable interaction patterns.",

    built: [
      "Product experience strategy",
      "User journey planning",
      "Interface design",
      "Interaction patterns",
      "Responsive product experience",
      "Scalable design foundations",
    ],

    outcome:
      "The result is a product experience designed around repeat usage rather than one-time interaction.",

    closing:
      "Useful products earn attention. Great products earn a return visit.",
  },
};

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CaseStudyPage({ params }) {
  const study = caseStudies[params.slug];

  if (!study) {
    return (
      <main className="min-h-screen bg-[#0b0b0b] px-[5vw] py-20 text-[#eeeae4]">
        <Link
          href="/case-studies"
          className="text-[10px] tracking-[0.2em] text-[#eeeae4]/50 hover:text-[#c7ff00]"
        >
          ← BACK TO CASE STUDIES
        </Link>

        <h1 className="mt-20 text-5xl tracking-[-0.05em]">
          Case study not found.
        </h1>
      </main>
    );
  }

  const currentNumber = Number(study.number);

  const nextStudy =
    currentNumber < 8
      ? Object.values(caseStudies)[currentNumber]
      : Object.values(caseStudies)[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0b] text-[#eeeae4]">

      {/* HERO */}
      <section className="relative px-[5vw] pb-20 pt-16 sm:pb-28 sm:pt-20 md:min-h-[90vh] md:pb-24 md:pt-24">

        <Link
          href="/case-studies"
          className="inline-flex items-center gap-3 text-[9px] tracking-[0.22em] text-[#eeeae4]/45 transition-colors hover:text-[#c7ff00] sm:text-[10px]"
        >
          ← BACK TO CASE STUDIES
        </Link>

        <div className="mt-24 max-w-[1200px] sm:mt-28 md:mt-32">

          <div className="mb-8 flex items-center gap-4">
            <span className="text-[9px] tracking-[0.25em] text-[#c7ff00]">
              {study.number}
            </span>

            <span className="h-px w-10 bg-[#eeeae4]/20" />

            <span className="text-[9px] tracking-[0.22em] text-[#eeeae4]/35">
              {study.category}
            </span>

            <span className="text-[9px] tracking-[0.22em] text-[#eeeae4]/20">
              / {study.year}
            </span>
          </div>

          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="show"
            className="max-w-[1150px] text-[clamp(56px,10vw,150px)] font-medium leading-[0.82] tracking-[-0.075em]"
          >
            {study.client}
            <span className="text-[#c7ff00]">.</span>
          </motion.h1>

          <motion.p
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15 }}
            className="mt-12 max-w-[720px] text-lg leading-7 text-[#eeeae4]/55 sm:mt-16 sm:text-xl sm:leading-8 md:text-2xl md:leading-9"
          >
            {study.title}
          </motion.p>

        </div>

        <div className="absolute bottom-8 right-[5vw] hidden text-[8px] tracking-[0.2em] text-[#eeeae4]/20 md:block">
          SCROLL TO EXPLORE ↓
        </div>
      </section>


      {/* INTRO */}
      <section className="border-t border-[#eeeae4]/10 px-[5vw] py-20 sm:py-24 md:py-32">

        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">

          <div>
            <span className="text-[9px] tracking-[0.25em] text-[#c7ff00]">
              THE PROJECT
            </span>

            <div className="mt-7 text-[9px] leading-5 tracking-[0.18em] text-[#eeeae4]/25">
              <p>CONTEXT.</p>
              <p>THINKING.</p>
              <p>BUILDING.</p>
            </div>
          </div>

          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-[900px] text-[clamp(28px,4vw,56px)] font-medium leading-[1] tracking-[-0.05em]"
          >
            {study.intro}
          </motion.p>

        </div>

      </section>


      {/* STORY */}
      <section className="border-t border-[#eeeae4]/10 px-[5vw]">

        <StoryBlock
          number="01"
          label="THE CONTEXT"
          title="Understanding where we started."
          text={study.overview}
        />

        <StoryBlock
          number="02"
          label="THE CHALLENGE"
          title="What needed to change."
          text={study.challenge}
        />

        <StoryBlock
          number="03"
          label="THE APPROACH"
          title="How we thought about it."
          text={study.approach}
        />

        {/* BUILT */}
        <div className="grid border-t border-[#eeeae4]/10 py-20 sm:py-24 md:grid-cols-[1fr_2fr] md:gap-20 md:py-32">

          <div>
            <span className="text-[9px] tracking-[0.25em] text-[#c7ff00]">
              04 — WHAT WE BUILT
            </span>
          </div>

          <div>
            <h2 className="max-w-[700px] text-[clamp(36px,5vw,70px)] font-medium leading-[0.9] tracking-[-0.06em]">
              Turning ideas into something real.
            </h2>

            <div className="mt-12 border-t border-[#eeeae4]/10">

              {study.built.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-5 border-b border-[#eeeae4]/10 py-5 sm:py-6"
                >
                  <span className="text-[8px] tracking-[0.2em] text-[#c7ff00]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm text-[#eeeae4]/55 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </div>

        </div>


        <StoryBlock
          number="05"
          label="THE OUTCOME"
          title="What came out of the process."
          text={study.outcome}
        />

      </section>


      {/* CLOSING */}
      <section className="border-t border-[#eeeae4]/10 px-[5vw] py-24 sm:py-32 md:py-40">

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-[1050px]"
        >
          <span className="text-[9px] tracking-[0.25em] text-[#c7ff00]">
            THE TAKEAWAY
          </span>

          <h2 className="mt-8 text-[clamp(40px,6vw,88px)] font-medium leading-[0.88] tracking-[-0.065em]">
            {study.closing}
          </h2>
        </motion.div>

      </section>


      {/* NEXT CASE */}
      <section className="border-t border-[#eeeae4]/10 px-[5vw] py-14 sm:py-16 md:py-20">

        <Link
          href={`/case-studies/${Object.keys(caseStudies)[currentNumber % 8]}`}
          className="group flex items-end justify-between gap-8"
        >

          <div>
            <span className="text-[8px] tracking-[0.25em] text-[#eeeae4]/25">
              NEXT CASE STUDY
            </span>

            <h3 className="mt-5 text-[clamp(30px,5vw,65px)] font-medium leading-[0.9] tracking-[-0.06em] transition-colors duration-300 group-hover:text-[#c7ff00]">
              {nextStudy.client}
              <span className="text-[#c7ff00]">.</span>
            </h3>
          </div>

          <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
            ↗
          </span>

        </Link>

      </section>


      {/* FOOTER */}
      <footer className="flex flex-col gap-3 border-t border-[#eeeae4]/10 px-[5vw] py-6 text-[8px] tracking-[0.18em] text-[#eeeae4]/25 sm:py-7 sm:text-[9px] md:flex-row md:items-center md:justify-between">
        <span>AUREXA LABS</span>
        <span>DIGITAL / DESIGN / TECHNOLOGY</span>
        <span>BEYOND THE ORDINARY.</span>
      </footer>

    </main>
  );
}


function StoryBlock({ number, label, title, text }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid border-t border-[#eeeae4]/10 py-20 sm:py-24 md:grid-cols-[1fr_2fr] md:gap-20 md:py-32"
    >

      <div>
        <span className="text-[9px] tracking-[0.25em] text-[#c7ff00]">
          {number} — {label}
        </span>
      </div>

      <div>
        <h2 className="max-w-[800px] text-[clamp(36px,5vw,70px)] font-medium leading-[0.9] tracking-[-0.06em]">
          {title}
        </h2>

        <p className="mt-10 max-w-[720px] text-base leading-7 text-[#eeeae4]/40 sm:text-lg sm:leading-8">
          {text}
        </p>
      </div>

    </motion.div>
  );
}