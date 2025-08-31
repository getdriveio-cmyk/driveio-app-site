import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  keywords: string[];
}

const faqData: FAQItem[] = [
  {
    question: "How does DriveIO car sharing work?",
    answer: "DriveIO is a car sharing platform where you can book local cars by the day. Browse available vehicles, book online, meet your verified driver for pickup, and return the car when finished. The entire process takes just minutes from start to finish.",
    keywords: ["how does car sharing work", "car sharing process", "book car online", "car rental process"]
  },
  {
    question: "What do I need to rent a car with DriveIO?",
    answer: "You'll need a valid driver's license, government ID, and a payment method. We verify your identity to ensure safety for everyone. Drivers must be at least 21 years old with a clean driving record.",
    keywords: ["what do I need to rent a car", "car rental requirements", "driver license verification", "car rental documents"]
  },
  {
    question: "How much does it cost to rent a car?",
    answer: "Pricing varies by vehicle and dates. We show all costs upfront including base rate, taxes, fees, and optional insurance. No hidden charges - you'll see the exact total before booking.",
    keywords: ["how much does car rental cost", "car rental pricing", "car rental fees", "car rental rates"]
  },
  {
    question: "Is insurance included with car rental?",
    answer: "Basic coverage is included, but you can choose additional protection levels during checkout for extra peace of mind. We offer comprehensive insurance options to protect you during your trip.",
    keywords: ["car rental insurance", "car insurance coverage", "rental car protection", "car rental safety"]
  },
  {
    question: "Can I rent a car for just a few hours?",
    answer: "Yes! DriveIO offers flexible rental periods including hourly, daily, and weekly options. Perfect for quick errands, business meetings, or extended trips. Book exactly what you need.",
    keywords: ["hourly car rental", "short term car rental", "few hours car rental", "flexible car rental"]
  },
  {
    question: "Where can I pick up and return the car?",
    answer: "Cars are available throughout the Detroit Metro Area with convenient pickup and return locations. We have airport-friendly locations and neighborhood accessibility for your convenience.",
    keywords: ["car pickup locations", "car return locations", "Detroit car rental locations", "airport car rental"]
  },
  {
    question: "What types of cars are available?",
    answer: "We offer a variety of vehicles from compact cars to SUVs and luxury options. All cars are regularly maintained and inspected for safety. Choose the perfect car for your needs and budget.",
    keywords: ["types of rental cars", "car rental options", "rental car selection", "car variety"]
  },
  {
    question: "How far in advance should I book?",
    answer: "You can book up to 6 months in advance or as little as 1 hour before pickup. Early bookings often get better selection and pricing, while last-minute bookings are perfect for spontaneous trips.",
    keywords: ["how far in advance book car", "car rental booking time", "advance car booking", "last minute car rental"]
  },
  {
    question: "What if I need to cancel my reservation?",
    answer: "Free cancellation up to 24 hours before pickup, unless stated otherwise. Later cancellations may incur charges as specified in your booking confirmation. We make it easy to change your plans.",
    keywords: ["cancel car rental", "car rental cancellation", "change car rental", "modify reservation"]
  },
  {
    question: "Is DriveIO available in other cities?",
    answer: "Currently, DriveIO is available in the Detroit Metro Area. We're expanding to more cities soon! Sign up for our newsletter to be notified when we launch in your area.",
    keywords: ["DriveIO other cities", "car sharing expansion", "more locations", "new cities"]
  },
  {
    question: "How do I become a car owner on DriveIO?",
    answer: "We're currently accepting applications from car owners in the Detroit area. Share your car and earn money while helping others. Contact us at partners@driveio.app to learn more.",
    keywords: ["become car owner", "share your car", "car sharing partner", "earn money car"]
  },
  {
    question: "What safety measures does DriveIO have?",
    answer: "Safety is our top priority. We verify all drivers' identities, provide comprehensive insurance options, and maintain strict vehicle standards. Our platform is designed for trust and security.",
    keywords: ["car rental safety", "DriveIO safety", "secure car rental", "verified drivers"]
  }
];

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about renting cars with DriveIO. Can't find what you're looking for? 
            <a href="/contact" className="text-primary hover:underline ml-1">Contact us</a>.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-background rounded-lg border shadow-sm">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-${index}`}
              >
                <span className="font-semibold text-lg">{item.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div 
                  id={`faq-${index}`}
                  className="px-6 pb-4 text-muted-foreground leading-relaxed"
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary-hover transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};