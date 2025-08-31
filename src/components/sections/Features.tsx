import { Shield, Clock, DollarSign, MapPin, Users, Car } from 'lucide-react';
import { trackingEvents } from '@/lib/tracking';

const features = [
  {
    icon: Shield,
    title: 'Verified Safety',
    description: 'Every driver and vehicle undergoes thorough background checks and safety inspections.',
    color: 'text-success'
  },
  {
    icon: Clock,
    title: 'Fast Booking',
    description: 'Book a car in under 2 minutes with our streamlined reservation process.',
    color: 'text-primary'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees. See exactly what you\'ll pay before you book.',
    color: 'text-primary'
  },
  {
    icon: MapPin,
    title: 'Local Coverage',
    description: 'Available throughout the Detroit Metro Area with expanding coverage.',
    color: 'text-primary'
  },
  {
    icon: Users,
    title: 'Community Trust',
    description: 'Built on trust with verified reviews and community-driven safety standards.',
    color: 'text-primary'
  },
  {
    icon: Car,
    title: 'Quality Vehicles',
    description: 'Well-maintained cars from trusted local owners and partners.',
    color: 'text-primary'
  }
];

export const Features = () => {
  const handleFeatureClick = (featureTitle: string) => {
    trackingEvents.featureClick(featureTitle.toLowerCase());
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            Why Choose
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              DriveIO?
            </span>
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            We've built DriveIO around three core principles: safety, transparency, and community. 
            Here's what makes us different.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-white rounded-2xl border border-neutral-300 hover:border-primary-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleFeatureClick(feature.title)}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-smooth">
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-primary-800 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-primary-700 text-center leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-primary-400 to-primary-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-primary-700 mb-6">
            Ready to experience the DriveIO difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => trackingEvents.ctaClick('features-download')}
              className="px-8 py-3 bg-gradient-driveio-button hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Download App
            </button>
            <button
              onClick={() => trackingEvents.ctaClick('features-learn-more')}
              className="px-8 py-3 border-2 border-primary-300 text-primary-700 hover:bg-primary-50 font-semibold rounded-lg transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};