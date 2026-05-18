import type { Metadata } from 'next'
import CalculatorCard from '@/components/CalculatorCard'
import PageHeader from '@/components/PageHeader'
import { calculatorTools, guides } from '@/config/navigation'

export const metadata: Metadata = {
  title: 'Free UK Mortgage Tools & Calculators',
  description:
    'Browse our complete collection of free UK mortgage calculators and guides. From affordability to stamp duty, find the right tool for your property purchase.',
}

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <PageHeader
        title="Mortgage Tools & Calculators"
        description="All our free UK mortgage calculators and guides in one place. Choose a tool below to get started."
      />

      <h2 className="text-xl font-semibold text-gray-900">Calculators</h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {calculatorTools.map((tool) => (
          <CalculatorCard key={tool.href} {...tool} />
        ))}
      </div>

      <h2 className="mt-12 text-xl font-semibold text-gray-900">Guides</h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        {guides.map((guide) => (
          <CalculatorCard key={guide.href} {...guide} />
        ))}
      </div>
    </div>
  )
}
