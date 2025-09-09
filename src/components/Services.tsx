import React from "react";

export type Service = { title: string };

export default function Services({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {services.map((s) => (
        <div
          key={s.title}
          className="rounded-lg border border-black/10 bg-white p-4 text-sm"
        >
          {s.title}
        </div>
      ))}
    </div>
  );
}
