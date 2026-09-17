import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import "./globals.css";
import NextThemeProvider from "@/providers/NextThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SULOG - Tech Blog",
  description: "A modern tech blog built with Next.js",
};

export const viewport: Viewport = {
  themeColor: "#1e293b",
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <NextThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <div className="absolute">{auth}</div>
        </NextThemeProvider>
      </body>
    </html>
  );
}
