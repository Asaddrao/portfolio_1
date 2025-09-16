import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import taskManagerImage from "@/assets/project-taskmanager.jpg";

export function Projects() {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with secure payments, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: ecommerceImage,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App", 
      description: "A collaborative project management app with real-time updates and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Socket.io", "PWA"],
      image: taskManagerImage,
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Highlights from my portfolio showcasing innovative solutions and modern development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-text-primary">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3 pt-2">
                  <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects">
            <Button size="lg" className="hover:bg-primary/90">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}