"use client";

import Image from "next/image";
import styles from "./work-carousel.module.css";

/* Type definition for a work item */
export type WorkItem = {
  id: string;
  title: string;
  tag?: string;       // e.g. "Ad Campaign" / "Social Media"
  image: string;      // e.g. "/images/coke.jpg"
  href?: string;      // optional link
};

/* Hard-coded items based on your mockup (images in public/images/) */
const items: WorkItem[] = [
  {
    id: "coke",
    title: "CocaCola",
    tag: "Ad Campaign",
    image: "/images/coke.png",
    href: "/work/cocacola",
  },
  {
    id: "tequila",
    title: "Real Zepeda Tequila",
    tag: "Social Media",
    image: "/images/tequila.png",
    href: "/work/tequila",
  },
  {
    id: "freshzen",
    title: "Fresh Zen Foods",
    tag: "Social Media",
    image: "/images/freshzen.png",
    href: "/work/freshzen",
  },
];

export default function WorkCarousel() {
  return (
    <section className={styles.wrap} aria-label="Work carousel">
      <div className={styles.scroller} role="list">
        {items.map((it) => {
          const card = (
            <article key={it.id} className={styles.card} role="listitem">
              {/* next/image with fill requires parent positioned and fixed height */}
              <Image
                src={it.image}
                alt={it.title}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 42vw, 520px"
                priority={false}
              />
              <div className={styles.overlay}>
                {it.tag && <span className={styles.tag}>{it.tag}</span>}
                <h3 className={styles.title}>{it.title}</h3>
              </div>
            </article>
          );

          return it.href ? (
            <a key={it.id} href={it.href} className={styles.link} aria-label={it.title}>
              {card}
            </a>
          ) : (
            card
          );
        })}
      </div>
    </section>
  );
}