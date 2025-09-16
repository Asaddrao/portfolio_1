import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-primary/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 dark:opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-12">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="block text-text-primary mb-2">Asad Rao</span>
              <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              I craft digital experiences that blend beautiful design with robust functionality. 
              Passionate about clean code and user-centered solutions that make a difference.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary/20 text-text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-4 rounded-xl backdrop-blur-sm bg-background/50 transition-all duration-300 hover:-translate-y-1"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8 animate-fade-in delay-300">
            <Button variant="ghost" size="sm" className="hover:text-primary hover:scale-110 transition-all duration-300 p-3">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary hover:scale-110 transition-all duration-300 p-3">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary hover:scale-110 transition-all duration-300 p-3">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-2 rounded-full bg-background/20 backdrop-blur-sm border border-primary/20">
            <ArrowDown className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}