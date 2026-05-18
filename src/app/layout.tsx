import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Mortgage Budget UK — Free UK Mortgage Calculators & Guides',
    template: '%s | Mortgage Budget UK',
  },
  description:
    'Free UK mortgage calculators to help you budget for your home. Calculate repayments, affordability, stamp duty, and more.',
  metadataBase: new URL('https://mortgagebudgetuk.co.uk'),
  openGraph: {
    siteName: 'Mortgage Budget UK',
    locale: 'en_GB',
    type: 'website',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Mortgage Budget UK',
  url: 'https://mortgagebudgetuk.co.uk',
  description: 'Free UK mortgage calculators and guides to help you budget for your home.',
  inLanguage: 'en-GB',
}

const organisationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mortgage Budget UK',
  url: 'https://mortgagebudgetuk.co.uk',
  logo: 'https://mortgagebudgetuk.co.uk/icon.png',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }} />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col bg-white`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
