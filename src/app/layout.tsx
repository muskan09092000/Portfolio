import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Muskan Aggarwal - Portfolio',
  description: 'Business Analyst and MS Business Analytics student passionate about leveraging data to drive impactful decisions',
  keywords: ['portfolio', 'business analyst', 'data science', 'analytics'],
  authors: [{ name: 'Muskan Aggarwal' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`min-h-screen font-sans antialiased`}>
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
} 