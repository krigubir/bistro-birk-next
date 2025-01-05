import type { Metadata } from 'next'
import { NavHeader } from '@/components/nav-header/nav-header'
import { Ballet, Noto_Serif_Display } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const ballet = Ballet({ subsets: ['latin'] })
const forum = Noto_Serif_Display({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${forum.className} ${ballet.className}`}>
      <body className="w-vw h-[100%] bg-background antialiased">
        <NavHeader />
        {children}
      </body>
    </html>
  )
}
