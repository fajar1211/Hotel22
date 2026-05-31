import lounge from "@/assets/lounge.jpg";
import { Compass, Play } from "lucide-react";

export function Lounge() {
  return (
    <section id="lounge" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Chapter 01</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
            The Executive <br />
            <span className="gold-text-gradient italic">Sky Lounge</span>
          </h2>
          <div className="gold-divider w-32 mt-8" />
          <p className="mt-8 text-pearl/70 leading-relaxed max-w-md">
            Suspended above the city, our members-only lounge offers a 360° panorama of Singkawang. A sanctuary of leather, marble, and aged whisky — reserved for residents and invited guests.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "24/7", v: "Concierge" },
              { k: "180°", v: "Skyline" },
              { k: "12F", v: "Top Floor" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl gold-text-gradient">{s.k}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-pearl/50 mt-2">{s.v}</div>
              </div>
            ))}
          </div>

          <button className="mt-10 inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-gold hover:text-gold-soft group">
            Begin Virtual Tour
            <span className="inline-block h-px w-10 bg-gold group-hover:w-16 transition-all" />
          </button>
        </div>

        <div className="relative aspect-[4/5] lg:aspect-square">
          <div className="absolute inset-0 overflow-hidden" style={{ boxShadow: "var(--shadow-deep)" }}>
            <img src={lounge} alt="Executive lounge" className="h-full w-full object-cover" width={1600} height={1024} loading="lazy" />
            <div className="absolute inset-0 bg-navy-deep/30" />
          </div>

          {/* Rotating compass */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border border-gold/30 animate-compass" style={{ width: 200, height: 200, transform: "translate(-100px, -100px)" }} />
              <div className="absolute inset-0 rounded-full border border-gold/20 animate-compass" style={{ width: 280, height: 280, transform: "translate(-140px, -140px)", animationDirection: "reverse", animationDuration: "30s" }} />
              <button className="relative h-24 w-24 rounded-full bg-navy-deep/80 backdrop-blur-md border border-gold flex items-center justify-center group hover:bg-gold hover:text-navy-deep transition-all">
                <Compass className="h-8 w-8 text-gold group-hover:text-navy-deep animate-compass" strokeWidth={1.2} style={{ animationDuration: "20s" }} />
              </button>
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-pearl/70 whitespace-nowrap">
                <Play className="h-3 w-3 fill-gold text-gold" /> 360° Tour
              </div>
            </div>
          </div>

          {/* Corner marks */}
          {[
            "top-0 left-0",
            "top-0 right-0 rotate-90",
            "bottom-0 right-0 rotate-180",
            "bottom-0 left-0 -rotate-90",
          ].map((pos) => (
            <div key={pos} className={`absolute ${pos} h-8 w-8`}>
              <div className="absolute top-0 left-0 h-px w-full bg-gold" />
              <div className="absolute top-0 left-0 w-px h-full bg-gold" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
