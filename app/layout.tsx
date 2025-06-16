import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorEffect } from "@/components/cursor-effect"
import { LoadingScreen } from "@/components/loading-screen"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Copa Passa Bola - Revolução no Futebol Feminino",
  description: "Onde o talento feminino brilha, a paixão se encontra e os sonhos se tornam realidade. Junte-se à revolução do futebol feminino!",
  keywords: "futebol feminino, copa, torneio, mulheres no esporte, empoderamento",
  authors: [{ name: "Copa Passa Bola" }],
  generator: 'v0.dev',
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        <LoadingScreen />
        <CursorEffect />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
