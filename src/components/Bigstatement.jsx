export default function BigStatement() {
  return (
    <section className="relative overflow-hidden bg-[#101010] px-[2vw] pb-16 pt-4 text-[#eeeae4] sm:pb-20 sm:pt-6 md:pb-24 md:pt-8">
      {/* Top meta */}
     <div className="mb-10 flex items-center justify-between sm:mb-12 md:mb-14">
        <span className="text-[9px] tracking-[0.25em] text-[#c7ff00] sm:text-[10px]">
          02 / OUR APPROACH
        </span>

        <span className="hidden text-[9px] tracking-[0.2em] text-[#eeeae4]/25 sm:block sm:text-[10px]">
          DIGITAL STUDIO / AUREXA LABS
        </span>
      </div>

      {/* Statement */}
      <h2 className="w-full text-[clamp(52px,7vw,125px)] font-normal leading-[0.86] tracking-[-0.07em]">
        <span className="block whitespace-nowrap">
          WE BUILD{" "}
          <span className="text-[#eeeae4]/35">DIGITAL</span>
        </span>

        <span className="block whitespace-nowrap">
          <span className="text-[#c7ff00]">EXPERIENCES</span>{" "}
          THAT MOVE
        </span>

        <span className="block whitespace-nowrap">
          <span className="text-[#eeeae4]/35">BUSINESSES</span>{" "}
          FORWARD.
        </span>
      </h2>

    </section>
  );
}