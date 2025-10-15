"use client";
import PageHeading from "@/components/PageHeading";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactHero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const contactItems = [
    {
      label: "PHONE",
      value: "(617)706-2756"
    },
    {
      label: "EMAIL", 
      value: "eileen@depictbrands.com"
    },
    {
      label: "ADDRESS",
      value: "15 Channel Center Street\nBoston, MA 02210"
    }
  ];

  return (
    <section className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="mx-auto max-w-[1200px] px-6 pt-20 md:pt-32 pb-8 md:py-12">
        <PageHeading className="text-white">
          Let's Create<br />Together
        </PageHeading>
        <p className="mt-32 w-[650px] max-w-full text-3xl/[1.5] md:text-4xl/[1.5] font-medium text-left text-white">
          Ready to bring your brand vision to life? Let's discuss your next project.
        </p>
      </div>

      {/* Hero Image */}
      <div className="w-full px-6">
        <div className="mx-auto max-w-[1200px]">
          <img
            src="/images/contact/contact-hero.jpg"
            alt="Contact us - Depict Brands office"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 md:py-24 bg-black">
        <div className="space-y-0">
          {contactItems.map((item, index) => (
            <div 
              key={index} 
              className="relative w-full overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Yellow background layer */}
              <div 
                className="flex items-center justify-center py-12 md:py-16 w-full"
                style={{ backgroundColor: '#F3BB0C' }}
              >
                <p className="text-[64px] font-light text-center text-black whitespace-pre-line">
                  {item.value}
                </p>
              </div>

              {/* White sliding layer */}
              <motion.div
                className="absolute inset-0 bg-white flex items-center justify-center py-12 md:py-16 cursor-pointer"
                animate={{ x: hoveredIndex === index ? '-100%' : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut', type: 'tween' }}
              >
                <p className="text-4xl md:text-6xl font-light text-black uppercase tracking-wide">
                  {item.label}
                </p>
                
                {/* Thin black separator line at bottom of white block (except for last item) */}
                {index < contactItems.length - 1 && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-black"></div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom black space */}
      <div className="h-32 md:h-48 bg-black"></div>
    </section>
  );
}
