// src/app/work/yosep-skin-care/components/Ecommerce.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function Ecommerce() {
  const ecommerceRef = useRef<HTMLElement>(null);

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

    if (ecommerceRef.current) {
      observer.observe(ecommerceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={ecommerceRef}
      className="py-10 bg-[#ffffff]"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 max-w-[1600px] mx-auto">
          {/* Left Column - Empty */}
          <div className="col-span-12 md:col-span-6"></div>

          {/* Right Column - Ecommerce Text */}
          <div className="col-span-12 md:col-span-6 flex items-center justify-end">
            <div className="space-y-6 text-right">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-black mb-8 font-inter">
                Ecommerce
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 leading-relaxed font-light font-inter">
                  Yosep's website design delivers a seamless shopping experience, combining elegant 
                  aesthetics with intuitive functionality. The platform features interactive product 
                  galleries, responsive layouts, SEO-optimized content, and supports both storytelling 
                  and sales conversion.
                </p>
              </div>
            </div>
          </div>
        </div>

          {/* Website Mockup */}
          <div className="mt-20 max-w-5xl mx-auto sm:-translate-x-12 md:-translate-x-16 lg:-translate-x-20">
            <div className="bg-black rounded-2xl p-4">
              <div className="rounded-b-lg overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/images/yosep/yosep-shop-showcase.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
