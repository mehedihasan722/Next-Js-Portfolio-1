import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";
import React from "react";
import Header from "@/components/Header";
import TopLeftImage from "@/components/TopLeftImage";
import Nav from "@/components/Nav";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <TopLeftImage />
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  );
}
