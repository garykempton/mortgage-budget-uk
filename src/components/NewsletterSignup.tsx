'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Placeholder: integrate with email provider (Mailchimp, ConvertKit, etc.)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="my-12 rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <p className="text-sm font-medium text-green-800">
          Thanks for subscribing! We will be in touch soon.
        </p>
      </section>
    )
  }

  return (
    <section className="my-12 rounded-xl border border-gray-200 bg-gray-50 p-6">
      <h2 className="text-lg font-semibold text-gray-900">Get mortgage tips straight to your inbox</h2>
      <p className="mt-1 text-sm text-gray-600">
        Free, practical advice for UK homebuyers and homeowners. No spam, unsubscribe anytime.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          type="email"
          id="newsletter-email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.co.uk"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
        />
        <button
          type="submit"
          className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          Subscribe
        </button>
      </form>
    </section>
  )
}
