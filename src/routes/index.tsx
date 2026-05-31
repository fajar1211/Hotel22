import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Lounge } from "@/components/site/Lounge";
import { Rooms } from "@/components/site/Rooms";
import { Experience } from "@/components/site/Experience";
import { Cta } from "@/components/site/Cta";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VVIP Residence Singkawang · Executive Hotel" },
      { name: "description", content: "An exclusive executive residence in the heart of Singkawang — where prestige meets restraint." },
      { property: "og:title", content: "VVIP Residence Singkawang" },
      { property: "og:description", content: "Ultra-premium executive hotel in Singkawang. Private suites, sky lounge, and 24-hour concierge." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-navy-deep text-pearl min-h-screen">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Lounge />
      <Rooms />
      <Experience />
      <Cta />
      <Footer />
    </main>
  );
}
