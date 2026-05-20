'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import FaqSection from '@/components/FaqSection'
import RelatedTools from '@/components/RelatedTools'
import AffiliateCTA from '@/components/AffiliateCTA'
import NewsletterSignup from '@/components/NewsletterSignup'

interface Props {
  faqs: { question: string; answer: string }[]
  relatedTools: { title: string; href: string }[]
}

function fmt(n: number) {
  return n.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 })
}

export default function DepositCalc({ faqs, relatedTools }: Props) {
  const [propertyPrice, setPropertyPrice] = useState('')
  const [depositPct, setDepositPct] = useState('10')
  const [currentSavings, setCurrentSavings] = useState('')
  const [monthlySaving, setMonthlySaving] = useState('')
  const [savingsRate, setSavingsRate] = useState('4')
  const [calculated, setCalculated] = useState(false)

  const price = parseFloat(propertyPrice) || 0
  const pct = parseFloat(depositPct) || 10
  const saved = parseFloat(currentSavings) || 0
  const monthly = parseFloat(monthlySaving) || 0
  const annualSavingsRate = (parseFloat(savingsRate) || 0) / 100
  const monthlyGrowth = annualSavingsRate / 12

  const depositNeeded = price * (pct / 100)
  const remaining = Math.max(0, depositNeeded - saved)
  const ltv = 100 - pct
  const loanAmount = price - depositNeeded

  // Months to save with compound interest
  let monthsToSave = 0
  if (remaining > 0 && monthly > 0) {
    if (monthlyGrowth > 0) {
      // FV = PMT * ((1+r)^n - 1) / r => solve for n
      monthsToSave = Math.ceil(Math.log((remaining * monthlyGrowth / monthly) + 1) / Math.log(1 + monthlyGrowth))
    } else {
      monthsToSave = Math.ceil(remaining / monthly)
    }
  }

  const years = Math.floor(monthsToSave / 12)
  const remainingMonths = monthsToSave % 12

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault()
    setCalculated(true)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <PageHeader
        title="Deposit Calculator"
        description="Work out how much you need to save for your property deposit and how long it might take based on your monthly savings."
      />

      <form onSubmit={handleCalculate} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Property price</label>
            <div className="relative mt-1">
              <span className="pointer-events-none absolute left-3 top-2.5 text-sm text-gray-400">&pound;</span>
              <input type="number" id="price" min="0" step="1000" required
                value={propertyPrice} onChange={(e) => { setPropertyPrice(e.target.value); setCalculated(false) }}
                className="block w-full rounded-lg border border-gray-300 py-2.5 pl-7 pr-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                placeholder="250000" />
            </div>
          </div>
          <div>
            <label htmlFor="pct" className="block text-sm font-medium text-gray-700">Deposit percentage</label>
            <select id="pct" value={depositPct} onChange={(e) => { setDepositPct(e.target.value); setCalculated(false) }}
              className="mt-1 block w-full rounded-lg border border-gray-300 py-2.5 pl-3 pr-8 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500">
              <option value="5">5% (minimum)</option>
              <option value="10">10%</option>
              <option value="15">15%</option>
              <option value="20">20%</option>
              <option value="25">25%</option>
            </select>
          </div>
          <div>
            <label htmlFor="saved" className="block text-sm font-medium text-gray-700">Current savings</label>
            <div className="relative mt-1">
              <span className="pointer-events-none absolute left-3 top-2.5 text-sm text-gray-400">&pound;</span>
              <input type="number" id="saved" min="0" step="100"
                value={currentSavings} onChange={(e) => { setCurrentSavings(e.target.value); setCalculated(false) }}
                className="block w-full rounded-lg border border-gray-300 py-2.5 pl-7 pr-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                placeholder="5000" />
            </div>
          </div>
          <div>
            <label htmlFor="monthly" className="block text-sm font-medium text-gray-700">Monthly savings amount</label>
            <div className="relative mt-1">
              <span className="pointer-events-none absolute left-3 top-2.5 text-sm text-gray-400">&pound;</span>
              <input type="number" id="monthly" min="0" step="50"
                value={monthlySaving} onChange={(e) => { setMonthlySaving(e.target.value); setCalculated(false) }}
                className="block w-full rounded-lg border border-gray-300 py-2.5 pl-7 pr-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                placeholder="500" />
            </div>
          </div>
          <div>
            <label htmlFor="savingsRate" className="block text-sm font-medium text-gray-700">Savings interest rate (% per year)</label>
            <input type="number" id="savingsRate" min="0" max="15" step="0.1"
              value={savingsRate} onChange={(e) => { setSavingsRate(e.target.value); setCalculated(false) }}
              className="mt-1 block w-full rounded-lg border border-gray-300 py-2.5 px-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
          </div>
        </div>
        <button type="submit"
          className="mt-6 w-full rounded-lg bg-brand-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 sm:w-auto sm:px-8">
          Calculate deposit
        </button>
      </form>

      {calculated && price > 0 && (
        <div className="mt-8 rounded-xl border border-brand-200 bg-brand-50 p-6">
          <h2 className="text-lg font-semibold text-brand-900">Your Results</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm text-brand-700">Deposit needed ({pct}%)</p>
              <p className="text-2xl font-bold text-brand-900">{fmt(depositNeeded)}</p>
            </div>
            <div>
              <p className="text-sm text-brand-700">Still to save</p>
              <p className="text-2xl font-bold text-brand-900">{fmt(remaining)}</p>
            </div>
            <div>
              <p className="text-sm text-brand-700">Mortgage needed</p>
              <p className="text-2xl font-bold text-brand-900">{fmt(loanAmount)}</p>
            </div>
            <div>
              <p className="text-sm text-brand-700">LTV ratio</p>
              <p className="text-2xl font-bold text-brand-900">{ltv}%</p>
            </div>
          </div>
          {monthly > 0 && remaining > 0 && (
            <p className="mt-4 text-sm text-brand-800">
              At {fmt(monthly)} per month{parseFloat(savingsRate) > 0 ? ` with ${savingsRate}% interest` : ''}, you could reach your target in approximately <strong>{years > 0 ? `${years} year${years !== 1 ? 's' : ''}` : ''}{years > 0 && remainingMonths > 0 ? ' and ' : ''}{remainingMonths > 0 ? `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}` : ''}</strong>.
            </p>
          )}
          {remaining <= 0 && (
            <p className="mt-4 text-sm text-brand-800">
              You already have enough saved for a {pct}% deposit on this property.
            </p>
          )}
          <p className="mt-3 text-xs text-brand-700">This is an estimate and does not account for property price changes or additional purchase costs.</p>
        </div>
      )}

      {calculated && price > 0 && <AffiliateCTA />}

      <section className="prose mt-12 max-w-none text-gray-700">
        <h2>How Much Deposit Do You Need?</h2>
        <p>
          In the UK, most lenders require a minimum deposit of 5% of the property price. However, putting down a larger
          deposit — ideally 10%, 15%, or even 20% — can unlock significantly better interest rates and lower your
          monthly repayments.
        </p>
        <h2>Deposit Size and Loan-to-Value (LTV)</h2>
        <p>
          Your deposit determines your loan-to-value ratio. For example, a 10% deposit on a &pound;250,000 home means
          you need &pound;25,000 upfront, and your LTV would be 90%. Lenders generally offer their best rates at 60%
          LTV, so there is a real incentive to save as much as you can.
        </p>
        <h2>Tips for Saving Your Deposit</h2>
        <ul>
          <li><strong>Lifetime ISA</strong> — save up to &pound;4,000 per year and receive a 25% government bonus.</li>
          <li><strong>Set a monthly target</strong> — automate your savings so you pay yourself first.</li>
          <li><strong>Cut discretionary spending</strong> — review subscriptions and non-essential outgoings.</li>
          <li><strong>Consider shared ownership</strong> — you may only need a deposit on the share you are buying.</li>
        </ul>
      </section>

      <NewsletterSignup />
      <FaqSection faqs={faqs} />
      <RelatedTools tools={relatedTools} />
    </div>
  )
}
