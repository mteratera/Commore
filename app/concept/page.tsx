import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KomorebiBackground from "@/components/KomorebiBackground";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concept",
  description: "Commore のコンセプトと、ふたりの時間を設計する3つの原則。",
};

export default function ConceptPage() {
  return (
    <div className="komorebi-bg min-h-screen relative overflow-hidden">
      <KomorebiBackground />
      <Header />

      {/* Page hero */}
      <section className="relative z-10 px-6 md:px-12 pt-16 md:pt-24 pb-16 text-center">
        <p className="font-sans text-[10px] tracking-[0.4em] text-sunlight/70 uppercase mb-6">
          Concept
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wider text-cream mb-8">
          Our Concept
        </h1>
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-12 h-px bg-sunlight/40" />
          <div className="w-1 h-1 rounded-full bg-sunlight/60" />
          <div className="w-12 h-px bg-sunlight/40" />
        </div>
        <p className="font-mincho text-xl md:text-2xl text-cream/85 tracking-[0.1em] leading-relaxed max-w-2xl mx-auto text-balance">
          木漏れ日のような、<br className="md:hidden" />
          ふたりの時間を、設計する。
        </p>
      </section>

      {/* Three principles */}
      <section className="relative z-10 px-6 md:px-12 py-24">
        <div className="max-w-4xl mx-auto space-y-24">

          {/* Principle 01 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-3">
              <p className="font-serif italic text-5xl md:text-7xl text-sunlight/40">01</p>
              <p className="font-sans text-[10px] tracking-[0.3em] text-sunlight/60 uppercase mt-2">
                Curation
              </p>
            </div>
            <div className="md:col-span-9 space-y-6">
              <h2 className="font-mincho text-2xl md:text-3xl text-cream/90 leading-relaxed tracking-wide">
                厳選すること。
              </h2>
              <p className="font-mincho text-base md:text-lg text-cream/70 leading-loose">
                Commore は、施設からの掲載料を一切受け取りません。
              </p>
              <p className="font-mincho text-base md:text-lg text-cream/70 leading-loose">
                広告と引き換えに掲載される他のサービスとは違い、<br />
                本当に「ふたりだけになれる」隠れ家だけを、わたしたちの目で選び抜いています。
              </p>
              <p className="font-mincho text-base md:text-lg text-cream/70 leading-loose">
                静寂・大人感・プライバシー・ふたりの時間設計・写真映え。<br />
                独自の5軸で評価し、合格した施設のみをご紹介します。
              </p>
            </div>
          </div>

          <div className="section-divider" />

          {/* Principle 02 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-3">
              <p className="font-serif italic text-5xl md:text-7xl text-sunlight/40">02</p>
              <p className="font-sans text-[10px] tracking-[0.3em] text-sunlight/60 uppercase mt-2">
                Privacy
              </p>
            </div>
            <div className="md:col-span-9 space-y-6">
              <h2 className="font-mincho text-2xl md:text-3xl text-cream/90 leading-relaxed tracking-wide">
                プライバシーを、守ること。
              </h2>
              <p className="font-mincho text-base md:text-lg text-cream/70 leading-loose">
                Commore が紹介するのは、完全個室の施設だけです。
              </p>
              <p className="font-mincho text-base md:text-lg text-cream/70 leading-loose">
                男女混浴のサウナ施設や、他のお客様と顔を合わせる施設は<br />
                掲載していません。
              </p>
              <p className="font-mincho text-base md:text-lg text-cream/70 leading-loose">
                顔認証で入室できる施設、無人運営の施設、<br />
                24時間営業で深夜にもアクセスできる施設。<br />
                「誰にも会わない」ことを最優先に。
              </p>
            </div>
          </div>

          <div className="section-divider" />

          {/* Principle 03 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-3">
              <p className="font-serif italic text-5xl md:text-7xl text-sunlight/40">03</p>
              <p className="font-sans text-[10px] tracking-[0.3em] text-sunlight/60 uppercase mt-2">
                Intimacy
              </p>
            </div>
            <div className="md:col-span-9 space-y-6">
              <h2 className="font-mincho text-2xl md:text-3xl text-cream/90 leading-relaxed tracking-wide">
                ふたりの時間を、設計すること。
              </h2>
              <p className="font-mincho text-base md:text-lg text-cream/70 leading-loose">
                サウナを「整う」ためだけのものとして扱いません。
              </p>
              <p className="font-mincho text-base md:text-lg text-cream/70 leading-loose">
                Commore にとってサウナは、ふたりだけの記憶を作る場所。<br />
                記念日、誕生日、なんでもない週末の夜。
              </p>
              <p className="font-mincho text-base md:text-lg text-cream/70 leading-loose">
                ふたりの好み、ふたりの記念日、ふたりのリズム。<br />
                すべてを汲み取り、最適な隠れ家をご提案します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative z-10 px-6 md:px-12 py-24 bg-forest-dark/30">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif italic text-base md:text-lg text-sunlight/70 mb-4">
            A quiet kind of together.
          </p>
          <h2 className="font-mincho text-2xl md:text-4xl text-cream/90 tracking-[0.1em] leading-relaxed mb-12 text-balance">
            ふたりの時間に、<br className="md:hidden" />
            本物の静寂を。
          </h2>
          
          <Link 
            href="/facilities"
            className="group inline-flex items-center gap-3 font-sans text-xs tracking-[0.3em] text-cream/70 hover:text-cream uppercase transition-colors"
          >
            <span>Browse Facilities</span>
            <span className="w-8 h-px bg-cream/40 group-hover:bg-cream group-hover:w-12 transition-all" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
