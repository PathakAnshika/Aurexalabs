import Link from "next/link";

const selectedWork = [
  {
    number: "01",
    title: "GYMPRO",
    category: "WEBSITE / SAAS / UI DESIGN",
    year: "2026",
    image: "/image/gym.png",
    slug: "gympro",
    description:
      "A complete digital experience for a modern gym management platform, combining product positioning with a clear SaaS interface.",
    size: "large",
    align: "left",
  },
  {
    number: "02",
    title: "SHRI CHANDRESHWAR DHAM",
    category: "WEB / DIGITAL EXPERIENCE",
    year: "2026",
    image: "/image/SCM1.png",
    slug: "shri-chandreshwar",
    description:
      "A digital experience created to bring the identity, presence and spiritual character of Shri Chandreshwar Dham online.",
    size: "large",
    align: "right",
  },
  {
    number: "03",
    title: "PROJECT MANAGEMENT SYSTEM",
    category: "WEB APPLICATION / DASHBOARD",
    year: "2026",
    image: "/image/project.png",
    slug: "project-management",
    description:
      "A structured business application designed to manage projects, tasks, teams and everyday operations from one place.",
    size: "medium",
    align: "left",
  },
  {
    number: "04",
    title: "BILLING MANAGEMENT",
    category: "BUSINESS SOFTWARE / POS",
    year: "2026",
    image: "/image/Billing.png",
    slug: "billing-management",
    description:
      "A practical billing system built to simplify sales, customers, products, collections and day-to-day business management.",
    size: "medium",
    align: "right",
  },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="overflow-hidden bg-[#101010] px-[5vw] py-24 text-[#eeeae4] sm:py-28 md:py-36"
    >
      {/* ================= HEADER ================= */}

      <div className="border-t border-[#eeeae4]/10 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="text-[9px] tracking-[0.28em] text-[#c7ff00]">
                01
              </span>

              <span className="text-[9px] tracking-[0.28em] text-[#817b75]">
                SELECTED WORK
              </span>
            </div>

            <h2 className="max-w-[700px] text-[clamp(48px,6vw,88px)] font-normal leading-[0.86] tracking-[-0.065em]">
              A FEW THINGS
              <br />
              <span className="text-[#eeeae4]/30">
                WE'VE BUILT.
              </span>
            </h2>
          </div>

          <p className="max-w-[360px] text-[12px] leading-6 text-[#817b75] sm:text-[13px] sm:leading-7">
            Digital work across websites, ecommerce, applications and
            business systems — built for different kinds of businesses.
          </p>

        </div>
      </div>


      {/* ================= PROJECTS ================= */}

      <div className="mt-20 space-y-24 sm:mt-28 sm:space-y-32 md:mt-36 md:space-y-40">

        {selectedWork.map((project) => (

          <Link
            key={project.number}
            href={`/work/${project.slug}`}
            className={`group block ${
              project.align === "right"
                ? "md:ml-auto md:w-[86%]"
                : "md:mr-auto md:w-[92%]"
            }`}
          >

            {/* PROJECT META */}

            <div className="mb-5 flex items-center justify-between">

              <div className="flex items-center gap-3">
                <span className="text-[9px] tracking-[0.2em] text-[#c7ff00]">
                  {project.number}
                </span>

                <span className="h-px w-7 bg-[#eeeae4]/15" />

                <span className="text-[8px] tracking-[0.2em] text-[#625d57] sm:text-[9px]">
                  {project.category}
                </span>
              </div>

              <span className="text-[8px] tracking-[0.2em] text-[#625d57]">
                {project.year}
              </span>

            </div>


            {/* ================= IMAGE ================= */}

            {/* IMAGE */}
<div className="relative overflow-hidden rounded-[24px] bg-[#080808] sm:rounded-[30px]">

  <div className="flex aspect-[2/1] w-full items-center justify-center overflow-hidden bg-[#080808]">

    <img
      src={project.image}
      alt={project.title}
      className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
    />

  </div>

  {/* subtle overlay */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101010]/25 via-transparent to-transparent opacity-50" />

  {/* project number */}
  <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#eeeae4]/20 bg-[#101010]/40 text-[8px] tracking-[0.15em] backdrop-blur-sm sm:left-7 sm:top-7">
    {project.number}
  </div>

  {/* arrow */}
  <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-[#c7ff00]/40 bg-[#101010]/70 text-[#c7ff00] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-7 sm:right-7">
    ↗
  </div>

</div>


            {/* ================= INFO ================= */}

            <div className="mt-6 flex flex-col gap-5 border-b border-[#eeeae4]/10 pb-7 sm:mt-7 sm:pb-8 md:flex-row md:items-end md:justify-between">

              <div>

                <h3 className="max-w-[900px] text-[clamp(32px,4.5vw,64px)] font-normal leading-[0.88] tracking-[-0.055em] transition-colors duration-500 group-hover:text-[#c7ff00]">
                  {project.title}
                </h3>

              </div>


              <div className="flex max-w-[370px] flex-col gap-3">

                <span className="text-[8px] tracking-[0.2em] text-[#625d57]">
                  {project.category}
                </span>

                <p className="text-[12px] leading-6 text-[#817b75] sm:text-[13px] sm:leading-7">
                  {project.description}
                </p>

              </div>

            </div>

          </Link>

        ))}

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="mt-16 flex flex-col gap-5 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">

        <span className="text-[9px] tracking-[0.22em] text-[#625d57] sm:text-[10px]">
          WEB / PRODUCT / SYSTEMS / DIGITAL
        </span>

        <Link
          href="/case-studies"
          className="group inline-flex items-center gap-4 border-b border-[#eeeae4]/20 pb-2.5 text-[9px] font-medium tracking-[0.25em] text-[#eeeae4] transition-all duration-300 hover:border-[#c7ff00] hover:text-[#c7ff00]"
        >
          <span>VIEW ALL WORK</span>

          <span className="text-[15px] leading-none text-[#c7ff00] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </Link>

      </div>

    </section>
  );
}