// src/components/workTypes.ts
export type Project = {
    id: string;
    title: string;
    cover: string;        // path under /public
    industry: string[];   // industry tags
    solutions: string[];  // solution tags
    year: number;
  };