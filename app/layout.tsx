import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Passarella Diosa',
  description: 'Fashion, Creative Design, Visual Merchandising, Image Consultancy/Advising, Custom Fashion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#382a41]`}>{children}</body>
    </html>
  )
}

