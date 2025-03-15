import type React from "react"
import "@/app/globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mi Portfolio Personal",
  description: "Portfolio personal con proyectos, habilidades y contacto",
  icons: {
    icon: "/maletin.png",
    apple: "/maletin.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  )
}
