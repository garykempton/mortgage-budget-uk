import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-brand-800">404</h1>
      <p className="mt-4 text-xl text-gray-700">Page not found</p>
      <p className="mt-2 text-sm text-gray-500">
        Sorry, we could not find the page you are looking for. It may have been moved or removed.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          Go to homepage
        </Link>
        <Link
          href="/tools"
          className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Browse tools
        </Link>
      </div>
    </div>
  )
}
