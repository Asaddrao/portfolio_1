import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HomeBio() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/10 to-background" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                About Asad Rao
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-text-secondary leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience 
                crafting digital solutions that bridge the gap between innovative design 
                and robust functionality.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                I believe in writing clean, maintainable code and creating user experiences 
                that delight and inspire. Every project is an opportunity to push boundaries 
                and deliver exceptional results.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                When I'm not immersed in code, you'll find me exploring emerging technologies, 
                contributing to open-source projects, and mentoring junior developers.
              </p>
            </div>
            
            <Link to="/about">
              <Button className="group bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mt-6">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="space-y-6">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <div className="w-3 h-3 bg-primary rounded-sm"></div>
                  </div>
                  Quick Overview
                </h3>
                <div className="space-y-5">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-text-muted font-medium">Location</span>
                    <span className="font-semibold text-text-primary">San Francisco, CA</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-text-muted font-medium">Experience</span>
                    <span className="font-semibold text-text-primary">5+ Years</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-text-muted font-medium">Specialization</span>
                    <span className="font-semibold text-text-primary">Full-Stack Development</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-text-muted font-medium">Status</span>
                    <span className="font-semibold text-primary flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                      Available for Projects
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <div className="w-3 h-3 bg-primary rounded-sm"></div>
                  </div>
                  Core Technologies
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "React & TypeScript",
                    "Node.js & Python", 
                    "PostgreSQL & MongoDB",
                    "AWS & Docker"
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center text-text-secondary group-hover:text-text-primary transition-colors">
                      <div className="w-2 h-2 bg-primary/60 rounded-full mr-3"></div>
                      {tech}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}