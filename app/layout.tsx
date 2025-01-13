import type { Metadata } from "next";
import "./globals.css";


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
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
