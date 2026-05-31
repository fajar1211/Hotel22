import { Crown } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-gold/15 py-16 px-6">
      <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Crown className="h-6 w-6 text-gold" strokeWidth={1.5} />
            <div className="leading-none">
              <div className="font-display text-base tracking-[0.2em] text-pearl">VVIP RESIDENCE</div>
              <div className="text-[10px] tracking-[0.35em] text-gold/70 mt-1">SINGKAWANG</div>
            </div>
          </div>
          <p className="text-sm text-pearl/50 max-w-sm leading-relaxed">
            An exclusive executive hotel in the heart of Singkawang, West Kalimantan — composed for those who require absolute discretion and effortless luxury.
          </p>
        </div>

        <div>
          <h4 className="font-display text-xs tracking-[0.3em] uppercase text-gold mb-5">Visit</h4>
          <p className="text-sm text-pearl/60 leading-relaxed">
            Jl. Diponegoro No. 1<br />
            Singkawang Tengah<br />
            Kalimantan Barat 79123
          </p>
        </div>

        <div>
          <h4 className="font-display text-xs tracking-[0.3em] uppercase text-gold mb-5">Reservations</h4>
          <p className="text-sm text-pearl/60 leading-relaxed">
            +62 562 555 0100<br />
            concierge@vvip-residence.id
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-16 pt-8 border-t border-pearl/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] tracking-[0.3em] uppercase text-pearl/40">
          © 2026 VVIP Residence Singkawang
        </p>
        <p className="text-[10px] tracking-[0.3em] uppercase text-pearl/40">
          Crafted with discretion
        </p>
      </div>
    </footer>
  );
}
