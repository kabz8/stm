import React from 'react';
import { getGeneralWhatsAppLink } from '@/data/products';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloating() {
  return (
    <a
      href={getGeneralWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-secondary text-sm font-semibold py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
        {/* Triangle pointer */}
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-white"></span>
      </span>
    </a>
  );
}
