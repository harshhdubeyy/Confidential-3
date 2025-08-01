
'use client';

import Hero from './components/Hero';
import LoveReasons from './components/LoveReasons';
import MemoryGallery from './components/MemoryGallery';
import LoveMessage from './components/LoveMessage';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50">
      <Hero />
      <LoveReasons />
      <MemoryGallery />
      <LoveMessage />
    </div>
  );
}