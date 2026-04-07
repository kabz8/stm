import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product, formatKES, getProductWhatsAppLink } from '@/data/products';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow border-gray-100 group">
      {product.image && (
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 flex items-center justify-center p-4">
          <img 
            src={product.image} 
            alt={product.name} 
            className="object-contain w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
            <a 
              href={getProductWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Order via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
      
      <CardHeader className="p-5 pb-2">
        <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
          {product.category.replace('-', ' ')}
        </div>
        <h3 className="font-display font-semibold text-lg text-secondary leading-tight line-clamp-2">
          {product.name}
        </h3>
        <div className="text-xl font-bold text-secondary mt-2">
          {formatKES(product.price)}
        </div>
      </CardHeader>
      
      <CardContent className="p-5 pt-2 flex-grow">
        <p className="text-sm text-gray-600 line-clamp-3">
          {product.description}
        </p>
        
        {product.features && (
          <ul className="mt-4 space-y-2">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
            {product.features.length > 3 && (
              <li className="text-xs text-primary font-medium pl-6">
                +{product.features.length - 3} more items included
              </li>
            )}
          </ul>
        )}
      </CardContent>
      
      <CardFooter className="p-5 pt-0 mt-auto">
        <a 
          href={getProductWhatsAppLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors group-hover:bg-primary group-hover:text-white">
            Get Pricing & Details
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
