import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { FAQ } from '@/components/sections/FAQ';

const FAQPage = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does DriveIO work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DriveIO is a car sharing platform where you can book local cars by the day. Browse available vehicles, book online, meet your verified driver for pickup, and return the car when finished."
        }
      },
      {
        "@type": "Question",
        "name": "What do I need to book?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll need a valid driver's license, government ID, and a payment method. We verify your identity to ensure safety for everyone."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing varies by vehicle and dates. We show all costs upfront including base rate, taxes, fees, and optional insurance. No hidden charges."
        }
      },
      {
        "@type": "Question",
        "name": "Is insurance included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basic coverage is included, but you can choose additional protection levels during checkout for extra peace of mind."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="FAQ"
        description="Frequently asked questions about DriveIO car sharing. Learn how to book, what you need, and how pricing works."
        canonical="https://driveio.app/faq"
        structuredData={faqStructuredData}
        keywords={['DriveIO FAQ', 'car sharing questions', 'how to book car', 'car rental FAQ', 'DriveIO help']}
      />
      <Navigation />
      <main>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;


