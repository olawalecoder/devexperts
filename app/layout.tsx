import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";

const inter = localFont({
  src: "./fonts/InterVf.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});


export const metadata: Metadata = {
  title: "Dev Xperts",
  description: "Where bugs come to rest in peace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.variable}} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
