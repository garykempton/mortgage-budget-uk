import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedTools from '@/components/RelatedTools'

export const metadata: Metadata = {
  title: 'How Much Deposit Do I Need to Buy a House in the UK?',
  description:
    'A clear guide to UK mortgage deposits — minimum amounts, how deposit size affects your rate, and practical tips to save faster.',
  openGraph: {
    title: 'How Much Deposit Do I Need to Buy a House in the UK?',
    description: 'Everything you need to know about saving for a UK mortgage deposit.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Deposit Do I Need to Buy a House in the UK?',
  description: 'A clear guide to UK mortgage deposits.',
  datePublished: '2026-05-14',
  author: { '@type': 'Organization', name: 'Mortgage Budget UK' },
  publisher: { '@type': 'Organization', name: 'Mortgage Budget UK' },
}

const relatedTools = [
  { title: 'Deposit Calculator', href: '/deposit-calculator' },
  { title: 'Mortgage Affordability Calculator', href: '/mortgage-affordability-calculator' },
  { title: 'Stamp Duty Calculator', href: '/stamp-duty-calculator' },
  { title: 'First-Time Buyer Guide', href: '/first-time-buyer-guide' },
]

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p className="text-xs text-gray-400">14 May 2026 &middot; 5 min read</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        How Much Deposit Do I Need to Buy a House in the UK?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The deposit is the single biggest upfront cost when buying a home. Here is exactly how much you need, how it
        affects your mortgage, and the fastest ways to save.
      </p>

      <div className="prose mt-8 max-w-none text-gray-700">
        <h2>Minimum Deposit: 5%</h2>
        <p>
          The absolute minimum deposit most UK lenders will accept is <strong>5% of the property price</strong>. On a
          &pound;250,000 home, that is &pound;12,500. However, 95% LTV mortgages come with higher interest rates and
          stricter lending criteria.
        </p>

        <h2>How Deposit Size Affects Your Rate</h2>
        <p>
          Mortgage rates are tiered by loan-to-value (LTV). A bigger deposit means a lower LTV, which unlocks better
          rates:
        </p>
        <table>
          <thead>
            <tr><th>Deposit</th><th>LTV</th><th>Typical rate impact</th></tr>
          </thead>
          <tbody>
            <tr><td>5%</td><td>95%</td><td>Highest rates, limited product choice</td></tr>
            <tr><td>10%</td><td>90%</td><td>Noticeably better rates, much wider choice</td></tr>
            <tr><td>15%</td><td>85%</td><td>Further improvement, often a significant drop</td></tr>
            <tr><td>20%</td><td>80%</td><td>Strong rates, most products available</td></tr>
            <tr><td>25%</td><td>75%</td><td>Excellent rates</td></tr>
            <tr><td>40%</td><td>60%</td><td>Best rates on the market</td></tr>
          </tbody>
        </table>
        <p>
          The biggest rate drops typically happen between 95% and 90% LTV, and again at 80% and 75%. Use our{' '}
          <Link href="/deposit-calculator">deposit calculator</Link> to see how different deposit sizes change your
          savings timeline.
        </p>

        <h2>Real Numbers: What You Need for Different Property Prices</h2>
        <table>
          <thead>
            <tr><th>Property price</th><th>5% deposit</th><th>10% deposit</th><th>15% deposit</th></tr>
          </thead>
          <tbody>
            <tr><td>&pound;150,000</td><td>&pound;7,500</td><td>&pound;15,000</td><td>&pound;22,500</td></tr>
            <tr><td>&pound;200,000</td><td>&pound;10,000</td><td>&pound;20,000</td><td>&pound;30,000</td></tr>
            <tr><td>&pound;250,000</td><td>&pound;12,500</td><td>&pound;25,000</td><td>&pound;37,500</td></tr>
            <tr><td>&pound;300,000</td><td>&pound;15,000</td><td>&pound;30,000</td><td>&pound;45,000</td></tr>
            <tr><td>&pound;400,000</td><td>&pound;20,000</td><td>&pound;40,000</td><td>&pound;60,000</td></tr>
          </tbody>
        </table>

        <h2>Do Not Forget the Other Costs</h2>
        <p>
          Your deposit is not the only upfront expense. Budget for:
        </p>
        <ul>
          <li><strong>Stamp duty</strong> — use our <Link href="/stamp-duty-calculator">stamp duty calculator</Link> to check (first-time buyers get relief).</li>
          <li><strong>Solicitor fees</strong> — typically &pound;1,000 to &pound;2,000.</li>
          <li><strong>Survey costs</strong> — &pound;250 to &pound;600 depending on the level.</li>
          <li><strong>Mortgage fees</strong> — arrangement fees can range from &pound;0 to &pound;2,000.</li>
          <li><strong>Moving costs</strong> — removals, new furniture, and immediate repairs.</li>
        </ul>
        <p>
          As a rough guide, add <strong>&pound;3,000 to &pound;5,000</strong> on top of your deposit for these
          additional costs.
        </p>

        <h2>6 Ways to Save for Your Deposit Faster</h2>
        <ol>
          <li>
            <strong>Open a Lifetime ISA</strong> — save up to &pound;4,000 per year and receive a &pound;1,000
            government bonus. Over 4 years, that is &pound;4,000 of free money.
          </li>
          <li>
            <strong>Automate your savings</strong> — set up a standing order on payday so the money moves before you can
            spend it.
          </li>
          <li>
            <strong>Cut your biggest expenses</strong> — rent, transport, and food are usually the top three. Even small
            reductions add up over 2-3 years.
          </li>
          <li>
            <strong>Bank your pay rises</strong> — if your salary increases, direct the extra amount straight to savings.
          </li>
          <li>
            <strong>Consider a side income</strong> — freelancing, selling unused items, or overtime can accelerate your
            timeline significantly.
          </li>
          <li>
            <strong>Look into family help</strong> — gifted deposits, guarantor mortgages, and family springboard
            accounts are all options. Some lenders accept gifted deposits from close family members.
          </li>
        </ol>

        <h2>How Long Will It Take?</h2>
        <p>
          That depends on how much you can save each month. Use our{' '}
          <Link href="/deposit-calculator">deposit calculator</Link> to model your exact situation — enter your target
          property price, deposit percentage, current savings, and monthly contribution to see a realistic timeline.
        </p>

        <h2>The Bottom Line</h2>
        <p>
          Aim for at least 10% if you can — the jump from 5% to 10% unlocks meaningfully better mortgage rates and can
          save you thousands over the life of your mortgage. But do not let the &ldquo;perfect&rdquo; deposit size stop
          you from getting on the ladder if 5% is what you have. Check what you can afford with our{' '}
          <Link href="/mortgage-affordability-calculator">mortgage affordability calculator</Link>.
        </p>
      </div>

      <RelatedTools tools={relatedTools} />

      <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs text-gray-500">
        <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute financial
        advice. Always speak to a qualified mortgage adviser before making financial decisions.
      </div>
    </article>
  )
}
