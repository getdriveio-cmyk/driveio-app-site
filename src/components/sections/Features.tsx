import { Clock, DollarSign, Shield, Users, MapPin, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Features = () => {
  const features = [
    {
      icon: Clock,
      title: 'Quick Booking',
      description: 'Find and reserve your perfect car in just minutes, not hours.'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'See itemized fees, deposits, and taxes upfront. No hidden surprises.'
    },
    {
      icon: Users,
      title: 'Verified Drivers',
      description: 'Every driver goes through ID and license verification for your safety.'
    },
    {
      icon: Shield,
      title: 'Protected Trips',
      description: 'Choose from comprehensive insurance options during checkout.'
    },
    {
      icon: MapPin,
      title: 'Local & Convenient',
      description: 'Airport-friendly pickup locations and neighborhood accessibility.'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Apple Pay integration and secure payment processing you can trust.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why choose DriveIO?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for trust, designed for convenience. Every feature puts your safety and transparency first.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover-lift border-border/50 bg-card-gradient shadow-sm hover:shadow-md transition-all duration-smooth"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-smooth">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-success-light rounded-2xl border border-success/20">
            <div className="flex items-center gap-2 text-success">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-success">
              <Users className="h-5 w-5" />
              <span className="font-medium">Background Checked</span>
            </div>
            <div className="flex items-center gap-2 text-success">
              <CreditCard className="h-5 w-5" />
              <span className="font-medium">Secure Payments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};