import { Search, Calendar, Car, Star } from 'lucide-react';
import { trackingEvents } from '@/lib/tracking';

const steps = [
  {
    icon: Search,
    title: 'Find Your Car',
    description: 'Browse available vehicles in your area with real-time availability and pricing.',
    step: '01'
  },
  {
    icon: Calendar,
    title: 'Book & Reserve',
    description: 'Select your dates, review pricing, and secure your reservation instantly.',
    step: '02'
  },
  {
    icon: Car,
    title: 'Pick Up & Drive',
    description: 'Meet your verified driver at the agreed location and enjoy your ride.',
    step: '03'
  },
  {
    icon: Star,
    title: 'Rate & Review',
    description: 'Share your experience and help maintain our community standards.',
    step: '04'
  }
];

export const HowItWorks = () => {
  const handleStepClick = (stepNumber: string) => {
    trackingEvents.howItWorksStepClick(stepNumber);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 to-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            How DriveIO
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Works
            </span>
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Getting started with DriveIO is simple. In just four easy steps, you'll be on your way 
            to safe, reliable car sharing.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent transform translate-x-6 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative group cursor-pointer"
                onClick={() => handleStepClick(step.step)}
              >
                {/* Step Number */}
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <step.icon className="h-8 w-8 text-primary-600" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-primary-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-primary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-primary-50 rounded-2xl border border-primary-200">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-lg font-semibold text-primary-800">Trust & Safety First</span>
            </div>
            <p className="text-primary-700 text-sm">
              Every step of the process is designed with your safety and security in mind
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-primary-700 mb-6">
            Ready to get started?
          </p>
          <button
            onClick={() => trackingEvents.ctaClick('how-it-works-download')}
            className="px-8 py-3 bg-gradient-driveio-button hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Download & Start Booking
          </button>
        </div>
      </div>
    </section>
  );
};