import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import FaqSection from '@/components/FaqSection'
import RelatedTools from '@/components/RelatedTools'

export const metadata: Metadata = {
  title: 'Mortgage Basics — Understanding UK Mortgages',
  description:
    'Learn the fundamentals of UK mortgages. Understand how interest rates, repayment types, LTV ratios, and mortgage terms work.',
  openGraph: {
    title: 'Mortgage Basics',
    description: 'A beginner-friendly guide to understanding UK mortgages, rates, and terminology.',
  },
}

const faqs = [
  {
    question: 'What is the best type of mortgage for a first-time buyer?',
    answer:
      'Many first-time buyers choose a fixed-rate mortgage (typically 2 or 5 years) because it offers certainty over monthly payments while you settle in. A 5-year fix is popular because it provides longer stability. The best choice depends on your circumstances — consider speaking to a mortgage broker.',
  },
  {
    question: 'What does LTV mean?',
    answer:
      'LTV stands for loan-to-value. It is the percentage of the property\'s value that you are borrowing. For example, if you buy a £250,000 home with a £25,000 deposit, your LTV is 90%. Lower LTVs generally mean better interest rates.',
  },
  {
    question: 'What is remortgaging and when should I do it?',
    answer:
      'Remortgaging means switching your mortgage to a new deal, either with your existing lender or a new one. You should consider remortgaging when your current deal ends (before you move to the SVR), or if rates have dropped significantly since you took out your mortgage.',
  },
  {
    question: 'Can I get a mortgage if I am self-employed?',
    answer:
      'Yes, but you will typically need at least 2 years of accounts or SA302 tax calculations to prove your income. Some lenders accept 1 year of accounts. A specialist mortgage broker can help you find the best options for the self-employed.',
  },
  {
    question: 'What happens if I cannot pay my mortgage?',
    answer:
      'Contact your lender immediately. They are required to treat you fairly and may offer options such as a temporary payment reduction, a payment holiday, or extending your term. Ignoring the problem can lead to arrears and, ultimately, repossession.',
  },
]

const relatedTools = [
  { title: 'Mortgage Repayment Calculator', href: '/mortgage-repayment-calculator' },
  { title: 'Mortgage Affordability Calculator', href: '/mortgage-affordability-calculator' },
  { title: 'Mortgage Overpayment Calculator', href: '/mortgage-overpayment-calculator' },
  { title: 'First-Time Buyer Guide', href: '/first-time-buyer-guide' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function MortgageBasicsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeader
        title="Mortgage Basics"
        description="New to mortgages? This guide explains the key concepts you need to understand before applying for a mortgage in the UK."
      />

      <article className="prose max-w-none text-gray-700">
        <h2>What Is a Mortgage?</h2>
        <p>
          A mortgage is a loan used to buy property. The property itself acts as security for the loan, meaning the
          lender can repossess it if you fail to keep up with repayments. Most UK mortgages run for 25 to 35 years,
          though shorter and longer terms are available. Use our{' '}
          <Link href="/mortgage-repayment-calculator">mortgage repayment calculator</Link> to see how different terms
          affect your monthly payments.
        </p>

        <h2>Repayment vs Interest-Only</h2>
        <p>
          With a <strong>repayment mortgage</strong>, each monthly payment covers both interest and a portion of the
          capital. By the end of the term, the loan is fully repaid. With an <strong>interest-only mortgage</strong>, you
          only pay the interest each month and must repay the full loan amount at the end of the term.
        </p>

        <h2>Types of Interest Rate</h2>
        <ul>
          <li>
            <strong>Fixed rate</strong> — your rate stays the same for a set period (e.g. 2 or 5 years), giving you
            certainty over your monthly costs.
          </li>
          <li>
            <strong>Variable rate (SVR)</strong> — the lender&rsquo;s standard rate, which can go up or down at any
            time.
          </li>
          <li>
            <strong>Tracker rate</strong> — follows the Bank of England base rate plus a set margin, so your payments
            move in line with the base rate.
          </li>
          <li>
            <strong>Discount rate</strong> — a reduction off the lender&rsquo;s SVR for a set period.
          </li>
        </ul>

        <h2>Loan-to-Value (LTV)</h2>
        <p>
          LTV is the proportion of the property&rsquo;s value that you are borrowing. For example, if you buy a
          &pound;200,000 home with a &pound;40,000 deposit, your LTV is 80%. Lower LTVs generally mean better interest
          rates, because the lender takes on less risk. Use our{' '}
          <Link href="/mortgage-affordability-calculator">mortgage affordability calculator</Link> to estimate your
          borrowing power and LTV.
        </p>

        <h2>Fees to Expect</h2>
        <ul>
          <li><strong>Arrangement fee</strong> — charged by the lender to set up the mortgage (sometimes called a product fee).</li>
          <li><strong>Valuation fee</strong> — covers the lender&rsquo;s property valuation.</li>
          <li><strong>Solicitor/conveyancer fees</strong> — for the legal work involved in buying the property.</li>
          <li><strong>Broker fee</strong> — if you use a mortgage broker, they may charge a fee for their advice.</li>
          <li><strong>Stamp duty</strong> — a government tax on property purchases. Use our <Link href="/stamp-duty-calculator">stamp duty calculator</Link> to check what you owe.</li>
        </ul>

        <h2>What Happens When Your Deal Ends?</h2>
        <p>
          When your fixed or introductory rate period ends, you will usually move onto the lender&rsquo;s standard
          variable rate (SVR), which is almost always higher. At this point, it is worth remortgaging — switching to a
          new deal, either with your current lender or a different one — to avoid paying more than you need to.
        </p>

        <h2>Overpaying Your Mortgage</h2>
        <p>
          Making overpayments can save you thousands in interest and shorten your mortgage term. Most lenders allow up to
          10% overpayment per year without penalties. Use our{' '}
          <Link href="/mortgage-overpayment-calculator">mortgage overpayment calculator</Link> to see how much you could
          save.
        </p>
      </article>

      <FaqSection faqs={faqs} />
      <RelatedTools tools={relatedTools} />
    </div>
  )
}
