"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/concept", label: "Concept" },
    { href: "/facilities", label: "Facilities" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <header className="relative z-20 px-6 md:px-12 py-6 md:py-8 flex justify-between items-center">
        <Link href="/" className="font-serif text-sm tracking-[0.3em] text-cream/70 hover:text-cream transition-colors">
          COMMORE
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-xs tracking-[0.2em] text-cream/50 hover:text-cream uppercase transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-30"
          aria-label="Menu"
        >
          <span className={`w-6 h-px bg-cream/80 transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-px bg-cream/80 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-px bg-cream/80 transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-20 bg-forest-dark/98 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl tracking-[0.15em] text-cream/80 hover:text-cream transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-12 w-12 h-px bg-sunlight/40" />
            <p className="font-sans text-[10px] tracking-[0.3em] text-cream/40 uppercase">
              Launching · Winter 2026
            </p>
          </div>
        </div>
      )}
    </>
  );
}
