import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedTools from '@/components/RelatedTools'
import AffiliateCTA from '@/components/AffiliateCTA'

export const metadata: Metadata = {
  title: 'Fixed vs Variable Rate Mortgage — Which Should You Choose?',
  description:
    'Understand the key differences between fixed, tracker, and variable rate mortgages in the UK, and which type suits your situation.',
  openGraph: {
    title: 'Fixed vs Variable Rate Mortgage — Which Should You Choose?',
    description: 'A plain-English comparison of UK mortgage rate types.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Fixed vs Variable Rate Mortgage — Which Should You Choose?',
  description: 'Understand the key differences between fixed, tracker, and variable rate mortgages in the UK.',
  datePublished: '2026-05-12',
  author: { '@type': 'Organization', name: 'Mortgage Budget UK' },
  publisher: { '@type': 'Organization', name: 'Mortgage Budget UK' },
}

const relatedTools = [
  { title: 'Mortgage Repayment Calculator', href: '/mortgage-repayment-calculator' },
  { title: 'Mortgage Affordability Calculator', href: '/mortgage-affordability-calculator' },
  { title: 'Mortgage Basics', href: '/mortgage-basics' },
]

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p className="text-xs text-gray-400">12 May 2026 &middot; 6 min read</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Fixed vs Variable Rate Mortgage &mdash; Which Should You Choose?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Choosing between a fixed and variable rate is one of the most important decisions when taking out a mortgage. Here
        is a straightforward comparison to help you decide.
      </p>

      <div className="prose mt-8 max-w-none text-gray-700">
        <h2>Fixed Rate Mortgages</h2>
        <p>
          A fixed rate mortgage locks your interest rate for a set period — most commonly <strong>2 or 5 years</strong>,
          though 7- and 10-year fixes are also available. During this period, your monthly payment stays exactly the
          same, regardless of what happens to the Bank of England base rate.
        </p>
        <h3>Pros</h3>
        <ul>
          <li>Certainty — you know exactly what you will pay each month.</li>
          <li>Protection against rate rises — if the base rate goes up, your payments stay the same.</li>
          <li>Easier to budget — ideal for first-time buyers or those on tight budgets.</li>
        </ul>
        <h3>Cons</h3>
        <ul>
          <li>You will not benefit if rates fall during your fix.</li>
          <li>Early repayment charges (ERCs) apply if you want to leave the deal early — typically 1-5% of the loan.</li>
          <li>Fixed rates are sometimes slightly higher than initial variable rates.</li>
        </ul>

        <h2>Variable Rate Mortgages</h2>
        <p>
          There are several types of variable rate mortgage:
        </p>

        <h3>Tracker Mortgages</h3>
        <p>
          A tracker follows the Bank of England base rate plus a fixed margin. For example, &ldquo;base rate +
          0.75%&rdquo; means if the base rate is 4%, you pay 4.75%. Your payments move up or down automatically when
          the base rate changes.
        </p>

        <h3>Standard Variable Rate (SVR)</h3>
        <p>
          The SVR is the lender&apos;s default rate. It is usually higher than fixed or tracker deals and can change at
          any time at the lender&apos;s discretion. You typically move onto the SVR when your fixed or introductory deal
          ends — which is why remortgaging at that point is almost always worth doing.
        </p>

        <h3>Discount Rate</h3>
        <p>
          A discount mortgage offers a set percentage off the lender&apos;s SVR for a period. For example, &ldquo;SVR
          minus 1.5%&rdquo; for 2 years. The discount is fixed, but because the SVR itself can change, your payments
          are not guaranteed.
        </p>

        <h3>Variable Rate Pros</h3>
        <ul>
          <li>Often cheaper initially than fixed rates.</li>
          <li>You benefit immediately if rates fall.</li>
          <li>Tracker mortgages are transparent — tied to the base rate, not the lender&apos;s discretion.</li>
        </ul>
        <h3>Variable Rate Cons</h3>
        <ul>
          <li>Your payments can increase, sometimes significantly.</li>
          <li>Harder to budget when your outgoings can change.</li>
          <li>SVR rates are almost always poor value — avoid staying on one.</li>
        </ul>

        <h2>2-Year Fix vs 5-Year Fix</h2>
        <table>
          <thead>
            <tr><th></th><th>2-year fix</th><th>5-year fix</th></tr>
          </thead>
          <tbody>
            <tr><td>Rate</td><td>Usually slightly lower</td><td>Usually slightly higher</td></tr>
            <tr><td>Flexibility</td><td>You can switch sooner</td><td>Locked in for longer</td></tr>
            <tr><td>Certainty</td><td>2 years of stable payments</td><td>5 years of stable payments</td></tr>
            <tr><td>Fees</td><td>Pay arrangement fees more often (every 2 years)</td><td>Fees less frequent</td></tr>
            <tr><td>Best for</td><td>Those who may move or remortgage soon</td><td>Those who want long-term stability</td></tr>
          </tbody>
        </table>

        <h2>Which Should You Choose?</h2>
        <p>Choose a <strong>fixed rate</strong> if:</p>
        <ul>
          <li>You want certainty and easy budgeting.</li>
          <li>You think interest rates might rise.</li>
          <li>You are a first-time buyer and want predictable costs while you settle in.</li>
        </ul>
        <p>Choose a <strong>variable/tracker rate</strong> if:</p>
        <ul>
          <li>You think rates might fall and you want to benefit.</li>
          <li>You plan to sell or remortgage soon and want to avoid ERCs.</li>
          <li>You can comfortably afford higher payments if rates rise.</li>
        </ul>

        <h2>Model Your Options</h2>
        <p>
          Use our <Link href="/mortgage-repayment-calculator">mortgage repayment calculator</Link> to compare monthly
          payments at different interest rates. Try your current rate, a rate 1% higher, and a rate 1% lower to see how
          your payments would change. For a deeper understanding, read our{' '}
          <Link href="/mortgage-basics">mortgage basics guide</Link>.
        </p>

        <h2>The Bottom Line</h2>
        <p>
          There is no universally &ldquo;right&rdquo; answer. A fixed rate offers peace of mind; a variable rate offers
          potential savings but with uncertainty. Most UK borrowers choose fixed rates — and for good reason. If in
          doubt, a 5-year fix gives you a solid window of certainty while you focus on enjoying your home.
        </p>
      </div>

      <AffiliateCTA variant="blog" />

      <RelatedTools tools={relatedTools} />

      <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs text-gray-500">
        <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute financial
        advice. Always speak to a qualified mortgage adviser before making financial decisions.
      </div>
    </article>
  )
}
