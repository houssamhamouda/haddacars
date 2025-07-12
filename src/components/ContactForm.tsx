import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, Car } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestedCar: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      interestedCar: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-luxury bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to drive your dream car? Contact us for personalized quotes, 
            test drives, and expert consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="shadow-luxury-card bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-luxury-gold" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+213 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="interestedCar" className="block text-sm font-medium mb-2">
                      Interested Car
                    </label>
                    <Input
                      id="interestedCar"
                      name="interestedCar"
                      value={formData.interestedCar}
                      onChange={handleChange}
                      placeholder="e.g., Phoenix X7"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements, budget, or any questions..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="contact" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-luxury-card bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Visit Our Showroom</h3>
                    <p className="text-muted-foreground">
                      123 Cité million<br />
                      Batna, Algeria 05000
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-luxury-card bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-muted-foreground">
                      +213 21 123 456<br />
                      +213 555 987 654
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-luxury-card bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">
                      info@haddadauto.dz<br />
                      sales@haddadauto.dz
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-luxury-card bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Saturday - Thursday: 9:00 AM - 6:00 PM</p>
                      <p>Friday: 2:00 PM - 6:00 PM</p>
                      <Badge variant="outline" className="text-xs">
                        Test drives by appointment
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-luxury-card bg-gradient-luxury text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Car className="h-8 w-8" />
                  <div>
                    <h3 className="font-bold text-lg">Special Offer</h3>
                    <p className="text-sm opacity-90">
                      Book a test drive this month and get 5% off your purchase!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};