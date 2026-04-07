import React from 'react';
import { Link } from 'wouter';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getGeneralWhatsAppLink } from '@/data/products';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f0f] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 w-fit">
              <img src="/solartech-logo.png" alt="Solartech Merchants" className="h-10 w-auto" />
              <div className="leading-tight">
                <span className="font-black text-white text-base block tracking-tight">SOLARTECH</span>
                <span className="font-bold text-primary text-xs tracking-widest uppercase block">MERCHANTS</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Kenya with reliable, affordable, and sustainable solar energy solutions since 2019.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-gray-400 hover:text-white">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/products', label: 'All Products' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-primary/50" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Our Products</h3>
            <ul className="space-y-3">
              {[
                { href: '/products/solar-panels', label: 'Solar Panels' },
                { href: '/products/batteries', label: 'Batteries & Storage' },
                { href: '/products/inverters', label: 'Inverters' },
                { href: '/products/combos', label: 'Combo Kits' },
                { href: '/products/accessories', label: 'Accessories' },
                { href: '/products/lighting', label: 'Solar Lighting' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Gaberone Plaza, Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+254729430917" className="text-gray-400 hover:text-primary transition-colors">+254 729 430 917</a>
                  <a href="tel:+254729471565" className="text-gray-400 hover:text-primary transition-colors">+254 729 471 565</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@solartechmerchants.com" className="text-gray-400 hover:text-primary transition-colors break-all">
                  info@solartechmerchants.com
                </a>
              </li>
            </ul>
            <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">&copy; {year} Solartech Merchants. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
