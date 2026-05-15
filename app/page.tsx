export default function Home() {
  return (
    <main className="komorebi-bg min-h-screen relative overflow-hidden">
      {/* Ambient light rays from top */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sun-like glow */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] max-w-[80vw] max-h-[80vw] rounded-full opacity-40 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(245, 230, 200, 0.6) 0%, rgba(200, 167, 123, 0.3) 30%, transparent 70%)'
          }}
        />
        
        {/* Diagonal light beams */}
        <div className="absolute top-0 left-[30%] w-[2px] h-screen opacity-[0.07] origin-top rotate-[8deg]"
          style={{ background: 'linear-gradient(180deg, #F5E6C8 0%, transparent 100%)' }}
        />
        <div className="absolute top-0 left-[50%] w-[3px] h-screen opacity-[0.10] origin-top rotate-[-3deg]"
          style={{ background: 'linear-gradient(180deg, #F5E6C8 0%, transparent 100%)' }}
        />
        <div className="absolute top-0 left-[68%] w-[2px] h-screen opacity-[0.08] origin-top rotate-[5deg]"
          style={{ background: 'linear-gradient(180deg, #F5E6C8 0%, transparent 100%)' }}
        />
        
        {/* Floating dust particles (komorebi feel) */}
        <div className="absolute top-[20%] left-[25%] w-1 h-1 bg-cream/40 rounded-full animate-shimmer" />
        <div className="absolute top-[40%] left-[70%] w-1 h-1 bg-cream/30 rounded-full animate-shimmer" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[60%] left-[20%] w-[3px] h-[3px] bg-sunlight/40 rounded-full animate-shimmer" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[30%] left-[80%] w-[2px] h-[2px] bg-cream/40 rounded-full animate-shimmer" style={{ animationDelay: '1s' }} />
      </div>

      {/* Top navigation - minimal */}
      <nav className="relative z-10 px-6 md:px-12 py-6 md:py-8 flex justify-between items-center">
        <div className="font-serif text-sm tracking-[0.3em] text-cream/70">
          COMMORE
        </div>
        <div className="font-sans text-[10px] tracking-[0.3em] text-cream/40 uppercase">
          Coming Soon
        </div>
      </nav>

      {/* Main content - centered */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 md:px-12 text-center">
        
        {/* Subtle pre-title */}
        <p className="opacity-0 animate-fade-in font-sans text-[10px] tracking-[0.5em] text-cream/40 uppercase mb-8"
          style={{ animationDelay: '0.3s' }}>
          A Sanctuary for Two
        </p>

        {/* Main wordmark */}
        <h1 className="opacity-0 animate-fade-up font-serif text-7xl md:text-9xl font-light tracking-wider text-cream mb-6 leading-none"
          style={{ animationDelay: '0.6s' }}>
          Commore
        </h1>

        {/* Decorative divider */}
        <div className="opacity-0 animate-fade-in flex items-center gap-4 mb-10"
          style={{ animationDelay: '1.2s' }}>
          <div className="w-12 h-px bg-sunlight/40" />
          <div className="w-1 h-1 rounded-full bg-sunlight/60" />
          <div className="w-12 h-px bg-sunlight/40" />
        </div>

        {/* Japanese tagline */}
        <p className="opacity-0 animate-fade-up font-mincho text-lg md:text-2xl text-cream/85 tracking-[0.15em] mb-4 text-balance"
          style={{ animationDelay: '1.5s' }}>
          木漏れ日のような、ふたりの時間。
        </p>

        {/* English subtitle */}
        <p className="opacity-0 animate-fade-up font-sans text-xs md:text-sm tracking-[0.3em] text-cream/50 uppercase mt-2 mb-16"
          style={{ animationDelay: '1.9s' }}>
          Finding the silence, for the two of you.
        </p>

        {/* Concept text */}
        <div className="opacity-0 animate-fade-up max-w-md mb-20 space-y-4"
          style={{ animationDelay: '2.3s' }}>
          <p className="font-mincho text-sm md:text-base text-cream/60 leading-relaxed text-balance">
            人混みを離れ、誰にも会わない、<br />
            ふたりだけの完全個室サウナへ。
          </p>
          <p className="font-mincho text-sm md:text-base text-cream/60 leading-relaxed text-balance">
            Commore は、東京を中心に厳選した<br />
            隠れ家のキュレーション・サービスです。
          </p>
        </div>

        {/* Coming soon indicator */}
        <div className="opacity-0 animate-fade-in"
          style={{ animationDelay: '2.7s' }}>
          <p className="font-sans text-[10px] tracking-[0.4em] text-sunlight/70 uppercase">
            Launching · Winter 2026
          </p>
        </div>

        {/* Instagram link */}
        <div className="opacity-0 animate-fade-in mt-8"
          style={{ animationDelay: '3s' }}>
          <a 
            href="https://www.instagram.com/commore/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] text-cream/50 hover:text-cream transition-colors duration-500"
          >
            <span className="w-8 h-px bg-cream/30 group-hover:bg-cream transition-colors duration-500" />
            <span>@commore</span>
          </a>
        </div>

      </div>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-8 text-center">
        <p className="font-sans text-[10px] tracking-[0.3em] text-cream/30 uppercase">
          © 2026 Commore · Seven MarKs Inc.
        </p>
      </footer>
    </main>
  );
}
