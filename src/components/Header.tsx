'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-semibold tracking-tight hover:text-primary transition-colors">
            MODE FAMILIE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/kinderen"
              className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors"
            >
              Kinderen
            </Link>
            <Link
              href="/heren"
              className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors"
            >
              Heren
            </Link>
            <Link
              href="/dames"
              className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors"
            >
              Dames
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:bg-secondary rounded-lg transition-colors relative"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link
              href="/kinderen"
              className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kinderen
            </Link>
            <Link
              href="/heren"
              className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Heren
            </Link>
            <Link
              href="/dames"
              className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dames
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
