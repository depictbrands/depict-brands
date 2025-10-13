// src/app/work/yosep-skin-care/components/Hero.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="w-screen overflow-hidden bg-[#ffffff]"
    >
      {/* Text Content */}
      <div className="mx-auto max-w-8xl px-6 lg:px-8 pt-24 pb-8 sm:pt-24 sm:pb-10 text-left">
        <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-tight font-bold text-black mb-4 font-inter">
          Yosep
        </h1>
        <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-gray-700 font-inter max-w-prose">
          Branding and website for a European skincare product
        </p>
      </div>

      {/* Full-Width Hero Image */}
      <img
        src="/images/yosep/hero-image.webp"
        alt="Yosep skincare products on water surface"
        className="w-screen h-auto object-cover"
      />
    </section>
  );
}
