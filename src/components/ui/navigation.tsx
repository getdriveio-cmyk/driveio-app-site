import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { trackingEvents } from '@/lib/tracking';

const navigation = [
  { name: 'Product Features', href: '/features' },
  { name: 'How it Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Safety', href: '/safety' },
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press Kit', href: '/press-kit' },
  { name: 'Contact', href: '/contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Accessibility', href: '/accessibility' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsCompanyOpen(false);
    setIsLegalOpen(false);
  }, [location]);

  const handleTestFlightClick = () => {
    trackingEvents.testFlightClick();
    window.open('https://testflight.apple.com/join/driveio', '_blank');
  };

  const handleDownloadClick = () => {
    trackingEvents.downloadAppClick();
    window.open('https://apps.apple.com/app/driveio', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-400 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold text-primary-800">DriveIO</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {/* Main Navigation */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-fast font-medium"
              >
                {item.name}
              </Link>
            ))}

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                className="flex items-center text-foreground hover:text-primary transition-colors duration-fast font-medium"
              >
                Company
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCompanyOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-300 py-2 z-50">
                  {companyLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block w-full px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-fast"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Legal Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLegalOpen(!isLegalOpen)}
                className="flex items-center text-foreground hover:text-primary transition-colors duration-fast font-medium"
              >
                Legal
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isLegalOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLegalOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-300 py-2 z-50">
                  {legalLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block w-full px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-fast"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Button
              variant="outline"
              onClick={handleTestFlightClick}
              className="border-primary-300 text-primary-700 hover:bg-primary-50"
            >
              Join TestFlight
            </Button>
            <Button
              onClick={handleDownloadClick}
              className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-hover"
            >
              Download App
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors duration-fast"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Main Navigation */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-fast"
              >
                {item.name}
              </Link>
            ))}

            {/* Company Links */}
            <div className="border-t border-neutral-300 pt-4">
              <div className="px-3 py-2 text-sm font-medium text-neutral-600">Company</div>
              {companyLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-fast"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="border-t border-neutral-300 pt-4">
              <div className="px-3 py-2 text-sm font-medium text-neutral-600">Legal</div>
              {legalLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-fast"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile CTA Buttons */}
            <div className="border-t border-neutral-300 pt-4 space-y-2">
              <Button
                variant="outline"
                onClick={handleTestFlightClick}
                className="flex items-center justify-center gap-2 w-full border-primary-300 text-primary-700 hover:bg-primary-50"
              >
                Join TestFlight
              </Button>
              <Button
                onClick={handleDownloadClick}
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-hover"
              >
                Download App
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};