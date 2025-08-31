import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About DriveIO — Our mission and story</title>
        <meta name="description" content="DriveIO is a trust-first car sharing platform built around transparent pricing, verified drivers, and delightful booking." />
      </Helmet>
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">About DriveIO</h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              DriveIO exists to make local mobility simple and trustworthy. We combine fast booking, fully transparent pricing, and verified drivers so every trip feels clear and safe from start to finish.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-3">Our mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Build the most trusted car sharing experience in every city we serve by leading with clarity, fairness, and safety.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">What we value</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Transparency first — clear pricing, clear policies, no surprises.</li>
                  <li>Safety by design — identity verification, insurance options, and secure payments.</li>
                  <li>Delightful UX — book in minutes with an experience that gets out of the way.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Where we are</h2>
                <p className="text-muted-foreground">We’re currently live in the Detroit Metro Area with more cities on the roadmap.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;


