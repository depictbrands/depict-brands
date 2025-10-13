// src/components/workTypes.ts
export type Project = {
    id: string;
    title: string;
    cover: string;        // path under /public
    coverMobile?: string;
    coverFallback?: string;
    industry: string[];   // industry tags
    solutions: string[];  // solution tags
    year: number;
  };