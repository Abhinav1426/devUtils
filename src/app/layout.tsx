
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/themeContext'
import ClientThemeWrapper from '@/context/clientThemeWrapper'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0 "></meta>
      <body className={inter.className}>
        <div className='w-full'>
        <ThemeProvider>
          <ClientThemeWrapper>
          <main className='flex min-h-screen flex-col'>
            <NavBar />
              {children}
            <Footer />
            </main>
          </ClientThemeWrapper>
        </ThemeProvider>
        </div>
        </body>
    </html>
  )
}
