import type { MetadataRoute } from 'next'

const BASE_URL = 'https://mortgagebudgetuk.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '/', priority: 1.0, changeFrequency: 'monthly' as const },
    { path: '/tools', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/mortgage-affordability-calculator', priority: 0.9, changeFrequency: 'yearly' as const },
    { path: '/mortgage-repayment-calculator', priority: 0.9, changeFrequency: 'yearly' as const },
    { path: '/deposit-calculator', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/stamp-duty-calculator', priority: 0.9, changeFrequency: 'yearly' as const },
    { path: '/rent-vs-buy-calculator', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/mortgage-overpayment-calculator', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/first-time-buyer-guide', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/mortgage-basics', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/about', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/contact', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
