import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Portfolio Franco Armando",
  description: "Portfolio Franco Armando Next js",
  icons: {
    icon: "/maletin.png",
    apple: "/maletin.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
