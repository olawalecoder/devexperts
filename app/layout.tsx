import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {SessionProvider} from "next-auth/react";
import React, {ReactNode} from "react";

import {auth} from "@/auth";
import {Toaster} from "@/components/ui/toaster";
import ThemeProvider from "@/context/Theme";

const inter = localFont({
  src: './fonts/InterVF.ttf',
  weight: '100 900',
  style: 'normal',
  variable: '--font-inter'
})

const spaceGrotesk = localFont({
    src: "./fonts/SpaceGroteskVF.ttf",
    variable: "--font-space-grotesk",
    weight: "300 700",
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
        <head>
          <link rel="stylesheet"
                type='text/css'
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"/>
          <title>DevXperts</title>

        </head>
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