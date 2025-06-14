// src/app/page.tsx
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import QuickLinks from "./components/QuickLinks";
import ProductsPage from "./products/page";
import BlogPage from "./blog/page";
import MapPage from "./map/page";

export default function HomePage() {
  return (
    <main className="">
      <NavigationBar />
      <Hero />
      <QuickLinks />
      <ProductsPage />
      <BlogPage />
      <MapPage />
    </main>
  );
}
