"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { images } from "@/data/images";

interface Slide {
  eyebrow: string;
  /** headline lines; a line marked {accent: true} renders in italic serif gold */
  lines: { text: string; accent?: boolean }[];
  sub: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}

const slides: Slide[] = [
  {
    eyebrow: `Private fitness studio · Blackheath · est. ${business.foundingYear}`,
    lines: [{ text: "Personal training," }, { text: "made personal.", accent: true }],
    sub: "Lose fat, build muscle, get stronger or come back from injury — one-to-one coaching in a completely private studio, built around you.",
    primary: { label: "Book your free 30-min session", href: "/contact-us/" },
    secondary: { label: "Explore training", href: "/personal-training/" },
  },
  {
    eyebrow: "Fitness for 50+ · beginners welcome",
    lines: [{ text: "Stronger at 50," }, { text: "60 and beyond.", accent: true }],
    sub: "Strength, mobility and confidence — every exercise adapted to your level, in a private studio with nobody watching.",
    primary: { label: "Explore 50+ training", href: "/fitness-for-50/" },
    secondary: { label: "Free intro session", href: "/contact-us/" },
  },
  {
    eyebrow: "Couples training · two goals, one session",
    lines: [{ text: "Train together," }, { text: "pay less each.", accent: true }],
    sub: "Bring your partner or a friend: individual programmes inside a shared private session — and a lower price per person.",
    primary: { label: "Explore couples training", href: "/couples-training/" },
    secondary: { label: "Free intro session", href: "/contact-us/" },
  },
];

const HOLD_MS = 7000;

/**
 * Full-bleed noir hero: one dark studio visual, serif headlines that
 * crossfade per slide. The backdrop is the owner-supplied concept render,
 * so the discreet "Interior visualisation" caption is mandatory.
 */
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
      className="relative isolate overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Backdrop */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src={images.newGym.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-zoom photo object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
      </div>
      <p className="absolute bottom-5 right-4 z-10 text-[0.65rem] uppercase tracking-[0.22em] text-paper/50 sm:right-6">
        Interior visualisation
      </p>

      <div className="relative z-[1] mx-auto flex min-h-[86svh] w-full max-w-7xl items-center px-4 pb-28 pt-16 sm:px-6">
        {/* Stable, locality-rich H1 for search engines; the visible serif
            headline below changes per slide and stays presentational. */}
        <h1 className="sr-only">
          Personal trainer in Blackheath — KD Personal Training, private fitness studio in
          Blackheath, London SE3
        </h1>

        {/* Copy — keyed so entrance animations replay per slide */}
        <div key={index} className="max-w-3xl">
          <p
            className="eyebrow eyebrow-rule rise mb-6 text-gold"
            style={{ ["--rise-delay" as string]: "40ms" }}
          >
            {slide.eyebrow}
          </p>
          <p
            className="display-caps rise text-[2.55rem] leading-[1.08] text-paper sm:text-6xl lg:text-[4.6rem]"
            role="heading"
            aria-level={2}
            style={{ ["--rise-delay" as string]: "120ms" }}
          >
            {slide.lines.map((l) =>
              l.accent ? (
                <span
                  key={l.text}
                  className="display-light block normal-case italic tracking-[0.02em] text-gold"
                >
                  {l.text}
                </span>
              ) : (
                <span key={l.text} className="block">
                  {l.text}
                </span>
              ),
            )}
          </p>
          <p
            className="rise mt-7 max-w-xl text-lg text-mist sm:text-xl"
            style={{ ["--rise-delay" as string]: "220ms" }}
          >
            {slide.sub}
          </p>
          <div
            className="rise mt-10 flex flex-wrap gap-4"
            style={{ ["--rise-delay" as string]: "320ms" }}
          >
            <Link href={slide.primary.href} className="btn btn-primary">
              {slide.primary.label}
            </Link>
            <Link href={slide.secondary.href} className="btn btn-outline-light">
              {slide.secondary.label}
            </Link>
          </div>
          <a
            href={business.googleReviewsUrl}
            target="_blank"
            rel="noopener"
            className="rise mt-9 inline-flex items-center gap-3 text-sm tracking-wide text-mist transition-colors hover:text-paper"
            style={{ ["--rise-delay" as string]: "420ms" }}
          >
            <span aria-hidden className="tracking-[0.3em] text-gold">
              ★★★★★
            </span>
            Rated by real clients on Google
          </a>
        </div>
      </div>

      {/* Controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-7 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="pointer-events-auto flex items-center gap-5">
            <p aria-hidden className="display-light text-lg tracking-[0.1em] text-paper/70">
              {nn(index)} <span className="text-gold">/</span>{" "}
              {String(slides.length).padStart(2, "0")}
            </p>
            <div className="flex items-center gap-2.5">
              {slides.map((s, i) => (
                <button
                  key={s.eyebrow}
                  type="button"
                  aria-label={`Slide ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => go(i)}
                  className={`h-px transition-all ${
                    i === index ? "w-10 bg-gold" : "w-6 bg-paper/30 hover:bg-paper/60"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="pointer-events-auto flex gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(index - 1)}
              className="flex h-11 w-11 items-center justify-center border border-paper/25 text-lg text-paper/80 transition-colors hover:border-gold hover:text-gold"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(index + 1)}
              className="flex h-11 w-11 items-center justify-center border border-paper/25 text-lg text-paper/80 transition-colors hover:border-gold hover:text-gold"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
