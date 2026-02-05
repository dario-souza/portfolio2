import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dario Souza - Desenvolvedor Frontend",
  description: "Portfolio profissional de Dario Souza, desenvolvedor frontend especializado em React, Next.js, TypeScript e tecnologias modernas.",
  keywords: ["desenvolvedor frontend", "react", "nextjs", "typescript", "portfolio", "web development"],
  authors: [{ name: "Dario Souza" }],
  openGraph: {
    title: "Dario Souza - Desenvolvedor Frontend",
    description: "Portfolio profissional de Dario Souza, desenvolvedor frontend especializado em React, Next.js, TypeScript e tecnologias modernas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
