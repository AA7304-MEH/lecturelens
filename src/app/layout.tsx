import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Brain, History, Hop as Home } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LectureLens - AI Lecture Summarizer",
  description: "Transform your lectures into structured notes with AI-powered summarization",
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
        <nav className="fixed top-0 w-full z-50 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl border-b border-white/10 transition-all duration-300 hover:shadow-3xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-3 text-white hover:text-purple-300 transition-all duration-300 group">
                <div className="relative">
                  <Brain className="w-9 h-9 group-hover:rotate-12 transition-transform duration-300 drop-shadow-lg" />
                  <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  LectureLens
                </span>
              </Link>
              <div className="flex items-center space-x-2">
                <Link href="/" className="flex items-center space-x-2 text-white hover:text-purple-300 transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/10 hover:scale-105 group">
                  <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="hidden sm:inline">Home</span>
                </Link>
                <Link href="/history" className="flex items-center space-x-2 text-white hover:text-blue-300 transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/10 hover:scale-105 group">
                  <History className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="hidden sm:inline">History</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
