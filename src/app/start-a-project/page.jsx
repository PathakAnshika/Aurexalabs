"use client";

import { useState } from "react";

const steps = [
  {
    id: 1,
    label: "LET'S START",
    question: "What are we building?",
    description:
      "Tell us what you have in mind. It can be a website, product, business idea or something completely new.",
    options: [
      "Website",
      "Web Application",
      "E-commerce",
      "AI Solution",
      "Digital Product",
      "Not sure yet",
    ],
  },
  {
    id: 2,
    label: "YOUR BUSINESS",
    question: "Tell us about your business.",
    description:
      "What does your business do, who is it for and what are you trying to achieve?",
    type: "textarea",
    placeholder:
      "We are a ___ business helping ___ people with...",
  },
  {
    id: 3,
    label: "THE IDEA",
    question: "What's on your mind?",
    description:
      "Don't worry about making it perfect. Just tell us the idea, problem or opportunity you're thinking about.",
    type: "textarea",
    placeholder:
      "We want to build / improve / solve...",
  },
  {
    id: 4,
    label: "WHAT YOU NEED",
    question: "Where can we help?",
    description:
      "Choose everything that feels relevant. We'll figure out the rest together.",
    options: [
      "Strategy & Ideas",
      "UI / UX Design",
      "Website Development",
      "Application Development",
      "AI & Automation",
      "Complete Product",
    ],
    multiple: true,
  },
  {
    id: 5,
    label: "THE PLAN",
    question: "What are we working with?",
    description:
      "A rough idea is completely fine. This just helps us understand the scale.",
    type: "budget",
    options: [
      "₹25K – ₹50K",
      "₹50K – ₹1L",
      "₹1L – ₹2.5L",
      "₹2.5L+",
      "Let's discuss",
    ],
  },
  {
    id: 6,
    label: "LET'S TALK",
    question: "How can we reach you?",
    description:
      "Leave your details and we'll get back to you to discuss the idea.",
    type: "contact",
  },
];

export default function StartAProject() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // NEW
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const step = steps[currentStep];

  const updateAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [step.id]: value,
    }));
  };

  const handleOption = (option) => {
    if (step.multiple) {
      const existing = answers[step.id] || [];

      updateAnswer(
        existing.includes(option)
          ? existing.filter((item) => item !== option)
          : [...existing, option]
      );
    } else {
      updateAnswer(option);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // =========================
  // SUBMIT TO BACKEND
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/project-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong."
        );
      }

      setSubmitted(true);

    } catch (err) {
      console.error("Submission error:", err);

      setError(
        err.message ||
          "Unable to send your inquiry. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  // =========================
  // SUCCESS SCREEN
  // =========================

  if (submitted) {
    return (
      <main className="project-page">

        <header className="project-header">

          <a href="/" className="project-logo">
            AUREXA<span>.</span>
          </a>

          <a href="/" className="project-back">
            ← BACK TO HOME
          </a>

        </header>

        <section className="project-success">

          <span className="success-label">
            MESSAGE RECEIVED / 06
          </span>

          <h1>
            Let's make
            <br />
            something <em>great.</em>
          </h1>

          <p>
            Thanks for sharing your idea with us.
            We'll take a look and get back to you soon.
          </p>

          <a href="/" className="success-link">
            BACK TO AUREXA <span>↗</span>
          </a>

        </section>

      </main>
    );
  }

  return (
    <main className="project-page">

      {/* ================= HEADER ================= */}

      <header className="project-header">

        <a href="/" className="project-logo">
          AUREXA<span>.</span>
        </a>

        <div className="project-progress">

          <span>
            {String(currentStep + 1).padStart(2, "0")}
          </span>

          <i>/</i>

          <span>
            {String(steps.length).padStart(2, "0")}
          </span>

        </div>

        <a href="/" className="project-back">
          ← BACK
        </a>

      </header>


      {/* ================= PROGRESS LINE ================= */}

      <div className="project-progress-line">

        <span
          style={{
            width: `${((currentStep + 1) / steps.length) * 100}%`,
          }}
        />

      </div>


      {/* ================= MAIN ================= */}

      <section className="project-conversation">

        <div className="project-step-meta">

          <span>
            {step.label}
          </span>

          <small>
            STEP {String(step.id).padStart(2, "0")}
          </small>

        </div>


        <div className="project-question">

          <h1>
            {step.question}
          </h1>

          <p>
            {step.description}
          </p>

        </div>


        <form onSubmit={handleSubmit}>

          {/* ================= OPTIONS ================= */}

          {step.options && (
            <div className="project-options">

              {step.options.map((option, index) => {

                const selected = step.multiple
                  ? (answers[step.id] || []).includes(option)
                  : answers[step.id] === option;

                return (
                  <button
                    key={option}
                    type="button"
                    className={`project-option ${
                      selected ? "selected" : ""
                    }`}
                    onClick={() => handleOption(option)}
                  >

                    <span className="option-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                      {option}
                    </span>

                    <span className="option-arrow">
                      ↗
                    </span>

                  </button>
                );
              })}

            </div>
          )}


          {/* ================= TEXTAREA ================= */}

          {step.type === "textarea" && (
            <textarea
              className="project-textarea"
              value={answers[step.id] || ""}
              onChange={(e) =>
                updateAnswer(e.target.value)
              }
              placeholder={step.placeholder}
              autoFocus
              required
            />
          )}


          {/* ================= CONTACT ================= */}

          {step.type === "contact" && (
            <div className="project-contact-fields">

              {/* NAME */}

              <div className="project-field">

                <label>
                  YOUR NAME
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  value={answers.name || ""}
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  required
                />

              </div>


              {/* EMAIL */}

              <div className="project-field">

                <label>
                  EMAIL
                </label>

                <input
                  type="email"
                  placeholder="you@company.com"
                  value={answers.email || ""}
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  required
                />

              </div>


              {/* COMPANY */}

              <div className="project-field">

                <label>
                  COMPANY / BRAND
                </label>

                <input
                  type="text"
                  placeholder="Your business name"
                  value={answers.company || ""}
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      company: e.target.value,
                    }))
                  }
                />

              </div>

            </div>
          )}


          {/* ================= ERROR ================= */}

          {error && (
            <p className="project-error">
              {error}
            </p>
          )}


          {/* ================= NAVIGATION ================= */}

          <div className="project-navigation">

            <button
              type="button"
              className="project-prev"
              onClick={previousStep}
              disabled={currentStep === 0 || loading}
            >
              ← BACK
            </button>


            {currentStep < steps.length - 1 ? (

              <button
                type="button"
                className="project-next"
                onClick={nextStep}
              >
                CONTINUE
                <span>↗</span>
              </button>

            ) : (

              <button
                type="submit"
                className="project-next"
                disabled={loading}
              >
                {loading ? "SENDING..." : "LET'S TALK"}

                <span>
                  {loading ? "..." : "↗"}
                </span>

              </button>

            )}

          </div>

        </form>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="project-footer">

        <span>
          AUREXA LABS
        </span>

        <span>
          DESIGN / DEVELOPMENT / AI
        </span>

        <span>
          INDIA / WORLDWIDE
        </span>

      </footer>

    </main>
  );
}