import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import taskManagerImage from "@/assets/project-taskmanager.jpg";
import analyticsImage from "@/assets/project-analytics.jpg";
import weatherImage from "@/assets/project-weather.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce solution designed for modern businesses. Features a responsive design, secure payment processing, inventory management, and real-time order tracking. Built with performance and scalability in mind.",
      image: ecommerceImage,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      results: [
        "40% increase in conversion rates",
        "10,000+ products managed",
        "99.9% uptime achieved",
        "Reduced load times by 60%"
      ],
      timeline: "6 months",
      role: "Full-Stack Developer"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management application with real-time synchronization. Features include drag-and-drop kanban boards, team collaboration tools, time tracking, and advanced reporting capabilities.",
      image: taskManagerImage,
      technologies: ["Vue.js", "Firebase", "Socket.io", "Vuetify", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      results: [
        "Used by 500+ teams worldwide",
        "30% improvement in project delivery",
        "Real-time collaboration for 100+ users",
        "Mobile-first responsive design"
      ],
      timeline: "4 months",
      role: "Frontend Lead"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "An enterprise-grade analytics platform providing comprehensive insights into business metrics. Features interactive data visualizations, custom report generation, and real-time data processing from multiple sources.",
      image: analyticsImage,
      technologies: ["React", "D3.js", "Python", "FastAPI", "MongoDB", "Apache Kafka"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      results: [
        "Processes 1M+ data points daily",
        "50% faster decision-making",
        "Custom dashboards for 20+ departments",
        "Automated reporting system"
      ],
      timeline: "8 months",
      role: "Data Visualization Specialist"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "A feature-rich weather application providing accurate forecasts, severe weather alerts, and historical climate data. Includes location-based services, interactive maps, and personalized weather insights.",
      image: weatherImage,
      technologies: ["React Native", "OpenWeather API", "Redux", "Maps SDK", "Push Notifications"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      results: [
        "50,000+ active users",
        "4.8/5 star rating on app stores",
        "99.5% forecast accuracy",
        "Supports 100+ languages"
      ],
      timeline: "3 months",
      role: "Mobile Developer"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-text-secondary hover:text-primary transition-colors mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                My Projects
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Explore my portfolio of web applications, showcasing modern development practices, 
                innovative solutions, and measurable business impact.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-elegant transition-all duration-500">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-cols-[1fr_1.2fr]' : 'lg:grid-cols-[1.2fr_1fr]'}`}>
                  {/* Image Section */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl lg:text-3xl font-bold text-text-primary mb-2">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-text-secondary">
                        <span>{project.role}</span>
                        <span>•</span>
                        <span>{project.timeline}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-0 space-y-6">
                      <p className="text-text-secondary leading-relaxed text-lg">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-text-primary mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Results */}
                      <div>
                        <h4 className="font-semibold text-text-primary mb-3">Key Results</h4>
                        <ul className="space-y-2">
                          {project.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-text-secondary">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <Button className="flex-1 sm:flex-none">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button variant="outline" className="flex-1 sm:flex-none">
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16 p-12 bg-gradient-primary rounded-lg text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Like what you see?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's collaborate on your next project and create something amazing together.
            </p>
            <Link to="/#contact">
              <Button size="lg" variant="secondary" className="hover:bg-primary-foreground/90">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;