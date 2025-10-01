import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Zwelakhe Sizwè Mazibuko",
      role: "Oral Hygienist & Co-founder",
      description: "Passionate about making quality dental care accessible to all communities across South Africa.",
    },
    {
      name: "Phozisa Diko",
      role: "Oral Hygienist & Co-founder",
      description: "Dedicated to improving oral health outcomes through education and professional care.",
    },
  ];

  return (
    <section id="team" className="section-padding bg-teal-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional oral hygienists committed to your dental health
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="p-8 bg-card hover-lift text-center animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-hero text-white mb-6">
                <User className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-2">
                {member.name}
              </h3>
              <p className="text-primary font-semibold mb-4">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed">
                {member.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
