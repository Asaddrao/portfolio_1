import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Bio() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            About Asad Rao
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                My Story
              </h3>
              <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience 
                  crafting digital solutions that bridge the gap between innovative design 
                  and robust functionality. My journey in tech began during my computer 
                  science studies, where I discovered my love for problem-solving through code.
                </p>
                <p>
                  Throughout my career, I've had the privilege of working with startups, 
                  established companies, and everything in between. I believe in writing 
                  clean, maintainable code and creating user experiences that not only 
                  function flawlessly but also delight and inspire users.
                </p>
                <p>
                  When I'm not immersed in code, you'll find me exploring emerging technologies, 
                  contributing to open-source projects, mentoring junior developers, or sharing 
                  knowledge with the community through writing and speaking at tech events.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                What Drives Me
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                I'm motivated by the endless possibilities that technology offers to solve 
                real-world problems. Whether it's building scalable web applications, 
                optimizing performance, or creating intuitive user interfaces, I approach 
                each project with curiosity, creativity, and a commitment to excellence.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-text-muted">Location</p>
                    <p className="font-medium text-text-primary">San Francisco, CA</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Experience</p>
                    <p className="font-medium text-text-primary">5+ Years</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Specialization</p>
                    <p className="font-medium text-text-primary">Full-Stack Development</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Availability</p>
                    <p className="font-medium text-primary">Open to Opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI/ML</Badge>
                  <Badge variant="secondary">Open Source</Badge>
                  <Badge variant="secondary">Web3</Badge>
                  <Badge variant="secondary">DevOps</Badge>
                  <Badge variant="secondary">UI/UX</Badge>
                  <Badge variant="secondary">Mentoring</Badge>
                  <Badge variant="secondary">Photography</Badge>
                  <Badge variant="secondary">Travel</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}