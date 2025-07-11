import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
];

interface AppointmentBookingProps {
  selectedService: string | null;
  onBookingComplete: (booking: { date: Date; time: string; service: string }) => void;
}

export const AppointmentBooking = ({ selectedService, onBookingComplete }: AppointmentBookingProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleBooking = () => {
    if (selectedDate && selectedTime && selectedService) {
      onBookingComplete({
        date: selectedDate,
        time: selectedTime,
        service: selectedService
      });
    }
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday or Saturday
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">Book Your Appointment</h2>
        <p className="text-muted-foreground">Select your preferred date and time</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Date Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              Select Date
            </CardTitle>
            <CardDescription>
              Choose an available date for your appointment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => isPastDate(date) || isWeekend(date)}
              className={cn("w-full p-3 pointer-events-auto")}
            />
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>• Appointments available Monday to Friday</p>
              <p>• Weekends and holidays are closed</p>
              <p>• Select a date to see available times</p>
            </div>
          </CardContent>
        </Card>

        {/* Time Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Select Time
            </CardTitle>
            <CardDescription>
              {selectedDate 
                ? `Available times for ${format(selectedDate, "MMMM d, yyyy")}`
                : "Please select a date first"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedDate ? (
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "professional" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTime(time)}
                    className="justify-center"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Clock className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Select a date to view available times</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Booking Summary */}
      {selectedDate && selectedTime && (
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg">Appointment Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service:</span>
              <Badge variant="outline">{selectedService}</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date:</span>
              <span className="font-medium">{format(selectedDate, "MMMM d, yyyy")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Time:</span>
              <span className="font-medium">{selectedTime}</span>
            </div>
            
            <Button 
              onClick={handleBooking}
              className="w-full mt-4"
              variant="professional"
              size="lg"
            >
              Continue to Personal Information
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};