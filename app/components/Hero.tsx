export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      {/* Subtle "Gloss" badge */}
      <div className="mb-6 px-4 py-1 rounded-full glass-panel text-xs font-medium tracking-[0.2em] text-pastel-blue/80 uppercase">
        Available for freelance
      </div>

      <h1 className="text-7xl md:text-9xl font-bold tracking-tighter italic">
        <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
          Creative
        </span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-800">
          Developer
        </span>
      </h1>

      <p className="mt-8 text-zinc-500 max-w-lg text-lg font-light leading-relaxed">
        Merging technical precision with high-end aesthetic design.
      </p>

      <div className="mt-12 flex gap-4">
        <button className="px-8 py-3 rounded-xl glass-panel text-white hover:bg-white/10 transition-all cursor-pointer">
          My Work
        </button>
      </div>
    </section>
  );
}   