import React from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { getGeneralWhatsAppLink } from '@/data/products';

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <img src="/solartech-logo.png" alt="Solartech Merchants" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <span className="font-display font-bold text-secondary text-xl block leading-tight">Solartech</span>
              <span className="font-sans text-primary text-sm font-semibold tracking-wider uppercase block leading-tight">Merchants</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <a 
              href={getGeneralWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-full shadow-md hover:shadow-lg transition-all">
                Get Quote
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location === link.href 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-foreground hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a 
                href="tel:+254729430917" 
                className="flex items-center gap-3 text-secondary px-3 py-2 font-medium"
              >
                <Phone className="h-5 w-5 text-primary" />
                +254 729 430 917
              </a>
              <a 
                href={getGeneralWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-md">
                  Get Quote via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
