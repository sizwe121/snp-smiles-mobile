import { Heart, Users, Award, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Affordable",
      description: "Quality dental care at accessible prices for everyone",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Mobile",
      description: "We come to you - schools, homes, and workplaces",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional",
      description: "Qualified oral hygienists with extensive training",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community-driven",
      description: "Committed to improving oral health across South Africa",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            About <span className="text-gradient">S&P Smiles Co.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are two final-year oral hygienists passionate about bringing quality dental care 
            to schools, homes, and communities. S&P Smiles Co. makes oral health more accessible, 
            professional, and convenient.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-card hover-lift">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-foreground leading-relaxed">
              To provide accessible, professional mobile dental hygiene services that improve 
              oral health outcomes across South African communities, one smile at a time.
            </p>
          </Card>
          <Card className="p-8 bg-card hover-lift">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-foreground leading-relaxed">
              To become the leading mobile dental hygiene service in South Africa, recognized 
              for excellence, accessibility, and our commitment to community wellness.
            </p>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-3xl font-bold text-center text-charcoal mb-12">
            Why Choose Us
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-card hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-light text-primary mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
