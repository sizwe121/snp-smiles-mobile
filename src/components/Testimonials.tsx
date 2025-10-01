import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonialsImage from "@/assets/testimonials-bg.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      text: "S&P Smiles Co. visited our daughter's school and the service was exceptional. The hygienists were gentle and professional.",
    },
    {
      name: "David Nkosi",
      role: "School Principal",
      text: "Their school program has been invaluable. Students are more aware of oral hygiene, and parents appreciate the convenience.",
    },
    {
      name: "Linda Mbatha",
      role: "Corporate Client",
      text: "We book quarterly visits for our office. The team is punctual, professional, and our staff loves the convenience.",
    },
    {
      name: "Michael van Zyl",
      role: "Patient",
      text: "Best dental experience I've had. Professional service right at my home. No more stressful clinic visits!",
    },
    {
      name: "Thandiwe Dlamini",
      role: "Parent",
      text: "My children actually look forward to their dental appointments now. The hygienists make it fun and educational.",
    },
    {
      name: "James Williams",
      role: "Business Owner",
      text: "Added dental wellness to our employee benefits. S&P Smiles makes it easy and affordable.",
    },
    {
      name: "Nomsa Khumalo",
      role: "Teacher",
      text: "Their school workshops are engaging and informative. Students have improved their daily oral hygiene habits significantly.",
    },
    {
      name: "Robert Smith",
      role: "Patient",
      text: "Professional, friendly, and thorough. My teeth feel amazing after every visit.",
    },
    {
      name: "Grace Mokoena",
      role: "Community Leader",
      text: "S&P Smiles is making a real difference in our community. Accessible dental care for everyone!",
    },
  ];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={testimonialsImage}
          alt="Happy clients"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from real people who trust us with their smiles
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-charcoal">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
