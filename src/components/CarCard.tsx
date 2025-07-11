import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, DollarSign, Heart } from "lucide-react";

interface Car {
  id: number;
  name: string;
  brand: string;
  type: string;
  priceUSD: number;
  image: string;
  features: string[];
  year: number;
  electric: boolean;
}

interface CarCardProps {
  car: Car;
  onViewDetails: (car: Car) => void;
}

export const CarCard = ({ car, onViewDetails }: CarCardProps) => {
  const [priceDZA, setPriceDZA] = useState<number | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  // Simple currency conversion (in real app, you'd use an API)
  useEffect(() => {
    // Approximate DZA to USD rate (1 USD ≈ 134 DZA as of recent)
    const conversionRate = 134;
    setPriceDZA(car.priceUSD * conversionRate);
  }, [car.priceUSD]);

  return (
    <Card className="group overflow-hidden bg-gradient-card shadow-luxury-card hover:shadow-luxury transition-all duration-500 hover:scale-105 border border-border/50">
      <div className="relative overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {car.electric && (
            <Badge className="bg-green-500 text-white">Electric</Badge>
          )}
          <Badge variant="secondary">{car.year}</Badge>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-4 right-4 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors ${
            isLiked ? 'text-luxury-red' : 'text-muted-foreground'
          }`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
        </Button>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-luxury-gold transition-colors">
              {car.name}
            </h3>
            <p className="text-muted-foreground">{car.brand} • {car.type}</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-luxury-gold font-bold">
              <DollarSign className="h-4 w-4" />
              <span>${car.priceUSD.toLocaleString()}</span>
            </div>
            {priceDZA && (
              <div className="text-sm text-muted-foreground">
                ≈ {priceDZA.toLocaleString()} DZA
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap gap-1">
            {car.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {car.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{car.features.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          variant="premium" 
          className="w-full"
          onClick={() => onViewDetails(car)}
        >
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};