export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <h1 className="text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-pastel-purple to-white bg-[length:200%_auto] animate-shine">
        Your Name
      </h1>
      <p className="mt-4 text-zinc-400 max-w-md text-center">
        Building minimalist digital experiences with a focus on high-fidelity design.
      </p>
      <button className="mt-8 px-6 py-2 rounded-full glass border-pastel-blue/30 text-pastel-blue hover:bg-white/5 transition-all">
        View Projects
      </button>
    </section>
  );
}