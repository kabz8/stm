import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { getGeneralWhatsAppLink } from '@/data/products';
import { Sun, Shield, Users, Leaf, Award, Phone, MapPin } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

const SOLAR_IMAGE = '/src/assets/images/solar-array.png';

const values = [
  { icon: Award, title: 'Quality Assurance', text: 'Every product we sell is sourced from certified manufacturers and thoroughly tested before delivery.' },
  { icon: Users, title: 'Customer First', text: 'We believe in building relationships, not just making sales. Real humans, real answers — fast.' },
  { icon: Leaf, title: 'Sustainability', text: 'Solar energy is the future of Kenya. We are proud to be at the forefront of the renewable energy transition.' },
  { icon: Shield, title: 'Expertise', text: 'With 5+ years in the industry and 500+ successful installations, our team has the knowledge to guide you right.' },
];

const team = [
  { name: 'David Njoroge', role: 'Founder & CEO', description: 'Solar engineer with 10+ years of renewable energy experience across East Africa.' },
  { name: 'Mercy Akinyi', role: 'Sales Manager', description: 'Solar product specialist helping customers choose the perfect system for their needs.' },
  { name: 'Brian Ochieng', role: 'Technical Lead', description: 'Certified solar installer and system designer ensuring every installation is flawless.' },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#0f0f0f] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">About Solartech Merchants</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Nairobi's trusted solar energy specialists — empowering homes and businesses with clean, reliable power.</p>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Who We Are</p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0f0f0f] mb-6">Powering Kenya, One Home at a Time</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Solartech Merchants was founded with a clear mission: make high-quality solar energy accessible and affordable to every Kenyan household and business.</p>
                <p>Based at Gaberone Plaza in the heart of Nairobi, we have grown to become one of the most trusted solar product suppliers in Kenya — serving customers from individual homeowners to large commercial installations.</p>
                <p>We stock everything you need for a complete solar system: monocrystalline panels, gel and lithium batteries, pure sine wave inverters, charge controllers, and complete plug-and-play combo kits.</p>
                <p>Every order is handled personally via WhatsApp, ensuring fast, clear communication and the right advice for your specific power needs.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 font-bold shadow-lg shadow-primary/25">
                    <WhatsAppIcon size={16} strokeWidth={1.8} className="mr-2" /> Talk to Us
                  </Button>
                </a>
                <Link href="/products">
                  <Button variant="outline" className="border-[#0f0f0f] text-[#0f0f0f] hover:bg-[#0f0f0f] hover:text-white rounded-xl px-8 font-bold">
                    Browse Products
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src={SOLAR_IMAGE} alt="Solar installation" className="rounded-2xl shadow-2xl w-full object-cover aspect-video" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border-2 border-gray-100 px-6 py-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-md shadow-primary/30">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-[#0f0f0f]">500+</div>
                  <div className="text-xs text-gray-500">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f0f0f] mb-4">What We Stand For</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Our values drive every interaction, every product we stock, and every installation we support.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-100 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all text-center group">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform">
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-[#0f0f0f] text-base mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">The Team</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f0f0f] mb-4">Meet the Experts</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Solar professionals passionate about bringing clean energy to Kenya.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map(member => (
              <div key={member.name} className="text-center border-2 border-gray-100 rounded-2xl p-8 hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/10 group">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <Users className="w-9 h-9 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-black text-[#0f0f0f] text-lg">{member.name}</h3>
                <div className="text-primary text-sm font-bold mb-2">{member.role}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Visit Us in Nairobi</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">Gaberone Plaza, Nairobi, Kenya. Or reach us instantly on WhatsApp.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-primary hover:bg-gray-50 font-black px-8 rounded-xl shadow-xl">
                <WhatsAppIcon size={16} strokeWidth={1.8} className="mr-2 text-[#25D366]" /> WhatsApp Us
              </Button>
            </a>
            <Link href="/contact">
              <Button className="bg-white/15 border border-white/40 text-white hover:bg-white/25 px-8 rounded-xl font-semibold">
                Get Directions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
