import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

const inter = Inter({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Abdul Rafe - Full Stack Developer',
  description: 'Futuristic portfolio of Abdul Rafe, a full-stack web developer specializing in React, Next.js, and modern web technologies.',
  generator: 'v0.app',
  keywords: 'developer, portfolio, react, next.js, full-stack, web development',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
