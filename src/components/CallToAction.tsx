import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function CallToAction() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-text-primary">
              Ready to Build Something
              <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Let's collaborate and turn your vision into a digital reality. 
              I'm here to help you create solutions that make an impact.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link to="/projects">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/20 text-text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-4 rounded-xl backdrop-blur-sm bg-background/50 transition-all duration-300 hover:-translate-y-1"
              >
                View My Portfolio
              </Button>
            </Link>
          </div>
          
          <div className="pt-8">
            <p className="text-sm text-text-muted">
              Available for freelance projects and full-time opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}