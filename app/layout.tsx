import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React, {ReactNode} from "react";
import ThemeProvider from "@/context/Theme";
import {Toaster} from "@/components/ui/toaster";
import {auth} from "@/auth";
import {SessionProvider} from "next-auth/react";

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
  description: "The ultimate destination where bugs come to rest in peace! Dev Xperts is a vibrant, expert-driven forum designed to solve your development challenges with ease and speed. Whether you're wrestling with complex code issues, seeking advice on best practices, or looking to share insights, Dev Xperts is here to make problem-solving faster and more collaborative. Our community of seasoned developers and coding enthusiasts ensures you’re never alone on the journey to debug, refine, and perfect your projects.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

const RootLayout = async ({children}: {children: ReactNode}) => {
    const session = await auth()

      return (
        <html lang="en" suppressHydrationWarning>
        <SessionProvider session={session}>
          <body
            className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
          >
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

          <Toaster />
          </body>
        </SessionProvider>
        </html>
      );
}

export default RootLayout;