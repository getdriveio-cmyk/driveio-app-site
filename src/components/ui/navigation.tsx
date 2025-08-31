import { useState } from 'react';
import { Button } from './button';
import { Menu, X, ExternalLink } from 'lucide-react';
import driveioLogo from '@/assets/driveio-logo.png';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={driveioLogo} 
              alt="DriveIO" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-fast font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('#', '_blank')}
              className="flex items-center gap-2"
            >
              Join TestFlight
              <ExternalLink className="h-3 w-3" />
            </Button>
            <Button 
              size="sm"
              onClick={() => window.open('#', '_blank')}
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
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-fast"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 px-3 pt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('#', '_blank')}
                  className="flex items-center justify-center gap-2 w-full"
                >
                  Join TestFlight
                  <ExternalLink className="h-3 w-3" />
                </Button>
                <Button 
                  size="sm"
                  onClick={() => window.open('#', '_blank')}
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