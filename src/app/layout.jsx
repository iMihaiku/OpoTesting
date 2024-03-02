import { Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/headers/Header'
import { SpeedInsights } from '@vercel/speed-insights/next'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'OpoTesting',
  description: 'App de examenes tipo test para opositores'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={manrope.className}>
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
