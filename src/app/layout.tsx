import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../styles/globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#fdfcfc" />

        <title>Serpentes do DF</title>
        <meta name="description" content="O projeto Serpentes do Distrito Federal é uma atividade de ciência cidadã, que tem como objetivo monitorar as Serpentes do DF através de registros da comunidade."/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
