import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, UserCheck, Clock } from "lucide-react";

const services = [
  {
    id: "visa-tourist",
    title: "Tourist Visa",
    description: "Short-term tourist visa for Algeria",
    duration: "30 days",
    processing: "5-7 working days",
    icon: BookOpen,
    popular: true
  },
  {
    id: "visa-business",
    title: "Business Visa", 
    description: "Business visa for commercial activities",
    duration: "90 days",
    processing: "7-10 working days",
    icon: FileText,
    popular: false
  },
  {
    id: "visa-family",
    title: "Family Visit Visa",
    description: "Visit family members in Algeria",
    duration: "60 days", 
    processing: "5-7 working days",
    icon: UserCheck,
    popular: true
  }
];

interface ServiceSelectionProps {
  selectedService: string | null;
  onServiceSelect: (serviceId: string) => void;
}

export const ServiceSelection = ({ selectedService, onServiceSelect }: ServiceSelectionProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">Select Your Service</h2>
        <p className="text-muted-foreground">Choose the type of service you need</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          const isSelected = selectedService === service.id;
          
          return (
            <Card 
              key={service.id}
              className={`relative cursor-pointer transition-all duration-300 hover:shadow-elegant ${
                isSelected ? 'ring-2 ring-primary shadow-elegant' : 'hover:scale-105'
              }`}
              onClick={() => onServiceSelect(service.id)}
            >
              {service.popular && (
                <Badge 
                  variant="default" 
                  className="absolute -top-2 -right-2 bg-primary-green"
                >
                  Popular
                </Badge>
              )}
              
              <CardHeader className="text-center">
                <div className="mx-auto mb-2 p-3 rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{service.duration}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Processing:
                  </span>
                  <span className="font-medium">{service.processing}</span>
                </div>
                
                <Button 
                  variant={isSelected ? "professional" : "outline"}
                  className="w-full"
                >
                  {isSelected ? "Selected" : "Select Service"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};