"use client";
import PageHeading from "@/components/PageHeading";
import DecorativeOutline from "@/components/DecorativeOutline";

export default function AboutHero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1200px] px-6 py-28 md:py-36 relative">
        {/* Heading wrapper so the outline can anchor directly "under" the heading */}
        <div className="relative z-10">
          <PageHeading>
            Our Diversity<br />Is Your Strength
          </PageHeading>
          {/* Decorative outline sits UNDER the heading, slightly offset down */}
          <DecorativeOutline
            size={260}
            rotateDeg={15}
            duration={2}
            delay={0.2}
            direction="ccw"
            strokeColor="#F3BB0C"
            className="absolute left-[120px] top-[calc(100%+16px)] pointer-events-none z-0"
          />
        </div>

        {/* Supporting paragraph: push to the RIGHT edge, increase spacing from heading */}
        <p className="mt-16 ml-auto w-[880px] max-w-full text-5xl font-medium text-right text-black/80 leading-[1.3]">
          A certified minority and women-owned business that's comprised of top talent from across the globe.
        </p>
      </div>
    </section>
  );
}
