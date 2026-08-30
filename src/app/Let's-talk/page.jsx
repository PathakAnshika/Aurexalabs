"use client";

import { useState } from "react";
import Link from "next/link";

export default function LetsTalkPage() {
 const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setError("");

  const form = e.currentTarget;

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    service: formData.get("service"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Unable to send your inquiry."
      );
    }

    setSubmitted(true);
    form.reset();

  } catch (err) {
    console.error("CONTACT SUBMISSION ERROR:", err);

    setError(
      err.message || "Unable to send your inquiry."
    );

  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-[#070707] text-[#f1f1ed]">

      {/* ================= HEADER ================= */}

      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-10 lg:px-12 lg:pb-28 lg:pt-14">

        <Link
          href="/"
          className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/35 transition-colors duration-300 hover:text-[#d9ff3f]"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>

          Back home
        </Link>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.25fr_0.75fr]">

          {/* LEFT */}

          <div>

            <p className="mb-7 text-xs uppercase tracking-[0.28em] text-[#d9ff3f]">
              LET&apos;S TALK / 01
            </p>

            <h1 className="max-w-5xl text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.84] tracking-[-0.065em]">
              Let&apos;s make
              <br />
              something{" "}
              <span className="text-white/25">
                happen.
              </span>
            </h1>

            <div className="mt-8 h-px w-12 bg-[#d9ff3f]" />

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
              Have an idea, a project or simply a problem you want to
              solve? Tell us about it. We&apos;ll figure out the next step
              together.
            </p>

          </div>

          {/* SIDE INFO */}

          <div className="flex items-end lg:justify-end">

            <div className="w-full max-w-sm border border-white/[0.07] bg-white/[0.015] p-7">

              <p className="text-[10px] uppercase tracking-[0.22em] text-white/30">
                AUREXA LABS
              </p>

              <div className="mt-10 h-px bg-white/[0.07]" />

              <div className="mt-7 space-y-5">

                <div>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-white/25">
                    EMAIL
                  </span>

                  <a
                    href="mailto:work.aurexalabs@gmail.com"
                    className="mt-2 inline-block text-sm text-white/65 transition-colors hover:text-[#d9ff3f]"
                  >
                    work.aurexalabs@gmail.com
                  </a>
                </div>

                <div>
  <span className="block text-[10px] uppercase tracking-[0.18em] text-white/25">
    PHONE
  </span>

  <a
    href="tel:+918815631914"
    className="mt-2 inline-block text-sm text-white/65 transition-colors hover:text-[#d9ff3f]"
  >
    +91 8815631914
  </a>
</div>

                <div>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-white/25">
                    RESPONSE
                  </span>

                  <p className="mt-2 text-sm text-white/40">
                    Usually within 1–2 business days.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FORM SECTION ================= */}

      <section className="border-y border-white/[0.08]">

        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[0.38fr_1fr]">

          {/* LABEL */}

          <div className="border-b border-white/[0.08] px-6 py-10 lg:border-b-0 lg:border-r lg:px-12 lg:py-14">

            <p className="text-xs uppercase tracking-[0.25em] text-[#d9ff3f]">
              Start here
            </p>

            <h2 className="mt-6 max-w-xs text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
              Tell us what you&apos;re building.
            </h2>

            <p className="mt-6 max-w-xs text-sm leading-6 text-white/30">
              No complicated brief needed. A few details are enough to
              start the conversation.
            </p>

          </div>

          {/* FORM */}

          <div className="px-6 py-12 lg:px-16 lg:py-16">

            {submitted ? (
              <div className="flex min-h-[500px] flex-col justify-center">

                <span className="text-xs uppercase tracking-[0.25em] text-[#d9ff3f]">
                  MESSAGE RECEIVED
                </span>

                <h2 className="mt-6 max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                  We&apos;ll be
                  <br />
                  in touch.
                </h2>

                <p className="mt-7 max-w-md text-sm leading-7 text-white/35">
                  Thanks for reaching out. We&apos;ll review your message
                  and get back to you soon.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-10 w-fit text-xs uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-[#d9ff3f]"
                >
                  Send another message ↗
                </button>

              </div>
            ) : (

              <form
                onSubmit={handleSubmit}
                className="max-w-3xl"
              >

                {/* NAME */}

                <div className="border-b border-white/[0.12]">

                  <label
                    htmlFor="name"
                    className="block pt-2 text-[10px] uppercase tracking-[0.2em] text-white/25"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-transparent py-5 text-lg text-white outline-none placeholder:text-white/20"
                  />

                </div>

                {/* EMAIL */}

                <div className="border-b border-white/[0.12]">

                  <label
                    htmlFor="email"
                    className="block pt-7 text-[10px] uppercase tracking-[0.2em] text-white/25"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-transparent py-5 text-lg text-white outline-none placeholder:text-white/20"
                  />

                </div>

                {/* COMPANY */}

                <div className="border-b border-white/[0.12]">

                  <label
                    htmlFor="company"
                    className="block pt-7 text-[10px] uppercase tracking-[0.2em] text-white/25"
                  >
                    Company / Brand
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company"
                    className="w-full bg-transparent py-5 text-lg text-white outline-none placeholder:text-white/20"
                  />

                </div>

                {/* SERVICE */}

                <div className="border-b border-white/[0.12]">

                  <label
                    htmlFor="service"
                    className="block pt-7 text-[10px] uppercase tracking-[0.2em] text-white/25"
                  >
                    What do you need?
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="w-full cursor-pointer bg-[#070707] py-5 text-lg text-white/70 outline-none"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="designing">
                      Designing
                    </option>

                    <option value="web">
                      Web Development
                    </option>

                    <option value="applications">
                      Applications
                    </option>

                    <option value="ai">
                      AI & Automation
                    </option>

                    <option value="product-development">
                      Product Development
                    </option>

                    <option value="digital-transformation">
                      Digital Transformation
                    </option>

                    <option value="maintenance-growth">
                      Maintenance & Growth
                    </option>

                    <option value="other">
                      Something else
                    </option>
                  </select>

                </div>

                {/* BUDGET */}

                <div className="border-b border-white/[0.12]">

                  <label
                    htmlFor="budget"
                    className="block pt-7 text-[10px] uppercase tracking-[0.2em] text-white/25"
                  >
                    Approx. budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="w-full cursor-pointer bg-[#070707] py-5 text-lg text-white/70 outline-none"
                  >
                    <option value="" disabled>
                      Select a range
                    </option>

                    <option value="under-25k">
                      Under ₹25K
                    </option>

                    <option value="25k-50k">
                      ₹25K – ₹50K
                    </option>

                    <option value="50k-1l">
                      ₹50K – ₹1L
                    </option>

                    <option value="1l-2l">
                      ₹1L – ₹2L
                    </option>

                    <option value="2l-plus">
                      ₹2L+
                    </option>

                    <option value="not-sure">
                      Not sure yet
                    </option>
                  </select>

                </div>

                {/* MESSAGE */}

                <div className="border-b border-white/[0.12]">

                  <label
                    htmlFor="message"
                    className="block pt-7 text-[10px] uppercase tracking-[0.2em] text-white/25"
                  >
                    Tell us about it
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us a little about your idea, project or problem..."
                    className="w-full resize-none bg-transparent py-5 text-lg leading-7 text-white outline-none placeholder:text-white/20"
                  />

                </div>

                {/* SUBMIT */}

                <div className="mt-10 flex flex-col justify-between gap-7 sm:flex-row sm:items-end">

                  <p className="max-w-sm text-xs leading-5 text-white/25">
                    By submitting this form, you&apos;re starting a
                    conversation with Aurexa Labs.
                  </p>

                 <button
  type="submit"
  disabled={loading}
  className="group inline-flex w-fit items-center gap-5 border-b border-[#d9ff3f]/50 pb-3 text-sm text-white transition-colors hover:border-[#d9ff3f] hover:text-[#d9ff3f] disabled:cursor-not-allowed disabled:opacity-40"
>
  {loading ? "SENDING..." : "Send inquiry"}

  <span>
    {loading ? "..." : "↗"}
  </span>
</button>

                </div>

              </form>

            )}

          </div>

        </div>

      </section>

      {/* ================= BOTTOM ================= */}

      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">

        <div className="flex flex-col justify-between gap-10 border-t border-white/[0.08] pt-8 md:flex-row md:items-end">

          <div>

            <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              AUREXA LABS
            </p>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/30">
              Design. Technology. Ideas that move things forward.
            </p>

          </div>

          <div className="flex gap-8 text-xs uppercase tracking-[0.16em] text-white/25">

            <Link
              href="/"
              className="transition-colors hover:text-[#d9ff3f]"
            >
              Home
            </Link>

            <Link
              href="/#services"
              className="transition-colors hover:text-[#d9ff3f]"
            >
              Services
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}