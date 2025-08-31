import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Careers — DriveIO</title>
        <meta name="description" content="We’re building a trust-first car sharing platform. Share your interest and join our early team as we grow." />
      </Helmet>
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Careers</h1>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We’re not hiring yet, but we’re always excited to meet builders who care about safety, clarity, and great UX.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Teams we’ll grow</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>iOS engineering (Swift, performance, security)</li>
                  <li>Backend engineering (payments, bookings, reliability)</li>
                  <li>Design & research (trust, accessibility, clarity)</li>
                  <li>Operations & support (driver onboarding, safety)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Express interest</h2>
                <p className="text-muted-foreground">Email <a className="underline" href="mailto:careers@driveio.app">careers@driveio.app</a> with your resume/portfolio and a few lines on why DriveIO interests you.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;


