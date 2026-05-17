export default function KomorebiBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Sun-like glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] max-w-[80vw] max-h-[80vw] rounded-full opacity-40 blur-3xl"
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
      
      {/* Floating dust particles */}
      <div className="absolute top-[20%] left-[25%] w-1 h-1 bg-cream/40 rounded-full animate-shimmer" />
      <div className="absolute top-[40%] left-[70%] w-1 h-1 bg-cream/30 rounded-full animate-shimmer" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[60%] left-[20%] w-[3px] h-[3px] bg-sunlight/40 rounded-full animate-shimmer" style={{ animationDelay: '4s' }} />
      <div className="absolute top-[30%] left-[80%] w-[2px] h-[2px] bg-cream/40 rounded-full animate-shimmer" style={{ animationDelay: '1s' }} />
    </div>
  );
}
