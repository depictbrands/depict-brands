'use client';

import { useEffect, useRef } from 'react';

export default function VisualIdentity() {
  const visualRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

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

    if (visualRef.current) {
      observer.observe(visualRef.current);
    }

    const syncHeights = () => {
      if (!leftColRef.current || !rightColRef.current) return;
      // Only sync on md+ screens to avoid fighting mobile stacking
      const isDesktop = window.matchMedia('(min-width: 768px)').matches;
      if (isDesktop) {
        const h = leftColRef.current.getBoundingClientRect().height;
        rightColRef.current.style.height = `${h}px`;
      } else {
        rightColRef.current.style.height = 'auto';
      }
    };

    // Run once on mount and whenever images load/resize
    syncHeights();
    window.addEventListener('resize', syncHeights);
    const imgObserver = new MutationObserver(syncHeights);
    if (visualRef.current) imgObserver.observe(visualRef.current, { subtree: true, childList: true });
    
    // Clean up
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', syncHeights);
      imgObserver.disconnect();
    };
  }, []);

  return (
    <section 
      ref={visualRef}
      className="py-10 bg-[#ffffff]"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 max-w-[1600px] mx-auto">
          {/* Left Column - Empty */}
          <div className="col-span-12 md:col-span-6"></div>

          {/* Right Column - Visual Identity Text */}
          <div className="col-span-12 md:col-span-6 flex items-center justify-end">
            <div className="space-y-6 text-right">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-black mb-8 font-inter">
                Visual Identity
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 leading-relaxed font-inter">
                  The visual identity translates purity and sophistication through minimal typography, 
                  clean layouts, and a soothing color palette inspired by natural tones and hydration. 
                  The logo system and packaging design reflect a sense of calm and renewal, reinforcing 
                  the brand's promise of skin rejuvenation.
                </p>
              </div>
            </div>
          </div>
        </div>

          {/* Logo and Color Palette Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:items-stretch content-start mt-20">
            {/* Left Column - Two Stacked Logo Images */}
            <div ref={leftColRef} className="grid grid-rows-2 gap-6 h-fit md:h-auto">
              {/* Black & White Logo */}
              <div className="overflow-hidden">
                <img
                  src="/images/yosep/logo-showcase-2.webp"
                  alt="Yosep black and white logo on light background"
                  className="w-full h-full object-cover"
                />
              </div>
                
              {/* Blue Background Logo */}
              <div className="overflow-hidden">
                <img
                  src="/images/yosep/logo-showcase-3.webp"
                  alt="Yosep white logo on blue background"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Color Palette */}
            <div ref={rightColRef} className="flex items-stretch justify-center h-full">
              <img
                src="/images/yosep/color-palette.webp"
                alt="Yosep brand color palette gradient"
                className="w-full h-full object-cover"
                onLoad={() => {
                  if (leftColRef.current && rightColRef.current) {
                    const h = leftColRef.current.getBoundingClientRect().height;
                    rightColRef.current.style.height = `${h}px`;
                  }
                }}
            
              />
            </div>
          </div>
        </div>
    </section>
  );
}
