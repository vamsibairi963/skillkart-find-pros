import { Search, Users, Calendar } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search",
    description: "Browse through verified professionals in your area based on your needs.",
  },
  {
    icon: Users,
    title: "Connect",
    description: "Review profiles, ratings, and connect with the perfect professional for your job.",
  },
  {
    icon: Calendar,
    title: "Book",
    description: "Schedule services at your convenience and get the job done right.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            SIMPLE PROCESS
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Finding trusted help is as easy as 1-2-3
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-card to-card/80 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-border hover:border-primary/30">
                  <div className="absolute -top-8 left-10 bg-gradient-to-br from-primary to-primary/80 text-white w-16 h-16 rounded-2xl flex items-center justify-center font-extrabold text-2xl shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform">
                    {index + 1}
                  </div>
                  
                  <div className="mt-6 space-y-5">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all shadow-md">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-extrabold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 w-6 lg:w-12 h-0.5 bg-border" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
