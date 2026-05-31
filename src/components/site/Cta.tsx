import { Particles } from "./Particles";

export function Cta() {
  return (
    <section id="contact" className="relative py-40 overflow-hidden">
      <Particles count={50} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, oklch(0.20 0.05 265) 0%, var(--navy-deep) 70%)" }} />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <span className="text-[11px] tracking-[0.4em] uppercase text-gold">By Invitation</span>
        <h2 className="mt-6 font-display text-4xl md:text-6xl leading-tight">
          Begin Your <br />
          <span className="gold-text-gradient italic">Private Residency</span>
        </h2>
        <p className="mt-8 text-pearl/70 max-w-lg mx-auto">
          Inquiries are processed personally by our Director of Residences. Expect a response within 24 hours.
        </p>

        <form className="mt-12 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-transparent border border-gold/30 px-5 py-4 text-sm text-pearl placeholder:text-pearl/40 focus:border-gold outline-none transition-colors"
          />
          <button className="relative overflow-hidden group px-8 py-4 text-xs tracking-[0.3em] uppercase text-navy-deep font-bold" style={{ background: "var(--gradient-gold)" }}>
            <span className="relative z-10">Request</span>
            <span className="absolute inset-0 animate-shine bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </button>
        </form>
      </div>
    </section>
  );
}
