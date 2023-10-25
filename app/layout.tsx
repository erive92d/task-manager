import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-gradient-to-br from-green-500 to-gray-600 h-screen text-white'>
   
      <body className={inter.className}>
      <Navigation/>
        {children}
        </body>
    </html>
  )
}
