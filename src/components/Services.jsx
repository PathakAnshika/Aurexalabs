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
      className="relative overflow-hidden bg-[#101010] px-[5vw] py-24 text-[#eeeae4] sm:py-32 md:py-40"
    >
      {/* TOP LABEL */}
      <div className="flex items-center justify-between">
        <span className="text-[9px] tracking-[0.25em] text-[#c7ff00] sm:text-[10px]">
          04 / SERVICES
        </span>

        <span className="text-[9px] tracking-[0.2em] text-[#eeeae4]/20 sm:text-[10px]">
          AUREXA LABS
        </span>
      </div>

      {/* SERVICE FIELD */}
      <div className="relative mt-20 sm:mt-28 md:mt-32">

        {/* CENTER LINE */}
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#eeeae4]/10 md:block" />

        {/* SERVICES */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`group relative border-t border-[#eeeae4]/10 py-12 sm:py-16 md:py-20 ${
                index === services.length - 1 ? "border-b" : ""
              }`}
            >
              <div
                className={`grid items-center gap-8 md:grid-cols-2 ${
                  service.side === "right" ? "md:text-right" : ""
                }`}
              >

                {/* MAIN SERVICE */}
                <div
                  className={`${
                    service.side === "right"
                      ? "md:col-start-2"
                      : "md:col-start-1"
                  }`}
                >
                  <div
                    className={`flex items-center gap-5 ${
                      service.side === "right"
                        ? "md:flex-row-reverse md:justify-start"
                        : ""
                    }`}
                  >
                    <span className="text-[9px] tracking-[0.2em] text-[#625d57] transition-colors duration-500 group-hover:text-[#c7ff00]">
                      {service.number}
                    </span>

                    <h2
                      className={`
                        font-normal leading-[0.78] tracking-[-0.075em]
                        transition-transform duration-500
                        group-hover:translate-x-2
                        ${
                          service.title === "TECHNOLOGY"
                            ? "text-[clamp(54px,6.7vw,108px)]"
                            : "text-[clamp(64px,9vw,135px)]"
                        }
                      `}
                    >
                      {service.title}
                    </h2>
                  </div>

                  <div
                    className={`mt-7 flex items-center gap-4 ${
                      service.side === "right"
                        ? "md:justify-end"
                        : ""
                    }`}
                  >
                    <span className="h-px w-8 bg-[#c7ff00]/40" />

                    <span className="text-[10px] font-medium tracking-[0.18em] text-[#eeeae4]/65 transition-colors duration-500 group-hover:text-[#c7ff00] sm:text-[11px]">
  {service.label}
</span>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div
                  className={`max-w-[500px] ${
                    service.side === "right"
                      ? "md:col-start-1 md:row-start-1 md:justify-self-end md:text-left"
                      : "md:col-start-2 md:justify-self-start md:text-left"
                  }`}
                >
                  <p className="text-[14px] leading-7 text-[#eeeae4]/40 transition-colors duration-500 group-hover:text-[#eeeae4]/65 sm:text-[15px] sm:leading-8">
                    {service.text}
                  </p>
                </div>
              </div>

              {/* HOVER ACCENT */}
              <div
                className={`absolute bottom-0 h-px w-0 bg-[#c7ff00] transition-all duration-700 group-hover:w-1/2 ${
                  service.side === "right"
                    ? "right-0"
                    : "left-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM NOTE */}
      <div className="mt-12 flex items-center justify-between sm:mt-16">
        <span className="text-[9px] tracking-[0.2em] text-[#625d57] sm:text-[10px]">
          DIGITAL / CREATIVE / GROWTH / TECHNOLOGY / AI
        </span>

        <Link
          href="/Let's-talk"
          className="group inline-flex items-center gap-4 text-[9px] tracking-[0.25em] text-[#eeeae4] transition-colors duration-300 hover:text-[#c7ff00]"
        >
          START A PROJECT

          <span className="text-[15px] text-[#c7ff00] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}