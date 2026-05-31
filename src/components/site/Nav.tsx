import { useEffect, useState } from "react";
import { Crown } from "lucide-react";

const links = [
  { label: "Suites", href: "#rooms" },
  { label: "Lounge", href: "#lounge" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy-deep/85 backdrop-blur-xl py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Crown className="h-6 w-6 text-gold" strokeWidth={1.5} />
          <div className="leading-none">
            <div className="font-display text-base tracking-[0.2em] text-pearl">VVIP</div>
            <div className="text-[10px] tracking-[0.35em] text-gold/80 mt-0.5">RESIDENCE</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative text-xs tracking-[0.25em] uppercase text-pearl/80 hover:text-gold transition-colors"
            >
              {l.label}
              <span
                className={`absolute -bottom-2 left-0 h-px bg-gold origin-left transition-transform duration-500 ${
                  scrolled ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
                style={{ width: "100%" }}
              />
            </a>
          ))}
        </nav>

        <button className="relative overflow-hidden group px-6 py-3 text-xs tracking-[0.25em] uppercase text-navy-deep font-semibold rounded-sm" style={{ background: "var(--gradient-gold)" }}>
          <span className="relative z-10">Reserve</span>
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </button>
      </div>
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gold/40 transition-all duration-700 ${scrolled ? "w-[80%]" : "w-0"}`} />
    </header>
  );
}
