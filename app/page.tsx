import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KomorebiBackground from "@/components/KomorebiBackground";
import Link from "next/link";
import { featuredFacilities } from "@/lib/facilities";

export default function Home() {
  return (
    <div className="komorebi-bg min-h-screen relative overflow-hidden">
      <KomorebiBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6 md:px-12 text-center">
        
        <p className="opacity-0 animate-fade-in font-sans text-[10px] tracking-[0.5em] text-cream/40 uppercase mb-8"
          style={{ animationDelay: '0.3s' }}>
          A Quiet Kind of Together
        </p>

        <h1 className="opacity-0 animate-fade-up font-serif text-6xl sm:text-7xl md:text-9xl font-light tracking-wider text-cream mb-6 leading-none"
          style={{ animationDelay: '0.6s' }}>
          Commore
        </h1>

        <div className="opacity-0 animate-fade-in flex items-center gap-4 mb-10"
          style={{ animationDelay: '1.2s' }}>
          <div className="w-12 h-px bg-sunlight/40" />
          <div className="w-1 h-1 rounded-full bg-sunlight/60" />
          <div className="w-12 h-px bg-sunlight/40" />
        </div>

        <p className="opacity-0 animate-fade-up font-mincho text-lg md:text-2xl text-cream/85 tracking-[0.15em] mb-4 text-balance"
          style={{ animationDelay: '1.5s' }}>
          木漏れ日のような、ふたりの時間。
        </p>

        <p className="opacity-0 animate-fade-up font-serif italic text-sm md:text-base tracking-[0.15em] text-cream/50 mt-2 mb-16"
          style={{ animationDelay: '1.9s' }}>
          A quiet kind of together.
        </p>

        <div className="opacity-0 animate-fade-up"
          style={{ animationDelay: '2.3s' }}>
          <Link 
            href="/concept"
            className="group inline-flex items-center gap-3 font-sans text-xs tracking-[0.3em] text-cream/70 hover:text-cream uppercase transition-colors"
          >
            <span>Discover</span>
            <span className="w-8 h-px bg-cream/40 group-hover:bg-cream group-hover:w-12 transition-all" />
          </Link>
        </div>
      </section>

      {/* Concept Preview */}
      <section className="relative z-10 px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          
          <p className="font-sans text-[10px] tracking-[0.4em] text-sunlight/70 uppercase mb-6">
            Our Philosophy
          </p>
          
          <h2 className="font-mincho text-2xl md:text-4xl text-cream/90 tracking-[0.1em] leading-relaxed mb-12 text-balance">
            人混みを離れ、誰にも会わない、<br className="hidden md:block" />
            ふたりだけの完全個室サウナへ。
          </h2>

          <div className="section-divider mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-left">
            
            <div className="space-y-3">
              <p className="font-sans text-[10px] tracking-[0.3em] text-sunlight/60 uppercase">01 — Curation</p>
              <h3 className="font-mincho text-xl text-cream/90 leading-relaxed">厳選</h3>
              <p className="font-mincho text-sm text-cream/60 leading-relaxed">
                東京を中心に、本物の隠れ家だけを。
                掲載料による広告は受け取りません。
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-sans text-[10px] tracking-[0.3em] text-sunlight/60 uppercase">02 — Privacy</p>
              <h3 className="font-mincho text-xl text-cream/90 leading-relaxed">プライバシー</h3>
              <p className="font-mincho text-sm text-cream/60 leading-relaxed">
                完全個室、ふたりだけの空間。
                他人の視線も、時間も、消える90分。
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-sans text-[10px] tracking-[0.3em] text-sunlight/60 uppercase">03 — Intimacy</p>
              <h3 className="font-mincho text-xl text-cream/90 leading-relaxed">時間</h3>
              <p className="font-mincho text-sm text-cream/60 leading-relaxed">
                ふたりだけの記憶になる、
                木漏れ日のような静かな時間。
              </p>
            </div>
          </div>

          <div className="mt-16">
            <Link 
              href="/concept"
              className="group inline-flex items-center gap-3 font-sans text-xs tracking-[0.3em] text-cream/60 hover:text-cream uppercase transition-colors"
            >
              <span>More on Concept</span>
              <span className="w-8 h-px bg-cream/30 group-hover:bg-cream transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Facilities Preview */}
      <section className="relative z-10 px-6 md:px-12 py-24 md:py-32 bg-forest-dark/30">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.4em] text-sunlight/70 uppercase mb-6">
              Selected Sanctuaries
            </p>
            <h2 className="font-mincho text-2xl md:text-4xl text-cream/90 tracking-[0.1em] leading-relaxed">
              厳選 · Tier S 9施設
            </h2>
            <p className="mt-6 font-mincho text-sm md:text-base text-cream/60 leading-relaxed max-w-xl mx-auto">
              静寂・大人感・プライバシー・ふたりの時間設計・写真映え。<br />
              5軸で評価した中から、最高評価の隠れ家。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredFacilities.slice(0, 6).map((facility) => (
              <div 
                key={facility.id}
                className="group relative p-8 border border-cream/10 rounded-sm hover:border-sunlight/30 transition-all duration-700 bg-forest-dark/20"
              >
                <p className="font-sans text-[10px] tracking-[0.3em] text-sunlight/60 uppercase mb-3">
                  {facility.area}
                </p>
                <h3 className="font-serif text-xl text-cream/90 mb-2">
                  {facility.name}
                </h3>
                <p className="font-sans italic text-xs text-cream/40 mb-4">
                  {facility.nameEn}
                </p>
                <p className="font-mincho text-sm text-cream/70 leading-relaxed mb-4">
                  {facility.tagline}
                </p>
                <p className="font-sans text-xs text-cream/50">
                  {facility.station}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/facilities"
              className="group inline-flex items-center gap-3 font-sans text-xs tracking-[0.3em] text-cream/60 hover:text-cream uppercase transition-colors"
            >
              <span>View All Facilities</span>
              <span className="w-8 h-px bg-cream/30 group-hover:bg-cream transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA / Launch info */}
      <section className="relative z-10 px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.4em] text-sunlight/70 uppercase mb-6">
            Coming Soon
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-cream/90 tracking-[0.1em] leading-relaxed mb-8 text-balance">
            ふたりの時間を、もっと深く。
          </h2>
          <p className="font-mincho text-sm md:text-base text-cream/60 leading-relaxed mb-12">
            Commore は 2026年12月、正式ローンチ予定。<br />
            最新情報は Instagram にて。
          </p>
          
          <a 
            href="https://www.instagram.com/commore/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-sans text-sm tracking-[0.2em] text-cream/80 hover:text-cream transition-colors"
          >
            <span>Follow @commore</span>
            <span className="text-xs">↗</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
