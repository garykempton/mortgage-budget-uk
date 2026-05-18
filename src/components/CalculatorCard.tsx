import Link from 'next/link'

interface CalculatorCardProps {
  title: string
  description: string
  href: string
}

export default function CalculatorCard({ title, description, href }: CalculatorCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-700">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      <span className="mt-4 inline-block text-sm font-medium text-brand-600 group-hover:text-brand-700">
        Use calculator &rarr;
      </span>
    </Link>
  )
}
