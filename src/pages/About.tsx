import { Navigation } from "@/components/Navigation";
import { Bio } from "@/components/Bio";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { SkillsSummary } from "@/components/SkillsSummary";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Add padding top to account for fixed navigation */}
      <div className="pt-16">
        <Bio />
        <Education />
        <Experience />
        <SkillsSummary />
      </div>
      
      <Footer />
    </main>
  );
};

export default About;