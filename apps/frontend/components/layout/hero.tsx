"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <>
      {/* 
        Definição dos Recortes SVG Fluídos (0 a 1)
        Substitui os valores rígidos em pixels por escalas relativas.
      */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
<clipPath id="hero-clip-desktop" clipPathUnits="objectBoundingBox">
  <path d="M 1 0.972 C 1 0.987 0.991 1 0.98 1 H 0.09 C 0.08 1 0.075 0.987 0.075 0.972 V 0.959 C 0.075 0.945 0.070 0.932 0.060 0.932 H 0.015 C 0.007 0.932 0 0.920 0 0.904 V 0.028 C 0 0.012 0.009 0 0.015 0 H 0.355 C 0.365 0 0.372 0.012 0.372 0.028 V 0.051 C 0.372 0.066 0.380 0.079 0.390 0.079 H 0.610 C 0.620 0.079 0.628 0.066 0.628 0.051 V 0.028 C 0.628 0.012 0.635 0 0.645 0 H 0.98 C 0.991 0 1 0.012 1 0.028 Z" />
</clipPath>

          {/* Recorte Tablet / Telas Médias */}
          <clipPath id="hero-clip-tablet" clipPathUnits="objectBoundingBox">
            <path d="M 1 0.963 C 1 0.984 0.989 1 0.976 1 H 0.17 C 0.157 1 0.147 0.984 0.147 0.963 V 0.959 C 0.147 0.948 0.144 0.932 0.131 0.932 H 0.024 C 0.011 0.932 0 0.895 V 0.037 C 0 0.016 0.011 0 0.024 0 H 0.976 C 0.989 0 1 0.016 1 0.037 V 0.963 Z" />
          </clipPath>

          {/* Recorte Mobile */}
          <clipPath id="hero-clip-mobile" clipPathUnits="objectBoundingBox">
            <path d="M 1 0.964 C 1 0.984 0.981 1 0.958 1 H 0.189 C 0.165 1 0.147 0.984 0.147 0.964 V 0.959 C 0.147 0.948 0.155 0.932 0.131 0.932 H 0.042 C 0.019 0.932 0 0.916 0 0.896 V 0.036 C 0 0.016 0.019 0 0.042 0 H 0.958 C 0.981 0 1 0.016 1 0.036 V 0.964 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Hero Section Container */}
      <section
        id="home"
        className="hero-section relative w-[calc(100%-1rem)] mx-auto my-2 md:mt-0 min-h-[580px] h-auto md:h-[98vh] transition-all duration-300
                   [clip-path:url(#hero-clip-mobile)]
                   [-webkit-clip-path:url(#hero-clip-mobile)]
                   sm:[clip-path:url(#hero-clip-tablet)]
                   sm:[-webkit-clip-path:url(#hero-clip-tablet)]
                   lg:[clip-path:url(#hero-clip-desktop)]
                   lg:[-webkit-clip-path:url(#hero-clip-desktop)]"
      >
        {/* Imagem de Fundo com Next/Image e Overlay Escuro */}
        <div className="absolute inset-0 -z-10">
          <Image
            alt={t("image_alt")}
            src="/home/image.png"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Conteúdo Principal */}
        <div className="hero-content relative z-10 flex flex-col justify-center md:h-full px-6 sm:px-12 lg:px-16 pt-24 md:pt-[clamp(160px,18vh,300px)] pb-28 md:pb-[clamp(40px,6vh,80px)] max-w-[clamp(720px,66%,1400px)]">
          <h1
            className="hero-title-text hero-enter text-white text-[clamp(2rem,5vw,4.5rem)] font-normal leading-[1.1] mb-5"
            style={{ fontFamily: "var(--font-schibsted)" }}
          >
            {t("title")}
          </h1>

          <p
            className="hero-subtitle-text hero-enter hero-enter-d1 text-white/80 text-[clamp(0.875rem,1.25vw,1.125rem)] font-medium leading-relaxed mb-8 max-w-[520px]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {t("subtitle")}
          </p>

          <div className="hero-enter hero-enter-d2">
            <a
              href="#about"
              className="inline-flex items-center gap-2.5 bg-[#25A273] hover:bg-[#1e9062] active:bg-[#187a53] text-white font-bold text-sm px-7 py-4 rounded-full transition-colors w-fit"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("cta")}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Botão de Scroll - Mobile */}
        <div className="hero-enter hero-enter-d3 absolute bottom-8 right-6 z-10 md:hidden">
          <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <span className="scroll-bounce inline-flex">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 3v10M4 9l4 4 4-4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Elemento de Scroll - Desktop */}
        <div className="hero-enter hero-enter-d3 absolute bottom-10 right-10 z-10 hidden md:flex flex-col items-center">
          <div className="w-36 h-36 rounded-full bg-white flex items-center justify-center shadow-sm">
            <span
              className="text-black font-bold text-lg tracking-wide select-none"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {t("scroll")}
            </span>
          </div>
          <div className="w-[120px] h-[120px] rounded-full border border-white/55 flex items-center justify-center -mt-[52px]">
            <span className="scroll-bounce inline-flex">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M11 4v14M5 12l6 6 6-6"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}