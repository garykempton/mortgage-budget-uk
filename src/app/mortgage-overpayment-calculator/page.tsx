import type { Metadata } from 'next'
import OverpaymentCalc from './OverpaymentCalc'

export const metadata: Metadata = {
  title: 'Mortgage Overpayment Calculator — Save Time & Money',
  description:
    'See how making overpayments on your UK mortgage could save you thousands in interest and help you pay off your mortgage years early.',
  openGraph: {
    title: 'Mortgage Overpayment Calculator',
    description: 'Calculate how much time and interest you can save by overpaying your UK mortgage.',
  },
}

const faqs = [
  {
    question: 'How much can I overpay on my mortgage?',
    answer:
      'Most lenders allow you to overpay up to 10% of your outstanding balance per year without incurring early repayment charges (ERCs). Some deals, particularly those without an ERC, allow unlimited overpayments.',
  },
  {
    question: 'Is it worth overpaying my mortgage?',
    answer:
      'If your mortgage interest rate is higher than what you earn on savings (after tax), overpaying is usually a good idea — as long as you have an emergency fund in place and have cleared any higher-interest debts first.',
  },
  {
    question: 'Should I overpay or save into a pension?',
    answer:
      'Pension contributions benefit from tax relief, employer matching, and compound growth. For many people, maximising pension contributions (especially employer matching) before overpaying the mortgage is more beneficial. Seek independent financial advice for your situation.',
  },
  {
    question: 'Can I get overpayments back?',
    answer:
      'Some lenders offer a "borrow back" facility that lets you reclaim overpayments, but this is not standard. With most lenders, once an overpayment is made, it cannot be withdrawn — so keep an emergency fund before overpaying.',
  },
  {
    question: 'What is the difference between reducing the term and reducing payments?',
    answer:
      'When you overpay, lenders typically reduce your outstanding balance. Some let you choose whether to shorten the term (same monthly payment, mortgage ends sooner) or reduce your monthly payment (same term, lower outgoings). Shortening the term saves more interest overall.',
  },
]

const relatedTools = [
  { title: 'Mortgage Repayment Calculator', href: '/mortgage-repayment-calculator' },
  { title: 'Mortgage Affordability Calculator', href: '/mortgage-affordability-calculator' },
  { title: 'Rent vs Buy Calculator', href: '/rent-vs-buy-calculator' },
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
      <OverpaymentCalc faqs={faqs} relatedTools={relatedTools} />
    </>
  )
}
