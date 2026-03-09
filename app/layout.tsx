import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Abdul Rafe - Full Stack Developer',
  description: 'Futuristic portfolio of Abdul Rafe, a full-stack web developer specializing in React, Next.js, and modern web technologies.',
  generator: 'v0.app',
  keywords: 'developer, portfolio, react, next.js, full-stack, web development',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
