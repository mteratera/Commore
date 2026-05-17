import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KomorebiBackground from "@/components/KomorebiBackground";
import { facilities, categoryLabel } from "@/lib/facilities";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facilities",
  description: "Commore が厳選した、完全個室サウナのキュレーション一覧。",
};

export default function FacilitiesPage() {
  // カテゴリ別にグループ化
  const grouped = facilities.reduce((acc, facility) => {
    if (!acc[facility.category]) acc[facility.category] = [];
    acc[facility.category].push(facility);
    return acc;
  }, {} as Record<string, typeof facilities>);

  return (
    <div className="komorebi-bg min-h-screen relative overflow-hidden">
      <KomorebiBackground />
      <Header />

      {/* Page hero */}
      <section className="relative z-10 px-6 md:px-12 pt-16 md:pt-24 pb-16 text-center">
        <p className="font-sans text-[10px] tracking-[0.4em] text-sunlight/70 uppercase mb-6">
          Facilities
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wider text-cream mb-8">
          Selected Sanctuaries
        </h1>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-12 h-px bg-sunlight/40" />
          <div className="w-1 h-1 rounded-full bg-sunlight/60" />
          <div className="w-12 h-px bg-sunlight/40" />
        </div>
        <p className="font-mincho text-base md:text-lg text-cream/70 leading-relaxed max-w-2xl mx-auto text-balance">
          Tier S — 9施設。<br />
          ふたりだけの静寂を、見つけられる場所。
        </p>
        <p className="mt-8 font-sans text-[10px] tracking-[0.3em] text-cream/40 uppercase">
          ※ 写真は正式ローンチ時に公開予定
        </p>
      </section>

      {/* Facilities by category */}
      <section className="relative z-10 px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto space-y-20">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
              <div className="mb-12">
                <p className="font-sans italic text-sm text-sunlight/60 mb-2">
                  {categoryLabel[category as keyof typeof categoryLabel]}
                </p>
                <h2 className="font-mincho text-2xl md:text-3xl text-cream/90 tracking-wide">
                  {category}
                </h2>
                <div className="mt-4 w-16 h-px bg-sunlight/30" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((facility) => (
                  <article
                    key={facility.id}
                    className="group relative p-8 border border-cream/10 rounded-sm hover:border-sunlight/30 bg-forest-dark/20 transition-all duration-700"
                  >
                    {/* Tier badge */}
                    <div className="absolute top-6 right-6 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-sunlight" />
                      <span className="font-serif italic text-xs text-sunlight/70">
                        Tier {facility.tier}
                      </span>
                    </div>

                    <p className="font-sans text-[10px] tracking-[0.3em] text-sunlight/60 uppercase mb-3">
                      {facility.area}
                    </p>
                    
                    <h3 className="font-serif text-xl text-cream/90 mb-1">
                      {facility.name}
                    </h3>
                    <p className="font-sans italic text-xs text-cream/40 mb-5">
                      {facility.nameEn}
                    </p>

                    <p className="font-mincho text-sm text-cream/75 leading-relaxed mb-5 italic">
                      「{facility.tagline}」
                    </p>

                    <div className="space-y-1.5 mb-5">
                      {facility.features.map((feature, i) => (
                        <p key={i} className="font-sans text-xs text-cream/50 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-sunlight/40" />
                          {feature}
                        </p>
                      ))}
                    </div>

                    <p className="font-sans text-[10px] tracking-[0.2em] text-cream/40 uppercase pt-4 border-t border-cream/10">
                      {facility.station}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="relative z-10 px-6 md:px-12 py-24 bg-forest-dark/30">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.4em] text-sunlight/70 uppercase mb-6">
            Coming Soon
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-cream/90 tracking-[0.1em] leading-relaxed mb-8 text-balance">
            正式ローンチ時には、<br className="md:hidden" />
            各施設の詳細情報・写真・予約導線をご用意します。
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
