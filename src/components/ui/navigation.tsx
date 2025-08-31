import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { Menu, X, ExternalLink } from 'lucide-react';
import driveioLogo from '@/assets/driveio-logo.png';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '/features' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Safety', href: '/safety' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  const navigateTo = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href;
      setIsOpen(false);
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" aria-label="DriveIO home">
              <img 
                src={driveioLogo} 
                alt="DriveIO" 
                className="h-8 w-auto"
                width="128"
                height="32"
                decoding="async"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-fast font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://testflight.apple.com/join/driveio', '_blank', 'noopener,noreferrer')}
              className="flex items-center gap-2"
            >
              Join TestFlight
              <ExternalLink className="h-3 w-3" />
            </Button>
            <Button 
              size="sm"
              onClick={() => window.open('https://apps.apple.com/app/driveio', '_blank', 'noopener,noreferrer')}
              className="flex items-center gap-2 bg-primary hover:bg-primary-hover"
            >
              Download App
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-fast"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 px-3 pt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://testflight.apple.com/join/driveio', '_blank', 'noopener,noreferrer')}
                  className="flex items-center justify-center gap-2 w-full"
                >
                  Join TestFlight
                  <ExternalLink className="h-3 w-3" />
                </Button>
                <Button 
                  size="sm"
                  onClick={() => window.open('https://apps.apple.com/app/driveio', '_blank', 'noopener,noreferrer')}
                  className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-hover"
                >
                  Download App
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};