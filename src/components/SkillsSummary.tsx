import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Palette, Wrench, Users } from "lucide-react";

export function SkillsSummary() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "React/Next.js", level: 95, experience: "5+ years" },
        { name: "TypeScript", level: 90, experience: "4+ years" },
        { name: "Vue.js", level: 85, experience: "3+ years" },
        { name: "HTML/CSS", level: 95, experience: "5+ years" },
        { name: "Tailwind CSS", level: 90, experience: "3+ years" },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Designing scalable server-side applications and APIs",
      skills: [
        { name: "Node.js", level: 90, experience: "4+ years" },
        { name: "Python", level: 85, experience: "3+ years" },
        { name: "PostgreSQL", level: 85, experience: "4+ years" },
        { name: "MongoDB", level: 80, experience: "3+ years" },
        { name: "GraphQL", level: 75, experience: "2+ years" },
      ],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "Infrastructure management and deployment automation",
      skills: [
        { name: "AWS", level: 85, experience: "3+ years" },
        { name: "Docker", level: 80, experience: "3+ years" },
        { name: "Kubernetes", level: 70, experience: "2+ years" },
        { name: "CI/CD", level: 85, experience: "4+ years" },
        { name: "Terraform", level: 65, experience: "2+ years" },
      ],
    },
    {
      icon: Palette,
      title: "Design & UX",
      description: "Creating intuitive and aesthetically pleasing interfaces",
      skills: [
        { name: "UI/UX Design", level: 80, experience: "4+ years" },
        { name: "Figma", level: 85, experience: "3+ years" },
        { name: "Adobe Creative Suite", level: 75, experience: "3+ years" },
        { name: "Responsive Design", level: 95, experience: "5+ years" },
        { name: "Accessibility", level: 80, experience: "3+ years" },
      ],
    },
  ];

  const softSkills = [
    "Problem Solving", "Team Leadership", "Communication", "Project Management",
    "Mentoring", "Agile/Scrum", "Code Review", "Technical Writing"
  ];

  const tools = [
    "VS Code", "Git", "GitHub", "Postman", "Slack", "Jira", "Notion",
    "Chrome DevTools", "Webpack", "Vite", "Jest", "Cypress"
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Skills Summary
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-text-primary">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
                <p className="text-text-secondary text-sm">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-text-primary">{skill.name}</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {skill.experience}
                          </Badge>
                          <span className="text-sm text-text-muted">{skill.level}%</span>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills & Tools */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-text-primary">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-text-primary">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                Tools & Platforms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}