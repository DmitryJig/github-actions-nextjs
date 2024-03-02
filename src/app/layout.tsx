import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {TheHeader} from '@/components/TheHeader'
import { TheFooter } from "@/components/TheFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Сантехэлектро - магазин сантехники и электротоваров в Перми",
  description: "Продажа сантехники, электротоваров, крепежа, замков",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
        <TheHeader />
        <main className="container mx-auto break-before-auto">
        {children}
        </main>
        <TheFooter />
        </div>
        </body>
    </html>
  );
}
