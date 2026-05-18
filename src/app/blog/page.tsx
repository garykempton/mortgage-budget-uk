import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { blogPosts } from '@/config/blog'

export const metadata: Metadata = {
  title: 'Blog — UK Mortgage Tips, Guides & Advice',
  description:
    'Practical articles about UK mortgages, deposits, stamp duty, and home buying. Plain-English advice to help you make smarter property decisions.',
  openGraph: {
    title: 'Mortgage Budget UK Blog',
    description: 'Practical UK mortgage tips and home-buying advice.',
  },
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <PageHeader
        title="Blog"
        description="Practical, plain-English articles to help you navigate the UK mortgage process and make smarter decisions about your home."
      />

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-md">
            <Link href={`/blog/${post.slug}`}>
              <p className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} &middot; {post.readingTime}</p>
              <h2 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-brand-700">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {post.description}
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-brand-600 group-hover:text-brand-700">
                Read article &rarr;
              </span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
