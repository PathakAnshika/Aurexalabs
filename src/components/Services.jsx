"use client";

import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "DIGITAL",
      label: "WEB / UI UX / E-COMMERCE",
      text: "Websites and digital experiences designed to give businesses a stronger, clearer and more memorable digital presence.",
      side: "left",
    },
    {
      number: "02",
      title: "CREATIVE",
      label: "BRANDING / GRAPHICS / TEMPLATES",
      text: "Visual systems and creative assets that help businesses communicate consistently across every touchpoint.",
      side: "right",
    },
    {
      number: "03",
      title: "GROWTH",
      label: "SEO / MARKETING / SOCIAL",
      text: "Digital strategies that help businesses reach the right people, build visibility and turn attention into growth.",
      side: "left",
    },
    {
      number: "04",
      title: "TECHNOLOGY",
      label: "WEB APPS / DESKTOP / SOFTWARE / SYSTEMS",
      text: "Custom applications and business systems built to solve real problems and make operations work better.",
      side: "right",
    },
    {
      number: "05",
      title: "AI",
      label: "AUTOMATION / INTELLIGENCE / WORKFLOWS",
      text: "AI-powered solutions and automation that reduce repetitive work and create smarter ways to operate.",
      side: "left",
    },
  ];

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#101010]
        px-[5vw]
        py-20
        text-[#eeeae4]
        sm:py-28
        md:py-40
      "
    >
      {/* =================================================
          TOP LABEL
      ================================================= */}

      <div className="flex items-center justify-between">
        <span className="text-[9px] tracking-[0.25em] text-[#c7ff00] sm:text-[10px]">
          04 / SERVICES
        </span>

        <span className="hidden text-[9px] tracking-[0.2em] text-[#eeeae4]/20 sm:block sm:text-[10px]">
          AUREXA LABS
        </span>
      </div>


      {/* =================================================
          SERVICE FIELD
      ================================================= */}

      <div className="relative mt-14 sm:mt-24 md:mt-32">

        {/* CENTER LINE — DESKTOP ONLY */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            top-0
            hidden
            w-px
            -translate-x-1/2
            bg-[#eeeae4]/10
            md:block
          "
        />


        {/* =================================================
            SERVICES
        ================================================= */}

        <div className="space-y-0">

          {services.map((service, index) => (
            <div
              key={service.number}
              className={`
                group
                relative
                border-t
                border-[#eeeae4]/10

                py-9
                sm:py-14
                md:py-20

                ${index === services.length - 1 ? "border-b" : ""}
              `}
            >

              <div
                className={`
                  grid
                  items-center
                  gap-7

                  md:grid-cols-2
                  md:gap-8

                  ${
                    service.side === "right"
                      ? "md:text-right"
                      : ""
                  }
                `}
              >

                {/* =================================================
                    MAIN SERVICE
                ================================================= */}

                <div
                  className={`
                    min-w-0

                    ${
                      service.side === "right"
                        ? "md:col-start-2"
                        : "md:col-start-1"
                    }
                  `}
                >

                  <div
                    className={`
                      flex
                      min-w-0
                      items-center
                      gap-3

                      sm:gap-5

                      ${
                        service.side === "right"
                          ? "md:flex-row-reverse md:justify-start"
                          : ""
                      }
                    `}
                  >

                    {/* NUMBER */}

                    <span
                      className="
                        shrink-0
                        text-[8px]
                        tracking-[0.18em]
                        text-[#625d57]
                        transition-colors
                        duration-500
                        group-hover:text-[#c7ff00]

                        sm:text-[9px]
                        sm:tracking-[0.2em]
                      "
                    >
                      {service.number}
                    </span>


                    {/* TITLE */}

                  <h2
  className={`
    whitespace-nowrap
    font-normal
    leading-[0.82]
    tracking-[-0.07em]
    transition-transform
    duration-500
    group-hover:translate-x-1

    ${
      service.title === "TECHNOLOGY"
        ? `
          text-[clamp(36px,11vw,68px)]
          sm:text-[clamp(54px,6.7vw,108px)]
        `
        : `
          text-[clamp(46px,14vw,76px)]
          sm:text-[clamp(64px,9vw,135px)]
        `
    }

    md:group-hover:translate-x-2
  `}
>
  {service.title}
</h2>

                  </div>


                  {/* LABEL */}

                  <div
                    className={`
                      mt-5
                      flex
                      min-w-0
                      items-start
                      gap-3

                      sm:mt-7
                      sm:gap-4

                      ${
                        service.side === "right"
                          ? "md:justify-end"
                          : ""
                      }
                    `}
                  >

                    <span className="mt-[5px] h-px w-5 shrink-0 bg-[#c7ff00]/40 sm:w-8" />

                    <span
                      className="
                        max-w-[calc(100%-32px)]
                        text-[8px]
                        font-medium
                        leading-4
                        tracking-[0.14em]
                        text-[#eeeae4]/65
                        transition-colors
                        duration-500
                        group-hover:text-[#c7ff00]

                        sm:text-[11px]
                        sm:tracking-[0.18em]
                      "
                    >
                      {service.label}
                    </span>

                  </div>

                </div>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <div
                  className={`
                    min-w-0
                    max-w-[500px]

                    ${
                      service.side === "right"
                        ? `
                          md:col-start-1
                          md:row-start-1
                          md:justify-self-end
                          md:text-left
                        `
                        : `
                          md:col-start-2
                          md:justify-self-start
                          md:text-left
                        `
                    }
                  `}
                >

                  <p
                    className="
                      text-[12px]
                      leading-6
                      text-[#eeeae4]/40
                      transition-colors
                      duration-500
                      group-hover:text-[#eeeae4]/65

                      sm:text-[15px]
                      sm:leading-8

                      md:text-[15px]
                    "
                  >
                    {service.text}
                  </p>

                </div>

              </div>


              {/* =================================================
                  HOVER ACCENT
              ================================================= */}

              <div
                className={`
                  absolute
                  bottom-0
                  h-px
                  w-0
                  bg-[#c7ff00]
                  transition-all
                  duration-700
                  group-hover:w-1/2

                  ${
                    service.side === "right"
                      ? "right-0"
                      : "left-0"
                  }
                `}
              />

            </div>
          ))}

        </div>

      </div>


      {/* =================================================
          BOTTOM NOTE
      ================================================= */}

      <div
        className="
          mt-9
          flex
          flex-col
          gap-6

          sm:mt-16

          md:flex-row
          md:items-center
          md:justify-between
          md:gap-4
        "
      >

        <span
          className="
            max-w-full
            text-[8px]
            leading-4
            tracking-[0.14em]
            text-[#625d57]

            sm:text-[10px]
            sm:tracking-[0.2em]
          "
        >
          DIGITAL / CREATIVE / GROWTH / TECHNOLOGY / AI
        </span>


        <Link
          href="/Let's-talk"
          className="
            group
            inline-flex
            w-fit
            items-center
            gap-3
            text-[8px]
            tracking-[0.2em]
            text-[#eeeae4]
            transition-colors
            duration-300
            hover:text-[#c7ff00]

            sm:gap-4
            sm:text-[9px]
            sm:tracking-[0.25em]
          "
        >
          START A PROJECT

          <span
            className="
              text-[14px]
              text-[#c7ff00]
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          >
            ↗
          </span>
        </Link>

      </div>

    </section>
  );
}