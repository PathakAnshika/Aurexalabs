"use client";

import { useState } from "react";

const questions = [
  {
    id: "stage",
    title: "Where are you in your business journey?",
    subtitle: "This helps us understand where to start.",
    options: [
      { label: "I'm starting a business", value: "starting" },
      { label: "I already run a business", value: "running" },
      { label: "I'm growing my business", value: "growing" },
      { label: "I'm building a new idea", value: "idea" },
      { label: "I'm not sure", value: "unsure" },
    ],
  },
  {
    id: "industry",
    title: "What industry are you in?",
    subtitle: "Choose what best describes your business.",
    options: [
      { label: "Restaurant / Café", value: "restaurant" },
      { label: "Retail / E-commerce", value: "retail" },
      { label: "Real Estate", value: "realestate" },
      { label: "Education", value: "education" },
      { label: "Healthcare", value: "healthcare" },
      { label: "Hospitality", value: "hospitality" },
      { label: "Manufacturing", value: "manufacturing" },
      { label: "Professional Services", value: "professional" },
      { label: "Startup / Technology", value: "startup" },
      { label: "Other", value: "other" },
    ],
  },
  {
    id: "goal",
    title: "What are you trying to achieve?",
    subtitle: "Tell us what you'd like to improve.",
    options: [
      { label: "Get my business online", value: "online" },
      { label: "Get more enquiries / customers", value: "leads" },
      { label: "Start selling online", value: "ecommerce" },
      { label: "Reduce manual work", value: "automation" },
      { label: "Manage my business better", value: "systems" },
      { label: "Build a custom application", value: "application" },
      { label: "Improve my existing website", value: "redesign" },
      { label: "I'm not sure yet", value: "unsure" },
    ],
  },
  {
    id: "presence",
    title: "What do you currently have?",
    subtitle: "There's no wrong answer.",
    options: [
      { label: "Nothing yet", value: "nothing" },
      { label: "Social media only", value: "social" },
      { label: "I have a website", value: "website" },
      { label: "Website + social media", value: "both" },
      { label: "Existing software / system", value: "software" },
      { label: "Not sure", value: "unsure" },
    ],
  },
  {
    id: "budget",
    title: "What's your approximate starting budget?",
    subtitle: "This helps us suggest something practical.",
    options: [
      { label: "Just exploring", value: "exploring" },
      { label: "Under ₹10K", value: "under10" },
      { label: "₹10K – ₹25K", value: "10to25" },
      { label: "₹25K – ₹50K", value: "25to50" },
      { label: "₹50K+", value: "50plus" },
      { label: "Not sure yet", value: "unsure" },
    ],
  },
];

function getRecommendation(answers) {
  if (answers.goal === "ecommerce") {
    return {
      title: "E-commerce Website",
      text: "A focused online store could help your customers discover your products and make enquiries or purchases more easily.",
      features: [
        "Product catalogue",
        "Online enquiries / orders",
        "Payment integration",
        "Mobile-friendly experience",
      ],
    };
  }

  if (
    answers.goal === "automation" ||
    answers.goal === "systems"
  ) {
    return {
      title: "Custom Business System",
      text: "A tailored digital system could help reduce repetitive work and give you a clearer way to manage your business.",
      features: [
        "Custom dashboard",
        "Business data management",
        "Reports & tracking",
        "Workflow automation",
      ],
    };
  }

  if (answers.goal === "application") {
    return {
      title: "Custom Web Application",
      text: "Your idea may benefit from a custom web application built around your specific workflow and users.",
      features: [
        "Custom user experience",
        "Database integration",
        "APIs & integrations",
        "Scalable architecture",
      ],
    };
  }

  if (answers.goal === "redesign") {
    return {
      title: "Website Redesign",
      text: "A modern redesign could improve your digital presence, user experience and the way customers interact with your business.",
      features: [
        "Modern UI/UX",
        "Responsive design",
        "Improved user journey",
        "Performance-focused development",
      ],
    };
  }

  return {
    title: "Business Starter Website",
    text: "A professional website could be a practical first step to establish your digital presence and help customers discover and contact your business.",
    features: [
      "Modern responsive website",
      "Services / product showcase",
      "WhatsApp & enquiry integration",
      "Mobile-friendly experience",
    ],
  };
}

