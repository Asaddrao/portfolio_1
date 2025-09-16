import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Smartphone, Star } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 80 },
        { name: "Angular", level: 75 },
      ],
      color: "bg-blue-500/10 border-blue-500/20",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Database,
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 82 },
        { name: "GraphQL", level: 78 },
        { name: "REST APIs", level: 95 },
      ],
      color: "bg-green-500/10 border-green-500/20",
      iconColor: "text-green-600 dark:text-green-400"
    },
    {
      icon: Globe,
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 90 },
        { name: "Terraform", level: 72 },
        { name: "Monitoring", level: 80 },
      ],
      color: "bg-purple-500/10 border-purple-500/20",
      iconColor: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: Smartphone,
      title: "Mobile & Design",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "Figma", level: 88 },
        { name: "Adobe XD", level: 75 },
        { name: "UI/UX", level: 85 },
        { name: "Prototyping", level: 82 },
      ],
      color: "bg-orange-500/10 border-orange-500/20",
      iconColor: "text-orange-600 dark:text-orange-400"
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-6 w-6 text-primary fill-primary" />
            <Badge variant="secondary" className="text-sm font-medium px-4 py-1">
              Technical Expertise
            </Badge>
            <Star className="h-6 w-6 text-primary fill-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 bg-gradient-to-r from-text-primary to-primary bg-clip-text">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, scalable web applications from concept to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`group hover-scale shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${category.color} backdrop-blur-sm animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`h-8 w-8 ${category.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-text-primary group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-text-muted text-sm">Professional Level</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-text-primary group-hover/skill:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-text-muted font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 150) + (skillIndex * 100)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="text-center">
                    <p className="text-sm text-text-muted">
                      {category.skills.length} Technologies Mastered
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-text-muted text-sm uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-text-muted text-sm uppercase tracking-wide">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-text-muted text-sm uppercase tracking-wide">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-text-muted text-sm uppercase tracking-wide">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}