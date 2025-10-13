"use client";

import React, { useState } from "react";

type Step = {
  title: string;
  items: string[];
};

export default function Process({ steps }: { steps: Step[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        {steps.map((step, index) => (
          <div key={step.title} className="border-t border-black/10">
            <button
              className="w-full text-left py-4 flex items-center justify-between"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-medium">{step.title}</span>
              <span className="text-sm">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index ? (
              <ul className="pb-4 pl-5 list-disc text-sm text-black/70">
                {step.items.map((i) => (
                  <li key={i} className="mt-1">
                    {i}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-black/10 p-6 bg-white text-sm text-black/70">
        At Depict Brands, we help define your startup’s brand identity and craft a strategy that sets you apart. As a digital marketing partner, we develop content you can deploy to build a solid and memorable brand.
      </div>
    </div>
  );
}


