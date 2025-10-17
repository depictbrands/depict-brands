import React from "react";

type SectionProps = {
  title: string;
  children?: React.ReactNode;
  background?: "light" | "dark";
};

export default function Section({ title, children, background = "light" }: SectionProps) {
  const bgClass = background === "dark" ? "bg-[#121212] text-white" : "bg-white";
  
  return (
    <section className={`${bgClass} py-16`}>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
}
