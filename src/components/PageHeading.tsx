"use client";
import * as React from "react";

type Props = React.PropsWithChildren<{ className?: string; as?: keyof JSX.IntrinsicElements }>;

/**
 * Shared page-level H1. Mirror the exact classes you use in WorkHero.tsx
 * so all sibling top-level pages are consistent.
 */
export default function PageHeading({ children, className = "", as = "h1" }: Props) {
  const Tag: any = as;
  return (
    <Tag
      className={[
        // ✅ copy the title classes from WorkHero.tsx here:
        "leading-[1.1] font-medium text-black text-[8rem] tracking-[-0.02em]",
        className,
      ].join(" ")}
      style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      {children}
    </Tag>
  );
}
