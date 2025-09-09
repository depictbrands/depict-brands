import React from "react";

type Badge = { label: string };

export default function Badges({ badges }: { badges: Badge[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <span
          key={badge.label}
          className="rounded-full bg-neutral-100 text-neutral-800 px-3 py-1 text-sm font-medium"
        >
          {badge.label}
        </span>
      ))}
    </div>
  );
}
