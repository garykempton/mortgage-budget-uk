import type { Metadata } from 'next'
import AffordabilityCalculator from './AffordabilityCalculator'

export const metadata: Metadata = {
  title: 'Mortgage Affordability Calculator — How Much Can You Borrow?',
  description:
    'Use our free UK mortgage affordability calculator to estimate how much you could borrow based on your income, outgoings, and deposit size.',
  openGraph: {
    title: 'Mortgage Affordability Calculator',
    description: 'Estimate how much you could borrow for a UK mortgage based on your salary and deposit.',
  },
}

const faqs = [
  {
    question: 'How many times my salary can I borrow for a mortgage?',
    answer:
      'Most UK lenders offer between 4 and 4.5 times your gross annual salary. Some specialist lenders may offer up to 5 or 6 times for higher earners or certain professions such as doctors, solicitors, and accountants.',
  },
  {
    question: 'Does my partner\'s income count?',
    answer:
      'Yes. If you apply for a joint mortgage, both incomes are typically added together before the income multiple is applied. This can significantly increase your borrowing power.',
  },
  {
    question: 'Do outgoings affect how much I can borrow?',
    answer:
      'Yes. Lenders carry out a detailed affordability assessment that considers your regular outgoings, existing debts (credit cards, car finance, student loans), childcare costs, and living expenses. High outgoings can reduce your maximum borrowing.',
  },
  {
    question: 'What deposit do I need for a mortgage?',
    answer:
      'The minimum deposit is usually 5% of the property price, though 10% or more will unlock better interest rates. A larger deposit also means a smaller loan and lower monthly repayments.',
  },
  {
    question: 'Is this calculator accurate?',
    answer:
      'This calculator provides a rough estimate based on standard income multiples. It does not replicate the full affordability assessment a lender will carry out, which considers your credit score, employment type, and other factors. Always get a formal agreement in principle from a lender.',
  },
]

const relatedTools = [
  { title: 'Mortgage Repayment Calculator', href: '/mortgage-repayment-calculator' },
  { title: 'Deposit Calculator', href: '/deposit-calculator' },
  { title: 'Stamp Duty Calculator', href: '/stamp-duty-calculator' },
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
      <AffordabilityCalculator faqs={faqs} relatedTools={relatedTools} />
    </>
  )
}
