"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";

interface Slide {
  img: { src: string; width: number; height: number; alt: string };
  eyebrow: string;
  /** headline lines; a line wrapped in {red: true} renders in brand red */
  lines: { text: string; red?: boolean }[];
  sub: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}

const slides: Slide[] = [
  {
    img: {
      src: "/images/hero-girl2.png",
      width: 1309,
      height: 872,
      alt: "Woman in a red sports top performing a V-sit core exercise",
    },
    eyebrow: `Private fitness studio · Blackheath · est. ${business.foundingYear}`,
    lines: [{ text: "Personal training," }, { text: "made personal.", red: true }],
    sub: "Lose fat, build muscle, get stronger or come back from injury — one-to-one coaching in a completely private studio, built around you.",
    primary: { label: "Book your free 30-min session", href: "/contact-us/" },
    secondary: { label: "Explore training", href: "/personal-training/" },
  },
  {
    img: {
      src: "/images/hero-01.png",
      width: 1511,
      height: 744,
      alt: "Woman in her fifties stretching towards her toes on a red exercise mat",
    },
    eyebrow: "Fitness for 50+ · beginners welcome",
    lines: [{ text: "Stronger at 50," }, { text: "60 and beyond.", red: true }],
    sub: "Strength, mobility and confidence — every exercise adapted to your level, in a private studio with nobody watching.",
    primary: { label: "Explore 50+ training", href: "/fitness-for-50/" },
    secondary: { label: "Free intro session", href: "/contact-us/" },
  },
  {
    img: {
      src: "/images/hero-girl1.png",
      width: 1309,
      height: 872,
      alt: "Athlete resting on the floor drinking from a red shaker bottle",
    },
    eyebrow: "Couples training · two goals, one session",
    lines: [{ text: "Train together," }, { text: "pay less each.", red: true }],
    sub: "Bring your partner or a friend: individual programmes inside a shared private session — and a lower price per person.",
    primary: { label: "Explore couples training", href: "/couples-training/" },
    secondary: { label: "Free intro session", href: "/contact-us/" },
  },
];

const HOLD_MS = 6500;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), HOLD_MS);
    return () => clearInterval(t);
  }, [paused]);

  const slide = slides[index];
  const nn = (n: number) => String(n + 1).padStart(2, "0");

  return (
    <section
      aria-roledescription="carousel"
      aria-label="KD Personal Training highlights"
      className="relative overflow-hidden bg-paper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto grid min-h-[82svh] w-full max-w-7xl items-center gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-10">
        {/* Stable, locality-rich H1 for search engines; the visible poster
            headline below changes per slide and stays presentational. */}
        <h1 className="sr-only">
          Personal trainer in Blackheath — KD Personal Training, private fitness studio in
          Blackheath, London SE3
        </h1>

        {/* Copy — keyed so entrance animations replay per slide */}
        <div key={index} className="relative z-10 order-last lg:order-first">
          <p className="eyebrow eyebrow-rule rise mb-4 text-red" style={{ ["--rise-delay" as string]: "40ms" }}>
            {slide.eyebrow}
          </p>
          <p
            className="display rise text-[3.4rem] leading-[0.92] text-ink sm:text-8xl lg:text-[6.75rem]"
            role="heading"
            aria-level={2}
            style={{ ["--rise-delay" as string]: "120ms" }}
          >
            {slide.lines.map((l) => (
              <span key={l.text} className={`block ${l.red ? "text-red" : ""}`}>
                {l.text}
              </span>
            ))}
          </p>
          <p className="rise mt-6 max-w-xl text-lg text-stone sm:text-xl" style={{ ["--rise-delay" as string]: "220ms" }}>
            {slide.sub}
          </p>
          <div className="rise mt-8 flex flex-wrap gap-4" style={{ ["--rise-delay" as string]: "320ms" }}>
            <Link href={slide.primary.href} className="btn btn-primary text-xl">
              {slide.primary.label}
            </Link>
            <Link href={slide.secondary.href} className="btn btn-outline text-xl">
              {slide.secondary.label}
            </Link>
          </div>
          <a
            href={business.googleReviewsUrl}
            target="_blank"
            rel="noopener"
            className="rise mt-8 inline-flex items-center gap-2.5 text-sm text-stone hover:text-ink"
            style={{ ["--rise-delay" as string]: "420ms" }}
          >
            <span aria-hidden className="text-red">
              ★★★★★
            </span>
            Rated by real clients on Google
          </a>
        </div>

        {/* Visual: red disc + cut-out figure. Min-height ≥ disc size below lg
            so the absolutely-positioned disc can't spill over the copy that
            stacks beneath it on mobile/tablet. */}
        <div className="relative order-first flex min-h-[310px] items-center justify-center sm:min-h-[450px] lg:order-last lg:min-h-0">
          {/* slide counter */}
          <p
            aria-hidden
            className="display-light absolute -top-2 right-0 z-10 text-2xl tracking-wide text-ink/60 lg:top-2"
          >
            {nn(index)} <span className="text-red">/</span> {String(slides.length).padStart(2, "0")}
          </p>

          <div aria-hidden className="absolute right-[4%] top-1/2 -translate-y-1/2">
            <div className="h-[290px] w-[290px] rounded-full bg-red sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]" />
            <div className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-full border border-ink/15" />
          </div>

          <div className="relative w-full">
            {slides.map((s, i) => (
              <div
                key={s.img.src}
                className={`transition-all duration-700 ease-out ${
                  i === index
                    ? "relative opacity-100"
                    : "pointer-events-none absolute inset-0 translate-y-4 opacity-0"
                }`}
                aria-hidden={i !== index}
              >
                <Image
                  src={s.img.src}
                  alt={i === index ? s.img.alt : ""}
                  width={s.img.width}
                  height={s.img.height}
                  priority={i === 0}
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className={`mx-auto w-full max-w-[560px] lg:max-w-none ${i === index ? "float-y" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="pointer-events-auto flex items-center gap-2.5">
            {slides.map((s, i) => (
              <button
                key={s.img.src}
                type="button"
                aria-label={`Slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className={`h-1 transition-all ${
                  i === index ? "w-9 bg-red" : "w-5 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>
          <div className="pointer-events-auto flex gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(index - 1)}
              className="flex h-11 w-11 items-center justify-center border border-line bg-white text-xl text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(index + 1)}
              className="flex h-11 w-11 items-center justify-center border border-line bg-white text-xl text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
