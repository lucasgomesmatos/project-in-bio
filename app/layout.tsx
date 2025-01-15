import type { Metadata } from "next";
import "./globals.css";

import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Project In Bio"',
    default: 'Project In Bio',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${redHatDisplay.className} antialiased bg-background-primary h-screen text-content-body`}
      >
        {children}
      </body>
    </html>
  );
}
