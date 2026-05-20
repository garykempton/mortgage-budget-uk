import Link from 'next/link'

interface AffiliateCTAProps {
  variant?: 'calculator' | 'blog'
}

export default function AffiliateCTA({ variant = 'calculator' }: AffiliateCTAProps) {
  if (variant === 'blog') {
    return (
      <aside className="my-8 rounded-xl border border-brand-200 bg-brand-50 p-6">
        <h3 className="text-base font-semibold text-brand-900">Ready to take the next step?</h3>
        <p className="mt-2 text-sm text-brand-800">
          A mortgage broker can search the whole market and find deals you cannot access directly. Getting an agreement
          in principle is free and takes minutes.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/mortgage-affordability-calculator"
            className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Check what you could borrow
          </Link>
          <Link
            href="/mortgage-repayment-calculator"
            className="rounded-lg border border-brand-300 px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-100"
          >
            Estimate repayments
          </Link>
        </div>
      </aside>
    )
  }

  return (
    <aside className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold text-gray-900">What to do next</h3>
      <p className="mt-2 text-sm text-gray-600">
        These results are a starting point. To get a personalised mortgage quote, consider speaking to a
        whole-of-market mortgage broker who can search hundreds of deals for you.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Get in touch
        </Link>
        <Link
          href="/first-time-buyer-guide"
          className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
        >
          Read our buyer guide
        </Link>
      </div>
    </aside>
  )
}
