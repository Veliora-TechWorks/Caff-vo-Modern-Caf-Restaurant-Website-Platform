import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LayoutContent from '@/components/LayoutContent'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Caffévo - Modern Café Digital Platform',
  description: 'Experience the finest coffee and cuisine. Order online or reserve your table today.',
  keywords: 'cafe, restaurant, coffee, food, online ordering, table reservation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutContent>{children}</LayoutContent>
        <Footer />
      </body>
    </html>
  )
}