export default function AurexaGuide({ onClose }) {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [showLead, setShowLead] = useState(false);

  const currentQuestion = questions[step];

  const handleAnswer = (value) => {
    const updatedAnswers = {
      ...answers,
      [currentQuestion.id]: value,
    };

    setAnswers(updatedAnswers);

    if (step < questions.length - 1) {
      setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 180);
    } else {
      setTimeout(() => {
        setResult(getRecommendation(updatedAnswers));
      }, 250);
    }
  };

  const restart = () => {
    setStarted(false);
    setStep(0);
    setAnswers({});
    setResult(null);
    setShowLead(false);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-end justify-end bg-black/50 p-4 backdrop-blur-sm sm:p-6">
      <div className="relative flex max-h-[90vh] w-full max-w-[460px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#101010] text-[#eeeae4] shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-[9px] tracking-[0.3em] text-[#c7ff00]/70">
              AUREXA
            </p>

            <h2 className="mt-1 text-sm font-medium tracking-wide">
              GUIDE
            </h2>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-[#c7ff00]/50 hover:text-[#c7ff00]"
            aria-label="Close Aurexa Guide"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-5 py-6">

          {!started && !result && (
            <div className="py-8">
              <span className="text-3xl">✦</span>

              <h3 className="mt-5 text-2xl font-light leading-tight">
                Let’s figure out what your business needs.
              </h3>

              <p className="mt-4 max-w-[360px] text-sm leading-6 text-white/45">
                You don't need to know the technology. Tell us a little
                about your business and we'll help you find a practical
                starting point.
              </p>

              <button
                onClick={() => setStarted(true)}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c7ff00] px-5 py-3 text-[10px] font-medium tracking-[0.18em] text-black transition hover:scale-[1.02]"
              >
                START THE GUIDE
                <span>↗</span>
              </button>

              <p className="mt-4 text-[10px] tracking-wide text-white/25">
                Takes about 60 seconds
              </p>
            </div>
          )}

          {started && !result && currentQuestion && (
            <div>
              <div className="mb-7 flex items-center justify-between">
                <span className="text-[9px] tracking-[0.22em] text-white/30">
                  0{step + 1} / 0{questions.length}
                </span>

                <div className="h-px w-24 bg-white/10">
                  <div
                    className="h-px bg-[#c7ff00] transition-all duration-500"
                    style={{
                      width: `${((step + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <h3 className="text-2xl font-light leading-tight">
                {currentQuestion.title}
              </h3>

              <p className="mt-3 text-sm text-white/40">
                {currentQuestion.subtitle}
              </p>

              <div className="mt-7 space-y-2">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-left text-sm text-white/70 transition duration-300 hover:border-[#c7ff00]/40 hover:bg-[#c7ff00]/[0.06] hover:text-white"
                  >
                    <span>{option.label}</span>

                    <span className="text-white/20 transition group-hover:translate-x-1 group-hover:text-[#c7ff00]">
                      ↗
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {result && !showLead && (
            <div className="py-3">
              <p className="text-[9px] tracking-[0.3em] text-[#c7ff00]/70">
                YOUR AUREXA STARTING POINT
              </p>

              <h3 className="mt-4 text-2xl font-light leading-tight">
                {result.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/45">
                {result.text}
              </p>

              <div className="mt-6 space-y-2">
                {result.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-white/65"
                  >
                    <span className="text-[#c7ff00]">+</span>
                    {feature}
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowLead(true)}
                className="mt-8 flex w-full items-center justify-between rounded-full bg-[#c7ff00] px-5 py-3.5 text-[10px] font-medium tracking-[0.18em] text-black"
              >
                TALK TO AUREXA
                <span>↗</span>
              </button>

              <button
                onClick={restart}
                className="mt-4 w-full text-center text-[10px] tracking-[0.15em] text-white/30 hover:text-white/60"
              >
                START AGAIN
              </button>
            </div>
          )}

          {showLead && (
            <div className="py-3">
              <p className="text-[9px] tracking-[0.3em] text-[#c7ff00]/70">
                ONE LAST STEP
              </p>

              <h3 className="mt-4 text-2xl font-light">
                Let's talk about your project.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                Leave your details and we'll get back to you about your
                recommended starting point.
              </p>

              <form
                className="mt-7 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! We'll be in touch soon.");
                }}
              >
                <input
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#c7ff00]/40"
                />

                <input
                  required
                  placeholder="Business name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#c7ff00]/40"
                />

                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#c7ff00]/40"
                />

                <input
                  placeholder="WhatsApp number (optional)"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#c7ff00]/40"
                />

                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-between rounded-full bg-[#c7ff00] px-5 py-3.5 text-[10px] font-medium tracking-[0.18em] text-black"
                >
                  SEND TO AUREXA
                  <span>↗</span>
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 px-5 py-3">
          <p className="text-[9px] tracking-wide text-white/20">
            AUREXA LABS · DIGITAL PRODUCTS & TECHNOLOGY
          </p>
        </div>
      </div>
    </div>
  );
}