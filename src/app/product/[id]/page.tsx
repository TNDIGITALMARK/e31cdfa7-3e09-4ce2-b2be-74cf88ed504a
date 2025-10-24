'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById, getProductsByCategory } from '@/lib/products';
import { Star, ShoppingCart, Heart, ChevronLeft } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProductById(id);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Product niet gevonden</h1>
          <Link href="/" className="text-primary hover:underline">
            Terug naar home
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${product.category}`} className="hover:text-primary transition-colors capitalize">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="mx-auto max-w-[1200px] px-6 py-6">
        <Link
          href={`/${product.category}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Terug naar {product.category}
        </Link>
      </div>

      {/* Product Details */}
      <div className="mx-auto max-w-[1200px] px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative aspect-[3/4] bg-secondary rounded-lg overflow-hidden mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium uppercase tracking-wide">
                  {product.badge}
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating!)
                          ? 'fill-primary text-primary'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews} beoordelingen)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-foreground">
                €{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  €{product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.originalPrice && (
                <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded font-medium">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium">Maat</label>
                <button className="text-sm text-primary hover:underline">
                  Maattabel
                </button>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border rounded text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-sm font-medium block mb-3">Aantal</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-secondary transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x border-border">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-secondary transition-colors"
                  >
                    +
                  </button>
                </div>
                {product.inStock ? (
                  <span className="text-sm text-green-600 font-medium">Op voorraad</span>
                ) : (
                  <span className="text-sm text-red-600 font-medium">Niet op voorraad</span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                disabled={!selectedSize || !product.inStock}
                className="flex-1 px-8 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-wide rounded hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Toevoegen aan winkelwagen
              </button>
              <button className="px-6 py-4 border-2 border-border hover:border-primary rounded transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Product Details */}
            <div className="border-t border-border pt-8">
              <h3 className="font-semibold mb-4">Product Details</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Categorie:</span>
                  <span className="text-foreground capitalize">{product.category}</span>
                </li>
                <li className="flex justify-between">
                  <span>Artikelnummer:</span>
                  <span className="text-foreground">{product.id}</span>
                </li>
                <li className="flex justify-between">
                  <span>Beschikbaarheid:</span>
                  <span className="text-foreground">
                    {product.inStock ? 'Op voorraad' : 'Niet op voorraad'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-semibold uppercase tracking-wide text-center mb-12">
              Gerelateerde Producten
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
