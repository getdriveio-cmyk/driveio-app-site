import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const PressKit = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-4">Press Kit</h1>
            <p className="text-muted-foreground mb-6">
              Download DriveIO brand assets and logos for approved media use.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Logo: available upon request at press@driveio.app</li>
              <li>App screenshots: coming soon</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PressKit;


