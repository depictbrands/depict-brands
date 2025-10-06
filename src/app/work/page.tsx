// src/app/work/page.tsx
'use client';

import Image from "next/image";
import { useMemo, useState } from "react";
import TagPill from "@/components/TagPill";
import SortMenu from "@/components/SortMenu";
import type { Project } from "@/components/WorkTypes";

const INDUSTRY_TAGS = [
  "B2B & Tech",
  "Fashion & Beauty",
  "Community",
  "Retail",
  "Hospitality",
  "Construction & Real Estate",
  "Health & Wellness",
  "Legal & Finance",
  "Education & Government",
] as const;

const SOLUTION_TAGS = [
  "Advertising",
  "Branding",
  "Environmental",
  "Packaging",
  "Photography",
  "Social Media",
  "Website",
  
] as const;

const PROJECTS: Project[] = [
  // Hospitality
  {
    id: "coke-cola",
    title: "CocaCola",
    cover: "/images/hospitality/coca-cola.webp",
    industry: ["Hospitality"],
    solutions: ["Advertising"],
    year: 2023,
  },
  {
    id: "fresh-zen-foods",
    title: "Fresh Zen Foods",
    cover: "/images/hospitality/fresh-zen-foods.webp",
    industry: ["Hospitality"],
    solutions: ["Social Media"],
    year: 2022,
  },
  {
    id: "real-zepeda-tequila",
    title: "Real Zepeda Tequila",
    cover: "/images/hospitality/real-zepeda-tequila.webp",
    industry: ["Hospitality"],
    solutions: ["Social Media"],
    year: 2022,
  },
  {
    id: "manyi-juices",
    title: "Manyi Juices",
    cover: "/images/hospitality/manyi-juices.webp",
    industry: ["Hospitality"],
    solutions: ["Website", "Social Media", "Environmental", "Branding"],
    year: 2022,
  },
  {
    id: "pariva",
    title: "Pariva",
    cover: "/images/hospitality/pariva.webp",
    industry: ["Hospitality"],
    solutions: ["Photography"],
    year: 2022,
  },
  {
    id: "greek-international-market",
    title: "Greek International Market",
    cover: "/images/hospitality/greek-international-market.webp",
    industry: ["Hospitality"],
    solutions: ["Social Media"],
    year: 2022,
  },
  {
    id: "pitshop",
    title: "Pitshop",
    cover: "/images/hospitality/pitshop.webp",
    industry: ["Hospitality"],
    solutions: ["Photography","Branding", "Packaging", "Website"],
    year: 2023,
  },
  // Fashion & Beauty
  {
    id: "capitan",
    title: "Capitan",
    cover: "/images/fashion-beauty/capitan.webp",
    industry: ["Fashion & Beauty"],
    solutions: ["Packaging", "Branding"],
    year: 2012,
  },
  {
    id: "geegees-shop",
    title: "GeeGee's Shop",
    cover: "/images/fashion-beauty/geegees-shop.webp",
    industry: ["Fashion & Beauty"],
    solutions: ["Packaging", "Branding"],
    year: 2021,
  },
  {
    id: "jdls-couture",
    title: "JDLS Couture",
    cover: "/images/fashion-beauty/jdls-couture.webp",
    industry: ["Fashion & Beauty"],
    solutions: ["Website", "Social Media", "Branding"],
    year: 2021,
  },
  {
    id: "yosep-skin-care",
    title: "Yosep Skin Care",
    cover: "/images/fashion-beauty/yosep.webp",
    industry: ["Fashion & Beauty"],
    solutions: ["Website", "Social Media", "Packaging", "Branding"],
    year: 2019,
  },
  {
    id: "copa-cabana",
    title: "Copa Cabana",
    cover: "/images/fashion-beauty/copa-cabana.webp",
    industry: ["Fashion & Beauty"],
    solutions: ["Branding", "Environmental"],
    year: 2020,
  },
  {
    id: "giovanni-hair-design",
    title: "Giovanni Hair Design",
    cover: "/images/fashion-beauty/giovanni.webp",
    industry: ["Fashion & Beauty"],
    solutions: ["Branding", "Website", "Environmental"],
    year: 2017,
  },
  {
    id: "inspiration-salon-spa",
    title: "Inspiration Salon & Spa",
    cover: "/images/fashion-beauty/inspiration-salon-spa.webp",
    industry: ["Fashion & Beauty"],
    solutions: ["Website", "Social Media"],
    year: 2025,
  },
  {
    id: "elore",
    title: "Elore",
    cover: "/images/fashion-beauty/elore.webp",
    industry: ["Fashion & Beauty"],
    solutions: ["Branding", "Website"],
    year: 2025,
  },
  {
    id: "lawson-brothers-shop",
    title: "Lawson Brothers Shop",
    cover: "/images/fashion-beauty/lawson-brothers-shop.webp",
    industry: ["Fashion & Beauty"],
    solutions: ["Branding", "Website"],
    year: 2025,
  },
  {
    id: "bella-debham-bridal",
    title: "Bella Debham Bridal",
    cover: "/images/fashion-beauty/bella-debham-bridal.webp",
    industry: ["Fashion & Beauty"],
    solutions: ["Branding", "Website", "Photography"],
    year: 2023,
  },
  //Hospitality
  {
    id: "elhuipil-cocina-mexicana",
    title: "EL Huipil Cocina Mexicana",
    cover: "/images/hospitality/el-huipil.webp",
    industry: ["Hospitality"],
    solutions: ["Branding", "Website", "Environmental", "Social Media", "Packaging"],
    year: 2016,
  },
  {
    id: "angelas-cafe",
    title: "Angela's Cafe",
    cover: "/images/hospitality/angelas.webp",
    industry: ["Hospitality"],
    solutions: ["Branding", "Photography", "Environmental", "Website"],
    year: 2014,
  },
  {
    id: "la-reina-cafeteria",
    title: "La Reina Cafeteria",
    cover: "/images/hospitality/la-reina.webp",
    industry: ["Hospitality"],
    solutions: ["Branding", "Photography", "Website"],
    year: 2020,
  },
  {
    id: "laparada-dominican-kitchen",
    title: "La Parada Dominican Kitchen",
    cover: "/images/hospitality/la-parada.webp",
    industry: ["Hospitality"],
    solutions: ["Photography", "Website"],
    year: 2024,
  },
  {
    id: "bono-boston",
    title: "Bono Boston",
    cover: "/images/hospitality/bono-boston.webp",
    industry: ["Hospitality"],
    solutions: ["Photography", "Website"],
    year: 2024,
  },
  {
    id: "ecco-boston",
    title: "Ecco Boston",
    cover: "/images/hospitality/ecco-boston.webp",
    industry: ["Hospitality"],
    solutions: ["Branding", "Website", "Social Media", "Environmental"],
    year: 2014,
  },
  {
    id: "havana-cafe",
    title: "Havana Cafe",
    cover: "/images/hospitality/havana-cafe.webp",
    industry: ["Hospitality"],
    solutions: ["Photography", "Website"],
    year: 2023,
  },
  {
    id: "la-finca-restaurant",
    title: "La Finca Restaurant",
    cover: "/images/hospitality/la-finca.webp",
    industry: ["Hospitality"],
    solutions: ["Photography"],
    year: 2024,
  },
  {
    id: "recreo-coffee",
    title: "Recreo Coffee",
    cover: "/images/hospitality/recreo.webp",
    industry: ["Hospitality"],  
    solutions: ["Advertising"],
    year: 2023,
  },
  {
    id: "gege-restaurant",
    title: "Gege Restaurant",
    cover: "/images/hospitality/gege.webp",
    industry: ["Hospitality"],
    solutions: ["Branding"],
    year: 2024,
  },
  {
    id: "italian-express-pizzeria",
    title: "Italian Express Pizzeria",
    cover: "/images/hospitality/Express_Web.mp4",
    coverMobile: "/images/hospitality/Express_Mobile.mp4",
    coverFallback: "/images/hospitality/italian-express.webp",
    industry: ["Hospitality"],
    solutions: ["Branding"],
    year: 2025,
  },
  {
    id: "lunas-italian-latin-cuisine",
    title: "Luna's Italian & Latin Cuisine",
    cover: "/images/hospitality/luna.webp",
    industry: ["Hospitality"],
    solutions: ["Website", "Environmental"],
    year: 2016,
  },
  {
    id: "lisboa-cafe-market",
    title: "Lisboa Cafe & Market",
    cover: "/images/hospitality/lisboa-cafe.webp",
    industry: ["Hospitality"],
    solutions: ["Website"],
    year: 2025,
  },
  {
    id: "cantina-la-mexicana",
    title: "Cantina La Mexicana",
    cover: "/images/hospitality/cantina.webp",
    industry: ["Hospitality"],
    solutions: ["Social Media"],
    year: 2022,
  },

  {
    id: "merengue-restaurant",
    title: "Merengue Restaurant",
    cover: "/images/hospitality/merengue.webp",
    industry: ["Hospitality"],
    solutions: ["Branding", "Environmental"],
    year: 2020,
  },
  //legal & finance
  {
    id: "accion-legal",
    title: "Accion Legal",
    cover: "/images/legal-finance/accion-legal.webp",
    industry: ["Legal & Finance"],
    solutions: ["Social Media", "Photography", "Illustration"],
    year: 2016,
  },
  {
    id: "volunteers-law-project",
    title: "Volunteers Law Project",
    cover: "/images/legal-finance/volunteers-law-project.webp",
    industry: ["Legal & Finance"],
    solutions: ["Website"],
    year: 2019,
  },
  {
    id: "reyna-services",
    title: "Reyna Services",
    cover: "/images/legal-finance/reyna-services.webp",
    industry: ["Legal & Finance"],
    solutions: ["Website", "Photography"],
    year: 2021,
  },
  {
    id: "first-priority-credit-union",
    title: "First Priority Credit Union",
    cover: "/images/legal-finance/first-priority-credit-union.webp",
    industry: ["Legal & Finance"],
    solutions: ["Branding"],
    year: 2015,
  },
  //Retail
  {
    id: "homegoods",
    title: "Homegoods",
    cover: "/images/retail/homegoods.webp",
    industry: ["Retail"],
    solutions: ["Ad Campaign", "Website", "Environmental"],
    year: 2018,
  },
  {
    id: "wayfair",
    title: "Wayfair Professional",
    cover: "/images/retail/wayfair.webp",
    industry: ["Retail"],
    solutions: ["Social Media", "Website"],
    year: 2019,
  },
  {
    id: "modern-hippie-cbd",
    title: "Modern Hippie CBD",
    cover: "/images/retail/modern-hippie-cbd.webp",
    industry: ["Retail"],
    solutions: ["Social Media", "Website", "Packaging"],
    year: 2021,
  },
  //Construction & Real Estate
  {
    id: "cleary-consultants",
    title: "Cleary Consultants",
    cover: "/images/construction-real-estate/cleary-consultants.webp",
    industry: ["Construction & Real Estate"],
    solutions: ["Social Media", "Photography", "Branding"],
    year: 2019,
  },
  {
    id: "cierpronti",
    title: "Cierpronti",
    cover: "/images/construction-real-estate/cierpronti.webp",
    industry: ["Construction & Real Estate"],
    solutions: ["Branding", "Environmental"],
    year: 2014,
  },
  {
    id: "jewn",
    title: "JEWN Enterprises",
    cover: "/images/construction-real-estate/jewn-web.mp4",
    coverMobile: "/images/construction-real-estate/jewn-mobile.mp4",
    coverFallback: "/images/construction-real-estate/jewn.webp",
    industry: ["Construction & Real Estate"],
    solutions: ["Website"],
    year: 2024,
  },
  {
    id: "erika-davies",
    title: "Erika Davies",
    cover: "/images/construction-real-estate/erika-davies.webp",
    industry: ["Construction & Real Estate"],
    solutions: ["Website"],
    year: 2023,
  },
  {
    id: "evelyn-dongo",
    title: "Evelyn Dongo",
    cover: "/images/construction-real-estate/evelyn-dongo.webp",
    industry: ["Construction & Real Estate"],
    solutions: ["Website"],
    year: 2020,
  },
  {
    id: "gilmore-murphy",
    title: "Gilmore Murphy",
    cover: "/images/construction-real-estate/gilmore-murphy.webp",
    industry: ["Construction & Real Estate"],
    solutions: ["Website"],
    year: 2023,
  },
  {
    id: "humanly-global",
    title: "Humanly Global",
    cover: "/images/construction-real-estate/humanly-global.webp",
    industry: ["Construction & Real Estate"],
    solutions: ["Website", "Branding"],
    year: 2023,
  },
  {
    id: "malcom-contracting",
    title: "Malcom Contracting",
    cover: "/images/construction-real-estate/malcom-contracting.webp",
    industry: ["Construction & Real Estate"],
    solutions: ["Website"],
    year: 2025,
  },
  {
    id: "nema",
    title: "NEMA",
    cover: "/images/construction-real-estate/nema.webp",
    industry: ["Construction & Real Estate"],
    solutions: ["Website"],
    year: 2024,
  },
  {
    id: "proen",
    title: "Proen",
    cover: "/images/construction-real-estate/proen.webp",
    industry: ["Construction & Real Estate"],
    solutions: ["Website"],
    year: 2012,
  },
  {
    id: "versatile",
    title: "Versatile",
    cover: "/images/construction-real-estate/versatile.webp",
    industry: ["Construction & Real Estate"],
    solutions: ["Website"],
    year: 2024,
  },
  {
    id: "wess",
    title: "WESS",
    cover: "/images/construction-real-estate/wess.webp",
    industry: ["Construction & Real Estate"],
    solutions: ["Website"],
    year: 2023,
  },
  {
    id: "alex-santiago-realtor",
    title: "Alex Santiago Realtor",
    cover: "/images/construction-real-estate/alex-santiago-realtor.webp",
    industry: ["Construction & Real Estate"],
    solutions: ["Social Media", "Branding"],
    year: 2024,
  },
//B2B & Tech
{
  id: "albas-cleaning",
  title: "Albas Cleaning",
  cover: "/images/b2b-tech/albas-cleaning.webp",
  industry: ["B2B & Tech"],
  solutions: ["Website", "Social Media", "Photography", "Branding"],
  year: 2025,
},
{
  id: "ashcroft",
  title: "Ashcroft",
  cover: "/images/b2b-tech/ashcroft.webp",
  industry: ["B2B & Tech"],
  solutions: ["Social Media", "Branding"], //check solutions
  year: 2025,
},
{
  id: "city-conecta",
  title: "City Conecta",
  cover: "/images/b2b-tech/city-conecta.webp",
  industry: ["B2B & Tech"],
  solutions: ["Social Media", "Branding", "Website"],
  year: 2023,
},
{
  id: "in-order-business",
  title: "InOrder Business",
  cover: "/images/b2b-tech/in-order-business.webp",
  industry: ["B2B & Tech"],
  solutions: ["Website", "Branding"],
  year: 2025,
},
{
  id: "kiskey-dry-cleaners",
  title: "Kiskey Dry Cleaners",
  cover: "/images/b2b-tech/kiskey-dry-cleaners.webp",
  industry: ["B2B & Tech"],
  solutions: ["Branding", "Website"],
  year: 2025,
},
{
  id: "pick-up-crew",
  title: "Pick Up Crew",
  cover: "/images/b2b-tech/pick-up-crew.webp",
  industry: ["B2B & Tech"],
  solutions: ["Website", "Branding"],
  year: 2025,
},
{
  id: "red-dress-events",
  title: "Red Dress Events",
  cover: "/images/b2b-tech/red-dress-events.webp",
  industry: ["B2B & Tech"],
  solutions: ["Website", "Branding"],
  year: 2024,
},
//Community
{
  id: "codespa",
  title: "CODESPAE America",
  cover: "/images/community/codespa.webp",
  industry: ["Community"],
  solutions: ["Social Media", "Website"],
  year: 2022,
},
{
  id: "green-crabs",
  title: "Green Crabs",
  cover: "/images/community/green-crabs.webp",
  industry: ["Community"],
  solutions: ["Social Media", "Photography"],
  year: 2025,
},
{
  id: "in-source",
  title: "InSource",
  cover: "/images/community/in-source.webp",
  industry: ["Community"],
  solutions: ["Branding"],
  year: 2024,
},
{
  id: "la-colaborativa",
  title: "La Colaborativa",
  cover: "/images/community/la-colaborativa.webp",
  industry: ["Community"],
  solutions: ["Website", "Branding"], //check solutions
  year: 2025, //check year
},
{
  id: "setesik",
  title: "Setesïk",
  cover: "/images/community/setesik.webp",
  industry: ["Community"],
  solutions: ["Website"],
  year: 2021,
},
{
  id: "teatro-ecas",
  title: "Teatro Ecas",
  cover: "/images/community/teatro-ecas.webp",
  industry: ["Community"],
  solutions: ["Environmental", "Social Media"],
  year: 2025,
},
{
  id: "vrocc",
  title: "VROCC",
  cover: "/images/community/vrocc.webp",
  industry: ["Community"],
  solutions: ["Environmental", "Branding"],
  year: 2023,
},
//Education & Government
{
  id: "college-board",
  title: "College Board",
  cover: "/images/education-government/college-board.webp",
  industry: ["Education & Government"],
  solutions: ["Environmental", "Branding"],
  year: 2014,
},
{
  id: "lexington-college",
  title: "Lexington College",
  cover: "/images/education-government/lexington-college.webp",
  industry: ["Education & Government"],
  solutions: ["Branding"],
  year: 2014,
},
{
  id: "pawtucket",
  title: "Pawtucket",
  cover: "/images/education-government/pawtucket.webp",
  industry: ["Education & Government"],
  solutions: ["Branding"],
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
        activeIndustryTags.some((t) => p.industry.includes(t))
      );
    }

    // Filter by solution tags
    if (activeSolutionTags.length) {
      list = list.filter((p) =>
        activeSolutionTags.some((t) => p.solutions.includes(t))
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
              
              {/*mobile/small screen*/}
              <span className="block md:hidden [text-wrap:balance] leading-[1.1] text-[clamp(2rem,8vw,2.5rem)]">
                Explore Our Creative Marketing Projects
              </span>
              
              {/*desktop/large screen*/}
            <span className="hidden md:block">
              <span className="md:block">Explore&nbsp;Our</span>
              <span className="md:block">Creative</span>
              <span className="md:block">Marketing&nbsp;Projects</span>
            </span>
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

          {/* Pills - Centered with controlled line breaks */}
          <div className="mt-[clamp(2rem,4vw,3rem)] pl-4 sm:pl-8 md:pl-16">
            {mode === "industries" ? (
              // Industry tags with controlled line breaks
              <div className="flex flex-col items-center gap-3">
                {/* First row: B2B & Tech, Fashion & Beauty, Community, Retail, Hospitality */}
                <div className="flex flex-wrap justify-center gap-3">
                  {INDUSTRY_TAGS.slice(0, 5).map((t) => (
                    <TagPill
                      key={t}
                      label={t}
                      active={activeTags.includes(t)}
                      onClick={() => toggleTag(t)}
                    />
                  ))}
                </div>
                {/* Second row: Construction & Real Estate, Health & Wellness, Legal & Finance, Education & Government */}
                <div className="flex flex-wrap justify-center gap-3">
                  {INDUSTRY_TAGS.slice(5).map((t) => (
                    <TagPill
                      key={t}
                      label={t}
                      active={activeTags.includes(t)}
                      onClick={() => toggleTag(t)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              // Solution tags - keep original flex-wrap behavior
              <div className="flex flex-wrap justify-center gap-3">
                {tagSource.map((t) => (
                  <TagPill
                    key={t}
                    label={t}
                    active={activeTags.includes(t)}
                    onClick={() => toggleTag(t)}
                  />
                ))}
              </div>
            )}
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
                  {p.cover.endsWith('.mp4') ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      poster={p.coverFallback || p.cover}
                    >
                      <source 
                        src={p.cover} 
                        type="video/mp4" 
                        media="(min-width: 768px)"
                      />
                      {p.coverMobile && (
                        <source 
                          src={p.coverMobile} 
                          type="video/mp4" 
                          media="(max-width: 767px)"
                        />
                      )}
                      
                      <Image
                        src={p.coverFallback || p.cover}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </video>
                  ) : (
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                  )}
                </div>
                <div className="pt-5 pl-0 pr-5 pb-5 text-left">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out mb-2">
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      {p.solutions.map((solution, index) => (
                        <span key={solution} className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              // Switch to solutions tab and add the clicked solution to active filters
                              setMode("solutions");
                              setActiveSolutionTags(prev => 
                                prev.includes(solution) 
                                  ? prev.filter(t => t !== solution)
                                  : [...prev, solution]
                              );
                            }}
                            className={`transition-colors duration-200 ease-out cursor-pointer ${
                              solution === "Advertising" ? "hover:text-[#5770FF]" :
                              solution === "Branding" ? "hover:text-[#F9620D]" :
                              solution === "Environmental" ? "hover:text-[#09A7F5]" :
                              solution === "Packaging" ? "hover:text-[#00B6A0]" :
                              solution === "Photography" ? "hover:text-[#FF45A8]" :
                              solution === "Social Media" ? "hover:text-[#09A7F5]" :
                              solution === "Website" ? "hover:text-[#F3BB0C]" :
                              "hover:text-[#F3BB0C]"
                            }`}
                          >
                            {solution}
                          </button>
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