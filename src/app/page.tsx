import Image from 'next/image';
import Link from 'next/link';
import { featuredProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/generated/hero-family-beach.jpg"
          alt="Familie op het strand"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-semibold uppercase tracking-wide mb-4">
              Stijl Voor Het Hele Gezin
            </h1>
            <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
              Ontdek betaalbare en trendy mode voor dames, heren en kinderen
            </p>
            <Link
              href="/dames"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium uppercase tracking-wide rounded hover:bg-primary/90 transition-colors"
            >
              Shop Nu
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <h2 className="text-center text-2xl font-semibold uppercase tracking-wide mb-12">
          Shop per Categorie
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kinderen */}
          <Link href="/kinderen" className="group relative overflow-hidden rounded-lg">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/generated/category-kinderen.jpg"
                alt="Kinderen mode"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-2xl font-semibold text-white uppercase tracking-wide">
                  Kinderen
                </h3>
              </div>
            </div>
          </Link>

          {/* Heren */}
          <Link href="/heren" className="group relative overflow-hidden rounded-lg">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/generated/category-heren.jpg"
                alt="Heren mode"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-2xl font-semibold text-white uppercase tracking-wide">
                  Heren
                </h3>
              </div>
            </div>
          </Link>

          {/* Dames */}
          <Link href="/dames" className="group relative overflow-hidden rounded-lg">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/generated/category-dames.jpg"
                alt="Dames mode"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-2xl font-semibold text-white uppercase tracking-wide">
                  Dames
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-center text-2xl font-semibold uppercase tracking-wide mb-12">
            Populaire Producten
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/dames"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium uppercase tracking-wide rounded hover:bg-primary/90 transition-colors"
            >
              Bekijk Alle Producten
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative h-[300px] overflow-hidden">
        <Image
          src="/generated/newsletter-family.jpg"
          alt="Familie samen"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/85"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-[1200px] px-6 w-full">
            <div className="max-w-lg">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Word lid van onze familie
              </h2>
              <p className="text-muted-foreground mb-6">
                Ontvang exclusieve aanbiedingen en blijf op de hoogte van de nieuwste collecties.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Uw e-mailadres"
                  className="flex-1 px-4 py-3 border border-border rounded focus:border-primary focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground font-medium uppercase tracking-wide rounded hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Inschrijven
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
