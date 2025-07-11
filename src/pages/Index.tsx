import { Header } from "@/components/Header";
import { CarGallery } from "@/components/CarGallery";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Award, 
  Users, 
  Truck, 
  CheckCircle,
  Star,
  Globe,
  Wrench,
  CreditCard
} from "lucide-react";

const Index = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Badge className="bg-luxury-gold text-white mb-6 text-sm font-medium">
              🚗 Premium Chinese Electric Vehicles
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Drive the <span className="bg-gradient-luxury bg-clip-text text-transparent">Future</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Discover premium Chinese electric vehicles with cutting-edge technology, 
              luxury features, and unbeatable value. From city cars to luxury SUVs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="luxury" 
                size="xl"
                onClick={scrollToGallery}
                className="text-lg"
              >
                Explore Gallery
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={scrollToContact}
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-black text-lg"
              >
                Get Quote
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">500+</div>
                <div className="text-sm opacity-75">Cars Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">15+</div>
                <div className="text-sm opacity-75">Car Models</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">98%</div>
                <div className="text-sm opacity-75">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">3</div>
                <div className="text-sm opacity-75">Years Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <CarGallery />

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-luxury bg-clip-text text-transparent">
              Why Choose DragonAuto?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best electric vehicle experience 
              with premium service and unmatched quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-luxury-card hover:shadow-luxury transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors">
                  <Zap className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Electric Innovation</h3>
                <p className="text-muted-foreground">
                  Latest electric technology with fast charging, long range, and smart features.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-luxury-card hover:shadow-luxury transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors">
                  <Shield className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">3-Year Warranty</h3>
                <p className="text-muted-foreground">
                  Comprehensive warranty coverage with 24/7 roadside assistance included.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-luxury-card hover:shadow-luxury transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors">
                  <Award className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Handpicked vehicles from top Chinese manufacturers with luxury features.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-luxury-card hover:shadow-luxury transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors">
                  <CreditCard className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible Financing</h3>
                <p className="text-muted-foreground">
                  Multiple payment options including installments and trade-in programs.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-luxury-card hover:shadow-luxury transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors">
                  <Wrench className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Service</h3>
                <p className="text-muted-foreground">
                  Certified technicians and authentic parts for all maintenance needs.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-luxury-card hover:shadow-luxury transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors">
                  <Globe className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Global Standards</h3>
                <p className="text-muted-foreground">
                  All vehicles meet international safety and quality standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-luxury bg-clip-text text-transparent">
                About DragonAuto
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2020, DragonAuto is Algeria's premier destination for premium Chinese electric vehicles. 
                We specialize in importing and distributing the latest electric cars from renowned Chinese manufacturers 
                like BYD, Nio, Xpeng, and more.
              </p>
              <p className="text-muted-foreground">
                Our mission is to accelerate Algeria's transition to sustainable transportation by making 
                high-quality electric vehicles accessible and affordable. We provide comprehensive support 
                from purchase to maintenance, ensuring a premium ownership experience.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-luxury-gold" />
                  <span className="text-sm">ISO Certified Dealer</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-luxury-gold" />
                  <span className="text-sm">Authorized Importer</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-luxury-gold" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-luxury-gold" />
                  <span className="text-sm">Nationwide Service</span>
                </div>
              </div>

              <Button variant="luxury" size="lg" onClick={scrollToContact}>
                Learn More
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="shadow-luxury-card bg-gradient-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                      <Star className="h-6 w-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Premium Experience</h3>
                      <p className="text-muted-foreground text-sm">
                        White-glove service from consultation to delivery
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-luxury-card bg-gradient-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Expert Team</h3>
                      <p className="text-muted-foreground text-sm">
                        Certified professionals with deep EV knowledge
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-luxury-card bg-gradient-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                      <Truck className="h-6 w-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Fast Delivery</h3>
                      <p className="text-muted-foreground text-sm">
                        Quick import and delivery within 30 days
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-luxury-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-luxury rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">DragonAuto</span>
              </div>
              <p className="text-gray-400 text-sm">
                Algeria's premier destination for premium Chinese electric vehicles.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="cursor-pointer hover:text-white transition-colors">Home</div>
                <div className="cursor-pointer hover:text-white transition-colors">Gallery</div>
                <div className="cursor-pointer hover:text-white transition-colors">About</div>
                <div className="cursor-pointer hover:text-white transition-colors">Contact</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Vehicle Import</div>
                <div>Financing Options</div>
                <div>Maintenance & Service</div>
                <div>Warranty Support</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>123 Boulevard Mohamed V</div>
                <div>Algiers, Algeria 16000</div>
                <div>+213 21 123 456</div>
                <div>info@dragonauto.dz</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 DragonAuto. All rights reserved. | Premium Chinese Electric Vehicles in Algeria</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;