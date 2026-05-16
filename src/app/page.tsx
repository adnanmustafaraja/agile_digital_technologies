import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Blog from "@/components/Blog";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <WhyUs />
      <Blog />
      <ContactCTA />
    </>
  );
}
