import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product, formatKES, getProductWhatsAppLink } from '@/data/products';
import { CheckCircle2, Tag } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      className="flex flex-col h-full overflow-hidden border-2 border-gray-100 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group bg-white rounded-2xl"
      data-testid={`card-product-${product.id}`}
    >
      {/* Image */}
      {product.image && (
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#0f0f0f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <a
              href={getProductWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-lg shadow-primary/40">
                <WhatsAppIcon size={16} strokeWidth={1.8} className="mr-2" />
                Order via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}

      <CardHeader className="px-5 pt-5 pb-2">
        {/* Category label */}
        <div className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-2">
          <Tag className="w-3 h-3" />
          {product.category.replace('-', ' ')}
        </div>
        <h3 className="font-bold text-[#0f0f0f] text-base leading-snug line-clamp-2">
          {product.name}
        </h3>
        <div className="text-2xl font-black text-[#0f0f0f] mt-2">
          {formatKES(product.price)}
        </div>
      </CardHeader>

      <CardContent className="px-5 pb-2 flex-grow">
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{product.description}</p>

        {product.features && (
          <ul className="mt-4 space-y-1.5">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
            {product.features.length > 3 && (
              <li className="text-xs text-primary font-semibold pl-5">
                +{product.features.length - 3} more included
              </li>
            )}
          </ul>
        )}
      </CardContent>

      <CardFooter className="px-5 pb-5 pt-4 mt-auto">
        <a
          href={getProductWhatsAppLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
          data-testid={`button-order-${product.id}`}
        >
          <Button className="w-full bg-[#0f0f0f] hover:bg-primary text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-primary/30">
            <WhatsAppIcon size={16} strokeWidth={1.8} className="mr-2" />
            Get Pricing &amp; Details
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
