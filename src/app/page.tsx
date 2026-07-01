import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import CtaBig from "@/components/CtaBig";
import ServiceArea from "@/components/ServiceArea";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Reveal>
          <TrustBadges />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <Portfolio />
        </Reveal>
        <Reveal>
          <ProcessSteps />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <CtaBig />
        </Reveal>
        <Reveal>
          <ServiceArea />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
