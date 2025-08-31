import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackingEvents } from '@/lib/tracking';

const faqs = [
  {
    question: "How does DriveIO ensure driver and vehicle safety?",
    answer: "Every driver undergoes thorough background checks, license verification, and vehicle inspections. We also require proof of insurance and maintain strict safety standards. All vehicles are regularly inspected and must meet our quality requirements."
  },
  {
    question: "What areas does DriveIO currently serve?",
    answer: "DriveIO is currently available throughout the Detroit Metro Area, including Detroit, Dearborn, Livonia, Troy, and surrounding communities. We're actively expanding to serve more locations."
  },
  {
    question: "How much does it cost to use DriveIO?",
    answer: "Pricing varies by vehicle type and duration, but you'll always see the total cost upfront with no hidden fees. We offer competitive rates starting at $25/day, with discounts for longer rentals."
  },
  {
    question: "What happens if I need to cancel my reservation?",
    answer: "You can cancel your reservation up to 24 hours before pickup for a full refund. Cancellations within 24 hours may incur a small fee. We understand emergencies happen and work with customers on a case-by-case basis."
  },
  {
    question: "Do I need my own insurance to use DriveIO?",
    answer: "No, DriveIO provides comprehensive insurance coverage for all rentals. However, if you have your own auto insurance, it may provide additional coverage. We recommend checking with your insurance provider."
  },
  {
    question: "How do I get help if something goes wrong?",
    answer: "DriveIO offers 24/7 customer support through our app, phone, and email. Our support team is trained to handle any issues quickly and efficiently, ensuring you're never stranded."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
      trackingEvents.faqExpand(index);
    }
  };

  const handleContactClick = () => {
    trackingEvents.ctaClick('faq-contact');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Questions
            </span>
          </h2>
          <p className="text-xl text-primary-700 max-w-2xl mx-auto leading-relaxed">
            Got questions? We've got answers. Here are the most common questions about DriveIO.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-300 rounded-lg overflow-hidden hover:border-primary-300 transition-colors duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary-50 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-primary-800 text-lg">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-primary-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-primary-700 mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleContactClick}
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors"
            >
              Contact Support
            </Button>
            <Button
              variant="outline"
              onClick={() => trackingEvents.ctaClick('faq-download')}
              className="px-6 py-3 border-2 border-primary-300 text-primary-700 hover:bg-primary-50 font-semibold rounded-lg transition-all duration-300"
            >
              Download App
            </Button>
          </div>
          <p className="mt-4 text-sm text-primary-600">
            Can't find what you're looking for? <a href="/contact" className="text-primary hover:underline ml-1">Contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
};