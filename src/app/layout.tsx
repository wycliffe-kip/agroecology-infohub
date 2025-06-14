// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageProvider from "./components/LanguageProvider";
import { ThemeProvider } from "next-themes";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agroecology InfoHub",
  description: "Platform for AE/EOA education and engagement",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationBar />
          <LanguageProvider>
            <main className="flex-grow">{children}</main>
          </LanguageProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
