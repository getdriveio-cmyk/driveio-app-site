import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, MapPin } from 'lucide-react';
import { SEO } from '@/components/SEO';

export const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found - DriveIO"
        description="The page you're looking for doesn't exist. Return to DriveIO's homepage to continue your car sharing journey."
        canonical="/404"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Page Not Found",
          "description": "The page you're looking for doesn't exist.",
          "url": "https://driveio.com/404"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-background flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-primary-800/20 leading-none">
              404
            </h1>
          </div>

          {/* Main Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-primary-700 leading-relaxed">
              Oops! The page you're looking for seems to have driven off into the sunset. 
              Don't worry, we'll help you get back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Home className="h-5 w-5" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-300 text-primary-700 hover:bg-primary-50 font-semibold rounded-lg transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="bg-white rounded-2xl border border-neutral-300 p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-primary-800 mb-4">
              Looking for something specific?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/features"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary-50 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                  <Search className="h-5 w-5 text-primary-600" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-primary-800">Product Features</div>
                  <div className="text-sm text-primary-600">Explore what DriveIO offers</div>
                </div>
              </Link>
              
              <Link
                to="/how-it-works"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary-50 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-primary-600" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-primary-800">How It Works</div>
                  <div className="text-sm text-primary-600">Learn the process</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-8">
            <p className="text-primary-600 mb-2">
              Still can't find what you're looking for?
            </p>
            <Link
              to="/contact"
              className="text-primary hover:underline font-medium"
            >
              Contact our support team
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
