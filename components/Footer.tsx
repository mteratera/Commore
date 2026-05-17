import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 md:px-12 py-12 md:py-16 mt-20 border-t border-cream/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        
        {/* Brand */}
        <div>
          <Link href="/" className="font-serif text-2xl text-cream/90 tracking-wider">
            Commore
          </Link>
          <p className="mt-3 font-mincho text-sm text-cream/50 leading-relaxed">
            木漏れ日のような、<br />
            ふたりの時間。
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="font-sans text-[10px] tracking-[0.3em] text-cream/40 uppercase mb-4">
            Explore
          </p>
          <ul className="space-y-2">
            <li><Link href="/concept" className="font-sans text-sm text-cream/60 hover:text-cream transition-colors">Concept</Link></li>
            <li><Link href="/facilities" className="font-sans text-sm text-cream/60 hover:text-cream transition-colors">Facilities</Link></li>
            <li><Link href="/about" className="font-sans text-sm text-cream/60 hover:text-cream transition-colors">About</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <p className="font-sans text-[10px] tracking-[0.3em] text-cream/40 uppercase mb-4">
            Connect
          </p>
          <a 
            href="https://www.instagram.com/commore/" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-cream/60 hover:text-cream transition-colors inline-flex items-center gap-2"
          >
            <span>@commore</span>
            <span className="text-xs">↗</span>
          </a>
          <p className="mt-4 font-sans text-[10px] tracking-[0.3em] text-sunlight/60 uppercase">
            Launching · Winter 2026
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-[10px] tracking-[0.2em] text-cream/30 uppercase">
          © 2026 Commore · Seven MarKs Inc.
        </p>
        <p className="font-sans text-[10px] tracking-[0.2em] text-cream/30 uppercase">
          commore.app
        </p>
      </div>
    </footer>
  );
}
