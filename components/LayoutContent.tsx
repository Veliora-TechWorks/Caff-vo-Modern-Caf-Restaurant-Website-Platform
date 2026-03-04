'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <>
      {!isHomePage && <Navbar />}
      <main>{children}</main>
    </>
  )
}
