// src/app/components/Hero.tsx
const Hero = () => {
  return (
    <section className="mt-20 md:mt-24 bg-green-50 dark:bg-zinc-800 py-16 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-green-800 dark:text-green-200">
        Welcome to Agroecology InfoHub
      </h1>
      <p className="mt-4 text-lg text-green-900 dark:text-green-100 max-w-2xl mx-auto">
        Discover trusted information, products, and resources about organic and agroecological practices in Africa.
      </p>
    </section>
  );
};

export default Hero;
