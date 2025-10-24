'use client';

import { kinderenProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { ChevronDown } from 'lucide-react';

export default function KinderenPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-12">
          <h1 className="text-3xl font-semibold uppercase tracking-wide text-center">
            Kinderen Collectie
          </h1>
          <p className="text-center text-muted-foreground mt-2">
            Ontdek onze selectie van leuke en betaalbare kindermode
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-12">
        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="text-sm text-muted-foreground">
            {kinderenProducts.length} producten
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded hover:border-primary transition-colors text-sm font-medium">
              <span>Sorteren</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded hover:border-primary transition-colors text-sm font-medium">
              <span>Filter</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kinderenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-foreground text-foreground font-medium uppercase tracking-wide rounded hover:bg-foreground hover:text-background transition-colors">
            Meer Laden
          </button>
        </div>
      </div>
    </div>
  );
}
