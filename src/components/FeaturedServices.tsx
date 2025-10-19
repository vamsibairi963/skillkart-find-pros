import { Wrench, Zap, GraduationCap, Dumbbell, Music, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Plumbers",
    description: "Expert plumbing services for repairs, installations, and emergencies.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Zap,
    title: "Electricians",
    description: "Certified electricians for all your electrical needs and safety.",
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    icon: GraduationCap,
    title: "Home Tutors",
    description: "Qualified tutors to help your children excel in their studies.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Dumbbell,
    title: "Fitness Trainers",
    description: "Personal trainers to help you achieve your fitness goals.",
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: Music,
    title: "Music Teachers",
    description: "Learn instruments or vocal training from experienced musicians.",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Hammer,
    title: "Home Repair",
    description: "General home maintenance and repair services you can trust.",
    color: "bg-orange-500/10 text-orange-600",
  },
];

const FeaturedServices = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Featured Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our most popular service categories
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.color} mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <Button variant="ghost" className="group-hover:text-primary p-0 h-auto font-semibold">
                  Learn More →
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
