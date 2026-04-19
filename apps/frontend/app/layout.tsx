import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/navbar/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bitcoin Famba",
  description: "Bitcoin Famba is a grassroots Bitcoin education initiative in Maputo, Mozambique. Learn Bitcoin, join meetups, and build financial freedom.",
   keywords: [
    "Bitcoin Mozambique",
    "Bitcoin Maputo",
    "Bitcoin education Africa",
    "financial freedom Mozambique",
  ],
  openGraph: {
    title: "Bitcoin Famba",
    description: "Bitcoin education & circular economy in Mozambique",
    url: "https://bitcoinfamba.org",
    siteName: "Bitcoin Famba",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Famba",
    description: "Bitcoin education in Mozambique",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
        
      </body>
    </html>
  );
}
