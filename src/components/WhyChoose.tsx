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
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Why Choose <span className="text-primary">SkillKartHub</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to connecting you with the best professionals in your area
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`group text-center space-y-4 p-6 rounded-xl transition-all duration-300 relative ${
                  benefit.highlighted 
                    ? "bg-primary/5 border-2 border-primary shadow-lg hover:shadow-xl" 
                    : "hover:bg-secondary/50"
                }`}
              >
                {benefit.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl transition-colors ${
                  benefit.highlighted 
                    ? "bg-primary/20 group-hover:bg-primary/30" 
                    : "bg-primary/10 group-hover:bg-primary/20"
                }`}>
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
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
