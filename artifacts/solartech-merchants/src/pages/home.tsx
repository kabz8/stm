import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products, getGeneralWhatsAppLink, formatKES, getProductWhatsAppLink } from '@/data/products';
import {
  Sun, Battery, Zap, Package, Phone, MapPin,
  CheckCircle2, Star, ArrowRight, Award, Clock, Headphones, ShieldCheck
} from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

const HERO_IMAGE = '/images/hero-home.png';
const SOLAR_IMAGE = '/images/solar-array.png';
const BATTERY_IMAGE = '/images/battery-system.png';

const featuredProducts = products.filter(p =>
  ['combo-550', 'bat-100-lithium', 'inv-5000-hybrid'].includes(p.id)
);

const testimonials = [
  {
    name: 'James Muthoni',
    location: 'Westlands, Nairobi',
    text: 'Solartech Merchants transformed our home. We have not paid a KPLC bill in 6 months. The installation support was excellent.',
    rating: 5,
  },
  {
    name: 'Grace Wanjiku',
    location: 'Kiambu County',
    text: 'I ordered the 550W combo kit via WhatsApp and it was delivered in two days. Very affordable and the system has been running perfectly.',
    rating: 5,
  },
  {
    name: 'Peter Kamau',
    location: 'Ruaka, Nairobi',
    text: 'The Hithium Power Dock is amazing. Smart monitoring, huge capacity, and the team walked me through everything. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Sarah Odhiambo',
    location: 'Langata, Nairobi',
    text: 'Best solar prices in Nairobi. Quality of panels is top-notch and after-sale service is great. Will definitely refer friends.',
    rating: 5,
  },
];

const categories = [
  { label: 'Solar Panels', icon: Sun, href: '/products/solar-panels' },
  { label: 'Batteries', icon: Battery, href: '/products/batteries' },
  { label: 'Inverters', icon: Zap, href: '/products/inverters' },
  { label: 'Combo Kits', icon: Package, href: '/products/combos' },
];

