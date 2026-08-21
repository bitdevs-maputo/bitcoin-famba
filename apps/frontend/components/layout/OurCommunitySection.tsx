"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface CommunityItem {
  id: string;
  name: string;
  location: string;
  description: string;
  logo: string;
  image: string;
}

export default function OurCommunitySection() {
  const t = useTranslations("community");
  const communityData = t.raw("items") as CommunityItem[];
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCommunity = communityData[activeIndex] || communityData[0];

  return (
    <>
      {/* 
        SVG Defs: ClipPath Responsivo Proporcional (0 a 1) 
        Convertido a partir do Path Pixel da Casa21 para funcionar em telas de qualquer tamanho
      */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <clipPath id="community-card-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.818 0.026 C 0.818 0.04 0.827 0.052 0.838 0.052 H 0.967 C 0.985 0.052 1 0.072 1 0.096 V 0.735 C 1 0.749 0.991 0.761 0.98 0.761 C 0.969 0.761 0.96 0.773 0.96 0.787 V 0.957 C 0.96 0.981 0.945 1 0.927 1 H 0.127 C 0.116 1 0.107 0.988 0.107 0.974 C 0.107 0.96 0.098 0.948 0.087 0.948 H 0.033 C 0.015 0.948 0 0.928 0 0.904 V 0.737 C 0 0.723 0.009 0.711 0.02 0.711 C 0.031 0.711 0.04 0.699 0.04 0.685 V 0.502 C 0.04 0.488 0.031 0.476 0.02 0.476 C 0.009 0.476 0 0.464 0 0.45 V 0.043 C 0 0.019 0.015 0 0.033 0 H 0.797 C 0.808 0 0.818 0.012 0.818 0.026 Z" />
          </clipPath>
        </defs>
      </svg>

      <section className="relative w-full py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20">
          
          {/* Header da Seção */}
          <div className="flex flex-col gap-3 mb-10 max-w-2xl">
            <h2 className="font-heading text-3xl md:text-5xl font-medium tracking-tight text-white">
              {t("title")}
            </h2>
            <p className="font-sans text-white/70 text-base md:text-lg">
              {t("subtitle")}
            </p>
          </div>

          {/* Navegação entre as Comunidades */}
          <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {communityData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-5 py-2.5 rounded-full text-sm font-poppins transition-all duration-300 whitespace-nowrap border ${
                  activeIndex === idx
                    ? "bg-[#91FFAE] text-black border-[#91FFAE] font-semibold"
                    : "bg-[#030303] text-white/70 border-white/10 hover:border-white/30"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Card com a Estrutura idêntica ao HTML da Casa21 */}
          <div className="relative z-10">
            <div className="rounded-2xl bg-[#030303] flex flex-col md:flex-row overflow-hidden md:h-[588px] border border-white/5 shadow-2xl">
              
              {/* Lado Esquerdo: Conteúdo e Texto */}
              <div className="flex flex-col justify-center gap-8 p-8 md:p-12 md:w-[42%]">
                <img
                  src={activeCommunity.logo}
                  alt={activeCommunity.name}
                  className="w-[100px] md:w-[193px] h-auto"
                />
                
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#91FFAE] block mb-2">
                    {activeCommunity.location}
                  </span>
                  
                  <h3
                    className="font-heading"
                    style={{
                      fontWeight: 500,
                      fontSize: "clamp(20px, 1.94vw, 28px)",
                      color: "#FFFFFF",
                      lineHeight: 1.2,
                    }}
                  >
                    {activeCommunity.name}
                  </h3>

                  <p
                    className="font-sans mt-3"
                    style={{
                      fontWeight: 400,
                      fontSize: "clamp(14px, 1.11vw, 16px)",
                      color: "#F8F8F8",
                      lineHeight: 1.65,
                    }}
                  >
                    {activeCommunity.description}
                  </p>
                </div>
              </div>

              {/* Lado Direito: Container da Imagem com o Clip-Path Recortado */}
              <div className="flex-1 p-3 md:p-[50px] flex items-center justify-center">
                <div
                  className="member-card-image relative w-full md:h-full transition-all duration-500
                             [clip-path:url(#community-card-clip)] [-webkit-clip-path:url(#community-card-clip)]"
                  style={{
                    aspectRatio: "600 / 460",
                    borderRadius: "0px",
                    overflow: "visible",
                  }}
                >
                  <Image
                    src={activeCommunity.image}
                    alt={activeCommunity.name}
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}