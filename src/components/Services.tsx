import { Sparkles, Shield, Smile, Star, School, Home } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Scaling & Polishing",
      description: "Professional teeth cleaning to remove plaque, tartar, and stains for a healthier, brighter smile.",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Fluoride Treatments",
      description: "Strengthen tooth enamel and prevent cavities with our professional fluoride applications.",
    },
    {
      icon: <Smile className="w-10 h-10" />,
      title: "Sensitivity Relief",
      description: "Specialized treatments to reduce tooth sensitivity and improve comfort.",
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "Teeth Whitening",
      description: "Optional professional whitening services for a confident, radiant smile.",
    },
    {
      icon: <School className="w-10 h-10" />,
      title: "School Programs",
      description: "Comprehensive oral health workshops and screenings for schools and educational institutions.",
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "Home & Corporate Visits",
      description: "Convenient mobile services for homes, offices, and corporate wellness programs.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive mobile dental hygiene services tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card hover-lift group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero text-white mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
