import type { Metadata } from 'next'
import StampDutyCalc from './StampDutyCalc'

export const metadata: Metadata = {
  title: 'Stamp Duty Calculator 2025-26 — SDLT for England & Northern Ireland',
  description:
    'Calculate the Stamp Duty Land Tax (SDLT) you will pay when buying a property in England or Northern Ireland. Includes first-time buyer relief and additional property surcharge.',
  openGraph: {
    title: 'UK Stamp Duty Calculator 2025-26',
    description: 'Work out your SDLT bill for England & Northern Ireland, including first-time buyer relief.',
  },
}

const faqs = [
  {
    question: 'When do I pay stamp duty?',
    answer:
      'Stamp duty must be paid within 14 days of completion. Your solicitor or conveyancer usually handles this on your behalf as part of the purchase process.',
  },
  {
    question: 'Do first-time buyers pay stamp duty?',
    answer:
      'First-time buyers benefit from a higher nil-rate threshold, meaning they pay no stamp duty on the first £300,000 of the property price (for properties up to £500,000). If the property costs more than £500,000, first-time buyer relief does not apply.',
  },
  {
    question: 'What is the additional property surcharge?',
    answer:
      'If you are buying a second home, buy-to-let, or any additional property, you pay a 5% surcharge on top of standard SDLT rates on each band. This applies even if the property is very low in value.',
  },
  {
    question: 'Does stamp duty apply in Scotland and Wales?',
    answer:
      'No. Scotland has Land and Buildings Transaction Tax (LBTT) and Wales has Land Transaction Tax (LTT). These have different rates and thresholds. This calculator covers England and Northern Ireland only.',
  },
  {
    question: 'Can stamp duty be added to the mortgage?',
    answer:
      'Generally no — most lenders will not allow you to add stamp duty to your mortgage. It must be paid from your own funds at completion. Budget for this on top of your deposit.',
  },
]

const relatedTools = [
  { title: 'Mortgage Affordability Calculator', href: '/mortgage-affordability-calculator' },
  { title: 'Deposit Calculator', href: '/deposit-calculator' },
  { title: 'Mortgage Repayment Calculator', href: '/mortgage-repayment-calculator' },
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
      <StampDutyCalc faqs={faqs} relatedTools={relatedTools} />
    </>
  )
}
