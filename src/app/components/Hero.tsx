'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const images = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg'
];

const Hero = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: 'url(/images/repeatable_pattern.svg)',
          backgroundRepeat: 'repeat',
          opacity: 0.2, // adjust as needed
        }}
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-20" />

      {/* Text Content */}
      <div className="relative z-30 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          {t('hero.title')}
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default Hero;
