// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/auth-context";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Providers } from "@/components/providers";

import { Suspense } from "react";
import Loader from "@/components/Loader";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "based on your role",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>My Portfolio</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-950 transition-colors duration-500`}
      >
                      <Suspense fallback={<Loader />}>
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            {children}
            <WhatsAppChat />
            <Footer />
          </AuthProvider>
        </Providers>
        </Suspense>
      </body>
    </html>
  );
}
