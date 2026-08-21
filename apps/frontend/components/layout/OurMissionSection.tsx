"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

// Tipagem para os props do Botão
interface MissionButtonProps {
  children?: React.ReactNode;
  value?: string;
  className?: string;
  href?: string;
}

// Componente de Botão Personalizado
function MissionButton({
  children,
  value = "Get in touch",
  className = "",
  href = "/contact",
}: MissionButtonProps) {
  return (
    <Link href={href} className="inline-block mt-4 group">
      <div
        className={`group relative box-content pl-4 pr-2 py-2 -my-[1px] cursor-pointer text-background ${className}`}
      >
        {/* Conteúdo do Botão */}
        <div className="relative z-10 flex items-center gap-2">
          {children}
          <span className="font-poppins font-bold text-sm tracking-wide">
            {value}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right w-4 h-4 duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>

        {/* Camadas Decorativas do Fundo com Animação no Hover */}
        <div className="-z-10 absolute top-0 left-0 h-[80%] w-full bg-foreground/80 group-hover:translate-y-1 duration-300 border-t border-dashed border-white/20" />
        <div className="-z-10 absolute top-0.5 left-0.5 h-[80%] w-full bg-foreground/80 group-hover:translate-y-0.5 duration-300" />
        <div className="-z-10 absolute top-1.5 left-1.5 h-[80%] w-full bg-foreground/80 group-hover:-translate-y-0.5 duration-300" />
        <div className="-z-10 absolute top-2 left-2 h-[80%] w-full bg-foreground/80 group-hover:-translate-y-1 duration-300 border-b border-dashed border-white/20" />

        <div className="-z-10 group-hover:border-background border-transparent border-y border-dashed absolute top-1 left-1 h-[80%] w-full bg-foreground/80 group-hover:scale-x-106 group-hover:scale-y-125 group-hover:bg-[#91FFAE] group-hover:text-black duration-300" />
      </div>
    </Link>
  );
}

export default function OurMissionSection() {
  const t = useTranslations("mission");

  return (
    <section className="relative w-full py-12 md:py-28 overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-[15%] right-[15%] w-[40%] h-[50%] pointer-events-none select-none z-[1] rounded-full opacity-40 blur-3xl bg-gradient-to-tr from-[#59D279]/30 to-[#91FFAE]/10"
        aria-hidden="true"
      />

      {/* Conteúdo Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          
          {/* Coluna 1 — Título + Botão */}
          <div className="flex flex-col items-start gap-6 lg:w-[35%] shrink-0 pt-2 order-1">
            <h2
              className="font-heading text-white font-normal leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              <span className="anim-fade-up block">{t("title_prefix")}</span>
              <span className="anim-fade-up anim-d1 block md:pl-[0.8em] text-[#91FFAE]">
                {t("title_highlight")}
              </span>
            </h2>

            {/* Botão com a sua estrutura interna */}
            <MissionButton value={t("button")} href="/contact" />
          </div>

          {/* Coluna 2 — Card sem ClipPath (Rounded Padrão) */}
          <div className="relative w-full lg:w-[65%] order-2">
            <div className="relative rounded-2xl p-6 md:p-8 border border-[#91FFAE]/20 backdrop-blur-md bg-[rgba(49,66,45,0.25)] shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300">
              <div className="flex flex-col gap-4 text-white/80 font-poppins text-sm md:text-[15px] leading-relaxed text-justify">
                <p className="text-white font-semibold text-base md:text-lg border-b border-white/10 pb-3">
                  {t("heading")}
                </p>

                <p>{t("p1")}</p>
                <p>{t("p2")}</p>
                <p>{t("p3")}</p>
                <p>{t("p4")}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}