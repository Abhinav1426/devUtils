
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/themeContext'
import ClientThemeWrapper from '@/context/clientThemeWrapper'
import NavBar from '@/components/navBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'devUtils',
  description: 'A collection of utilities for developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ClientThemeWrapper>
            <NavBar /> 
            {children}
          </ClientThemeWrapper>
        </ThemeProvider>
       
        </body>
    </html>
  )
}
