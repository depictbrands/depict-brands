// src/app/work/yosep-skin-care/components/Impact.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function Impact() {
  const impactRef = useRef<HTMLElement>(null);

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

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={impactRef}
      className="py-10 bg-[#ffffff]"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 max-w-[1600px] mx-auto">
          {/* Left Column - Impact Text */}
          <div className="col-span-12 md:col-span-6 flex items-center">
            <div className="space-y-6 text-left">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-black mb-8 font-inter">
                Impact
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 leading-relaxed font-inter">
                  The new brand identity elevated Yosep's digital presence and strengthened emotional 
                  engagement with consumers. The refreshed look and tone helped increase trust, express 
                  purpose, and position the brand as a thoughtful leader in sustainable beauty.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Empty */}
          <div className="col-span-12 md:col-span-6"></div>
        </div>
      </div>
    </section>
  );
}
