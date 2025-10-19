import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChoose from "@/components/WhyChoose";
import FeaturedServices from "@/components/FeaturedServices";
import TeamSection from "@/components/TeamSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChoose />
        <FeaturedServices />
        <TeamSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
