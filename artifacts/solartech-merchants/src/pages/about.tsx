import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { getGeneralWhatsAppLink } from '@/data/products';
import { Sun, Shield, Users, Leaf, Award, MessageCircle, Phone, MapPin } from 'lucide-react';

const SOLAR_IMAGE = '/src/assets/images/solar-array.png';
const BATTERY_IMAGE = '/src/assets/images/battery-system.png';

const values = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    text: 'Every product we sell is thoroughly tested and sourced from certified manufacturers. We stand behind everything we offer.'
  },
  {
    icon: Users,
    title: 'Customer First',
    text: 'We believe in building relationships, not just making sales. Our WhatsApp-first approach means real humans, real answers, real fast.'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    text: 'Solar energy is the future of Kenya. We are proud to be at the forefront of Africa\'s renewable energy transition.'
  },
  {
    icon: Award,
    title: 'Expertise',
    text: 'With over 5 years in the solar industry and 500+ successful installations, our team has the knowledge to guide you right.'
  },
];

const team = [
  { name: 'David Njoroge', role: 'Founder & CEO', description: 'Solar engineer with 10+ years of renewable energy experience across East Africa.' },
  { name: 'Mercy Akinyi', role: 'Sales Manager', description: 'Solar product specialist helping customers choose the perfect system for their needs.' },
  { name: 'Brian Ochieng', role: 'Technical Lead', description: 'Certified solar installer and system designer ensuring every installation is flawless.' },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">About Solartech Merchants</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Nairobi's trusted solar energy specialists — empowering homes and businesses with clean, reliable power.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-full mb-6">
                <Sun className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary mb-6">
                Powering Kenya, One Home at a Time
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Solartech Merchants was founded with a clear mission: make high-quality solar energy accessible and affordable to every Kenyan household and business.
                </p>
                <p>
                  Based at Gaberone Plaza in the heart of Nairobi, we have grown to become one of the most trusted solar product suppliers in Kenya — serving customers from individual homeowners to large commercial installations.
                </p>
                <p>
                  We stock everything you need for a complete solar system: monocrystalline panels, gel and lithium batteries, pure sine wave inverters, charge controllers, and complete plug-and-play combo kits. Our commitment to genuine, certified products sets us apart from the rest.
                </p>
                <p>
                  Every order is handled personally via WhatsApp, ensuring fast, clear communication and the right advice for your specific power needs.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Talk to Us
                  </Button>
                </a>
                <Link href="/products">
                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full px-8">
                    Browse Our Products
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={SOLAR_IMAGE}
                alt="Solar installation"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-video"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Sun className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-secondary">500+</div>
                  <div className="text-sm text-gray-500">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary mb-4">What We Stand For</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Our values drive every interaction, every product we stock, and every installation we support.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-secondary text-lg mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary mb-4">Meet the Team</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Solar experts who are passionate about bringing clean energy to Kenya.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map(member => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-secondary/50" />
                </div>
                <h3 className="font-display font-bold text-secondary text-lg">{member.name}</h3>
                <div className="text-primary text-sm font-semibold mb-2">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">Visit Us in Nairobi</h2>
              <div className="flex flex-col gap-3 text-gray-300">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>Gaberone Plaza, Nairobi, Kenya</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+254 729 430 917 / +254 729 471 565</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-8 rounded-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8 rounded-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
