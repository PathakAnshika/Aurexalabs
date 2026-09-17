export default function BigStatement() {
  return (
    <section className="relative overflow-hidden bg-[#101010] px-[2vw] pb-20 pt-6 text-[#eeeae4] sm:pb-24 sm:pt-8 md:pb-28 md:pt-10">

      {/* Top meta */}
      <div className="mb-12 flex items-center justify-between sm:mb-14 md:mb-16">
        <span className="text-[9px] tracking-[0.25em] text-[#c7ff00] sm:text-[10px]">
          02 / OUR APPROACH
        </span>

        <span className="hidden text-[9px] tracking-[0.2em] text-[#eeeae4]/25 sm:block sm:text-[10px]">
          DIGITAL STUDIO / AUREXA
        </span>
      </div>


      {/* BIG STATEMENT */}

   <h2
  className="
    w-full
    text-[clamp(40px,5.5vw,98px)]
    font-normal
    uppercase
    leading-[0.86]
    tracking-[-0.055em]
    md:tracking-[-0.06em]
  "
>
  {/* DESKTOP */}
  <span className="hidden md:block">

    <span className="block">
      I BUILT AUREXA TO TURN CURIOSITY
    </span>

    <span className="block text-[#eeeae4]/35">
      INTO CRAFT, IDEAS INTO FORM,
    </span>

    <span className="block">
      <span className="text-[#eeeae4]/35">
        AND TECHNOLOGY INTO
      </span>{" "}
      REAL EXPERIENCES.
    </span>

  </span>


  {/* MOBILE */}
<span className="block md:hidden">

  <span className="block">
    I BUILT AUREXA
  </span>

  <span className="block text-[#eeeae4]/35">
    TO TURN CURIOSITY
  </span>

  <span className="block">
    INTO CRAFT.
  </span>

  <span className="block text-[#eeeae4]/35">
    IDEAS INTO FORM.
  </span>

  <span className="block">
    TECHNOLOGY INTO
  </span>

  <span className="block text-[#eeeae4]/35">
    REAL EXPERIENCES.
  </span>

</span>
</h2>
    </section>
  );
}