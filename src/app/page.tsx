import Link from 'next/link'
import CalculatorCard from '@/components/CalculatorCard'
import { calculatorTools, guides } from '@/config/navigation'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Budget smarter for your UK mortgage
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-200">
            Free, easy-to-use calculators and guides to help you understand what you can afford,
            how much you will pay, and how to save money on your mortgage.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/mortgage-affordability-calculator"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-900 shadow-sm hover:bg-brand-50"
            >
              Check affordability
            </Link>
            <Link
              href="/tools"
              className="rounded-lg border border-brand-400 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-900"
            >
              View all tools
            </Link>
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900">Mortgage Calculators</h2>
        <p className="mt-2 text-gray-600">
          Everything you need to plan your property purchase, all in one place.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {calculatorTools.map((tool) => (
            <CalculatorCard key={tool.href} {...tool} />
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold text-gray-900">Helpful Guides</h2>
          <p className="mt-2 text-gray-600">
            Plain-English guides to help you navigate the mortgage process.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {guides.map((guide) => (
              <CalculatorCard key={guide.href} {...guide} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">
          <p className="text-sm text-gray-500">
            Mortgage Budget UK provides free tools for informational purposes only. We do not provide financial advice.
            Always speak to a qualified mortgage adviser before making decisions about your finances.
          </p>
        </div>
      </section>
    </>
  )
}
