// src/app/work/yosep-skin-care/components/Introduction.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function Introduction() {
  const introRef = useRef<HTMLElement>(null);

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

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={introRef}
      className="py-10 bg-[#ffffff]"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 max-w-[1600px] mx-auto">
          {/* Left Column - Services */}
          <div className="col-span-12 md:col-span-6 flex items-center">
            <div className="space-y-4">
              <div className="text-[clamp(1rem,2vw,1.25rem)] font-semibold text-black font-inter">
                Branding
              </div>
              <div className="text-[clamp(1rem,2vw,1.25rem)] font-semibold text-black font-inter">
                3D Design
              </div>
              <div className="text-[clamp(1rem,2vw,1.25rem)] font-semibold text-black font-inter">
                Art Direction
              </div>
              <div className="text-[clamp(1rem,2vw,1.25rem)] font-semibold text-black font-inter">
                Social Media Branding
              </div>
              <div className="text-[clamp(1rem,2vw,1.25rem)] font-semibold text-black font-inter">
                Content Writing
              </div>
              <div className="text-[clamp(1rem,2vw,1.25rem)] font-semibold text-black font-inter">
                Website
              </div>
            </div>
          </div>

          {/* Right Column - Brand Description */}
          <div className="col-span-12 md:col-span-6 flex items-center justify-end">
            <div className="space-y-6 text-right">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-black mb-8 font-inter">
                About
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 leading-relaxed font-light font-inter">
                  Yosep Skin Care is a European beauty brand that combines advanced skincare science 
                  with social responsibility. Our products hydrate, repair, and protect, while a portion 
                  of each purchase goes to communities in need. We believe in beauty that impacts both 
                  skin health and positive social impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Website Mockup */}
        <div className="mt-20 max-w-5xl mx-auto sm:translate-x-12 md:translate-x-16 lg:translate-x-20">
            <div className="bg-black rounded-2xl p-4">
            <div className="rounded-b-lg overflow-hidden">
              <video 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src="/images/yosep/yosep-home-page-showcase.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

