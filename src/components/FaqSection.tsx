'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

export default function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      <div className="mt-6 divide-y divide-gray-200 border-t border-gray-200">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="text-sm font-semibold text-gray-900">{faq.question}</span>
              <svg
                className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === i && (
              <p className="pb-4 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
