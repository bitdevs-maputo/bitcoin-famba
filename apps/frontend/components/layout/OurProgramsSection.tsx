"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function OurProgramsSection() {
  const t = useTranslations("programs");
  const programsData = t.raw("items") as Program[];
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : programsData.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < programsData.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      {/* Definindo o ClipPath Reutilizável com unidades de caixa delimitadora (0 a 1) */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <clipPath id="program-card-clip" clipPathUnits="objectBoundingBox">
            <path d="M 1 0.173 C 1 0.202 0.982 0.225 0.96 0.225 C 0.938 0.225 0.92 0.248 0.92 0.276 V 0.527 C 0.92 0.556 0.938 0.579 0.96 0.579 C 0.982 0.579 1 0.602 1 0.63 V 0.901 C 1 0.929 0.982 0.952 0.96 0.952 H 0.844 C 0.833 0.952 0.825 0.962 0.825 0.976 C 0.825 0.989 0.817 1 0.806 1 H 0.04 C 0.018 1 0 0.977 0 0.948 V 0.052 C 0 0.023 0.018 0 0.04 0 H 0.96 C 0.982 0 1 0.023 1 0.052 V 0.173 Z" />
          </clipPath>
        </defs>
      </svg>

      <section className="relative w-full py-16 md:py-24  overflow-hidden text-white">
        {/* Glow de fundo que acompanha os cards como na imagem */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[350px] pointer-events-none select-none z-0 rounded-full opacity-30 blur-[100px] bg-gradient-to-r from-[#59D279]/10 via-[#91FFAE]/30 to-[#59D279]/10"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          {/* Header com Título e Botões de Navegação do Carrossel */}
          <div className="flex flex-col items-center gap-6 mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight text-white">
              {t("title")}
            </h2>

            {/* Setas do Carrossel */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#91FFAE] hover:bg-[#91FFAE]/10 transition-all duration-300 active:scale-95"
                aria-label="Previous Program"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#91FFAE] hover:bg-[#91FFAE]/10 transition-all duration-300 active:scale-95"
                aria-label="Next Program"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Grid de Cards com Recorte do Clip-Path e Imagens de Fundo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {programsData.map((program, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={program.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative min-h-[420px] flex flex-col justify-end p-6 md:p-8 cursor-pointer transition-all duration-500
                    [clip-path:url(#program-card-clip)] [-webkit-clip-path:url(#program-card-clip)]
                    ${
                      isActive
                        ? "scale-105 z-20 shadow-[0_10px_30px_rgba(145,255,174,0.15)]"
                        : "opacity-60 hover:opacity-90 z-10 scale-100"
                    }`}
                >
                  {/* Imagem de Fundo do Card */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradiente Escuro sobre a Imagem para garantir legibilidade dos textos */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                  </div>

                  {/* Conteúdo sobre a imagem */}
                  <div className="relative z-10 flex flex-col gap-3">
                    <h3 className="font-heading text-xl md:text-2xl font-medium text-white group-hover:text-[#91FFAE] transition-colors duration-300">
                      {program.title}
                    </h3>

                    <p className="font-poppins text-xs md:text-sm text-white/70 line-clamp-4 leading-relaxed">
                      {program.description}
                    </p>

                    <Link
                      href={program.link}
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#91FFAE] hover:underline"
                    >
                      <span>{t("learn_more")}</span>
                      <span className="text-sm">→</span>
                    </Link>
                  </div>

                  {/* Borda Sutil Personalizada para o Formato Recortado */}
                  <div className="absolute inset-0 z-20 pointer-events-none border border-white/10 group-hover:border-[#91FFAE]/40 transition-colors duration-300 [clip-path:url(#program-card-clip)] [-webkit-clip-path:url(#program-card-clip)]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}