'use client'

import Link from 'next/link'
import { useState } from 'react'
import { mainNav, calculatorTools, guides } from '@/config/navigation'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-brand-800">
          Mortgage Budget <span className="text-brand-500">UK</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) =>
            item.title === 'Tools' ? (
              <div key={item.href} className="relative">
                <button
                  onClick={() => setToolsOpen(!toolsOpen)}
                  onBlur={() => setTimeout(() => setToolsOpen(false), 150)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-700"
                >
                  Tools
                  <svg className="ml-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {toolsOpen && (
                  <div className="absolute left-0 top-full mt-1 w-72 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
                    <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">Calculators</p>
                    {calculatorTools.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700"
                      >
                        {tool.title}
                      </Link>
                    ))}
                    <hr className="my-1 border-gray-100" />
                    <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">Guides</p>
                    {guides.map((guide) => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700"
                      >
                        {guide.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-700"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700"
            >
              {item.title}
            </Link>
          ))}
          <hr className="my-2 border-gray-100" />
          <p className="py-1 text-xs font-semibold uppercase tracking-wide text-gray-400">Calculators</p>
          {calculatorTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 pl-2 text-sm text-gray-600"
            >
              {tool.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
