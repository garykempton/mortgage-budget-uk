'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { grantConsent, GA_ID } from './GoogleAnalytics'

const COOKIE_KEY = 'cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY)
    if (!stored) {
      setVisible(true)
    } else if (stored === 'accepted') {
      grantConsent()
    }
  }, [])

  function accept() {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    grantConsent()
    console.log('[GA4] Consent granted, sending page_view')
    // Send the page view that was blocked while consent was denied
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: window.location.pathname,
      })
    }
    setVisible(false)
  }

  function reject() {
    localStorage.setItem(COOKIE_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-4 shadow-lg sm:flex sm:items-center sm:justify-between sm:px-6">
      <p className="text-sm text-gray-600">
        We use cookies for analytics and to improve your experience. See our{' '}
        <Link href="/privacy-policy" className="font-medium text-brand-600 underline hover:text-brand-700">
          privacy policy
        </Link>{' '}
        for details.
      </p>
      <div className="mt-3 flex gap-3 sm:mt-0 sm:shrink-0">
        <button
          onClick={reject}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Reject
        </button>
        <button
          onClick={accept}
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
