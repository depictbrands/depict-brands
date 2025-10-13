// src/components/SortMenu.tsx
'use client';

import { useState } from 'react';

type SortKey = "Newest" | "Oldest";

export default function SortMenu({
  value,
  onChange,
}: {
  value: SortKey;
  onChange: (v: SortKey) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const opts: SortKey[] = ["Newest", "Oldest"];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-[clamp(1rem,2vw,2rem)] leading-normal font-bold transition-all duration-300 ease-out font-inter text-white"
      >
        <span>Sort</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 z-10 min-w-[120px]">
          {opts.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`w-full text-right px-4 py-0 text-[clamp(1rem,2vw,2rem)] leading-normal font-bold transition-all duration-300 ease-out font-inter transition-colors text-neutral-400 hover:text-white`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}