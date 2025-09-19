// src/app/work/page.tsx
'use client';

import Image from "next/image";
import { useMemo, useState } from "react";
import TagPill from "@/components/TagPill";
import SortMenu from "@/components/SortMenu";
import type { Project } from "@/components/WorkTypes";

const INDUSTRY_TAGS = [
  "Fashion & Beauty",
  "Food & Beverage",
  "Community",
  "Retail",
  "Hospitality",
  "Professional Services",
  "Real Estate",
] as const;

const SOLUTION_TAGS = [
  "Packaging",
  "Branding", 
  "Website",
  "Photography",
  "Social Media",
  "Environmental",
  "Ad Campaign",
  "Illustration",
] as const;

const PROJECTS: Project[] = [
  {
    id: "coke",
    title: "CocaCola",
    cover: "/images/coke.png",
    industry: ["Food & Beverage"],
    solutions: ["Ad Campaign", "Social Media"],
    year: 2024,
  },
  {
    id: "freshzen",
    title: "Fresh Zen Foods",
    cover: "/images/freshzen.png",
    industry: ["Food & Beverage"],
    solutions: ["Social Media"],
    year: 2025,
  },
  {
    id: "tequila",
    title: "Real Zepeda Tequila",
    cover: "/images/tequila.png",
    industry: ["Food & Beverage"],
    solutions: ["Social Media"],
    year: 2023,
  },
];

type Mode = "industries" | "solutions";
type SortKey = "Newest" | "Oldest";

export default function WorkPage() {
  const [mode, setMode] = useState<Mode>("industries");
  const [activeIndustryTags, setActiveIndustryTags] = useState<string[]>([]);
  const [activeSolutionTags, setActiveSolutionTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortKey>("Newest");

  const tagSource = mode === "industries" ? INDUSTRY_TAGS : SOLUTION_TAGS;
  const activeTags = mode === "industries" ? activeIndustryTags : activeSolutionTags;
  const setActiveTags = mode === "industries" ? setActiveIndustryTags : setActiveSolutionTags;

  const filtered = useMemo(() => {
    let list = [...PROJECTS];

    // Filter by industry tags
    if (activeIndustryTags.length) {
      list = list.filter((p) =>
        activeIndustryTags.every((t) => p.industry.includes(t))
      );
    }

    // Filter by solution tags
    if (activeSolutionTags.length) {
      list = list.filter((p) =>
        activeSolutionTags.every((t) => p.solutions.includes(t))
      );
    }

    if (sortBy === "Newest") list.sort((a, b) => b.year - a.year);
    if (sortBy === "Oldest") list.sort((a, b) => a.year - b.year)

    return list;
  }, [activeIndustryTags, activeSolutionTags, sortBy]);

  const toggleTag = (t: string) =>
    setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const clearAllFilters = () => {
    setActiveIndustryTags([]);
    setActiveSolutionTags([]);
  };

  const hasActiveFilters = activeIndustryTags.length > 0 || activeSolutionTags.length > 0;

  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="pt-[clamp(4rem,10vw,9rem)] pb-[clamp(3rem,8vw,7rem)]">
        <div className="max-w-screen-2xl mx-auto px-[clamp(1rem,5vw,6rem)]">
          <div className="pl-4 sm:pl-8 md:pl-16 md:max-w-[36ch]">
            <h1 className="font-inter font-medium leading-[1.2] text-[clamp(3rem,7vw,6.5rem)] md:whitespace-nowrap">
              <span className="md:block">Explore&nbsp;Our</span>
              <span className="md:block">Creative</span>
              <span className="md:block">Marketing&nbsp;Projects</span>
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-2xl mx-auto px-[clamp(1rem,5vw,6rem)]">
          {/* Tabs */}
        <div className="flex items-center gap-[clamp(1rem,3vw,1.75rem)] pl-4 sm:pl-8 md:pl-16">
          <button
            onClick={() => setMode("industries")}
            className={`text-[clamp(1rem,2vw,2rem)] leading-normal font-bold transition-all duration-300 ease-out font-inter ${
              mode === "industries" ? "text-white" : "text-neutral-400"
            }`}
          >
            Industries
          </button>
          <button
            onClick={() => setMode("solutions")}
            className={`text-[clamp(1rem,2vw,2rem)] leading-normal font-bold transition-all duration-300 ease-out font-inter ${
              mode === "solutions" ? "text-white" : "text-neutral-400"
            }`}
          >
            Solutions
          </button>

          {/* Clear */}
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="ml-2 text-neutral-300 text-4xl transition-all duration-300 ease-out hover:text-white"
              aria-label="Clear filters"
              title="Clear filters"
            >
              ×
            </button>
          )}

            {/* Sort (right) */}
            <div className="ml-auto">
              <SortMenu value={sortBy} onChange={setSortBy} />
            </div>
          </div>

          {/* Pills - Centered with two rows */}
          <div className="flex flex-wrap justify-center gap-3 mt-[clamp(2rem,4vw,3rem)] pl-4 sm:pl-8 md:pl-16">
            {tagSource.map((t) => (
              <TagPill
                key={t}
                label={t}
                active={activeTags.includes(t)}
                onClick={() => toggleTag(t)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mt-[clamp(2rem,5vw,4rem)] pb-[clamp(3rem,8vw,7rem)]">
        <div className="max-w-screen-2xl mx-auto px-[clamp(1rem,5vw,6rem)]">
          <div className="grid gap-[clamp(1rem,3vw,1.5rem)] sm:grid-cols-2">
            {filtered.map((p) => (
              <a
                key={p.id}
                href={`/work/${p.id}`}
                className="group block"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-[1.875rem]">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="pt-5 pl-0 pr-5 pb-5 text-left">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out mb-2">
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      {p.solutions.map((solution, index) => (
                        <span key={solution} className="flex items-center gap-2">
                          <span className="hover:text-[#F3BB0C] transition-colors duration-200 ease-out">{solution}</span>
                          {index < p.solutions.length - 1 && (
                            <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-white text-[clamp(1rem,2.5vw,1.5rem)] font-bold leading-normal font-inter">{p.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {filtered.length === 0 && (
          <p className="text-neutral-400 mt-12">No projects match the selected filters.</p>
        )}
      </section>
    </main>
  );
}