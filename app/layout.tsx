import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PARA VIDA TODA | Soluções em Tratamento de Água para Empresas',
  description:
    'Projetamos, instalamos e realizamos a manutenção de sistemas de tratamento de água, além de prestar Responsabilidade Técnica para indústrias, condomínios, hospitais, hotéis e laboratórios.',
  keywords: [
    'tratamento de água',
    'responsabilidade técnica',
    'ETA',
    'estação de tratamento de água',
    'manutenção de sistemas de água',
    'projetos de tratamento de água',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'PARA VIDA TODA | Soluções em Tratamento de Água',
    description:
      'Segurança, eficiência e conformidade técnica em tratamento de água para empresas.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B5FA5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`light ${inter.variable} ${poppins.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
