import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata: Metadata = {
  title: "IPL Data Analysis",
  description: "Explore insights from 2008-2026 IPL seasons with a clean, readable interface. Discover trends, team performance, player impact, and match patterns in the Indian Premier League dataset.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      
    >
      <body className="">{children}</body>
    </html>
  );
}