const whyUs = [
  { icon: Award, title: 'Quality Guaranteed', text: 'All products come with manufacturer warranties. We only stock certified brands.' },
  { icon: ShieldCheck, title: 'Genuine Products', text: 'Authentic solar components — no counterfeits. Every product tested before delivery.' },
  { icon: Headphones, title: 'After-Sales Support', text: 'Our technical team is available for installation guidance and troubleshooting.' },
  { icon: Clock, title: 'Fast Delivery', text: 'Same-day and next-day delivery within Nairobi. Upcountry delivery available.' },
];

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '5+', label: 'Years in Business' },
  { value: '1000+', label: 'Products in Stock' },
  { value: '100%', label: 'Quality Assured' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════════════════════════════════════
          HERO — white left, full-bleed image right
      ═══════════════════════════════════════════ */}
      <section className="flex flex-col lg:flex-row min-h-screen">

        {/* LEFT — white, content */}
        <div className="flex-1 bg-white flex flex-col justify-center px-8 sm:px-14 xl:px-20 py-20 lg:py-0">
          <div className="max-w-lg">

            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-10 bg-primary rounded-full" />
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Nairobi, Kenya</span>
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-[#0f0f0f] leading-[1.05] mb-6">
              Kenya's<br />
              <span className="text-primary">Solar</span><br />
              Experts
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Premium panels, batteries, inverters &amp; complete combo kits — sourced, tested, and delivered across Nairobi.
            </p>

            <div className="flex flex-row gap-3 mb-14 flex-wrap">
              <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-7 py-5 rounded-xl text-sm shadow-lg shadow-primary/25">
                  <WhatsAppIcon size={17} strokeWidth={1.8} className="mr-2" />
                  Free Quote
                </Button>
              </a>
              <Link href="/products">
                <Button className="bg-transparent border-2 border-[#0f0f0f] text-[#0f0f0f] hover:bg-[#0f0f0f] hover:text-white font-bold px-7 py-5 text-sm rounded-xl transition-all">
                  Browse Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-x-10 gap-y-5 border-t border-gray-100 pt-10">
              {stats.map(s => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-[#0f0f0f]">{s.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — full-bleed image, zero padding, zero overlay */}
        <div className="h-64 lg:h-auto lg:w-[52%] xl:w-[55%] shrink-0">
          <img
            src={HERO_IMAGE}
            alt="Solar installation in Kenya"
            className="w-full h-full object-cover"
          />
        </div>

      </section>
      {/* ═══════════════════════════════════════════
          CATEGORIES — horizontal cards on white
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0f0f0f] mb-4">Shop by Category</h2>
            <p className="text-gray-500 max-w-lg mx-auto">From individual components to complete turnkey solar systems.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map(cat => (
              <Link key={cat.href} href={cat.href}>
                <div className="group relative border-2 border-gray-100 hover:border-primary rounded-2xl p-7 text-center cursor-pointer transition-all hover:shadow-xl hover:shadow-primary/10 bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 transition-all">
                      <cat.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="font-bold text-[#0f0f0f] text-base">{cat.label}</div>
                    <div className="text-xs text-gray-400 mt-1 flex items-center justify-center gap-1 group-hover:text-primary transition-colors">
                      Shop now <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════
          FEATURED PRODUCTS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Bestsellers</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#0f0f0f]">Featured Products</h2>
            </div>
            <Link href="/products">
              <Button variant="outline" className="border-[#0f0f0f] text-[#0f0f0f] hover:bg-[#0f0f0f] hover:text-white rounded-xl font-semibold shrink-0">
                View All <ArrowRight className="w-4 h-4 ml-2" />
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
      {/* ═══════════════════════════════════════════
          COMBO SPOTLIGHT — dark section with orange pop
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0f0f0f] py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8 shadow-lg shadow-primary/30">
                Best Seller
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
                550W Complete<br />
                <span className="text-primary">Solar System Combo</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Everything you need to power your home — panels, battery, inverter, cables, bulbs, and a FREE floodlight. One kit, total freedom from the grid.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  '550W Monocrystalline All-Weather Panel',
                  '250Ah Solar Gel Battery',
                  '600–1200W DC-AC Power Inverter',
                  '30A Solar Charge Controller',
                  '20M 4.0mm PV Solar Cable',
                  '6pcs 5W DC LED Bulbs',
                  'FREE 50W Solar Floodlight',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Package Price</div>
                  <div className="text-5xl font-black text-primary">{formatKES(68000)}</div>
                </div>
                <a href={getProductWhatsAppLink('550W Solar System Combo')} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-xl shadow-xl shadow-primary/30 transition-all hover:scale-[1.02] text-base">
                    <WhatsAppIcon size={20} strokeWidth={1.8} className="mr-2" />
                    Order via WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
              <img
                src={SOLAR_IMAGE}
                alt="550W Solar Combo"
                className="relative w-full rounded-2xl shadow-2xl shadow-black/60 aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════
          WHY CHOOSE US — white with bold orange icons
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Our Promise</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0f0f0f] mb-4">Why Choose Us?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We are not just selling solar — we are empowering Kenya, one home at a time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <div key={item.title} className="group border-2 border-gray-100 hover:border-primary rounded-2xl p-8 transition-all hover:shadow-xl hover:shadow-primary/10">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-[#0f0f0f] text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════
          TESTIMONIALS — light gray background
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Customer Stories</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0f0f0f] mb-4">What Our clients Say</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Trusted by hundreds of homes and businesses across Nairobi.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm border-2 border-gray-100 hover:border-primary/30 hover:shadow-md transition-all flex flex-col">
                {/* Quote mark */}
                <div className="text-6xl text-primary/20 font-serif leading-none mb-4 font-black">"</div>
                <div className="flex gap-1 mb-4 -mt-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{t.text}</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-bold text-[#0f0f0f]">{t.name}</div>
                  <div className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-primary" /> {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════
          HITHIUM SPOTLIGHT — premium product feature
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] p-10 sm:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 border border-primary/40 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                Premium Product
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Hithium Home<br /><span className="text-primary">Power Dock</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                A premium modular home energy storage system with intelligent smart monitoring. Expandable capacity, app-controlled, and built for the future of home energy in Kenya.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Starting from</div>
                  <div className="text-3xl font-black text-primary">{formatKES(185000)}</div>
                </div>
              </div>
              <a href={getProductWhatsAppLink('Hithium Home Power Dock')} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-5 rounded-xl shadow-xl shadow-primary/30 text-base">
                  <WhatsAppIcon size={20} strokeWidth={1.8} className="mr-2" />
                  Inquire via WhatsApp
                </Button>
              </a>
            </div>
            <div className="relative">
              <img
                src={BATTERY_IMAGE}
                alt="Hithium Home Power Dock"
                className="w-full rounded-2xl aspect-video object-cover shadow-2xl shadow-black"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════
          CTA FOOTER BAND — full orange
      ═══════════════════════════════════════════ */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Ready to Go Solar?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Get a free, customized quote for your home or business. Our team responds within minutes on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-50 font-black px-10 py-6 rounded-xl text-base shadow-2xl hover:scale-[1.02] transition-all">
                <WhatsAppIcon size={20} strokeWidth={1.8} className="mr-2 text-[#25D366]" />
                WhatsApp Us Now
              </Button>
            </a>
            <a href="tel:+254729430917">
              <Button size="lg" className="bg-white/15 border border-white/40 text-white hover:bg-white/25 px-10 py-6 rounded-xl text-base transition-all font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                +254 729 430 917
              </Button>
            </a>
          </div>
          <p className="text-white/50 text-sm mt-8 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            Gaberone Plaza, Nairobi, Kenya &nbsp;|&nbsp; info@solartechmerchants.com
          </p>
        </div>
      </section>
    </div>
  );
}
