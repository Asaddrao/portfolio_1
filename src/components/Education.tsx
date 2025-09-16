import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2017 - 2019",
      gpa: "3.8/4.0",
      focus: "Artificial Intelligence & Human-Computer Interaction",
      achievements: [
        "Dean's List (4 semesters)",
        "Graduate Research Assistant",
        "Published 3 research papers",
      ],
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA", 
      period: "2013 - 2017",
      gpa: "3.7/4.0",
      focus: "Software Systems & Web Technologies",
      achievements: [
        "Summa Cum Laude",
        "President, Computer Science Society",
        "Winner, Annual Hackathon 2016",
      ],
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credential: "SAA-C03",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credential: "PDE",
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credential: "CKA",
    },
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Continuous learning and academic excellence in computer science and technology
          </p>
        </div>

        <div className="space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              Academic Background
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <CardTitle className="text-xl text-text-primary">
                        {edu.degree}
                      </CardTitle>
                      <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                        {edu.period}
                      </Badge>
                    </div>
                    <div className="text-primary font-medium">
                      {edu.institution}, {edu.location}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-text-secondary mb-2">
                          <strong>Focus:</strong> {edu.focus}
                        </p>
                        <p className="text-text-secondary">
                          <strong>GPA:</strong> {edu.gpa}
                        </p>
                      </div>
                      <div>
                        <p className="text-text-secondary mb-3 font-medium">Key Achievements:</p>
                        <ul className="list-disc list-inside space-y-1 text-text-secondary">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-8 flex items-center">
              <Award className="h-6 w-6 text-primary mr-3" />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-text-secondary text-sm mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <Badge variant="secondary">{cert.date}</Badge>
                      <span className="text-text-muted">{cert.credential}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}