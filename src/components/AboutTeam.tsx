"use client";
import PageHeading from "@/components/PageHeading";
import DecorativeOutline from "@/components/DecorativeOutline";

export default function AboutTeam() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1200px] px-6 pt-28 pb-18 md:pt-36 md:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          {/* 内容区域 */}
          <div className="flex-1">
            <PageHeading>Meet Our Team</PageHeading>
            <p className="mt-16 ml-auto max-w-[880px] max-w-full text-5xl text-right text-black/80 leading-[1.3] font-medium -mr-80 pl-16">
              Each member of our team specializes in their field, so we can help your problem-solve, strategize and build your business every step of the way.
            </p>
          </div>
          
          {/* 装饰矩形区域 */}
          <div className="flex justify-end mt-8 lg:mt-0 lg:ml-8">
            <DecorativeOutline
              size={300}
              rotateDeg={20}
              duration={2}
              delay={0.15}
              direction="cw"
              className="pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
