import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-4">MODE FAMILIE</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Betaalbare en stijlvolle kleding voor het hele gezin. Ontdek onze collectie voor kinderen, heren en dames.
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-4">Klantenservice</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/verzending" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Verzending & Levering
                </Link>
              </li>
              <li>
                <Link href="/retour" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Retourneren
                </Link>
              </li>
              <li>
                <Link href="/veelgestelde-vragen" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Veelgestelde Vragen
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dames" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Dames
                </Link>
              </li>
              <li>
                <Link href="/heren" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Heren
                </Link>
              </li>
              <li>
                <Link href="/kinderen" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Kinderen
                </Link>
              </li>
              <li>
                <Link href="/nieuw" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Nieuwe Collectie
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-4">Nieuwsbrief</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ontvang de laatste updates en speciale aanbiedingen.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Uw e-mailadres"
                className="px-4 py-2 text-sm border border-border rounded bg-white focus:border-primary focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wide rounded hover:bg-primary/90 transition-colors"
              >
                Inschrijven
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Mode Familie. Alle rechten voorbehouden.
          </p>

          {/* Social media */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white rounded-lg transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white rounded-lg transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white rounded-lg transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
