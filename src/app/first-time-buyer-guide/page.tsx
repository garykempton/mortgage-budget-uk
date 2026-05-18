import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import FaqSection from '@/components/FaqSection'
import RelatedTools from '@/components/RelatedTools'

export const metadata: Metadata = {
  title: 'First-Time Buyer Guide — Step-by-Step UK Home Buying',
  description:
    'A comprehensive guide for first-time buyers in the UK. Learn about deposits, mortgages, solicitors, surveys, and the full buying process from start to finish.',
  openGraph: {
    title: 'First-Time Buyer Guide',
    description: 'Everything you need to know about buying your first home in the UK, step by step.',
  },
}

const faqs = [
  {
    question: 'How much deposit do first-time buyers need?',
    answer:
      'The minimum is usually 5% of the property price. However, putting down 10% or more will give you access to better mortgage rates and lower monthly repayments. A Lifetime ISA can help boost your savings with a 25% government bonus.',
  },
  {
    question: 'Do first-time buyers pay stamp duty?',
    answer:
      'First-time buyers in England and Northern Ireland pay no stamp duty on the first £300,000 of properties costing up to £500,000. If the property costs more than £500,000, standard rates apply. Use our stamp duty calculator to check.',
  },
  {
    question: 'What is an agreement in principle?',
    answer:
      'An agreement in principle (AIP) is a conditional statement from a lender confirming how much they would lend you based on basic information. It is not a guarantee but shows estate agents you are a serious buyer. It typically lasts 60-90 days.',
  },
  {
    question: 'How long does buying a house take in the UK?',
    answer:
      'From having an offer accepted to completion typically takes 8 to 12 weeks, though it can take longer if there is a chain. The entire process from starting your search to moving in often takes 3 to 6 months.',
  },
  {
    question: 'What are the hidden costs of buying a house?',
    answer:
      'Beyond the deposit, budget for solicitor fees (£1,000-£2,000), survey costs (£250-£600), mortgage arrangement fees (£0-£2,000), removal costs, and any immediate repairs or furnishing. These can add £3,000-£5,000 or more to your total costs.',
  },
]

const relatedTools = [
  { title: 'Mortgage Affordability Calculator', href: '/mortgage-affordability-calculator' },
  { title: 'Deposit Calculator', href: '/deposit-calculator' },
  { title: 'Stamp Duty Calculator', href: '/stamp-duty-calculator' },
  { title: 'Mortgage Basics', href: '/mortgage-basics' },
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

export default function FirstTimeBuyerGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeader
        title="First-Time Buyer Guide"
        description="Buying your first home is one of the biggest financial decisions you will ever make. This guide walks you through the entire UK home-buying process, step by step."
      />

      <article className="prose max-w-none text-gray-700">
        <h2>1. Work Out What You Can Afford</h2>
        <p>
          Before you start browsing properties, get a clear picture of your finances. Use our{' '}
          <Link href="/mortgage-affordability-calculator">mortgage affordability calculator</Link> to estimate how much
          you could borrow. Remember to factor in additional costs such as stamp duty, solicitor fees, survey costs, and
          moving expenses.
        </p>

        <h2>2. Save for Your Deposit</h2>
        <p>
          Most lenders require at least a 5% deposit, though 10% or more will unlock better rates. Consider a Lifetime
          ISA, which offers a 25% government bonus on savings of up to &pound;4,000 per year. Use our{' '}
          <Link href="/deposit-calculator">deposit calculator</Link> to plan your savings timeline.
        </p>

        <h2>3. Get a Mortgage Agreement in Principle</h2>
        <p>
          An agreement in principle (AIP) is a statement from a lender confirming how much they would be willing to lend
          you, subject to a full application. Having an AIP shows estate agents and sellers that you are a serious buyer.
          It usually lasts 60 to 90 days.
        </p>

        <h2>4. Find the Right Property</h2>
        <p>
          Search online property portals, register with local estate agents, and attend viewings. Make a list of
          must-haves and nice-to-haves so you can compare properties objectively. Do not forget to check the local area
          for transport links, schools, and amenities.
        </p>

        <h2>5. Make an Offer</h2>
        <p>
          Once you find a property, make an offer through the estate agent. In England and Wales, offers are not legally
          binding until contracts are exchanged, which means either party can pull out before that point.
        </p>

        <h2>6. Instruct a Solicitor or Conveyancer</h2>
        <p>
          A solicitor or licensed conveyancer handles the legal side of the purchase. They carry out property searches,
          review the contract, and manage the transfer of ownership. Get quotes from several firms and check their
          reviews.
        </p>

        <h2>7. Arrange a Survey</h2>
        <p>
          Your lender will carry out a basic valuation, but this is for their benefit, not yours. Consider paying for a
          more detailed survey — a HomeBuyer Report or a full Building Survey — to identify potential problems with the
          property before you commit.
        </p>

        <h2>8. Finalise Your Mortgage</h2>
        <p>
          Once your offer is accepted, submit your full mortgage application. The lender will verify your income,
          outgoings, and credit history. If approved, they will issue a formal mortgage offer.
        </p>

        <h2>9. Exchange Contracts</h2>
        <p>
          At this stage, both buyer and seller sign contracts and the purchase becomes legally binding. You will pay your
          deposit (usually 10% of the purchase price) to the seller&rsquo;s solicitor.
        </p>

        <h2>10. Complete and Move In</h2>
        <p>
          On completion day, your solicitor transfers the remaining funds to the seller&rsquo;s solicitor, and you
          receive the keys to your new home. Congratulations — you are now a homeowner!
        </p>

        <h2>What About Stamp Duty?</h2>
        <p>
          First-time buyers benefit from stamp duty relief in England and Northern Ireland. Use our{' '}
          <Link href="/stamp-duty-calculator">stamp duty calculator</Link> to see exactly how much you would pay. If you
          are buying in Scotland or Wales, different taxes apply (LBTT and LTT respectively).
        </p>

        <h2>Understanding Your Mortgage Options</h2>
        <p>
          Not sure about the difference between fixed and variable rates, or repayment and interest-only? Read our{' '}
          <Link href="/mortgage-basics">mortgage basics guide</Link> for a plain-English explanation of the key
          concepts. Then use our <Link href="/mortgage-repayment-calculator">mortgage repayment calculator</Link> to see
          how different rates and terms affect your monthly payments.
        </p>
      </article>

      <FaqSection faqs={faqs} />
      <RelatedTools tools={relatedTools} />
    </div>
  )
}
