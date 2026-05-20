import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedTools from '@/components/RelatedTools'
import AffiliateCTA from '@/components/AffiliateCTA'

export const metadata: Metadata = {
  title: 'How Much Can I Borrow on a £30k Salary?',
  description:
    'Find out how much mortgage you could get on a £30,000 salary in the UK, what affects your borrowing power, and how to maximise your budget.',
  openGraph: {
    title: 'How Much Can I Borrow on a £30k Salary?',
    description: 'UK mortgage borrowing estimates for a £30,000 salary — with worked examples.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Can I Borrow on a £30k Salary?',
  description: 'Find out how much mortgage you could get on a £30,000 salary in the UK.',
  datePublished: '2026-05-18',
  author: { '@type': 'Organization', name: 'Mortgage Budget UK' },
  publisher: { '@type': 'Organization', name: 'Mortgage Budget UK' },
}

const relatedTools = [
  { title: 'Mortgage Affordability Calculator', href: '/mortgage-affordability-calculator' },
  { title: 'Mortgage Repayment Calculator', href: '/mortgage-repayment-calculator' },
  { title: 'Deposit Calculator', href: '/deposit-calculator' },
]

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p className="text-xs text-gray-400">18 May 2026 &middot; 5 min read</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        How Much Can I Borrow on a &pound;30k Salary?
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        If you earn &pound;30,000 a year, you are likely wondering what size mortgage a lender would actually offer you.
        The short answer: <strong>between &pound;120,000 and &pound;150,000</strong> for a single applicant, depending on the lender and your circumstances.
      </p>

      <div className="prose mt-8 max-w-none text-gray-700">
        <h2>The Income Multiple Rule</h2>
        <p>
          Most UK lenders calculate your maximum mortgage as a multiple of your gross annual salary. The standard range
          is 4 to 4.5 times income:
        </p>
        <table>
          <thead>
            <tr><th>Multiple</th><th>Max mortgage on &pound;30k</th></tr>
          </thead>
          <tbody>
            <tr><td>3.5x (conservative)</td><td>&pound;105,000</td></tr>
            <tr><td>4x (standard)</td><td>&pound;120,000</td></tr>
            <tr><td>4.5x (typical max)</td><td>&pound;135,000</td></tr>
            <tr><td>5x (specialist)</td><td>&pound;150,000</td></tr>
          </tbody>
        </table>
        <p>
          Try our <Link href="/mortgage-affordability-calculator">mortgage affordability calculator</Link> to get a
          personalised estimate based on your exact income and deposit.
        </p>

        <h2>What Could You Actually Buy?</h2>
        <p>
          Your maximum property price equals your maximum mortgage plus your deposit. For example, if a lender offers
          4.5x your &pound;30k salary (&pound;135,000) and you have a &pound;15,000 deposit, you could afford a property
          worth up to <strong>&pound;150,000</strong>.
        </p>
        <p>
          That is enough for a flat or starter home in many parts of the UK outside London and the South East. Use our{' '}
          <Link href="/deposit-calculator">deposit calculator</Link> to see how growing your deposit changes the picture.
        </p>

        <h2>Joint Applications Boost Your Borrowing</h2>
        <p>
          If you are buying with a partner, both incomes are added together before the multiple is applied. For example,
          two people each earning &pound;30,000 could borrow up to <strong>&pound;270,000</strong> at 4.5x — opening up
          a much wider range of properties.
        </p>

        <h2>What Else Affects Your Borrowing Power?</h2>
        <p>
          The income multiple is just the starting point. Lenders also assess:
        </p>
        <ul>
          <li><strong>Existing debts</strong> — credit cards, car finance, and student loans all reduce what you can borrow.</li>
          <li><strong>Monthly outgoings</strong> — childcare, subscriptions, and regular committed spending are considered.</li>
          <li><strong>Credit score</strong> — a poor credit history may limit you to lower multiples or specialist lenders.</li>
          <li><strong>Employment type</strong> — permanent employees are viewed more favourably; contractors and self-employed borrowers may need extra documentation.</li>
          <li><strong>Deposit size</strong> — a larger deposit (lower LTV) can unlock better rates and higher multiples from some lenders.</li>
        </ul>

        <h2>How to Maximise What You Can Borrow</h2>
        <ol>
          <li><strong>Pay off debts</strong> — clearing credit cards and loans before applying frees up borrowing capacity.</li>
          <li><strong>Save a bigger deposit</strong> — moving from 5% to 10% deposit can improve your options significantly.</li>
          <li><strong>Check your credit report</strong> — fix any errors and make sure you are on the electoral roll.</li>
          <li><strong>Reduce regular outgoings</strong> — cancel unused subscriptions and avoid new credit in the months before applying.</li>
          <li><strong>Consider a joint mortgage</strong> — adding a partner or family member increases your combined income.</li>
          <li><strong>Use a mortgage broker</strong> — brokers have access to deals not available directly and can find lenders offering higher multiples for your profile.</li>
        </ol>

        <h2>What Would Your Monthly Payments Be?</h2>
        <p>
          On a &pound;120,000 mortgage at 4.5% over 25 years, your monthly repayment would be approximately
          <strong> &pound;667</strong>. At &pound;135,000, it rises to about <strong>&pound;750</strong>. Use our{' '}
          <Link href="/mortgage-repayment-calculator">mortgage repayment calculator</Link> to model different scenarios
          with your own figures.
        </p>

        <h2>The Bottom Line</h2>
        <p>
          On a &pound;30,000 salary, expect to borrow between &pound;120,000 and &pound;150,000 as a single applicant.
          The exact amount depends on your outgoings, credit history, deposit, and the lender you choose. Getting a
          mortgage agreement in principle is the best way to find out your actual borrowing limit — and it is free.
        </p>
      </div>

      <AffiliateCTA variant="blog" />

      <RelatedTools tools={relatedTools} />

      <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs text-gray-500">
        <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute financial
        advice. Mortgage offers depend on individual circumstances. Always speak to a qualified mortgage adviser.
      </div>
    </article>
  )
}
