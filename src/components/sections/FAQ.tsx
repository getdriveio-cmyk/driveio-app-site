import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

export const FAQ = () => {
  const faqs = [
    {
      question: 'Is DriveIO available on Android?',
      answer: 'We\'re iOS-first to ensure the best possible experience during our initial launch. Android is definitely on our roadmap and we expect to launch it in the coming months. Join our waitlist to be notified when Android becomes available.'
    },
    {
      question: 'How is pricing calculated?',
      answer: 'Our pricing is completely transparent. You\'ll see the daily rate, service fee, estimated taxes, and any applicable deposit hold upfront before booking. No hidden fees, no surprises. The final amount is clearly displayed at checkout.'
    },
    {
      question: 'Do I need to verify my ID?',
      answer: 'Yes, all drivers must complete ID and driver\'s license verification for safety and security. The process is quick and secure, usually taking just a few minutes. Most verifications are approved instantly.'
    },
    {
      question: 'What about insurance?',
      answer: 'We offer comprehensive trip protection options during checkout. You can choose the coverage level that works best for you, from basic coverage to premium protection plans. All options are clearly explained before you book.'
    },
    {
      question: 'Where does DriveIO operate?',
      answer: 'We\'re launching in the Detroit metro area first, with airport-friendly pickup locations and convenient neighborhood access. We\'re expanding to more cities soon - stay tuned for updates on new markets.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept Apple Pay, all major credit cards, and debit cards. Apple Pay provides the fastest and most secure checkout experience. A temporary authorization hold may be placed on your payment method for security deposits.'
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking according to our cancellation policy. Free cancellation is available up to a certain time before your trip starts. Check the specific cancellation terms when booking, as they may vary by car owner.'
    },
    {
      question: 'What if I have issues during my trip?',
      answer: 'Our 24/7 support team is always available to help with any issues during your trip. You can reach us directly through the app for immediate assistance with roadside support, booking changes, or any other concerns.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about DriveIO car sharing.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-card rounded-2xl shadow-sm border border-border/50 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border/50 last:border-b-0"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:bg-muted/50 transition-colors duration-fast [&[data-state=open]]:bg-muted/30">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 pt-2 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-primary/5 rounded-2xl border border-primary/20">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-4">
            Our support team is here to help you get started.
          </p>
          <a 
            href="mailto:support@driveio.app"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors duration-fast"
          >
            Contact support →
          </a>
        </div>
      </div>
    </section>
  );
};