import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonialsImage from "@/assets/testimonials-bg.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      text: "The dentists were gentle and professional with my daughter. Highly recommend!",
    },
    {
      name: "David Nkosi",
      role: "School Principal",
      text: "Their program has been invaluable. Students are more aware of oral hygiene.",
    },
    {
      name: "Linda Mbatha",
      role: "Corporate Client",
      text: "Punctual, professional team. Our staff loves the convenience!",
    },
    {
      name: "Michael van Zyl",
      role: "Patient",
      text: "Best dental experience. Professional service right at my home!",
    },
    {
      name: "Thandiwe Dlamini",
      role: "Parent",
      text: "My children look forward to appointments now. The hygienists make it fun!",
    },
    {
      name: "James Williams",
      role: "Business Owner",
      text: "Added dental wellness to employee benefits. S&P Smiles makes it easy.",
    },
    {
      name: "Nomsa Khumalo",
      role: "Teacher",
      text: "Engaging workshops from professional dentists. Students' habits improved significantly.",
    },
    {
      name: "Robert Smith",
      role: "Patient",
      text: "Friendly dentists, thorough service. My teeth feel amazing after every visit!",
    },
    {
      name: "Grace Mokoena",
      role: "Community Leader",
      text: "Making a real difference! Accessible dental care for everyone in our community.",
    },
  ];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-charcoal">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={testimonialsImage}
          alt="Happy clients with confident smiles"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Real feedback from real people who trust us with their smiles
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card
                  className="p-6 bg-white/95 hover-lift h-full flex flex-col"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-charcoal mb-4 italic leading-relaxed flex-grow">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
