import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, MessageCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@snpsmiles.co.za",
      link: "mailto:info@snpsmiles.co.za",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone - Zwelakhe",
      content: "064 348 9310",
      link: "tel:0643489310",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone - Phozisa",
      content: "067 035 0539",
      link: "tel:0670350539",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Johannesburg, South Africa",
      link: "https://www.google.com/maps/place/Johannesburg",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      content: "@snpsmiles",
      link: "https://instagram.com/snpsmiles",
    },
  ];

  const whatsappZwelakhe = "27643489310";
  const whatsappPhozisa = "27670350539";
  const whatsappMessage = "Hi! I'd like to book a dental appointment.";

  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Ready to book your appointment? We're here to help!
          </p>
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Clock className="w-5 h-5" />
            <p>Response within 24 hours</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card animate-scale-in">
            <h3 className="text-2xl font-bold text-charcoal mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background min-h-32"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>

            {/* WhatsApp Buttons */}
            <div className="mt-6 space-y-3">
              <p className="text-center text-sm text-muted-foreground mb-3">Or message us on WhatsApp:</p>
              <a
                href={`https://wa.me/${whatsappZwelakhe}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full gap-2 border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Zwelakhe
                </Button>
              </a>
              <a
                href={`https://wa.me/${whatsappPhozisa}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full gap-2 border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Phozisa
                </Button>
              </a>
            </div>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-6">
            <Card className="p-8 bg-card animate-scale-in" style={{ animationDelay: "100ms" }}>
              <h3 className="text-2xl font-bold text-charcoal mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-light flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">{info.title}</p>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Google Maps Embed */}
            <Card className="p-0 overflow-hidden animate-scale-in" style={{ animationDelay: "150ms" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228847.33199386427!2d27.851996599999998!3d-26.204103399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Johannesburg Location"
              />
            </Card>

            <Card className="p-8 bg-charcoal text-white animate-scale-in" style={{ animationDelay: "200ms" }}>
              <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
              <p className="mb-6 leading-relaxed">
                Contact us today to schedule your mobile dental clinic appointment. 
                We bring professional dental care right to your doorstep!
              </p>
              <Button
                size="lg"
                className="bg-white text-charcoal hover:bg-white/90 w-full font-bold"
                onClick={() => document.querySelector("#contact form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Your Visit Today
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
