"use client";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";
import type { TeamMember } from "@/data/teamMembers";

export default function TeamCard({
  member, expandedId, setExpandedId,
}: { member: TeamMember; expandedId: string | null; setExpandedId: (id: string | null) => void; }) {
  const isOpen = expandedId === member.id;

  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setExpandedId(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, setExpandedId]);

  const photoWidth = isOpen ? "32%" : "100%";
  const detailsWidth = isOpen ? "68%" : "0%";

  return (
    <div className="relative">
      <motion.button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setExpandedId(isOpen ? null : member.id)}
        className="group relative block w-full overflow-hidden rounded-2xl bg-neutral-900/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
        layout
        transition={{ type: "tween", ease: [0.65,0,0.35,1], duration: 0.5 }}
        style={{ aspectRatio: "4/5" }}
      >
        <div className="absolute inset-0 flex">
          {/* Photo pane */}
          <motion.div className="relative h-full overflow-hidden" layout
            animate={{ width: photoWidth }}
            transition={{ type: "tween", ease: [0.65,0,0.35,1], duration: 0.55 }}>
            <img src={member.photoSrc} alt={`${member.name} — ${member.title}`} className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
              <div className="rounded-xl bg-gradient-to-t from-black/55 via-black/20 to-transparent p-4">
                <p className="text-white text-xl font-semibold leading-tight">{member.name}</p>
                <p className="text-white/80 text-sm">{member.title}</p>
              </div>
            </div>
          </motion.div>

          {/* Details pane */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div key="details" initial={{ width: 0, opacity: 0 }}
                animate={{ width: detailsWidth, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ type: "tween", ease: [0.65,0,0.35,1], duration: 0.55 }}
                className="h-full overflow-y-auto bg-white">
                <div className="p-6 md:p-8 text-left text-neutral-900">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-neutral-600 mb-3">{member.title}</p>
                  <div className="text-[15px] leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ 
                    __html: member.bio.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }} />
                  <style jsx>{`
                    :global(.work-link) {
                      color: #F3BB0C;
                      text-decoration: none;
                      position: relative;
                      transition: all 0.3s ease;
                    }
                    :global(.work-link:hover) {
                      color: #F3BB0C;
                    }
                    :global(.work-link::after) {
                      content: '';
                      position: absolute;
                      bottom: -2px;
                      left: 0;
                      width: 0;
                      height: 2px;
                      background-color: #F3BB0C;
                      transition: width 0.3s ease;
                    }
                    :global(.work-link:hover::after) {
                      width: 100%;
                    }
                  `}</style>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  );
}
