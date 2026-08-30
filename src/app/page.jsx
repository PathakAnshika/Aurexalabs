import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Impact from "../components/Impact";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
export default function Home() {

  return (
    <main className="site">
      <Navbar />
      
     

      <section className="hero">
        {/* Geometric background */}
        <div className="hero-shapes" aria-hidden="true">
          <span className="shape shape-1" />
          <span className="shape shape-2" />
          <span className="shape shape-3" />
          <span className="shape shape-4" />
          <span className="shape shape-5" />
        </div>

        {/* Left visual */}
        <div className="hero-image">
          <img
            src="/image/hero-bg.png"
            alt="Aurexa Labs visual"
          />
        </div>

        {/* Right content */}
     <div className="hero-content">

  <p className="hero-label">
    DIGITAL STUDIO
  </p>

  <h1>
    <span className="hero-title-word hero-title-word-1">
      DIGITAL
    </span>
    <br />
    <span className="hero-title-word hero-title-word-2">
      DESIGN &
    </span>
    <br />
    <span className="hero-title-word hero-title-word-3">
      DEVELOPMENT
    </span>
  </h1>

  <div className="hero-line" />

  {/* DESKTOP */}
  <p className="hero-description hero-description-desktop">
    We craft meaningful digital experiences where strategy,
    design and technology come together to create products
    people remember, use and return to — built with purpose,
    designed for people and ready for what comes next.
  </p>

  {/* MOBILE */}
  <p className="hero-description hero-description-mobile">
    We craft meaningful digital experiences
    <br />
    where strategy, design and technology
    <br />
    come together to create products people
    <br />
    remember, use and return to — built with
    <br />
    purpose, designed for people and ready
    <br />
    for what comes next.
  </p>

  <a href="#work" className="hero-cta">
    VIEW OUR WORK
    <span>↗</span>
  </a>

</div>

        {/* Bottom categories */}
        <div className="hero-bottom">
          <span>DESIGN</span>
          <i>/</i>
          <span>DEVELOPMENT</span>
          <i>/</i>
          <span>AI SOLUTIONS</span>
        </div>
      </section>

      <FeaturedWork />
     <Services />
     <Process />
     <Impact />
     <About />
     <Clients />
     <Contact /> 
    </main>
    
  );
   
}

