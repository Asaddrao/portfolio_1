import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications serving 100K+ users. Architecting microservices and implementing CI/CD pipelines.",
      achievements: [
        "Reduced application load time by 40% through performance optimization",
        "Led a team of 5 developers on a major platform migration",
        "Implemented automated testing reducing bugs by 60%",
        "Mentored 3 junior developers and conducted code reviews",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL", "TypeScript"],
    },
    {
      title: "Full Stack Developer",
      company: "StartupX",
      location: "Palo Alto, CA",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Built MVP and scaled platform from 0 to 50K users. Responsible for both frontend and backend development in a fast-paced startup environment.",
      achievements: [
        "Developed core features that directly contributed to $2M Series A funding",
        "Built real-time chat system handling 10K+ concurrent users",
        "Integrated payment systems processing $500K+ monthly transactions",
        "Implemented responsive design increasing mobile usage by 80%",
      ],
      technologies: ["Vue.js", "Python", "Flask", "MongoDB", "Redis", "Stripe API"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "San Jose, CA",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Developed responsive websites and web applications for diverse clients. Collaborated closely with designers and project managers.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Improved website performance metrics by 35% on average",
        "Created reusable component library adopted across all projects",
        "Established best practices for responsive design",
      ],
      technologies: ["React", "JavaScript", "Sass", "Webpack", "Adobe Creative Suite"],
    },
    {
      title: "Software Developer Intern",
      company: "Google",
      location: "Mountain View, CA",
      period: "Summer 2018",
      type: "Internship",
      description: "Worked on internal tools for developer productivity. Gained experience in large-scale software development practices.",
      achievements: [
        "Contributed to internal tool used by 500+ engineers",
        "Received 'Outstanding Intern' recognition",
        "Presented project to senior engineering leadership",
      ],
      technologies: ["Java", "Angular", "Google Cloud Platform", "Kubernetes"],
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A journey through various roles that shaped my expertise in full-stack development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-text-primary flex items-center mb-2">
                      <Briefcase className="h-5 w-5 text-primary mr-2" />
                      {exp.title}
                    </CardTitle>
                    <div className="text-primary font-semibold text-lg">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Badge variant="outline" className="flex items-center w-fit">
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.period}
                    </Badge>
                    <Badge variant="outline" className="flex items-center w-fit">
                      <MapPin className="h-3 w-3 mr-1" />
                      {exp.location}
                    </Badge>
                    <Badge variant="secondary">{exp.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-text-secondary">{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}