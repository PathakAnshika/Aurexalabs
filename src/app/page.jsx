import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import FeaturedWork from "@/components/FeaturedWork";
import BigStatement from "@/components/Bigstatement";
import Services from "@/components/Services";
import Process from "@/components/Process";
import BuiltForBuisness from "../components/BuiltForBuissness";
// import Industries from "../components/Industries";
// import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
export default function Home() {

  return (
    <main className="site">
      <Navbar />


     
     
      <Hero />

      <FeaturedWork />
    <BigStatement />
     <Services />
     <Process />
     <BuiltForBuisness />
     {/* <Industries /> */}
     {/* <About /> */}
     <Clients />
     <Contact /> 
    </main>
    
  );
   
}

