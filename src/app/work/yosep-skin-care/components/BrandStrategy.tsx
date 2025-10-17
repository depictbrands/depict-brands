// src/app/work/yosep-skin-care/components/BrandStrategy.tsx
'use client';

import { useEffect, useRef } from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';

export default function BrandStrategy() {
  const strategyRef = useRef<HTMLElement>(null);

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

    if (strategyRef.current) {
      observer.observe(strategyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25 }
    }
  };

  const phoneVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const satisfies Transition['ease'] }
    }
  };

  return (
    <section 
      ref={strategyRef}
      className="py-10 bg-[#ffffff]"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 max-w-[1600px] mx-auto">
          {/* Left Column - Brand Strategy Text */}
          <div className="col-span-12 md:col-span-6 flex items-center">
            <div className="space-y-6 text-left">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-black mb-8 font-inter">
                Brand Strategy
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 leading-relaxed font-inter">
                  We positioned Yosep as a modern, mindful skincare brand rooted in balance—science, 
                  nature, aesthetics, and ethics. The strategy emphasizes transparency, hydration, 
                  and empowerment, aligning with consumers seeking authenticity and self-care that gives back.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Empty */}
          <div className="col-span-12 md:col-span-6"></div>
        </div>

          {/* Brand Strategy - Staggered Mobile Mockups */}
          <motion.div
            className="flex flex-col md:flex-row items-start mt-20 justify-center gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Left Phone */}
            <motion.div variants={phoneVariants} className="md:w-auto flex justify-end mt-0 md:mt-0">
              <div className="bg-[#121212] rounded-3xl p-2 w-[220px] sm:w-[260px] md:w-[280px]">
                <img
                  src="/images/yosep/story-mockup-1.webp"
                  alt="Yosep mobile product shot 1"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Middle Phone */}
            <motion.div variants={phoneVariants} className="md:w-auto flex justify-center mt-6 md:mt-10">
              <div className="bg-[#121212] rounded-3xl p-2 w-[220px] sm:w-[260px] md:w-[280px]">
                <img
                  src="/images/yosep/story-mockup-2.webp"
                  alt="Yosep mobile product shot 2"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Right Phone */}
            <motion.div variants={phoneVariants} className="md:w-auto flex justify-start mt-12 md:mt-20">
              <div className="bg-[#121212] rounded-3xl p-2 w-[220px] sm:w-[260px] md:w-[280px]">
                <img
                  src="/images/yosep/story-mockup-3.webp"
                  alt="Yosep mobile product shot 3"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
    </section>
  );
}
