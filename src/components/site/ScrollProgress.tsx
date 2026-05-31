import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(scrolled * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full origin-left transition-[width] duration-150"
        style={{ width: `${progress}%`, background: "var(--gradient-gold)", boxShadow: "0 0 12px var(--gold)" }}
      />
    </div>
  );
}
