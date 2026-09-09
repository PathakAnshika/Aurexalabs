export default function BigStatement() {
  return (
    <section className="relative overflow-hidden bg-[#101010] px-[2vw] pb-16 pt-4 text-[#eeeae4] sm:pb-20 sm:pt-6 md:pb-24 md:pt-8">

      {/* Top meta */}
      <div className="mb-10 flex items-center justify-between sm:mb-12 md:mb-14">
        <span className="text-[9px] tracking-[0.25em] text-[#c7ff00] sm:text-[10px]">
          02 / OUR APPROACH
        </span>

        <span className="hidden text-[9px] tracking-[0.2em] text-[#eeeae4]/25 sm:block sm:text-[10px]">
          DIGITAL STUDIO / AUREXA
        </span>
      </div>


      {/* Statement */}
      <h2
        className="
          w-full
          text-[clamp(38px,6.8vw,125px)]
          font-normal
          uppercase
          leading-[0.9]
          tracking-[-0.045em]

          sm:tracking-[-0.055em]
          md:tracking-[-0.065em]
        "
      >

        {/* Desktop */}
        <span className="hidden md:block">
          I BUILT AUREXA TO TURN
          <span className="text-[#eeeae4]/35">
            {" "}CURIOSITY INTO CRAFT.
          </span>
          <br />

          <span className="text-[#eeeae4]/35">
            TECHNOLOGY INTO
          </span>{" "}
          <span>
            SOMETHING REAL.
          </span>
        </span>


        {/* Mobile */}
        <span className="block md:hidden">
          I BUILT AUREXA
          <br />

          <span className="text-[#eeeae4]/35">
            TO TURN CURIOSITY
          </span>
          <br />

          INTO CRAFT.
          <br />

          <span className="text-[#eeeae4]/35">
            TECHNOLOGY INTO
          </span>
          <br />

          SOMETHING REAL.
        </span>

      </h2>

    </section>
  );
}