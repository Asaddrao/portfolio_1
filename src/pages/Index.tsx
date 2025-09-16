import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { HomeBio } from "@/components/HomeBio";
import { Stats } from "@/components/Stats";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { CallToAction } from "@/components/CallToAction";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <HomeBio />
      <Stats />
      <Skills />
      <Projects />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;