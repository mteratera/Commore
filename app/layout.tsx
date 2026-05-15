import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Commore — 木漏れ日のような、ふたりの時間。",
  description: "2人だけの静寂を、見つける。完全個室サウナのキュレーション。",
  openGraph: {
    title: "Commore — 木漏れ日のような、ふたりの時間。",
    description: "2人だけの静寂を、見つける。",
    type: "website",
    locale: "ja_JP",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Noto+Sans+JP:wght@300;400;500&family=Noto+Serif+JP:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
