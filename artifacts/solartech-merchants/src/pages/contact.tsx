import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER, getGeneralWhatsAppLink } from '@/data/products';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

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
      {/* Page Header */}
      <div className="bg-secondary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            We are ready to help you choose the right solar system. Chat with us, call us, or visit our shop in Nairobi.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-display font-bold text-secondary mb-2">Send Us a Message</h2>
            <p className="text-gray-600 mb-8 text-sm">Your message will open in WhatsApp — fast, personal, and direct.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. James Muthoni"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                  data-testid="input-name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={e => setForm(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+254 7XX XXX XXX"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                  data-testid="input-phone"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us what you need — e.g. I need a solar system for a 3-bedroom house..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm resize-none"
                  data-testid="input-message"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-4 rounded-xl text-base"
                data-testid="button-submit"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Send via WhatsApp
              </Button>
              <p className="text-xs text-gray-500 text-center">Clicking the button will open WhatsApp with your message pre-filled.</p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-secondary mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary mb-1">Our Location</div>
                    <div className="text-gray-600 text-sm">Gaberone Plaza<br />Nairobi, Kenya</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary mb-1">Call or WhatsApp</div>
                    <a href="tel:+254729430917" className="block text-gray-600 text-sm hover:text-primary transition-colors">+254 729 430 917</a>
                    <a href="tel:+254729471565" className="block text-gray-600 text-sm hover:text-primary transition-colors">+254 729 471 565 (WhatsApp orders)</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary mb-1">Email Address</div>
                    <a href="mailto:info@solartechmerchants.com" className="text-gray-600 text-sm hover:text-primary transition-colors">
                      info@solartechmerchants.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary mb-1">Business Hours</div>
                    <div className="text-gray-600 text-sm">Monday – Saturday: 8:00 AM – 6:00 PM</div>
                    <div className="text-gray-600 text-sm">Sunday: 10:00 AM – 4:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-6 text-center">
              <MessageCircle className="w-10 h-10 text-[#25D366] mx-auto mb-3" />
              <h3 className="font-display font-bold text-secondary text-lg mb-2">Quick WhatsApp Chat</h3>
              <p className="text-gray-600 text-sm mb-4">Get a quote in minutes — no waiting, no forms.</p>
              <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-full px-8">
                  Start Chat Now
                </Button>
              </a>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8033!2d36.8172!3d-1.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d0f74c38d3%3A0xe8f99a7d3cdaee6a!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1650000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Solartech Merchants Location - Gaberone Plaza, Nairobi"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
