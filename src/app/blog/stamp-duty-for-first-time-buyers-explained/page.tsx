import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedTools from '@/components/RelatedTools'
import AffiliateCTA from '@/components/AffiliateCTA'
import { TAX_YEAR } from '@/config/ukRates'

export const metadata: Metadata = {
  title: 'Stamp Duty for First-Time Buyers Explained (2025-26)',
  description:
    'Everything first-time buyers need to know about stamp duty relief in England and Northern Ireland — thresholds, savings, and worked examples.',
  openGraph: {
    title: 'Stamp Duty for First-Time Buyers Explained',
    description: 'How stamp duty relief works for UK first-time buyers, with worked examples.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Stamp Duty for First-Time Buyers Explained (2025-26)',
  description: 'Everything first-time buyers need to know about stamp duty relief.',
  datePublished: '2026-05-10',
  author: { '@type': 'Organization', name: 'Mortgage Budget UK' },
  publisher: { '@type': 'Organization', name: 'Mortgage Budget UK' },
}

const relatedTools = [
  { title: 'Stamp Duty Calculator', href: '/stamp-duty-calculator' },
  { title: 'Deposit Calculator', href: '/deposit-calculator' },
  { title: 'Mortgage Affordability Calculator', href: '/mortgage-affordability-calculator' },
  { title: 'First-Time Buyer Guide', href: '/first-time-buyer-guide' },
]

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p className="text-xs text-gray-400">10 May 2026 &middot; 5 min read</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Stamp Duty for First-Time Buyers Explained ({TAX_YEAR})
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        First-time buyers in England and Northern Ireland benefit from stamp duty relief that can save you thousands of
        pounds. Here is exactly how it works, with worked examples.
      </p>

      <div className="prose mt-8 max-w-none text-gray-700">
        <h2>What Is Stamp Duty?</h2>
        <p>
          Stamp Duty Land Tax (SDLT) is a tax you pay to HMRC when you buy a property in England or Northern Ireland.
          Scotland has its own equivalent (LBTT) and Wales has LTT — both with different rates and thresholds.
        </p>
        <p>
          SDLT is calculated in bands, similar to income tax. You only pay the rate on the portion of the price within
          each band, not on the whole amount.
        </p>

        <h2>First-Time Buyer Relief</h2>
        <p>
          As a first-time buyer, you benefit from a higher nil-rate threshold:
        </p>
        <ul>
          <li><strong>No stamp duty</strong> on the first &pound;300,000.</li>
          <li><strong>5%</strong> on the portion between &pound;300,001 and &pound;500,000.</li>
        </ul>
        <p>
          This relief <strong>only applies if the property costs &pound;500,000 or less</strong>. If it costs more, you
          pay standard rates on the entire amount — the relief is lost completely.
        </p>

        <h2>Worked Examples</h2>

        <h3>Example 1: &pound;250,000 property</h3>
        <p>The entire price falls within the &pound;300,000 nil-rate band.</p>
        <ul>
          <li>First-time buyer SDLT: <strong>&pound;0</strong></li>
          <li>Standard buyer SDLT: &pound;2,500</li>
          <li>Saving: <strong>&pound;2,500</strong></li>
        </ul>

        <h3>Example 2: &pound;350,000 property</h3>
        <ul>
          <li>First &pound;300,000: &pound;0</li>
          <li>Next &pound;50,000 at 5%: &pound;2,500</li>
          <li>First-time buyer SDLT: <strong>&pound;2,500</strong></li>
          <li>Standard buyer SDLT: &pound;5,000</li>
          <li>Saving: <strong>&pound;2,500</strong></li>
        </ul>

        <h3>Example 3: &pound;450,000 property</h3>
        <ul>
          <li>First &pound;300,000: &pound;0</li>
          <li>Next &pound;150,000 at 5%: &pound;7,500</li>
          <li>First-time buyer SDLT: <strong>&pound;7,500</strong></li>
          <li>Standard buyer SDLT: &pound;12,500</li>
          <li>Saving: <strong>&pound;5,000</strong></li>
        </ul>

        <h3>Example 4: &pound;500,001 property</h3>
        <p>
          First-time buyer relief <strong>does not apply</strong>. You pay standard SDLT rates on the full amount.
          This is an important cliff edge to be aware of.
        </p>

        <p>
          Use our <Link href="/stamp-duty-calculator">stamp duty calculator</Link> to check the exact amount for any
          property price — just select &ldquo;First-time buyer&rdquo; as your buyer type.
        </p>

        <h2>Who Qualifies as a First-Time Buyer?</h2>
        <p>
          HMRC defines a first-time buyer as someone who has <strong>never owned a residential property</strong>
          anywhere in the world. This includes:
        </p>
        <ul>
          <li>Freehold property</li>
          <li>Leasehold property</li>
          <li>An inherited property (even if you sold it)</li>
          <li>Property owned abroad</li>
        </ul>
        <p>
          For joint purchases, <strong>both buyers</strong> must be first-time buyers for the relief to apply. If one
          partner has owned property before, you will pay standard rates.
        </p>

        <h2>When Do You Pay?</h2>
        <p>
          Stamp duty must be paid within <strong>14 days of completion</strong>. Your solicitor or conveyancer handles
          this as part of the buying process — you do not need to pay HMRC directly.
        </p>

        <h2>Can You Avoid Stamp Duty?</h2>
        <p>
          Beyond first-time buyer relief, there is no legal way to avoid stamp duty. Be cautious of any scheme that
          claims otherwise. However, you can reduce the amount by:
        </p>
        <ul>
          <li>Keeping the purchase price at or below &pound;300,000 (if you are a first-time buyer) to pay zero.</li>
          <li>Negotiating a lower purchase price with the seller.</li>
          <li>Buying in Scotland or Wales where different (sometimes lower) rates apply.</li>
        </ul>

        <h2>Budget for It</h2>
        <p>
          Stamp duty is payable on top of your deposit, so make sure you factor it into your total purchase budget. Use
          our <Link href="/deposit-calculator">deposit calculator</Link> alongside the{' '}
          <Link href="/stamp-duty-calculator">stamp duty calculator</Link> to get a complete picture of your upfront
          costs. For the full buying process, read our{' '}
          <Link href="/first-time-buyer-guide">first-time buyer guide</Link>.
        </p>

        <h2>The Bottom Line</h2>
        <p>
          First-time buyer stamp duty relief can save you up to &pound;6,250 on properties costing up to &pound;500,000.
          Make sure both you and any joint buyer qualify, and watch out for the &pound;500,000 cliff edge. Check your
          exact figure with our <Link href="/stamp-duty-calculator">stamp duty calculator</Link>.
        </p>
      </div>

      <AffiliateCTA variant="blog" />

      <RelatedTools tools={relatedTools} />

      <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs text-gray-500">
        <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute financial
        advice. SDLT rates and thresholds may change — always verify with HMRC or a qualified professional.
      </div>
    </article>
  )
}
