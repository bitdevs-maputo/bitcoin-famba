"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Subscribe from "../subscribe/subscribe";

export default function Footer() {
  const t = useTranslations("footer");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full px-4 my-8 flex flex-col items-center justify-center">
      
        <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
            <defs>
                {/* MOBILE */}
                <clipPath
                id="footer-cutout-mobile"
                clipPathUnits="objectBoundingBox"
                >
                {/* coloque o path mobile aqui depois */}
                <path d="..." />
                </clipPath>

                {/* tablet */}
                <clipPath
                id="footer-cutout-tablet"
                clipPathUnits="objectBoundingBox"
                >
                {/* coloque o path mobile aqui depois */}
                <path d="..." />
                </clipPath>

                {/* DESKTOP */}
                <clipPath id="footer-cutout-desktop" clipPathUnits="objectBoundingBox">
                    <path d="M 0.926 0.072 C 0.926 0.096 0.933 0.115 0.942 0.115 H 0.984 C 0.993 0.115 1 0.134 1 0.158 V 0.832 C 1 0.856 0.992 0.875 0.983 0.875 H 0.889 C 0.88 0.875 0.872 0.895 0.872 0.919 V 0.957 C 0.872 0.976 0.863 1 0.855 1 H 0.058 C 0.049 1 0.042 0.98 0.042 0.957 V 0.842 C 0.042 0.818 0.035 0.799 0.026 0.799 H 0.016 C 0.007 0.799 0 0.779 0 0.756 V 0.143 C 0 0.127 0.005 0.115 0.01 0.115 C 0.016 0.115 0.02 0.102 0.02 0.087 V 0.043 C 0.02 0.019 0.027 0 0.036 0 H 0.428 C 0.437 0 0.445 0.019 0.445 0.043 V 0.046 C 0.445 0.07 0.453 0.089 0.462 0.089 H 0.538 C 0.547 0.089 0.555 0.07 0.555 0.046 V 0.043 C 0.555 0.019 0.562 0 0.572 0 H 0.91 C 0.919 0 0.926 0.019 0.926 0.043 V 0.072 Z" />
                </clipPath>
            </defs>
        </svg>

      {/* Wrapper Principal - Ocupa 100% da largura disponível */}
      <div className="relative w-full">
        
        {/* Insígnia do Topo (Powered By) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 py-1 px-2">
          <Image
            alt="Powered by Vinteum"
            loading="lazy"
            width={123}
            height={35}
            src="/footer/powered-by.svg"
            style={{ color: "transparent" }}
          />
        </div>

        {/* Container com o Clip-Path SVG Relativo */}
        <div
        className="
            relative
            w-full
            bg-[#1B1A1A]
            pb-16
            md:pb-0

            [clip-path:url(#footer-cutout-mobile)]
            [-webkit-clip-path:url(#footer-cutout-mobile)]

            min-[808px]:max-[1159px]:[clip-path:url(#footer-cutout-tablet)]
            min-[808px]:max-[1159px]:[-webkit-clip-path:url(#footer-cutout-tablet)]

            min-[1160px]:[clip-path:url(#footer-cutout-desktop)]
            min-[1160px]:[-webkit-clip-path:url(#footer-cutout-desktop)]
        "

        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 px-6 md:px-16 pt-16 md:pt-[clamp(48px,5.5vw,80px)] pb-10 md:pb-14">
            
            {/* Coluna 1 - Inscrição / Newsletter */}
            <div className="flex flex-col gap-5">
              <h3 className="font-sans font-bold text-white text-lg leading-snug">
                Fique por Dentro
              </h3>
              
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                <Link href="/" className="hover:text-white transition-colors">
                  <strong>Bitcoin Famba</strong>
                </Link>{" "}
                — {t("description")}{" "}
                <abbr
                  className="cursor-help underline decoration-dotted text-white/90"
                  title={`${t("meaning.maputo")}\n${t("meaning.matola")}\n${t("meaning.region")}\n${t("meaning.bitcoin_famba")}`}
                >
                  <strong>Maputo Matola</strong>
                </abbr>{" "}
                {t("description_plus")}
              </p>

              <Subscribe />

              <p className="font-sans text-center text-xs text-white/30">
                Ao assinar, você aceita a Política de Privacidade
              </p>
            </div>

            {/* Coluna 2 - Texto descritivo */}
            <div className="flex flex-col gap-4">
              <h3 className="font-sans font-bold text-white text-lg leading-snug">
                Sem Moedas Aqui
              </h3>
              <div className="flex flex-col gap-3">
                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  Deixa a gente ser direto: o Bitcoin Famba não guarda Bitcoin.
                </p>
                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  Não armazenamos sats, não temos cofre, e ninguém aqui fica exibindo as suas seed phrases.
                </p>
                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  O Bitcoin Famba é um espaço para quem constrói — devs, designers, educadores — não para investidores, baleias ou especuladores.
                </p>
                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  Se você está aqui para trabalhar com Bitcoin, está no lugar certo.<br />
                  Se você está aqui procurando moedas… está na casa errada.
                </p>
                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  Obrigado por ajudar a manter esse ambiente seguro, focado e sem enrolação.
                </p>
              </div>
            </div>

            {/* Coluna 3 - Contato e Botão Voltar ao Topo */}
            <div className="flex flex-col gap-4">
              <h3 className="font-sans font-bold text-white text-lg leading-snug">
                Contato Rápido
              </h3>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                Maputo & Matola — Moçambique
              </p>
              <a
                href="mailto:contato@bitcoinfamba.org"
                className="font-sans text-sm text-[#ff700a] hover:text-[#ff700a]/80 transition-colors"
              >
                contato@bitcoinfamba.org
              </a>
                          <div className="flex flex-col gap-4">
              <h3 className="font-sans font-bold text-white text-lg leading-snug">
                Acesso Rápido
              </h3>
              <nav aria-label="Acesso rápido" className="flex flex-col gap-3">
                <Link href="/about" className="font-sans text-sm text-white/60 hover:text-[#ff700a] transition-colors">
                  About
                </Link>
                <Link href="/blog" className="font-sans text-sm text-white/60 hover:text-[#ff700a] transition-colors">
                  Blog
                </Link>
                <Link href="/events" className="font-sans text-sm text-white/60 hover:text-[#ff700a] transition-colors">
                  Events
                </Link>
                <Link href="/donate" className="font-sans text-sm text-white/60 hover:text-[#ff700a] transition-colors">
                  Donate
                </Link>
              </nav>
            </div>

              <div className="flex justify-end mt-auto pt-6">
                <button
                  type="button"
                  onClick={scrollToTop}
                  aria-label="Scroll to top"
                  className="flex items-center justify-center flex-shrink-0 w-[43px] h-[63px] rounded-[100px] bg-[linear-gradient(to_top_right,#25A273_0%,#FFAA00_79%)] hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 16V4M4 10l6-6 6 6"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Direitos autorais */}
          <div className="py-5 mb-6 px-6 md:px-12 text-center">
            <p className="font-sans text-xs text-white/30">
              ©{new Date().getFullYear()} Bitcoin Famba. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Ícones de redes sociais no recorte inferior direito */}
        <div className="flex absolute gap-1  items-center bottom-10 right-1 lg:right-1 z-20">
          <a
            href="https://discord.gg/vinteum"
            aria-label="Discord"
            target="_blank"
            rel="noreferrer"
            className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-[#1B1A1A] hover:bg-[#282828] border border-white/10 transition-colors"
          >
            <Image
              alt="Discord"
              loading="lazy"
              width={24}
              height={24}
              src="/icons/discord.svg"
              style={{ color: "transparent" }}
            />
          </a>
          <a
            href="https://njump.me"
            aria-label="Nostr"
            target="_blank"
            rel="noreferrer"
            className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-[#1B1A1A] hover:bg-[#282828] border border-white/10 transition-colors"
          >
            <Image
              alt="Nostr"
              loading="lazy"
              width={24}
              height={24}
              src="/icons/nostr.svg"
              style={{ color: "transparent" }}
            />
          </a>
          <a
            href="https://x.com"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
            className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-[#1B1A1A] hover:bg-[#282828] border border-white/10 transition-colors"
          >
            <Image
              alt="Twitter"
              loading="lazy"
              width={24}
              height={24}
              src="/icons/twitter.svg"
              style={{ color: "transparent" }}
            />
          </a>
        </div>

      </div>
    </footer>
  );
}