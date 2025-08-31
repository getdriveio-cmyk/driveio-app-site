import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { trackingEvents } from '@/lib/tracking';

const socialLinks = [
  { icon: Twitter, href: 'https://x.com/GetDriveIO', label: 'X (Twitter)' },
  { icon: Instagram, href: 'https://www.instagram.com/getdriveio/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/driveio', label: 'LinkedIn' },
];

const productLinks = [
  { name: 'Features', href: '/features' },
  { name: 'How It Works', href: '/how-it-works' },
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

const supportLinks = [
  { name: 'Help Center', href: '/help' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact Support', href: '/contact' },
  { name: 'Community', href: '/community' },
];

export const Footer = () => {
  const handleSocialClick = (platform: string) => {
    trackingEvents.socialMediaClick(platform);
  };

  const handleLinkClick = (section: string, link: string) => {
    trackingEvents.footerLinkClick(section, link);
  };

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-300 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold text-white">DriveIO</span>
            </div>
            <p className="text-primary-100 mb-6 max-w-md">
              Trust-first car sharing platform connecting drivers with verified vehicles. 
              Transparent pricing, no hidden fees, available in Detroit Metro Area.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-primary-100">
                <MapPin className="h-4 w-4 mr-3 text-primary-300" />
                <span>Detroit Metro Area, Michigan</span>
              </div>
              <div className="flex items-center text-primary-100">
                <Mail className="h-4 w-4 mr-3 text-primary-300" />
                <a 
                  href="mailto:hello@driveio.com" 
                  className="hover:text-primary-200 transition-colors duration-fast"
                  onClick={() => handleLinkClick('contact', 'email')}
                >
                  hello@driveio.com
                </a>
              </div>
              <div className="flex items-center text-primary-100">
                <Phone className="h-4 w-4 mr-3 text-primary-300" />
                <a 
                  href="tel:+1-313-DRIVEIO" 
                  className="hover:text-primary-200 transition-colors duration-fast"
                  onClick={() => handleLinkClick('contact', 'phone')}
                >
                  +1 (313) DRIVEIO
                </a>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-primary transition-colors duration-fast"
                    onClick={() => handleLinkClick('product', link.name.toLowerCase())}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-primary transition-colors duration-fast"
                    onClick={() => handleLinkClick('company', link.name.toLowerCase())}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3 mb-6">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-primary transition-colors duration-fast"
                    onClick={() => handleLinkClick('support', link.name.toLowerCase())}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-primary transition-colors duration-fast"
                    onClick={() => handleLinkClick('legal', link.name.toLowerCase())}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-primary-100">
              <p>&copy; {new Date().getFullYear()} DriveIO. All rights reserved.</p>
              <p className="mt-1">
                Made with ❤️ in Detroit, Michigan
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-fast group"
                  onClick={() => handleSocialClick(social.label.toLowerCase())}
                >
                  <social.icon className="h-5 w-5 text-primary-200 group-hover:text-primary transition-colors duration-fast" />
                </a>
              ))}
            </div>
          </div>

          {/* Cookie Notice */}
          <div className="mt-6 pt-6 border-t border-primary-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <p className="text-xs text-primary-200">
                We use cookies to enhance your experience and analyze site traffic. 
                By continuing to use our site, you consent to our use of cookies.
              </p>
              <div className="flex items-center space-x-4 text-xs">
                <a href="/cookies" className="text-primary hover:underline">
                  Learn more
                </a>
                <span className="text-primary-300">|</span>
                <button 
                  className="text-primary hover:underline"
                  onClick={() => {
                    // Trigger cookie banner
                    const event = new CustomEvent('showCookieBanner');
                    window.dispatchEvent(event);
                  }}
                >
                  Manage preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};