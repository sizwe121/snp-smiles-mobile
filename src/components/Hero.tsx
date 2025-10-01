import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dental.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional dental hygiene service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-32 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          S&P Smiles Co.
        </h1>
        <p className="text-xl md:text-3xl text-white/95 mb-8 font-light">
          Oral health made easy, wherever you are.
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Professional mobile dental hygiene services bringing quality care to your doorstep
        </p>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-premium hover-lift"
        >
          Book Now
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
