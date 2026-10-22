'use client';

import dynamic from 'next/dynamic';

const CarScene = dynamic(() => import('./CarScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-l-amber border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function CarSceneClient() {
  return <CarScene />;
}
