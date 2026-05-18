'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import FaqSection from '@/components/FaqSection'
import RelatedTools from '@/components/RelatedTools'
import { defaults } from '@/config/ukRates'

interface Props {
  faqs: { question: string; answer: string }[]
  relatedTools: { title: string; href: string }[]
}

function fmt(n: number) {
  return n.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 2 })
}
function fmtInt(n: number) {
  return n.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 })
}

export default function RepaymentCalculator({ faqs, relatedTools }: Props) {
  const [loanAmount, setLoanAmount] = useState('')
  const [rate, setRate] = useState(defaults.interestRate.toString())
  const [term, setTerm] = useState(defaults.mortgageTermYears.toString())
  const [type, setType] = useState<'repayment' | 'interest-only'>('repayment')
  const [calculated, setCalculated] = useState(false)

  const principal = parseFloat(loanAmount) || 0
  const annualRate = (parseFloat(rate) || 0) / 100
  const monthlyRate = annualRate / 12
  const months = (parseInt(term) || 25) * 12

  let monthlyPayment = 0
  let totalPayable = 0
  let totalInterest = 0

  if (principal > 0 && annualRate > 0) {
    if (type === 'repayment') {
      monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
      totalPayable = monthlyPayment * months
      totalInterest = totalPayable - principal
    } else {
      monthlyPayment = principal * monthlyRate
      totalInterest = monthlyPayment * months
      totalPayable = totalInterest + principal
    }
  } else if (principal > 0 && annualRate === 0) {
    monthlyPayment = type === 'repayment' ? principal / months : 0
    totalPayable = principal
    totalInterest = 0
  }

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault()
    setCalculated(true)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <PageHeader
        title="Mortgage Repayment Calculator"
        description="Work out your estimated monthly mortgage repayments. Enter the loan amount, interest rate, and term to see what you would pay each month."
      />

      <form onSubmit={handleCalculate} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="loan" className="block text-sm font-medium text-gray-700">Loan amount</label>
            <div className="relative mt-1">
              <span className="pointer-events-none absolute left-3 top-2.5 text-sm text-gray-400">&pound;</span>
              <input type="number" id="loan" min="1000" step="1000" required
                value={loanAmount} onChange={(e) => { setLoanAmount(e.target.value); setCalculated(false) }}
                className="block w-full rounded-lg border border-gray-300 py-2.5 pl-7 pr-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                placeholder="200000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="rate" className="block text-sm font-medium text-gray-700">Interest rate (% per year)</label>
            <input type="number" id="rate" min="0" max="20" step="0.01" required
              value={rate} onChange={(e) => { setRate(e.target.value); setCalculated(false) }}
              className="mt-1 block w-full rounded-lg border border-gray-300 py-2.5 px-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>

          <div>
            <label htmlFor="term" className="block text-sm font-medium text-gray-700">Mortgage term (years)</label>
            <input type="number" id="term" min="1" max="40" step="1" required
              value={term} onChange={(e) => { setTerm(e.target.value); setCalculated(false) }}
              className="mt-1 block w-full rounded-lg border border-gray-300 py-2.5 px-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Repayment type</label>
            <div className="mt-2 flex gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="radio" name="type" checked={type === 'repayment'}
                  onChange={() => { setType('repayment'); setCalculated(false) }}
                  className="h-4 w-4 text-brand-600 focus:ring-brand-500" />
                Repayment
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="radio" name="type" checked={type === 'interest-only'}
                  onChange={() => { setType('interest-only'); setCalculated(false) }}
                  className="h-4 w-4 text-brand-600 focus:ring-brand-500" />
                Interest only
              </label>
            </div>
          </div>
        </div>

        <button type="submit"
          className="mt-6 w-full rounded-lg bg-brand-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 sm:w-auto sm:px-8"
        >
          Calculate repayments
        </button>
      </form>

      {calculated && principal > 0 && (
        <div className="mt-8 rounded-xl border border-brand-200 bg-brand-50 p-6">
          <h2 className="text-lg font-semibold text-brand-900">Your Results</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-sm text-brand-700">Monthly payment</p>
              <p className="text-2xl font-bold text-brand-900">{fmt(monthlyPayment)}</p>
            </div>
            <div>
              <p className="text-sm text-brand-700">Total interest</p>
              <p className="text-2xl font-bold text-brand-900">{fmtInt(totalInterest)}</p>
            </div>
            <div>
              <p className="text-sm text-brand-700">Total payable</p>
              <p className="text-2xl font-bold text-brand-900">{fmtInt(totalPayable)}</p>
            </div>
          </div>
          {type === 'interest-only' && (
            <p className="mt-4 text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
              With an interest-only mortgage, you still owe the full {fmtInt(principal)} at the end of the term. You will need a plan to repay this, such as savings, investments, or selling the property.
            </p>
          )}
          <p className="mt-4 text-xs text-brand-700">
            These figures are estimates for illustration only and do not constitute a mortgage offer.
          </p>
        </div>
      )}

      <section className="prose mt-12 max-w-none text-gray-700">
        <h2>How Are Monthly Mortgage Repayments Calculated?</h2>
        <p>
          For a repayment mortgage, your monthly payment covers both the interest charged by the lender and a portion of
          the capital. In the early years, a larger share goes towards interest. Over time, more of each payment reduces
          the capital balance.
        </p>
        <p>
          Interest-only mortgages only require you to pay the interest each month. The original loan amount remains
          unchanged and must be repaid in full at the end of the term.
        </p>

        <h2>What Affects Your Monthly Payments?</h2>
        <ul>
          <li><strong>Loan amount</strong> — the more you borrow, the higher your repayments.</li>
          <li><strong>Interest rate</strong> — even small changes in rate can make a significant difference over 25 years.</li>
          <li><strong>Mortgage term</strong> — a longer term means lower monthly payments but more interest paid overall.</li>
          <li><strong>Repayment type</strong> — repayment mortgages cost more per month but you pay off the debt over time.</li>
        </ul>

        <h2>Fixed vs Variable Rates</h2>
        <p>
          A fixed-rate mortgage locks your interest rate for a set period (commonly two or five years), giving you
          certainty over your monthly outgoings. A variable or tracker rate may start lower but can rise or fall with
          the Bank of England base rate.
        </p>
      </section>

      <FaqSection faqs={faqs} />
      <RelatedTools tools={relatedTools} />
    </div>
  )
}
