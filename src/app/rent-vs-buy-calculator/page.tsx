import type { Metadata } from 'next'
import RentVsBuyCalc from './RentVsBuyCalc'

export const metadata: Metadata = {
  title: 'Rent vs Buy Calculator — Should You Rent or Buy in the UK?',
  description:
    'Compare the long-term financial costs of renting versus buying a home in the UK. Factor in mortgage payments, rent increases, and property growth.',
  openGraph: {
    title: 'Rent vs Buy Calculator',
    description: 'Compare the true cost of renting versus buying a UK property over time.',
  },
}

const faqs = [
  {
    question: 'Is it cheaper to rent or buy in the UK?',
    answer:
      'It depends on where you live, how long you stay, and current interest rates. In many areas, monthly mortgage payments are similar to rent. However, buying requires a large upfront deposit and other costs. Over the long term, buying usually works out cheaper because you build equity.',
  },
  {
    question: 'How long do I need to stay for buying to make sense?',
    answer:
      'As a rule of thumb, buying typically becomes more cost-effective than renting after 3 to 5 years in the same property. This is because the upfront costs of buying (stamp duty, solicitor fees, surveys) take time to recoup through equity growth.',
  },
  {
    question: 'Does property always go up in value?',
    answer:
      'No. While UK property prices have generally risen over the long term, there have been periods of decline — notably in 2008-09. The growth rate varies significantly by region. Past performance is not a guarantee of future results.',
  },
  {
    question: 'What costs of buying does this calculator include?',
    answer:
      'This calculator compares monthly mortgage payments, maintenance costs, and insurance against monthly rent with annual increases. It also factors in property price growth and the opportunity cost of your deposit.',
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
      <RentVsBuyCalc faqs={faqs} relatedTools={relatedTools} />
    </>
  )
}
