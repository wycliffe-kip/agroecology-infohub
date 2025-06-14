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

  // Automatically change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Preload next image
  useEffect(() => {
    const nextImage = new Image();
    nextImage.src = images[(currentImageIndex + 1) % images.length];
  }, [currentImageIndex]);

  return (
    <section className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center">
      {/* Background Image Slider */}
      <div className="absolute inset-0" aria-hidden="true">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 z-10"
        aria-hidden="true"
        style={{
          backgroundImage: 'url(/images/repeatable_pattern.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto 80px',
          opacity: 0.2,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-20" aria-hidden="true" />

      {/* Text Content */}
      <div className="relative z-30 text-center text-white px-4">
        <h1 className="text-3xl md:text-6xl font-bold">
          {t('hero.title')}
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default Hero;
