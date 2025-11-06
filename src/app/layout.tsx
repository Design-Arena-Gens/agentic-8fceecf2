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
  title: "Привет | Твое цифровое приветствие",
  description:
    "Одностраничное приветствие с интерактивными подсказками и идеями, созданное персональным ассистентом.",
  metadataBase: new URL("https://agentic-8fceecf2.vercel.app"),
  openGraph: {
    title: "Привет! Добро пожаловать",
    description:
      "Мини-приложение с теплыми приветствиями, подборкой ресурсов и интерактивными карточками.",
    url: "https://agentic-8fceecf2.vercel.app",
    siteName: "Привет",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Привет! Твое цифровое приветствие",
    description:
      "Мини-приложение с теплыми приветствиями, подборкой ресурсов и интерактивными карточками.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
