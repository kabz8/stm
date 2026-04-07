import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { products, getGeneralWhatsAppLink, formatKES, getProductWhatsAppLink } from '@/data/products';
import {
  Sun, Battery, Zap, Shield, MessageCircle, Phone, MapPin,
  CheckCircle2, Star, ChevronRight, ArrowRight, Leaf, Award, Clock, Headphones
} from 'lucide-react';

const HERO_IMAGE = '/src/assets/images/hero-home.png';
const BATTERY_IMAGE = '/src/assets/images/battery-system.png';
const SOLAR_IMAGE = '/src/assets/images/solar-array.png';

const featuredProducts = products.filter(p =>
  ['combo-550', 'bat-100-lithium', 'sp-550', 'inv-5000-hybrid', 'hithium-dock', 'combo-1000'].includes(p.id)
);

const testimonials = [
  {
    name: 'James Muthoni',
    location: 'Westlands, Nairobi',
    text: 'Solartech Merchants transformed our home. We have not paid a KPLC bill in 6 months. The installation support was excellent and the team was very professional.',
    rating: 5,
  },
  {
    name: 'Grace Wanjiku',
    location: 'Kiambu County',
    text: 'I ordered the 550W combo kit via WhatsApp and it was delivered in two days. Very affordable pricing and the system has been running perfectly for my salon business.',
    rating: 5,
  },
  {
    name: 'Peter Kamau',
    location: 'Ruaka, Nairobi',
    text: 'The Hithium Power Dock is amazing — smart monitoring, huge capacity, and the team at Gaberone Plaza walked me through everything. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Sarah Odhiambo',
    location: 'Langata, Nairobi',
    text: 'Best solar prices in Nairobi, no doubt. I compared with several shops and Solartech was most competitive. The quality of panels is top-notch and after-sale service is great.',
    rating: 5,
  },
];

const categories = [
  { label: 'Solar Panels', icon: Sun, href: '/products/solar-panels', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { label: 'Batteries', icon: Battery, href: '/products/batteries', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { label: 'Inverters', icon: Zap, href: '/products/inverters', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { label: 'Combo Kits', icon: Shield, href: '/products/combos', color: 'bg-green-50 text-green-700 border-green-200' },
];

const whyUs = [
  { icon: Award, title: 'Quality Guaranteed', text: 'All products come with manufacturer warranties. We only stock trusted, certified brands.' },
  { icon: Leaf, title: 'Genuine Products', text: 'Authentic solar components — no counterfeits. Every product tested before delivery.' },
  { icon: Headphones, title: 'After-Sales Support', text: 'Our technical team is available for installation guidance and troubleshooting via WhatsApp.' },
  { icon: Clock, title: 'Fast Delivery', text: 'Same-day and next-day delivery within Nairobi. Upcountry delivery available.' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [HERO_IMAGE, SOLAR_IMAGE, BATTERY_IMAGE];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-secondary">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={slides[currentSlide]}
            alt="Solar energy"
            className="w-full h-full object-cover opacity-20 transition-opacity duration-1000"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm px-4 py-1.5">
              Nairobi's Premier Solar Specialists
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Power Your Home &amp; Business with
              <span className="text-primary block mt-1">Solar Energy</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Premium solar panels, batteries, inverters, and complete combo kits — delivered and supported by Kenya's trusted solar experts at Gaberone Plaza, Nairobi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-8 py-6 text-base rounded-full shadow-lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Quote on WhatsApp
                </Button>
              </a>
              <Link href="/products">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-base rounded-full">
                  Browse Products
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12">
              {[
                { value: '500+', label: 'Installations Done' },
                { value: '5+ Years', label: 'In Business' },
                { value: '100%', label: 'Quality Assured' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-3xl font-display font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-white/40'}`}
            />
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-xl mx-auto">From individual components to complete solar systems — everything you need for clean, reliable power.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map(cat => (
              <Link key={cat.href} href={cat.href}>
                <div className={`border rounded-2xl p-6 text-center hover:shadow-md transition-all cursor-pointer group ${cat.color}`}>
                  <cat.icon className="w-10 h-10 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-display font-semibold text-base sm:text-lg">{cat.label}</div>
                  <div className="text-sm mt-1 flex items-center justify-center gap-1 opacity-70">
                    Shop now <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary mb-2">Featured Products</h2>
              <p className="text-gray-600">Our most popular solar solutions for Kenyan homes and businesses.</p>
            </div>
            <Link href="/products">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full">
                View All Products <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* COMBO HIGHLIGHT BANNER */}
      <section className="py-16 bg-primary/10 border-y border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <Badge className="mb-4 bg-primary text-white">Best Seller</Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary mb-4">
                550W Solar System Combo
              </h2>
              <p className="text-gray-700 mb-6 text-lg">Complete plug-and-play solar kit for your home. Everything you need, delivered to your door.</p>
              <ul className="space-y-2 mb-8">
                {[
                  '550W Monocrystalline All-Weather Panel',
                  '250Ah Solar Gel Battery',
                  '600-1200W DC-AC Power Inverter',
                  '30A Solar Charge Controller',
                  '20M 4.0mm PV Solar Cable',
                  '6pcs 5W DC Bulbs',
                  'FREE 50W Solar Floodlight',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div>
                  <div className="text-sm text-gray-500">Package Price</div>
                  <div className="text-4xl font-display font-bold text-secondary">{formatKES(68000)}</div>
                </div>
                <a href={getProductWhatsAppLink('550W Solar System Combo')} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-8 py-6 rounded-full shadow-lg text-base">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Order via WhatsApp
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex-1 max-w-lg w-full">
              <img src={SOLAR_IMAGE} alt="550W Solar Combo" className="w-full rounded-2xl shadow-xl object-cover aspect-video" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">Why Choose Solartech Merchants?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">We are not just selling solar — we are empowering Kenya, one home at a time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map(item => (
              <div key={item.title} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Real Kenyans, real results. Trusted by hundreds of homes and businesses across Nairobi.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">"{t.text}"</p>
                <div>
                  <div className="font-display font-semibold text-secondary">{t.name}</div>
                  <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" /> {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-primary to-amber-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">Ready to Go Solar?</h2>
          <p className="text-white/85 text-lg mb-10 max-w-xl mx-auto">
            Get a free consultation and customized quote for your home or business. Our team is ready on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-50 font-bold px-10 py-6 rounded-full text-base shadow-xl">
                <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" />
                WhatsApp Us Now
              </Button>
            </a>
            <a href="tel:+254729430917">
              <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10 px-10 py-6 rounded-full text-base">
                <Phone className="w-5 h-5 mr-2" />
                Call +254 729 430 917
              </Button>
            </a>
          </div>
          <p className="text-white/60 text-sm mt-8">
            Visit us: Gaberone Plaza, Nairobi, Kenya &nbsp;|&nbsp; info@solartechmerchants.com
          </p>
        </div>
      </section>

    </div>
  );
}
