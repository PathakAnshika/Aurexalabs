"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CaseStudyPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  /* ESC TO CLOSE */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* SEND INQUIRY */
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send inquiry."
        );
      }

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setError(
        err.message || "Something went wrong."
      );
    } finally {
      setSending(false);
    }
  };

  /* LOCK BACKGROUND SCROLL */
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#101010] text-[#eeeae4]">

      {/* ================= BACK ================= */}

      <div className="absolute left-[5vw] top-8 z-20 sm:top-10">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="
            group
            inline-flex
            items-center
            gap-3
            text-[8px]
            tracking-[0.22em]
            text-[#eeeae4]/35
            transition-colors
            duration-300
            hover:text-[#c7ff00]
            sm:text-[9px]
          "
        >
          <span className="text-[11px] transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>

          BACK
        </button>
      </div>

      {/* ================= MAIN ================= */}

      <section className="flex min-h-screen flex-col items-center justify-center px-[6vw]">

        {/* STATEMENT */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 45,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            max-w-[1200px]
            text-center
            text-[clamp(38px,7.5vw,105px)]
            font-semibold
            leading-[0.98]
            tracking-[-0.06em]
          "
        >
          We haven’t explored AI
          <br />

          with a client yet.
          <br />

          <span className="text-[#eeeae4]/35">
            Maybe you’ll be the first.
          </span>
        </motion.h1>

        {/* ================= CTA ================= */}

        <motion.button
          type="button"
          onClick={() => {
            setModalOpen(true);
            setSuccess(false);
            setError("");
          }}
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group
            mt-14
            inline-flex
            cursor-pointer
            items-center
            gap-4
            border
            border-[#c7ff00]/40
            bg-transparent
            px-6
            py-4
            text-[8px]
            tracking-[0.22em]
            text-[#c7ff00]
            transition-all
            duration-300
            hover:bg-[#c7ff00]
            hover:text-[#101010]
            sm:mt-16
            sm:px-7
            sm:py-4
            sm:text-[9px]
          "
        >
          SHARE YOUR IDEA WITH US

          <span
            className="
              text-[13px]
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          >
            ↗
          </span>
        </motion.button>
      </section>

    
{/* ================= MODAL ================= */}

<AnimatePresence>
  {modalOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-[#080808]/85
        px-4
        py-5
        backdrop-blur-md
        sm:px-8
        sm:py-8
      "
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          setModalOpen(false);
        }
      }}
    >

      {/* ================= MODAL PANEL ================= */}

      <motion.div
  initial={{
    opacity: 0,
    y: 30,
    scale: 0.97,
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  exit={{
    opacity: 0,
    y: 20,
    scale: 0.97,
  }}
  transition={{
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    relative
    flex
    max-h-[90vh]
    w-full
    max-w-[980px]
    flex-col
    overflow-hidden
    border
    border-[#eeeae4]/10
    bg-[#111111]
    shadow-[0_30px_100px_rgba(0,0,0,0.65)]
  "
>

        {/* TOP NEON LINE */}

        <div
          className="
            absolute
            left-0
            top-0
            z-20
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#c7ff00]/70
            to-transparent
          "
        />

        {/* ================= TOP BAR ================= */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-[#eeeae4]/8
            px-6
            py-5
            sm:px-9
            sm:py-6
          "
        >

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c7ff00]" />

            <span className="text-[8px] tracking-[0.25em] text-[#eeeae4]/40 sm:text-[9px]">
              PROJECT INQUIRY
            </span>
          </div>

          {/* CLOSE */}

          <button
            type="button"
            onClick={() => setModalOpen(false)}
            aria-label="Close modal"
            className="
              group
              relative
              flex
              h-9
              w-9
              shrink-0
              cursor-pointer
              items-center
              justify-center
              border
              border-[#eeeae4]/15
              bg-[#111111]
              text-[#eeeae4]/45
              transition-all
              duration-300
              hover:border-[#c7ff00]
              hover:bg-[#c7ff00]
              hover:text-[#101010]
            "
          >
            <span
              className="
                absolute
                h-px
                w-4
                rotate-45
                bg-current
                transition-transform
                duration-300
                group-hover:rotate-[135deg]
              "
            />

            <span
              className="
                absolute
                h-px
                w-4
                -rotate-45
                bg-current
                transition-transform
                duration-300
                group-hover:-rotate-[135deg]
              "
            />
          </button>

        </div>

        {/* ================= SCROLLABLE CONTENT ================= */}

        <div className="overflow-y-auto">

          <div className="px-6 py-9 sm:px-9 sm:py-11">

            {/* HEADING */}

            <div className="mb-9">

              <p className="mb-3 text-[8px] tracking-[0.25em] text-[#c7ff00]/60 sm:text-[9px]">
                AUREXA LABS
              </p>

              <h2
                className="
                  max-w-[560px]
                  text-[clamp(40px,7vw,72px)]
                  font-medium
                  uppercase
                  leading-[0.9]
                  tracking-[-0.055em]
                "
              >
                Let&apos;s make
                <br />

                <span className="text-[#eeeae4]/30">
                  it real.
                </span>
              </h2>

              <p className="mt-6 max-w-[500px] text-[13px] leading-6 text-[#eeeae4]/40 sm:text-[14px]">
                Tell us what you&apos;re thinking. A product, an
                experiment, an automation or simply an idea worth
                exploring.
              </p>

            </div>

            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >

              {/* NAME + EMAIL */}

              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">

                <div>
                  <label className="mb-3 block text-[8px] tracking-[0.2em] text-[#eeeae4]/30">
                    YOUR NAME
                  </label>

                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter your name"
                    required
                    className="
                      w-full
                      border-b
                      border-[#eeeae4]/12
                      bg-transparent
                      pb-3
                      text-[14px]
                      text-[#eeeae4]
                      outline-none
                      placeholder:text-[#eeeae4]/20
                      transition-colors
                      duration-300
                      focus:border-[#c7ff00]/60
                    "
                  />
                </div>

                <div>
                  <label className="mb-3 block text-[8px] tracking-[0.2em] text-[#eeeae4]/30">
                    EMAIL
                  </label>

                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    placeholder="you@email.com"
                    required
                    className="
                      w-full
                      border-b
                      border-[#eeeae4]/12
                      bg-transparent
                      pb-3
                      text-[14px]
                      text-[#eeeae4]
                      outline-none
                      placeholder:text-[#eeeae4]/20
                      transition-colors
                      duration-300
                      focus:border-[#c7ff00]/60
                    "
                  />
                </div>

              </div>

              {/* PROJECT TYPE */}

              <div>
                <label className="mb-3 block text-[8px] tracking-[0.2em] text-[#eeeae4]/30">
                  WHAT ARE YOU BUILDING?
                </label>

                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      service: e.target.value,
                    })
                  }
                  required
                  className="
                    w-full
                    border-b
                    border-[#eeeae4]/12
                    bg-[#111111]
                    pb-3
                    text-[14px]
                    text-[#eeeae4]/60
                    outline-none
                    transition-colors
                    duration-300
                    focus:border-[#c7ff00]/60
                  "
                >
                  <option value="" disabled>
                    Select project type
                  </option>

                  <option value="Website">
                    Website
                  </option>

                  <option value="Web Application">
                    Web Application
                  </option>

                  <option value="Mobile Application">
                    Mobile Application
                  </option>

                  <option value="AI / Automation">
                    AI / Automation
                  </option>

                  <option value="UI / UX Design">
                    UI / UX Design
                  </option>

                  <option value="Something Else">
                    Something Else
                  </option>
                </select>
              </div>

              {/* MESSAGE */}

              <div>
                <label className="mb-3 block text-[8px] tracking-[0.2em] text-[#eeeae4]/30">
                  TELL US ABOUT IT
                </label>

                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  placeholder="A few words about your idea..."
                  required
                  className="
                    w-full
                    resize-none
                    border-b
                    border-[#eeeae4]/12
                    bg-transparent
                    pb-3
                    text-[14px]
                    leading-6
                    text-[#eeeae4]
                    outline-none
                    placeholder:text-[#eeeae4]/20
                    transition-colors
                    duration-300
                    focus:border-[#c7ff00]/60
                  "
                />
              </div>

              {/* SUBMIT */}

              <div className="pt-2">

                <button
                  type="submit"
                  disabled={sending}
                  className="
                    group
                    inline-flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-center
                    gap-5
                    border
                    border-[#c7ff00]
                    bg-[#c7ff00]
                    px-6
                    py-4
                    text-[8px]
                    font-medium
                    tracking-[0.22em]
                    text-[#101010]
                    transition-all
                    duration-300
                    hover:bg-transparent
                    hover:text-[#c7ff00]
                    sm:w-auto
                    sm:px-8
                  "
                >
                  {sending ? "SENDING..." : "SEND INQUIRY"}

                  {!sending && (
                    <span
                      className="
                      text-[13px]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                    >
                      ↗
                    </span>
                  )}
                </button>

              </div>

              {success && (
                <div className="border-l border-[#c7ff00] pl-4">
                  <p className="text-[9px] tracking-[0.18em] text-[#c7ff00]">
                    MESSAGE RECEIVED.
                  </p>

                  <p className="mt-2 text-[12px] leading-5 text-[#eeeae4]/40">
                    Thanks for reaching out. We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              {error && (
                <p className="text-[10px] leading-5 text-red-400">
                  {error}
                </p>
              )}

            </form>

          </div>

          {/* ================= BOTTOM ================= */}

          <div className="border-t border-[#eeeae4]/8 px-6 py-4 sm:px-9">

            <div className="flex items-center justify-between">

              <span className="text-[7px] tracking-[0.2em] text-[#eeeae4]/20">
                AUREXA LABS
              </span>

              <span className="text-[7px] tracking-[0.2em] text-[#eeeae4]/20">
                INDIA / WORLDWIDE
              </span>

            </div>

          </div>

        </div>

      </motion.div>

    </motion.div>
  )}
</AnimatePresence>

    </main>
  );
}