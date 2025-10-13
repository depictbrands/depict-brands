import React from "react";

type HeroProps = {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  videoEmbedUrl?: string;
};

export default function Hero({
  title,
  subtitle,
  ctaLabel = "Book a discovery call",
  ctaHref = "#contact",
  videoEmbedUrl,
}: HeroProps) {
  return (
    <section className="bg-black text-white pt-20">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 text-base/7 text-white/80">{subtitle}</p>
          ) : null}
          <div className="mt-8">
            <a
              href={ctaHref}
              className="inline-block rounded-md bg-white text-black px-5 py-2 text-sm font-medium hover:bg-white/90"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-neutral-900 border border-white/10">
          {videoEmbedUrl ? (
            <iframe
              className="h-full w-full"
              src={videoEmbedUrl}
              title="Intro video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="h-full w-full grid place-items-center text-white/60 text-sm">
              Video placeholder
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
