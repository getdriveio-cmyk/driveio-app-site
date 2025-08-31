import { Search, UserCheck, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: 'Search dates & location',
      description: 'Browse available cars in your area for your desired dates and times.'
    },
    {
      step: 2,
      icon: UserCheck,
      title: 'Pick a car & verify ID',
      description: 'Choose your perfect ride and complete quick ID and license verification.'
    },
    {
      step: 3,
      icon: CreditCard,
      title: 'Checkout with Apple Pay',
      description: 'Secure payment with Apple Pay or card, then you\'re ready to drive!'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get on the road in three simple steps. It's that easy.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((stepItem, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-6 z-0" />
              )}
              
              {/* Step Card */}
              <Card className="relative z-10 hover-lift bg-card-gradient border-border/50 shadow-sm hover:shadow-md transition-all duration-smooth">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg">
                    {stepItem.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <stepItem.icon className="h-8 w-8 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {stepItem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {stepItem.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <p className="text-lg text-foreground mb-4">
              <span className="font-semibold">Ready in under 5 minutes.</span> Most verifications are instant.
            </p>
            <p className="text-sm text-muted-foreground">
              New to car sharing? Our support team is here to help every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};