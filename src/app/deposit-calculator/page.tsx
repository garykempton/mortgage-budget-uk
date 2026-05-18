import type { Metadata } from 'next'
import DepositCalc from './DepositCalc'

export const metadata: Metadata = {
  title: 'Deposit Calculator — How Much Do You Need to Save?',
  description:
    'Calculate how much deposit you need for a UK property purchase and how long it will take to save. See the impact of different deposit percentages.',
  openGraph: {
    title: 'Deposit Calculator',
    description: 'Work out your UK mortgage deposit target and savings timeline.',
  },
}

const faqs = [
  {
    question: 'What is the minimum deposit for a UK mortgage?',
    answer:
      'Most lenders require a minimum of 5% of the property price. However, 95% LTV mortgages typically come with higher interest rates. Putting down 10-15% or more will usually give you access to better deals.',
  },
  {
    question: 'What is a Lifetime ISA and how does it help?',
    answer:
      'A Lifetime ISA (LISA) lets you save up to £4,000 per year towards your first home, and the government adds a 25% bonus (up to £1,000 per year). You must be aged 18-39 to open one, and the property must cost £450,000 or less.',
  },
  {
    question: 'Does a bigger deposit get me a better mortgage rate?',
    answer:
      'Yes. Mortgage rates are tiered by loan-to-value (LTV). The best rates are usually available at 60% LTV. Significant rate improvements also occur at the 90%, 85%, 80%, and 75% LTV thresholds.',
  },
  {
    question: 'Can my parents help with my deposit?',
    answer:
      'Yes. Many first-time buyers receive a gifted deposit from family. Lenders will usually ask for a letter confirming the gift is not a loan. Some lenders also offer guarantor or family springboard mortgages.',
  },
]

const relatedTools = [
  { title: 'Mortgage Affordability Calculator', href: '/mortgage-affordability-calculator' },
  { title: 'Stamp Duty Calculator', href: '/stamp-duty-calculator' },
  { title: 'Rent vs Buy Calculator', href: '/rent-vs-buy-calculator' },
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DepositCalc faqs={faqs} relatedTools={relatedTools} />
    </>
  )
}
