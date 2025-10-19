import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-28 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="inline-block mb-4">
            <span className="bg-white/20 text-white px-5 py-2 rounded-full text-sm font-bold backdrop-blur-sm border border-white/30">
              🚀 START TODAY
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            Ready to Find Your Perfect Professional?
          </h2>
          <p className="text-xl sm:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium">
            Join thousands of satisfied customers who found reliable help through SkillKartHub. 
            Get started today and experience the difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6">
            <Button 
              variant="secondary" 
              size="lg" 
              className="group bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-white/20 text-lg font-bold px-10 hover:scale-105 transition-all"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-bold px-10 hover:scale-105 transition-all"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
