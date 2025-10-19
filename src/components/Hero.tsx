import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";
import logo from "@/assets/skillkart-logo-official.png";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for subscribing!",
        description: "We'll notify you when we launch.",
      });
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background gradient with animated blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            {/* Logo showcase */}
            <div className="mb-6 lg:hidden">
              <img src={logo} alt="SkillKartHub" className="h-16 drop-shadow-xl" />
            </div>
            <div className="space-y-6">
              <div className="inline-block mb-2">
                <span className="bg-gradient-to-r from-accent to-accent/80 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg animate-pulse border-2 border-accent/50">
                  🎉 Now Launching - Join Early & Get 20% Off!
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                Find Trusted Local{" "}
                <span className="relative inline-block">
                  <span className="text-primary">Professionals</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-accent/40 to-primary/40 -z-10 rounded-lg"></span>
                </span>, Instantly.
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-xl leading-relaxed">
                SkillKartHub connects you with <span className="font-semibold text-foreground">verified</span> plumbers, tutors, trainers, and more. 
                Your search for reliable help ends here.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="group text-lg shadow-2xl">
                Find a Pro Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-2 hover:border-primary">
                Learn More
              </Button>
            </div>

            <div className="pt-6">
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" variant="default">
                  Get Updates
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-2">
                Join our waitlist for exclusive launch offers
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="relative lg:block animate-fade-in">
            {/* Large logo badge at top */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 bg-white p-4 rounded-2xl shadow-2xl border-4 border-primary/20 transform hover:scale-105 transition-transform">
              <img src={logo} alt="SkillKartHub" className="h-12" />
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/10">
              <img
                src={heroImage}
                alt="Professional service provider meeting with customer"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            
            {/* Enhanced floating stats cards */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border-2 border-primary/20">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-primary to-primary/80 p-3 rounded-xl shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-primary">500+</p>
                  <p className="text-sm font-medium text-muted-foreground">Verified Professionals</p>
                </div>
              </div>
            </div>
            
            {/* Additional floating stat */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-accent to-accent/90 backdrop-blur-sm p-5 rounded-2xl shadow-2xl text-white">
              <div className="text-center">
                <p className="text-3xl font-extrabold">4.9⭐</p>
                <p className="text-xs font-semibold mt-1">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
