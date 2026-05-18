import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Mortgage Budget UK — who we are, what we do, and why we built free mortgage calculators for UK homebuyers.',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <PageHeader
        title="About Mortgage Budget UK"
        description="Free, no-nonsense mortgage tools for UK homebuyers and homeowners."
      />

      <article className="prose max-w-none text-gray-700">
        <p>
          Mortgage Budget UK was built to help people across the United Kingdom make better-informed decisions about one
          of the biggest financial commitments of their lives: their mortgage.
        </p>

        <h2>Our Mission</h2>
        <p>
          We believe that understanding your mortgage options should not require a financial degree. Our tools are
          designed to be simple, transparent, and completely free to use. We aim to give you the information you need to
          budget confidently — whether you are a first-time buyer, moving home, or looking to remortgage.
        </p>

        <h2>What We Offer</h2>
        <p>
          Our suite of calculators covers the most common questions homebuyers face: how much can I borrow, what will my
          monthly payments be, how much stamp duty will I pay, and more. We also provide plain-English guides to help
          you navigate the mortgage process from start to finish.
        </p>

        <h2>Important Notice</h2>
        <p>
          Mortgage Budget UK is an informational website. We do not provide financial advice, and our calculators are
          intended for illustrative purposes only. Figures produced by our tools are estimates and should not be relied
          upon as the basis for financial decisions. Always consult a qualified, FCA-regulated mortgage adviser before
          committing to a mortgage product.
        </p>
      </article>
    </div>
  )
}
