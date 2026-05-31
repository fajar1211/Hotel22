import { useEffect, useRef, useState } from "react";
import executive from "@/assets/room-executive.jpg";
import presidential from "@/assets/room-presidential.jpg";
import deluxe from "@/assets/room-deluxe.jpg";
import junior from "@/assets/room-junior.jpg";
import { ArrowRight } from "lucide-react";

const rooms = [
  { name: "Junior Suite", img: junior, original: 2800000, promo: 1950000, size: "42m²", view: "City" },
  { name: "Deluxe King", img: deluxe, original: 3600000, promo: 2580000, size: "55m²", view: "Skyline" },
  { name: "Executive Suite", img: executive, original: 5400000, promo: 3950000, size: "78m²", view: "Panoramic" },
  { name: "Presidential", img: presidential, original: 12500000, promo: 8900000, size: "180m²", view: "Private Terrace" },
];

function CountingPrice({ from, to, active }: { from: number; to: number; active: boolean }) {
  const [val, setVal] = useState(from);
  useEffect(() => {
    if (!active) { setVal(from); return; }
    let raf: number;
    const start = performance.now();
    const dur = 1800;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(from + (to - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, from, to]);
  return <>Rp {val.toLocaleString("id-ID")}</>;
}

export function Rooms() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="rooms" ref={sectionRef} className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Chapter 02</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
            Curated <span className="gold-text-gradient italic">Residences</span>
          </h2>
          <div className="gold-divider w-32 mt-8" />
        </div>
        <p className="max-w-sm text-pearl/60 text-sm">
          Four signature accommodations. Limited launch pricing — counters reflect today's exclusive rate.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="hide-scrollbar overflow-x-auto snap-x snap-mandatory scroll-pl-6 flex gap-6 px-6 pb-8"
      >
        {rooms.map((r, i) => (
          <article
            key={r.name}
            className="snap-start shrink-0 w-[85vw] sm:w-[480px] group"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-navy">
              <img src={r.img} alt={r.name} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" width={1280} height={896} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />

              <div className="absolute top-6 left-6 text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/40 px-3 py-1.5">
                {String(i + 1).padStart(2, "0")} / 04
              </div>

              <div className="absolute top-6 right-6 text-right">
                <div className="text-[10px] tracking-[0.25em] uppercase text-pearl/60">{r.size}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-pearl/60 mt-1">{r.view}</div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-3xl text-pearl">{r.name}</h3>
                <div className="gold-divider w-16 my-4" />

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-pearl/50 line-through">
                      Rp {r.original.toLocaleString("id-ID")}
                    </div>
                    <div className="font-display text-2xl gold-text-gradient mt-1 tabular-nums">
                      <CountingPrice from={r.original} to={r.promo} active={visible} />
                    </div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-pearl/50 mt-1">per night</div>
                  </div>
                  <button className="h-12 w-12 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-navy-deep transition-all">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-pearl/10" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-pearl/40">Swipe to explore</span>
        <div className="h-px flex-1 bg-pearl/10" />
      </div>
    </section>
  );
}
