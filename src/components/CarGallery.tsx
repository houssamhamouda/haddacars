import { useState } from 'react';
import { CarCard } from './CarCard';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import car1 from '@/assets/car-1.jpg';
import car2 from '@/assets/car-2.jpg';
import car3 from '@/assets/car-3.jpg';
import car4 from '@/assets/car-4.jpg';
import car5 from '@/assets/car-5.jpg';
import car6 from '@/assets/car-6.jpg';

const cars = [
  {
    id: 1,
    name: "Phoenix X7",
    brand: "BYD",
    type: "Electric SUV",
    priceUSD: 28500,
    image: car1,
    features: ["Autopilot", "360° Camera", "Wireless Charging", "Premium Sound"],
    year: 2024,
    electric: true,
  },
  {
    id: 2,
    name: "Dragon GT",
    brand: "Nio",
    type: "Electric Sedan",
    priceUSD: 34900,
    image: car2,
    features: ["Fast Charging", "AI Assistant", "Leather Interior", "Sunroof"],
    year: 2024,
    electric: true,
  },
  {
    id: 3,
    name: "Thunder X5",
    brand: "Xpeng",
    type: "Electric Crossover",
    priceUSD: 32000,
    image: car3,
    features: ["Self-Parking", "Air Suspension", "Heads-up Display", "7 Seats"],
    year: 2024,
    electric: true,
  },
  {
    id: 4,
    name: "Spark City",
    brand: "Wuling",
    type: "Electric Compact",
    priceUSD: 18500,
    image: car4,
    features: ["City Mode", "Eco Drive", "Smart Key", "USB-C Ports"],
    year: 2024,
    electric: true,
  },
  {
    id: 5,
    name: "Mountain King",
    brand: "Great Wall",
    type: "Electric Pickup",
    priceUSD: 38900,
    image: car5,
    features: ["Off-road Mode", "Towing Capacity", "All-Weather", "Cargo Lock"],
    year: 2024,
    electric: true,
  },
  {
    id: 6,
    name: "Golden Arrow",
    brand: "Hongqi",
    type: "Luxury Coupe",
    priceUSD: 58500,
    image: car6,
    features: ["Luxury Interior", "Performance Mode", "Premium Audio", "Carbon Fiber"],
    year: 2024,
    electric: true,
  },
];

export const CarGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCar, setSelectedCar] = useState<any>(null);

  const types = ['All', 'Electric SUV', 'Electric Sedan', 'Electric Crossover', 'Electric Compact', 'Electric Pickup', 'Luxury Coupe'];

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || car.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleViewDetails = (car: any) => {
    setSelectedCar(car);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-luxury bg-clip-text text-transparent">
            Our Premium Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium Chinese electric vehicles, 
            featuring the latest technology and luxury amenities.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search cars or brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Type:</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <Badge
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  selectedType === type 
                    ? "bg-luxury-gold text-white hover:bg-luxury-gold/90" 
                    : "hover:bg-luxury-gold/10 hover:border-luxury-gold"
                }`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div key={car.id} className="animate-fade-in">
              <CarCard car={car} onViewDetails={handleViewDetails} />
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No cars found matching your criteria.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm('');
                setSelectedType('All');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Car Details Modal - Simple overlay for now */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <img 
                src={selectedCar.image} 
                alt={selectedCar.name}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
                onClick={() => setSelectedCar(null)}
              >
                ×
              </Button>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">{selectedCar.name}</h3>
              <p className="text-muted-foreground">{selectedCar.brand} • {selectedCar.type} • {selectedCar.year}</p>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-luxury-gold">${selectedCar.priceUSD.toLocaleString()}</span>
                <span className="text-muted-foreground">≈ {(selectedCar.priceUSD * 134).toLocaleString()} DZA</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCar.features.map((feature: string, index: number) => (
                    <Badge key={index} variant="outline">{feature}</Badge>
                  ))}
                </div>
              </div>
              <Button variant="luxury" className="w-full" onClick={() => {
                setSelectedCar(null);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};