import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { WHATSAPP_NUMBER, getGeneralWhatsAppLink } from '@/data/products';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hello Solartech Merchants!\n\nMy name is ${form.name}.\nPhone: ${form.phone}\n\n${form.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#0f0f0f] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">We're here to help</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Get in Touch</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            We're ready to help you choose the right solar system. Chat with us, call us, or visit our shop.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Form */}
          <div>
            <h2 className="text-2xl font-black text-[#0f0f0f] mb-2">Send Us a Message</h2>
            <p className="text-gray-500 text-sm mb-8">Your message will open directly in WhatsApp — fast and personal.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-[#0f0f0f] mb-2" htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  placeholder="e.g. James Muthoni"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-0 focus:border-primary text-sm font-medium transition-colors"
                  data-testid="input-name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0f0f0f] mb-2" htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                  placeholder="+254 7XX XXX XXX"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-0 focus:border-primary text-sm font-medium transition-colors"
                  data-testid="input-phone"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0f0f0f] mb-2" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  placeholder="Tell us what you need — e.g. I need a solar system for a 3-bedroom house..."
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-0 focus:border-primary text-sm font-medium resize-none transition-colors"
                  data-testid="input-message"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-4 rounded-xl text-base shadow-lg shadow-[#25D366]/30"
                data-testid="button-submit"
              >
                <WhatsAppIcon size={20} strokeWidth={1.8} className="mr-2" />
                Send via WhatsApp
              </Button>
              <p className="text-xs text-gray-400 text-center">Clicking the button will open WhatsApp with your message pre-filled.</p>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-[#0f0f0f] mb-6">Contact Information</h2>

            {[
              { icon: MapPin, title: 'Our Location', content: <span className="text-gray-500 text-sm">Gaberone Plaza<br />Kenyatta Avenue, Nairobi, Kenya</span> },
              {
                icon: Phone, title: 'Call or WhatsApp',
                content: (
                  <div className="flex flex-col gap-1">
                    <a href="tel:+254729430917" className="text-gray-500 text-sm hover:text-primary transition-colors">+254 729 430 917</a>
                    <a href="tel:+254729471565" className="text-gray-500 text-sm hover:text-primary transition-colors">+254 729 471 565 (WhatsApp orders)</a>
                  </div>
                )
              },
              {
                icon: Mail, title: 'Email Address',
                content: <a href="mailto:info@solartechmerchants.com" className="text-gray-500 text-sm hover:text-primary transition-colors">info@solartechmerchants.com</a>
              },
              {
                icon: Clock, title: 'Business Hours',
                content: (
                  <div className="text-gray-500 text-sm space-y-0.5">
                    <div>Monday – Saturday: 8:00 AM – 6:00 PM</div>
                    <div>Sunday: 10:00 AM – 4:00 PM</div>
                  </div>
                )
              },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-4 p-5 border-2 border-gray-100 rounded-2xl hover:border-primary/30 transition-colors">
                <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-primary/25">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#0f0f0f] text-sm mb-1">{item.title}</div>
                  {item.content}
                </div>
              </div>
            ))}

            {/* Quick WhatsApp */}
            <div className="bg-[#0f0f0f] rounded-2xl p-6 text-center">
              <WhatsAppIcon size={40} strokeWidth={1.4} className="text-[#25D366] mx-auto mb-3" />
              <h3 className="font-black text-white text-lg mb-2">Quick WhatsApp Chat</h3>
              <p className="text-gray-400 text-sm mb-5">Get a quote in minutes — no waiting, no forms.</p>
              <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-xl px-8">
                  Start Chat Now
                </Button>
              </a>
            </div>

            {/* Map — Gaberone Plaza, Nairobi */}
            <div className="rounded-2xl overflow-hidden border-2 border-gray-100 h-64">
              <iframe
                src="https://maps.google.com/maps?q=Gaberone+Plaza+Nairobi+Kenya&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gaberone Plaza, Nairobi"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
