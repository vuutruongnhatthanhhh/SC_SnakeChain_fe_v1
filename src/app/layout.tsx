import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import config from "@/config";
import ZaloContact from "@/components/ZaloContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${config.title}`,
  description: `${config.description}`,
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Snake Chain",
      url: "https://snakechain.io.vn",
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col w-full`}
      >
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="flex-grow w-full">{children}</main>
        <ZaloContact />

        <Footer />
      </body>
    </html>
  );
}
