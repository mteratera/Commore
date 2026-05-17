import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KomorebiBackground from "@/components/KomorebiBackground";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Commore のブランドストーリー、運営者について。",
};

export default function AboutPage() {
  return (
    <div className="komorebi-bg min-h-screen relative overflow-hidden">
      <KomorebiBackground />
      <Header />

      {/* Page hero */}
      <section className="relative z-10 px-6 md:px-12 pt-16 md:pt-24 pb-16 text-center">
        <p className="font-sans text-[10px] tracking-[0.4em] text-sunlight/70 uppercase mb-6">
          About
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wider text-cream mb-8">
          About Commore
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-sunlight/40" />
          <div className="w-1 h-1 rounded-full bg-sunlight/60" />
          <div className="w-12 h-px bg-sunlight/40" />
        </div>
      </section>

      {/* Story */}
      <section className="relative z-10 px-6 md:px-12 pb-24">
        <div className="max-w-2xl mx-auto space-y-12">
          
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] text-sunlight/60 uppercase mb-4">
              The Name
            </p>
            <h2 className="font-mincho text-2xl md:text-3xl text-cream/90 mb-6 tracking-wide">
              名前について。
            </h2>
            <p className="font-mincho text-base md:text-lg text-cream/70 leading-loose">
              Commore(コモア)— ふたつの語源を持つ造語です。
            </p>
            <p className="mt-6 font-mincho text-base md:text-lg text-cream/70 leading-loose">
              ひとつは「Co + more」。<br />
              ふたりで、もっと深く。もっと静かに。
            </p>
            <p className="mt-6 font-mincho text-base md:text-lg text-cream/70 leading-loose">
              もうひとつは「木漏れ(こもれ)」。<br />
              枝葉の隙間から、柔らかく差し込む光。<br />
              ふたりの時間を、そっと照らすもの。
            </p>
          </div>

          <div className="section-divider" />

          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] text-sunlight/60 uppercase mb-4">
              The Philosophy
            </p>
            <h2 className="font-mincho text-2xl md:text-3xl text-cream/90 mb-6 tracking-wide">
              わたしたちの考え。
            </h2>
            <p className="font-mincho text-base md:text-lg text-cream/70 leading-loose">
              喧騒の中で、ふたりだけになりたい時がある。<br />
              他人の視線も、時間も、忘れたい時がある。
            </p>
            <p className="mt-6 font-mincho text-base md:text-lg text-cream/70 leading-loose">
              Commore は、そんな静かな願いを叶える、<br />
              完全個室サウナのキュレーション・サービスです。
            </p>
            <p className="mt-6 font-mincho text-base md:text-lg text-cream/70 leading-loose">
              掲載料で広告された施設ではなく、<br />
              本物の「ふたりだけの空間」だけを選び抜いて。
            </p>
          </div>

          <div className="section-divider" />

          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] text-sunlight/60 uppercase mb-4">
              Operated By
            </p>
            <h2 className="font-mincho text-2xl md:text-3xl text-cream/90 mb-6 tracking-wide">
              運営について。
            </h2>
            <p className="font-mincho text-base md:text-lg text-cream/70 leading-loose">
              Commore は、株式会社 Seven MarKs によって運営されています。
            </p>
            <p className="mt-6 font-mincho text-base md:text-lg text-cream/70 leading-loose">
              医療・美容・ライフスタイル領域で<br />
              「人生を整える」サービスを手がけるカンパニーです。
            </p>
            <div className="mt-8 pt-8 border-t border-cream/10">
              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                <div>
                  <dt className="font-sans text-[10px] tracking-[0.2em] text-cream/40 uppercase mb-2">Company</dt>
                  <dd className="font-mincho text-cream/80">株式会社 Seven MarKs</dd>
                </div>
                <div>
                  <dt className="font-sans text-[10px] tracking-[0.2em] text-cream/40 uppercase mb-2">Service</dt>
                  <dd className="font-mincho text-cream/80">Commore(コモア)</dd>
                </div>
                <div>
                  <dt className="font-sans text-[10px] tracking-[0.2em] text-cream/40 uppercase mb-2">Launch</dt>
                  <dd className="font-mincho text-cream/80">Winter 2026</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="section-divider" />

          {/* CTA */}
          <div className="text-center pt-8">
            <Link 
              href="/concept"
              className="group inline-flex items-center gap-3 font-sans text-xs tracking-[0.3em] text-cream/70 hover:text-cream uppercase transition-colors"
            >
              <span>Explore Concept</span>
              <span className="w-8 h-px bg-cream/40 group-hover:bg-cream group-hover:w-12 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
