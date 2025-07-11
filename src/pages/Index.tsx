import { useState } from "react";
import { Header } from "@/components/Header";
import { ServiceSelection } from "@/components/ServiceSelection";
import { AppointmentBooking } from "@/components/AppointmentBooking";
import { PersonalInfoForm } from "@/components/PersonalInfoForm";
import { BookingConfirmation } from "@/components/BookingConfirmation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, MapPin, Users } from "lucide-react";

type BookingStep = "service" | "appointment" | "personal" | "confirmation";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>("service");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [bookingData, setBookingData] = useState<any>(null);
  const [finalBooking, setFinalBooking] = useState<any>(null);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleBookingComplete = (booking: any) => {
    setBookingData(booking);
    setCurrentStep("personal");
  };

  const handlePersonalInfoSubmit = (fullBooking: any) => {
    setFinalBooking(fullBooking);
    setCurrentStep("confirmation");
  };

  const handleNewBooking = () => {
    setCurrentStep("service");
    setSelectedService(null);
    setBookingData(null);
    setFinalBooking(null);
  };

  const proceedToBooking = () => {
    if (selectedService) {
      setCurrentStep("appointment");
    }
  };

  const backToService = () => {
    setCurrentStep("service");
  };

  const backToAppointment = () => {
    setCurrentStep("appointment");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Only show on service selection */}
      {currentStep === "service" && (
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your Visa Appointment
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Fast, secure, and convenient appointment booking for BLS Spain-Algeria services
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-3">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">Expert Support</h3>
                <p className="text-sm opacity-75">Professional assistance throughout the process</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">Fast Processing</h3>
                <p className="text-sm opacity-75">Quick turnaround times for all services</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">Convenient Location</h3>
                <p className="text-sm opacity-75">Easily accessible office locations</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">Secure & Reliable</h3>
                <p className="text-sm opacity-75">Safe handling of your documents and data</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Progress Indicator */}
      {currentStep !== "service" && (
        <div className="bg-card border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-success-green rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="ml-2 text-sm font-medium">Service Selected</span>
              </div>
              <div className="w-8 h-0.5 bg-muted"></div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === "appointment" || currentStep === "personal" || currentStep === "confirmation"
                    ? "bg-success-green" : "bg-muted"
                }`}>
                  <CheckCircle className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="ml-2 text-sm font-medium">Date & Time</span>
              </div>
              <div className="w-8 h-0.5 bg-muted"></div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === "personal" || currentStep === "confirmation"
                    ? "bg-success-green" : "bg-muted"
                }`}>
                  <CheckCircle className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="ml-2 text-sm font-medium">Personal Info</span>
              </div>
              <div className="w-8 h-0.5 bg-muted"></div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === "confirmation" ? "bg-success-green" : "bg-muted"
                }`}>
                  <CheckCircle className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="ml-2 text-sm font-medium">Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {currentStep === "service" && (
          <div className="space-y-8">
            <ServiceSelection 
              selectedService={selectedService}
              onServiceSelect={handleServiceSelect}
            />
            {selectedService && (
              <div className="text-center">
                <Button 
                  onClick={proceedToBooking}
                  variant="professional"
                  size="lg"
                  className="px-8"
                >
                  Continue to Book Appointment
                </Button>
              </div>
            )}
          </div>
        )}

        {currentStep === "appointment" && (
          <AppointmentBooking
            selectedService={selectedService}
            onBookingComplete={handleBookingComplete}
          />
        )}

        {currentStep === "personal" && bookingData && (
          <PersonalInfoForm
            booking={bookingData}
            onSubmit={handlePersonalInfoSubmit}
            onBack={backToAppointment}
          />
        )}

        {currentStep === "confirmation" && finalBooking && (
          <BookingConfirmation
            booking={finalBooking}
            onNewBooking={handleNewBooking}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Contact Information</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📍 Calle Example, Madrid, Spain</p>
                <p>📞 +34 91 XXX XXXX</p>
                <p>✉️ info@blsspain-algeria.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Office Hours</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
                <p>Holidays: Closed</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Important Links</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📋 Document Requirements</p>
                <p>💳 Payment Information</p>
                <p>❓ Frequently Asked Questions</p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-4 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 BLS Spain-Algeria Appointment System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
