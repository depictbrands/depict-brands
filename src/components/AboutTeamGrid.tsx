"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import * as React from "react";
import TeamCard from "@/components/TeamCard";
import { TEAM_MEMBERS } from "@/data/teamMembers";

export default function AboutTeamGrid() {
  const prefersReducedMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 95%", "end 40%"] });

  const [baseInset, setBaseInset] = React.useState(120);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const v = parseFloat(getComputedStyle(el).getPropertyValue("--about-team-inset") || "120");
    setBaseInset(Number.isFinite(v) ? v : 120);
  }, []);

  const insetPx = useTransform(scrollYProgress, [0, 0.55], [baseInset, 0]);
  const radiusPx = useTransform(scrollYProgress, [0, 0.55], [24, 0]);

  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  return (
    <section ref={ref} className="relative py-20" style={{ ["--about-team-inset" as any]: "120" }}>
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-[#121212]"
        style={prefersReducedMotion ? { inset: 0, borderRadius: 0 } : {
          top: insetPx, right: insetPx, bottom: insetPx, left: insetPx, borderRadius: radiusPx,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              expandedId={expandedId}
              setExpandedId={setExpandedId}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        section { --about-team-inset: 120; }
        @media (max-width:1024px){ section { --about-team-inset: 60; } }
        @media (max-width:640px){ section { --about-team-inset: 40; } }
      `}</style>
    </section>
  );
}
