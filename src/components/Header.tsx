import { Car, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-luxury rounded-lg flex items-center justify-center">
              <Car className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
              HaddadAuto
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-luxury-gold transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-luxury-gold transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-luxury-gold transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-luxury-gold transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="luxury" 
              onClick={() => scrollToSection('contact')}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-foreground hover:text-luxury-gold transition-colors py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-foreground hover:text-luxury-gold transition-colors py-2"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-foreground hover:text-luxury-gold transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-foreground hover:text-luxury-gold transition-colors py-2"
            >
              Contact
            </button>
            <Button 
              variant="luxury" 
              className="w-full"
              onClick={() => scrollToSection('contact')}
            >
              Get Quote
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};