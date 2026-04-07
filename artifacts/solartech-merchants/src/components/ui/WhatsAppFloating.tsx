import React from 'react';
import { getGeneralWhatsAppLink } from '@/data/products';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function WhatsAppFloating() {
  return (
    <a
      href={getGeneralWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon size={28} strokeWidth={1.6} />

      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#0f0f0f] text-sm font-semibold py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-white" />
      </span>
    </a>
  );
}
