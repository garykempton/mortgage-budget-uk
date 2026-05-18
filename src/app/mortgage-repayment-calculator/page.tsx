import type { Metadata } from 'next'
import RepaymentCalculator from './RepaymentCalculator'

export const metadata: Metadata = {
  title: 'Mortgage Repayment Calculator — Monthly Payment Estimator',
  description:
    'Calculate your monthly UK mortgage repayments based on the loan amount, interest rate, and mortgage term. See how rate changes affect your payments.',
  openGraph: {
    title: 'Mortgage Repayment Calculator',
    description: 'Estimate your monthly UK mortgage repayments for any loan amount, rate, and term.',
  },
}

const faqs = [
  {
    question: 'How are monthly mortgage repayments calculated?',
    answer:
      'Repayment mortgages use an amortisation formula. Each monthly payment covers both interest and a portion of the capital. Early payments are mostly interest; over time, more goes towards the capital balance.',
  },
  {
    question: 'What is the difference between repayment and interest-only?',
    answer:
      'With a repayment mortgage, you pay off the full loan by the end of the term. With interest-only, you only pay the interest each month and must repay the entire capital at the end — usually by selling the property or using savings.',
  },
  {
    question: 'Will my payments change during the mortgage?',
    answer:
      'If you are on a fixed rate, your payments stay the same for the fixed period (e.g. 2 or 5 years). After that, you move to the lender\'s variable rate unless you remortgage. Tracker and variable rates can change at any time.',
  },
  {
    question: 'Should I choose a longer or shorter term?',
    answer:
      'A longer term (e.g. 30-35 years) means lower monthly payments but more total interest paid. A shorter term (e.g. 15-20 years) means higher monthly payments but you pay less interest overall and own your home sooner.',
  },
  {
    question: 'Can I change my mortgage term later?',
    answer:
      'Yes, you can usually adjust your mortgage term when you remortgage. Some lenders also allow term changes during the existing deal, though this may affect your monthly payments and the total interest paid.',
  },
]

const relatedTools = [
  { title: 'Mortgage Affordability Calculator', href: '/mortgage-affordability-calculator' },
  { title: 'Mortgage Overpayment Calculator', href: '/mortgage-overpayment-calculator' },
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RepaymentCalculator faqs={faqs} relatedTools={relatedTools} />
    </>
  )
}
