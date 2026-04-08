import React from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
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

  const isActive = (href: string) =>
    href === '/' ? location === '/' : location.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">

          {/* Logo — left */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img src="/solartech-logo.png" alt="Solartech Merchants" className="h-12 w-auto" />
            <div className="hidden sm:block leading-tight">
              <span className="font-black text-[#0f0f0f] text-xl block leading-none tracking-tight">SOLARTECH</span>
              <span className="font-bold text-primary text-sm tracking-[0.18em] uppercase block">MERCHANTS</span>
            </div>
          </Link>

          {/* Nav links — centered */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-7">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors relative pb-1 ${
                  isActive(link.href)
                    ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Get Quote button — right */}
          <div className="hidden md:flex items-center shrink-0">
            <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 rounded-xl shadow-md shadow-primary/25 transition-all hover:scale-[1.02]">
                <WhatsAppIcon size={16} strokeWidth={1.8} className="mr-2" />
                Get Quote
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6 text-[#0f0f0f]" /> : <Menu className="h-6 w-6 text-[#0f0f0f]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3 mt-4">
              <a
                href="tel:+254729430917"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 text-[#0f0f0f] font-semibold text-sm"
              >
                <Phone className="h-4 w-4 text-primary" />
                +254 729 430 917
              </a>
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-xl">
                  <WhatsAppIcon size={16} strokeWidth={1.8} className="mr-2" />
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
