import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "5+",
    label: "Years Experience",
    description: "Building scalable applications"
  },
  {
    number: "50+",
    label: "Projects Delivered",
    description: "From concept to production"
  },
  {
    number: "20+",
    label: "Happy Clients",
    description: "Across various industries"
  },
  {
    number: "99%",
    label: "Success Rate",
    description: "On-time project delivery"
  }
];

export function Stats() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Proven Track Record
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Numbers that speak for themselves - delivering exceptional results consistently
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-background/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-text-primary mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-text-muted">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}