// src/app/work/yosep-skin-care/components/ProductPresentation.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function ProductPresentation() {
  const productRef = useRef<HTMLElement>(null);

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

    if (productRef.current) {
      observer.observe(productRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={productRef}
      className="py-10 bg-[#ffffff]"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 max-w-[1600px] mx-auto">
          {/* Left Column - Product Presentation Text */}
          <div className="col-span-12 md:col-span-6 flex items-center">
            <div className="space-y-6 text-left">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-black mb-8 font-inter">
                Product Presentation
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 leading-relaxed font-light font-inter">
                  We designed and rendered a series of 3D product visuals to highlight Yôsep's texture, 
                  form, and key ingredients. The imagery focused on realism and tactile appeal—showcasing 
                  product details under soft lighting to evoke freshness, smoothness, and quality.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Empty */}
          <div className="col-span-12 md:col-span-6"></div>
        </div>

          {/* Product Lineup Image */}
          <div className="overflow-hidden mt-20">
            <img
              src="/images/yosep/3d-product.webp"
              alt="Yosep skincare product lineup on wooden surface"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
    </section>
  );
}
