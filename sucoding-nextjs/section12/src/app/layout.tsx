import React from "react";
import type { Metadata } from "next";
import Header from "@/components/main/Header";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Wave - 영화 스트리밍",
  description: "최신 영화와 인기 영화를 찾아보세요",
  generator: "수코딩",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
