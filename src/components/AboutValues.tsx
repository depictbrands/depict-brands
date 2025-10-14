"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import * as React from "react";
import { HERO_TITLE_CLASS } from "../lib/typography";

export default function AboutValues() {
  const prefersReducedMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 95%", "end 40%"] });

  const [baseInset, setBaseInset] = React.useState(120);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const v = parseFloat(getComputedStyle(el).getPropertyValue("--about-values-inset") || "120");
    setBaseInset(Number.isFinite(v) ? v : 120);
  }, []);

  const insetPx = useTransform(scrollYProgress, [0, 0.55], [baseInset, 0]);
  const radiusPx = useTransform(scrollYProgress, [0, 0.55], [24, 0]);

  return (
    <section ref={ref} className="relative" style={{ ["--about-values-inset" as any]: "48" }}>
      <div className="relative min-h-[160vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-black"
            style={prefersReducedMotion ? { inset: 0, borderRadius: 0 } : {
              top: insetPx, right: insetPx, bottom: insetPx, left: insetPx, borderRadius: radiusPx,
            }}
          />

          <div className="absolute inset-0">
            <div className="mx-auto h-full max-w-[1200px] px-6 flex flex-col">
              <div className="flex-1 grid grid-cols-12 gap-8">
                {/* Left side - paragraph */}
                <div className="col-span-12 md:col-span-7 flex items-center -ml-15 mt-64">
                  <p className="w-full text-5xl font-medium text-left text-white/90 leading-[1.3]">
                    As a small business ourselves, we understand the unique needs of local entrepreneurs, and we're excited to share our passion and knowledge with you.
                  </p>
                </div>
                
                {/* Right side - keywords */}
                <div className="col-span-12 md:col-span-5 flex flex-col items-end justify-center -mr-12 -mt-80">
                  <h2 className={`${HERO_TITLE_CLASS} text-right text-white`}>
                    <span className="block">Passion.</span>
                    <span className="block" style={{ color: "var(--brand-gold)" }}>Creativity.</span>
                    <span className="block">Strategy.</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        section { --about-values-inset: 120; }
        @media (max-width:1024px){ section { --about-values-inset: 60; } }
        @media (max-width:640px){ section { --about-values-inset: 40; } }
      `}</style>
    </section>
  );
}
