import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedTools from '@/components/RelatedTools'
import AffiliateCTA from '@/components/AffiliateCTA'

export const metadata: Metadata = {
  title: 'Is It Worth Overpaying Your Mortgage in 2026?',
  description:
    'Should you overpay your mortgage or save the money? We break down when overpaying makes sense, when it does not, and how much you could save.',
  openGraph: {
    title: 'Is It Worth Overpaying Your Mortgage in 2026?',
    description: 'When mortgage overpayments make sense — and when they don\'t.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Is It Worth Overpaying Your Mortgage in 2026?',
  description: 'Should you overpay your mortgage or save the money?',
  datePublished: '2026-05-16',
  author: { '@type': 'Organization', name: 'Mortgage Budget UK' },
  publisher: { '@type': 'Organization', name: 'Mortgage Budget UK' },
}

const relatedTools = [
  { title: 'Mortgage Overpayment Calculator', href: '/mortgage-overpayment-calculator' },
  { title: 'Mortgage Repayment Calculator', href: '/mortgage-repayment-calculator' },
  { title: 'Mortgage Basics', href: '/mortgage-basics' },
]

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p className="text-xs text-gray-400">16 May 2026 &middot; 6 min read</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Is It Worth Overpaying Your Mortgage in 2026?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        With mortgage rates still elevated compared to a few years ago, overpaying your mortgage can be one of the best
        &ldquo;investments&rdquo; available to UK homeowners. But it is not always the right move. Here is how to decide.
      </p>

      <div className="prose mt-8 max-w-none text-gray-700">
        <h2>How Mortgage Overpayments Work</h2>
        <p>
          When you overpay, the extra money goes directly towards reducing your outstanding mortgage balance. Because you
          owe less, you are charged less interest in every subsequent month. The effect compounds over time — even small
          overpayments can save thousands over the life of a mortgage.
        </p>
        <p>
          For example, on a &pound;200,000 mortgage at 4.5% over 25 years, overpaying just &pound;200 per month could
          save you approximately <strong>&pound;30,000 in interest</strong> and clear your mortgage
          <strong> 6 years early</strong>. Try it yourself with our{' '}
          <Link href="/mortgage-overpayment-calculator">mortgage overpayment calculator</Link>.
        </p>

        <h2>When Overpaying Makes Sense</h2>
        <ul>
          <li><strong>Your mortgage rate is higher than your savings rate</strong> — if you are paying 4.5% on your mortgage but only earning 3% on savings (before tax), overpaying gives a better effective return.</li>
          <li><strong>You have an emergency fund</strong> — most advisers recommend keeping 3-6 months of expenses in accessible savings before directing extra money to your mortgage.</li>
          <li><strong>You have no higher-interest debts</strong> — clear credit cards (typically 20%+) and personal loans first. Those cost you far more than your mortgage.</li>
          <li><strong>You are within your lender&apos;s allowance</strong> — most fixed-rate mortgages allow up to 10% overpayment per year without early repayment charges.</li>
        </ul>

        <h2>When You Might Be Better Off Not Overpaying</h2>
        <ul>
          <li><strong>You have higher-interest debts</strong> — always prioritise these first.</li>
          <li><strong>You have not maximised your pension</strong> — employer pension contributions often come with matching and tax relief, which is hard to beat.</li>
          <li><strong>Your savings rate (after tax) beats your mortgage rate</strong> — in this case, keeping cash in savings could technically leave you better off, though this is rare with current rates.</li>
          <li><strong>You would exceed the 10% limit</strong> — overpaying beyond your lender&apos;s allowance can trigger early repayment charges, which are typically 1-5% of the amount overpaid.</li>
          <li><strong>You have no emergency fund</strong> — once overpayments are made, most lenders will not let you withdraw the money. Keep a safety net first.</li>
        </ul>

        <h2>A Simple Decision Framework</h2>
        <ol>
          <li>Do you have 3-6 months of expenses saved? If no &rarr; <strong>build your emergency fund first</strong>.</li>
          <li>Do you have any debts above your mortgage rate? If yes &rarr; <strong>pay those off first</strong>.</li>
          <li>Are you getting your full employer pension match? If no &rarr; <strong>increase pension contributions first</strong>.</li>
          <li>Is your mortgage rate higher than your after-tax savings rate? If yes &rarr; <strong>overpaying is likely a good move</strong>.</li>
        </ol>

        <h2>Regular Overpayments vs Lump Sums</h2>
        <p>
          Both work well. Regular monthly overpayments are easier to budget for and create a consistent habit. Lump sums
          — from a bonus, inheritance, or savings — can make a bigger immediate impact. Many homeowners do a mix of both.
        </p>

        <h2>How Much Could You Save?</h2>
        <p>
          The savings depend on your balance, rate, and how much you overpay. Use our{' '}
          <Link href="/mortgage-overpayment-calculator">mortgage overpayment calculator</Link> to see the exact figures
          for your situation. You might be surprised how much difference even &pound;100 per month makes.
        </p>

        <h2>Check Your Lender&apos;s Rules</h2>
        <p>
          Before overpaying, check your mortgage terms for:
        </p>
        <ul>
          <li>The annual overpayment limit (usually 10% of the balance)</li>
          <li>Whether overpayments reduce your term or your monthly payment</li>
          <li>Any early repayment charges that apply</li>
        </ul>
        <p>
          If you are on your lender&apos;s standard variable rate (SVR), there are usually no overpayment limits at all.
          You can also read more in our <Link href="/mortgage-basics">mortgage basics guide</Link>.
        </p>

        <h2>The Bottom Line</h2>
        <p>
          For most homeowners with a stable emergency fund and no high-interest debts, overpaying your mortgage is one of
          the safest and most effective ways to build wealth. It is a guaranteed &ldquo;return&rdquo; equal to your
          mortgage interest rate — with no risk.
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
