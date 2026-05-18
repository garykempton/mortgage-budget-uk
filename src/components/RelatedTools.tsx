import Link from 'next/link'

interface RelatedTool {
  title: string
  href: string
}

export default function RelatedTools({ tools }: { tools: RelatedTool[] }) {
  return (
    <section className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6">
      <h2 className="text-lg font-semibold text-gray-900">Related Tools</h2>
      <ul className="mt-3 space-y-2">
        {tools.map((tool) => (
          <li key={tool.href}>
            <Link href={tool.href} className="text-sm font-medium text-brand-600 hover:text-brand-700">
              {tool.title} &rarr;
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
