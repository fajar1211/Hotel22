import hero from "@/assets/hero-hotel.jpg";
import { Particles } from "./Particles";
import { Award, Star, Trophy, BadgeCheck } from "lucide-react";

const badges = [
  { icon: Award, label: "Forbes 5 Star" },
  { icon: Trophy, label: "World Luxury 2025" },
  { icon: Star, label: "Michelin Key" },
  { icon: BadgeCheck, label: "Leading Hotels" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={hero} alt="VVIP Residence Singkawang" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/50 to-navy-deep" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, var(--navy-deep) 90%)" }} />
      </div>

      {/* Light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 h-full w-[40%] animate-ray" style={{ background: "linear-gradient(90deg, transparent, oklch(0.88 0.08 88 / 0.15), transparent)" }} />
        <div className="absolute top-0 left-0 h-full w-[30%] animate-ray" style={{ background: "linear-gradient(90deg, transparent, oklch(0.88 0.08 88 / 0.1), transparent)", animationDelay: "3s" }} />
      </div>

      <Particles count={80} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-44 pb-24 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <span className="h-px w-12 bg-gold/60" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Singkawang · Est. 2025</span>
          <span className="h-px w-12 bg-gold/60" />
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] text-pearl animate-fade-up" style={{ animationDelay: "0.4s" }}>
          The Art of <br />
          <span className="gold-text-gradient italic">Discreet Luxury</span>
        </h1>

        <p className="mt-8 max-w-xl text-base md:text-lg text-pearl/70 leading-relaxed animate-fade-up" style={{ animationDelay: "0.6s" }}>
          An exclusive executive residence in the heart of Singkawang — where prestige meets restraint, and every detail is composed for those who expect more.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <button className="relative overflow-hidden group px-10 py-4 text-xs tracking-[0.3em] uppercase text-navy-deep font-bold" style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
            <span className="relative z-10">Reserve a Suite</span>
            <span className="absolute inset-0 animate-shine bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </button>
          <a href="#lounge" className="px-10 py-4 text-xs tracking-[0.3em] uppercase text-pearl border border-gold/40 hover:border-gold hover:text-gold transition-colors">
            Virtual Tour
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 w-full max-w-3xl">
          {badges.map((b, i) => (
            <div
              key={b.label}
              className="flex flex-col items-center gap-3 animate-fade-up animate-float"
              style={{ animationDelay: `${1 + i * 0.15}s`, animationDuration: `4s, 4s` }}
            >
              <b.icon className="h-7 w-7 text-gold" strokeWidth={1.2} />
              <span className="text-[10px] tracking-[0.25em] uppercase text-pearl/60">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.4em] uppercase text-pearl/40">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
