import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "WEB",
      label: "DIGITAL EXPERIENCES",
      text: "Websites and digital experiences built to give ambitious businesses a stronger presence.",
      side: "left",
    },
    {
      number: "02",
      title: "PRODUCT",
      label: "APPLICATIONS & PLATFORMS",
      text: "Digital products designed around people, purpose and the way businesses actually work.",
      side: "right",
    },
    {
      number: "03",
      title: "SYSTEMS",
      label: "BUSINESS TECHNOLOGY",
      text: "Custom software and platforms that make complex operations simpler.",
      side: "left",
    },
    {
      number: "04",
      title: "AI",
      label: "INTELLIGENCE & AUTOMATION",
      text: "AI-powered workflows that remove repetitive work and create smarter processes.",
      side: "right",
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
                index === services.length - 1
                  ? "border-b"
                  : ""
              }`}
            >
              <div
                className={`grid items-center gap-8 md:grid-cols-2 ${
                  service.side === "right"
                    ? "md:text-right"
                    : ""
                }`}
              >
                {/* LEFT SIDE */}
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

                    <h2 className="text-[clamp(64px,9vw,135px)] font-normal leading-[0.75] tracking-[-0.075em] transition-transform duration-500 group-hover:translate-x-2">
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

                    <span className="text-[9px] tracking-[0.2em] text-[#625d57] sm:text-[10px]">
                      {service.label}
                    </span>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div
                  className={`max-w-[360px] ${
                    service.side === "right"
                      ? "md:col-start-1 md:row-start-1 md:justify-self-end md:text-left"
                      : "md:col-start-2 md:justify-self-start md:text-left"
                  }`}
                >
                  <p className="text-[12px] leading-6 text-[#eeeae4]/30 transition-colors duration-500 group-hover:text-[#eeeae4]/55 sm:text-[13px] sm:leading-7">
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
          DESIGN / DEVELOPMENT / INTELLIGENCE
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