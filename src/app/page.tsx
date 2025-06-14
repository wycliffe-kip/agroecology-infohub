// src/app/page.tsx
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import QuickLinks from "./components/QuickLinks";

export default function HomePage() {
  return (
    <main className="pt-20 md:pt-24">
      <NavigationBar />
      <Hero />
      <QuickLinks />
    </main>
  );
}
