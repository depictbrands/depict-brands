// src/app/work/yosep-skin-care/components/Challenge.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function Challenge() {
  const challengeRef = useRef<HTMLElement>(null);

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

    if (challengeRef.current) {
      observer.observe(challengeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={challengeRef}
      className="py-10 bg-[#ffffff]"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 max-w-[1600px] mx-auto">
          {/* Left Column - Empty */}
          <div className="col-span-12 md:col-span-6"></div>

          {/* Right Column - Challenge Text */}
          <div className="col-span-12 md:col-span-6 flex items-center justify-end">
            <div className="space-y-6 text-right">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-black mb-8 font-inter">
                Challenge
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 leading-relaxed font-light font-inter">
                  Yosep sought a complete brand transformation that could convey trust, luxury, and purpose 
                  in a crowded beauty market. The challenge was to build a visual and verbal identity that 
                  felt premium yet approachable, and to express the brand's philanthropic mission without 
                  losing focus on product efficacy.
                </p>
              </div>
            </div>
          </div>
        </div>

          {/* Two Images Side by Side */}
          <div className="flex gap-8 items-start mt-20">
            {/* Left Image - Logo Showcase 2 */}
            <div className="flex-1">
              <img
                src="/images/yosep/logo-showcase-1.webp"
                alt="Yosep logo on abstract swirling background"
                className="w-full h-auto"
              />
            </div>

            {/* Right Image - Pearl */}
            <div className="flex-shrink-0 w-80">
              <img
                src="/images/yosep/pearl.webp"
                alt="Abalone shell on teal background"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
    </section>
  );
}

