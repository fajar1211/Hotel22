import { Wine, Utensils, Sparkles, Car, Waves, Shield } from "lucide-react";

const items = [
  { icon: Car, title: "Private Chauffeur", desc: "Mercedes-Maybach fleet on demand, 24 hours." },
  { icon: Utensils, title: "Michelin Dining", desc: "Three signature restaurants curated by acclaimed chefs." },
  { icon: Waves, title: "Sky Infinity Pool", desc: "Heated rooftop pool overlooking the city." },
  { icon: Wine, title: "Cigar & Whisky Bar", desc: "Reserve collection from 1962 onward." },
  { icon: Sparkles, title: "Wellness Atelier", desc: "Private spa suites and resident physician." },
  { icon: Shield, title: "Discreet Security", desc: "Plain-clothed protection for VVIP guests." },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Chapter 03</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Privileges <span className="gold-text-gradient italic">Reserved</span>
          </h2>
          <div className="gold-divider w-32 mt-8 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15">
          {items.map((it) => (
            <div key={it.title} className="bg-navy-deep p-10 group hover:bg-navy transition-colors duration-500">
              <it.icon className="h-8 w-8 text-gold mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.2} />
              <h3 className="font-display text-xl text-pearl mb-3">{it.title}</h3>
              <p className="text-sm text-pearl/60 leading-relaxed">{it.desc}</p>
              <div className="mt-6 h-px w-0 bg-gold group-hover:w-12 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
