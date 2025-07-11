import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Clock, User, Mail, Phone, MapPin, Download, ArrowLeft } from "lucide-react";
import { format } from "date-fns";

interface BookingConfirmationProps {
  booking: {
    date: Date;
    time: string;
    service: string;
    personalInfo: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      nationality: string;
      passportNumber: string;
      address: string;
      city: string;
      postalCode: string;
      additionalInfo: string;
    };
  };
  onNewBooking: () => void;
}

export const BookingConfirmation = ({ booking, onNewBooking }: BookingConfirmationProps) => {
  const bookingReference = `BLS-${Date.now().toString().slice(-6)}`;

  const downloadConfirmation = () => {
    // In a real app, this would generate a PDF
    const confirmationText = `
BLS Spain-Algeria Appointment Confirmation

Booking Reference: ${bookingReference}
Service: ${booking.service}
Date: ${format(booking.date, "MMMM d, yyyy")}
Time: ${booking.time}

Personal Information:
Name: ${booking.personalInfo.firstName} ${booking.personalInfo.lastName}
Email: ${booking.personalInfo.email}
Phone: ${booking.personalInfo.phone}
Nationality: ${booking.personalInfo.nationality}
Passport: ${booking.personalInfo.passportNumber}

Address: ${booking.personalInfo.address}
City: ${booking.personalInfo.city}
Postal Code: ${booking.personalInfo.postalCode}

Please bring this confirmation and required documents to your appointment.
    `;

    const blob = new Blob([confirmationText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `BLS-Appointment-${bookingReference}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Success Header */}
      <div className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-success-green/10 rounded-full flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-success-green" />
        </div>
        <h2 className="text-3xl font-bold text-foreground">Appointment Confirmed!</h2>
        <p className="text-muted-foreground">Your appointment has been successfully booked</p>
        <Badge variant="outline" className="text-lg px-4 py-2">
          Reference: {bookingReference}
        </Badge>
      </div>

      {/* Appointment Details */}
      <Card className="border-success-green/20 bg-success-green/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-success-green">
            <Calendar className="h-5 w-5" />
            Appointment Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Service</h4>
              <p className="text-lg">{booking.service}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Date</h4>
              <p className="text-lg">{format(booking.date, "EEEE, MMMM d, yyyy")}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Time
              </h4>
              <p className="text-lg">{booking.time}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground">Full Name</h4>
                <p>{booking.personalInfo.firstName} {booking.personalInfo.lastName}</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  Email
                </h4>
                <p>{booking.personalInfo.email}</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  Phone
                </h4>
                <p>{booking.personalInfo.phone}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground">Nationality</h4>
                <p>{booking.personalInfo.nationality}</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground">Passport Number</h4>
                <p>{booking.personalInfo.passportNumber}</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Address
                </h4>
                <p>{booking.personalInfo.address}</p>
                <p>{booking.personalInfo.city}, {booking.personalInfo.postalCode}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Information */}
      <Card className="border-warning-orange/20 bg-warning-orange/5">
        <CardHeader>
          <CardTitle className="text-warning-orange">Important Information</CardTitle>
          <CardDescription>Please read carefully before your appointment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <h4 className="font-medium">Required Documents:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Valid passport (original + photocopy)</li>
              <li>Completed visa application form</li>
              <li>Passport-sized photographs (2 recent photos)</li>
              <li>Proof of accommodation in Algeria</li>
              <li>Travel insurance certificate</li>
              <li>Flight reservation or travel itinerary</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Important Notes:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Arrive 15 minutes before your appointment time</li>
              <li>Bring this confirmation (printed or digital)</li>
              <li>Processing fee payment required at the center</li>
              <li>Incomplete applications may be rejected</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={downloadConfirmation}
          variant="outline"
          size="lg"
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Download Confirmation
        </Button>
        <Button
          onClick={onNewBooking}
          variant="professional"
          size="lg"
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Book Another Appointment
        </Button>
      </div>
    </div>
  );
};