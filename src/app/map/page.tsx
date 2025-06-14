'use client';

import dynamic from 'next/dynamic';

const MapView = dynamic(() => import('@/app/components/MapView'), {
  ssr: false,
});

export default function MapPage() {
  return (
    <main className="pt-24 px-4 pb-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-200">Organic Markets Map</h1>
      <MapView />
    </main>
  );
}
