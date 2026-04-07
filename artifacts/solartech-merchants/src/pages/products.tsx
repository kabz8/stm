import React, { useState, useEffect } from 'react';
import { useParams } from 'wouter';
import ProductCard from '@/components/ProductCard';
import { products, getProductsByCategory, Category, getGeneralWhatsAppLink } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

const CATEGORY_LABELS: Record<string, string> = {
  all: 'All Products',
  'solar-panels': 'Solar Panels',
  batteries: 'Batteries & Storage',
  inverters: 'Inverters',
  combos: 'Complete Combo Kits',
  accessories: 'Solar Accessories',
  lighting: 'Solar Lighting',
};

const ALL_TABS = ['all', 'solar-panels', 'batteries', 'inverters', 'combos', 'accessories', 'lighting'];

export default function Products() {
  const params = useParams<{ category?: string }>();
  const initialCategory = params.category && ALL_TABS.includes(params.category)
    ? params.category
    : 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (params.category && ALL_TABS.includes(params.category)) {
      setActiveCategory(params.category);
    }
  }, [params.category]);

  const categoryProducts = getProductsByCategory(activeCategory as Category | 'all');
  const filtered = search.trim()
    ? categoryProducts.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      )
    : categoryProducts;

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            {CATEGORY_LABELS[activeCategory] || 'Our Products'}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Quality solar products at competitive prices. All orders via WhatsApp for fast, personal service.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {ALL_TABS.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setSearch(''); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-primary hover:text-primary'
              }`}
              data-testid={`tab-${cat}`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-8 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm bg-white"
            data-testid="input-search"
          />
        </div>

        {/* Results count */}
        <div className="text-sm text-gray-500 mb-6">
          {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
          {search && <span> for "{search}"</span>}
        </div>

        {/* Products Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-400 text-lg mb-4">No products found</div>
            <p className="text-gray-500 text-sm mb-6">Try a different search term or browse all categories.</p>
            <Button variant="outline" onClick={() => { setActiveCategory('all'); setSearch(''); }}>
              Show All Products
            </Button>
          </div>
        )}

        {/* WhatsApp CTA Banner */}
        <div className="mt-16 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-secondary mb-2">Don't see what you need?</h3>
          <p className="text-gray-600 mb-6">We carry many more products. Chat with us on WhatsApp — we'll find exactly what you need.</p>
          <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-8 rounded-full">
              <WhatsAppIcon size={20} strokeWidth={1.8} className="mr-2" />
              Chat with Us on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
