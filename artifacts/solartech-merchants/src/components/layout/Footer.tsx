import React from 'react';
import { Link } from 'wouter';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getGeneralWhatsAppLink } from '@/data/products';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 bg-white p-2 rounded-lg inline-flex">
              <img src="/solartech-logo.png" alt="Solartech Merchants" className="h-10 w-auto" />
              <div>
                <span className="font-display font-bold text-secondary block leading-tight">Solartech</span>
                <span className="font-sans text-primary text-xs font-semibold tracking-wider uppercase block leading-tight">Merchants</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering Kenya with reliable, affordable, and sustainable solar energy solutions. We are the trusted solar authority in Nairobi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-4 w-4" /> Home</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-4 w-4" /> All Products</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-4 w-4" /> About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-4 w-4" /> Contact & Location</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-white">Our Products</h3>
            <ul className="space-y-3">
              <li><Link href="/products/solar-panels" className="text-gray-300 hover:text-primary transition-colors">Solar Panels</Link></li>
              <li><Link href="/products/batteries" className="text-gray-300 hover:text-primary transition-colors">Batteries & Storage</Link></li>
              <li><Link href="/products/inverters" className="text-gray-300 hover:text-primary transition-colors">Inverters</Link></li>
              <li><Link href="/products/combos" className="text-gray-300 hover:text-primary transition-colors">Complete Combo Kits</Link></li>
              <li><Link href="/products/accessories" className="text-gray-300 hover:text-primary transition-colors">Solar Accessories</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Gaberone Plaza<br />Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+254729430917" className="hover:text-primary transition-colors">+254 729 430 917</a>
                  <a href="tel:+254729471565" className="hover:text-primary transition-colors">+254 729 471 565</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@solartechmerchants.com" className="hover:text-primary transition-colors">info@solartechmerchants.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Solartech Merchants. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
