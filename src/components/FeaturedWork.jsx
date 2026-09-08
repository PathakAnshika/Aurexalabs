import Link from "next/link";

const selectedWork = [
  {
    number: "01",
    title: "SHRI CHANDRESHWAR DHAM",
    category: "DIGITAL EXPERIENCE / WEB",
    year: "2026",
    image: "/image/work1.jpg",
    slug: "shri-chandreshwar",
    description:
      "A digital experience built to bring the identity and presence of a place of faith online.",
  },
  {
    number: "02",
    title: "PRINVICK",
    category: "ECOMMERCE",
    year: "2026",
    image: "/image/work2.jpg",
    slug: "prinvick",
    description:
      "A focused ecommerce experience designed to turn a product catalogue into a digital storefront.",
  },
  {
    number: "03",
    title: "INVENTORY MANAGEMENT",
    category: "APPLICATION / SYSTEM",
    year: "2026",
    image: "/image/work3.jpg",
    slug: "inventory-management",
    description:
      "A practical application designed to make complex inventory workflows simpler and easier to manage.",
  },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="bg-[#101010] px-[5vw] py-24 text-[#eeeae4] sm:py-28 md:py-36"
    >

      {/* ================= HEADER ================= */}
      <div className="mb-16 border-t border-[#eeeae4]/10 pt-6 sm:mb-20 md:mb-24">

        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          <div className="flex items-center gap-3">
            <span className="text-[9px] tracking-[0.28em] text-[#c7ff00]">
              01
            </span>

            <span className="text-[9px] tracking-[0.28em] text-[#817b75]">
              SELECTED WORK
            </span>
          </div>

          <p className="max-w-[420px] text-[13px] leading-6 text-[#817b75] sm:text-sm sm:leading-7">
            A selection of digital work across web, ecommerce,
            applications and systems.
          </p>

        </div>

      </div>


      {/* ================= PROJECTS ================= */}
      <div className="space-y-24 sm:space-y-28 md:space-y-36">

        {selectedWork.map((project, index) => (

          <Link
            key={project.number}
            href={`/work/${project.slug}`}
            className="group block"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[24px] bg-[#080808] sm:rounded-[30px]">

              <div className="aspect-[16/10] w-full overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />

              </div>

              {/* subtle overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101010]/30 via-transparent to-transparent opacity-60" />

              {/* project number */}
              <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#eeeae4]/20 bg-[#101010]/40 text-[8px] tracking-[0.15em] backdrop-blur-sm sm:left-7 sm:top-7">
                {project.number}
              </div>

              {/* arrow */}
              <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-[#c7ff00]/40 bg-[#101010]/70 text-[#c7ff00] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-7 sm:right-7">
                ↗
              </div>

            </div>


            {/* PROJECT INFO */}
            <div className="mt-6 grid gap-5 border-b border-[#eeeae4]/10 pb-7 sm:mt-7 sm:pb-8 md:grid-cols-[1fr_auto] md:items-end">

              <div>

                <div className="mb-3 flex items-center gap-3 text-[8px] tracking-[0.2em] text-[#625d57]">
                  <span>{project.category}</span>
                  <span className="text-[#c7ff00]">/</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="max-w-[900px] text-[clamp(30px,4vw,58px)] font-normal leading-[0.95] tracking-[-0.045em] transition-colors duration-300 group-hover:text-[#c7ff00]">
                  {project.title}
                </h3>

              </div>


              <p className="max-w-[360px] text-[12px] leading-5 text-[#817b75] sm:text-[13px] sm:leading-6 md:text-right">
                {project.description}
              </p>

            </div>

          </Link>

           
        ))}
       <Link
  href="/work"
  className="group relative -top-20 inline-flex items-center gap-4 border-b border-[#eeeae4]/20 pb-2.5 text-[9px] font-medium tracking-[0.25em] text-[#eeeae4] transition-all duration-300 hover:border-[#c7ff00] hover:text-[#c7ff00]"
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