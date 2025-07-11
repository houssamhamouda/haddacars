import { Building2, Phone, Mail } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-gradient-hero text-primary-foreground shadow-elegant">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">BLS Spain-Algeria</h1>
              <p className="text-sm opacity-90">Appointment Booking System</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+34 91 XXX XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@blsspain-algeria.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};