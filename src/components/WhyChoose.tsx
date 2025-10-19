import { Shield, MousePointerClick, Star, MapPin } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "Every professional is thoroughly vetted and background-checked for your safety.",
    highlighted: true,
  },
  {
    icon: MousePointerClick,
    title: "Seamless Booking",
    description: "Book services in just a few clicks. No hassle, no confusion.",
  },
  {
    icon: Star,
    title: "Transparent Reviews",
    description: "Real reviews from real customers help you make informed decisions.",
  },
  {
    icon: MapPin,
    title: "Local & Reliable",
    description: "Find trusted professionals right in your neighborhood.",
  },
];

const WhyChoose = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
            WHY US
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Why Choose <span className="text-primary">SkillKartHub</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to connecting you with the best professionals in your area
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`group text-center space-y-5 p-8 rounded-2xl transition-all duration-300 relative ${
                  benefit.highlighted 
                    ? "bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary shadow-xl hover:shadow-2xl hover:-translate-y-2" 
                    : "hover:bg-secondary/50 hover:-translate-y-1"
                }`}
              >
                {benefit.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-accent to-accent/80 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-pulse">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl transition-all shadow-lg ${
                  benefit.highlighted 
                    ? "bg-gradient-to-br from-primary/20 to-primary/10 group-hover:scale-110 group-hover:rotate-3" 
                    : "bg-primary/10 group-hover:bg-primary/20 group-hover:scale-105"
                }`}>
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                
                <h3 className="text-2xl font-extrabold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
