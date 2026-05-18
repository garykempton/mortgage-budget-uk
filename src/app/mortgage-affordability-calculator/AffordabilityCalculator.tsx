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
  return n.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 })
}

export default function AffordabilityCalculator({ faqs, relatedTools }: Props) {
  const [income1, setIncome1] = useState('')
  const [income2, setIncome2] = useState('')
  const [deposit, setDeposit] = useState('')
  const [multiple, setMultiple] = useState(defaults.incomeMultiple.toString())
  const [calculated, setCalculated] = useState(false)

  const totalIncome = (parseFloat(income1) || 0) + (parseFloat(income2) || 0)
  const depositNum = parseFloat(deposit) || 0
  const mult = parseFloat(multiple) || defaults.incomeMultiple
  const maxBorrowing = totalIncome * mult
  const maxProperty = maxBorrowing + depositNum
  const ltv = maxProperty > 0 ? ((maxBorrowing / maxProperty) * 100) : 0

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault()
    setCalculated(true)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <PageHeader
        title="Mortgage Affordability Calculator"
        description="Estimate how much you could borrow based on your household income, deposit, and lender income multiple. Most UK lenders offer between 4 and 4.5 times your annual salary."
      />

      <form onSubmit={handleCalculate} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="income1" className="block text-sm font-medium text-gray-700">
              Your gross annual income
            </label>
            <div className="relative mt-1">
              <span className="pointer-events-none absolute left-3 top-2.5 text-sm text-gray-400">&pound;</span>
              <input
                type="number" id="income1" min="0" step="100" required
                value={income1} onChange={(e) => { setIncome1(e.target.value); setCalculated(false) }}
                className="block w-full rounded-lg border border-gray-300 py-2.5 pl-7 pr-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                placeholder="35000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="income2" className="block text-sm font-medium text-gray-700">
              Partner&apos;s gross annual income <span className="text-gray-400">(optional)</span>
            </label>
            <div className="relative mt-1">
              <span className="pointer-events-none absolute left-3 top-2.5 text-sm text-gray-400">&pound;</span>
              <input
                type="number" id="income2" min="0" step="100"
                value={income2} onChange={(e) => { setIncome2(e.target.value); setCalculated(false) }}
                className="block w-full rounded-lg border border-gray-300 py-2.5 pl-7 pr-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                placeholder="0"
              />
            </div>
          </div>

          <div>
            <label htmlFor="deposit" className="block text-sm font-medium text-gray-700">
              Deposit available
            </label>
            <div className="relative mt-1">
              <span className="pointer-events-none absolute left-3 top-2.5 text-sm text-gray-400">&pound;</span>
              <input
                type="number" id="deposit" min="0" step="100" required
                value={deposit} onChange={(e) => { setDeposit(e.target.value); setCalculated(false) }}
                className="block w-full rounded-lg border border-gray-300 py-2.5 pl-7 pr-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                placeholder="25000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="multiple" className="block text-sm font-medium text-gray-700">
              Income multiple
            </label>
            <select
              id="multiple" value={multiple}
              onChange={(e) => { setMultiple(e.target.value); setCalculated(false) }}
              className="mt-1 block w-full rounded-lg border border-gray-300 py-2.5 pl-3 pr-8 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            >
              <option value="3">3x (conservative)</option>
              <option value="3.5">3.5x</option>
              <option value="4">4x</option>
              <option value="4.5">4.5x (typical)</option>
              <option value="5">5x (specialist lenders)</option>
              <option value="5.5">5.5x (professionals)</option>
              <option value="6">6x (max specialist)</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-brand-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 sm:w-auto sm:px-8"
        >
          Calculate affordability
        </button>
      </form>

      {calculated && totalIncome > 0 && (
        <div className="mt-8 rounded-xl border border-brand-200 bg-brand-50 p-6">
          <h2 className="text-lg font-semibold text-brand-900">Your Results</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-sm text-brand-700">Maximum borrowing</p>
              <p className="text-2xl font-bold text-brand-900">{fmt(maxBorrowing)}</p>
            </div>
            <div>
              <p className="text-sm text-brand-700">Maximum property price</p>
              <p className="text-2xl font-bold text-brand-900">{fmt(maxProperty)}</p>
            </div>
            <div>
              <p className="text-sm text-brand-700">Loan-to-value (LTV)</p>
              <p className="text-2xl font-bold text-brand-900">{ltv.toFixed(0)}%</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-brand-700">
            This is an estimate only. Lenders will also consider your outgoings, credit history, and employment type.
            Always get a formal agreement in principle.
          </p>
        </div>
      )}

      <section className="prose mt-12 max-w-none text-gray-700">
        <h2>How Is Mortgage Affordability Calculated?</h2>
        <p>
          UK lenders typically use an income multiple to determine the maximum amount they will lend. Most high-street
          banks offer between 4 and 4.5 times your gross annual salary, though some specialist lenders may stretch to 5
          or even 6 times for certain professions.
        </p>
        <p>
          Beyond the income multiple, lenders carry out a detailed affordability assessment. This takes into account
          your regular outgoings, existing debts (such as credit cards and car finance), childcare costs, and living
          expenses. They will also stress-test your ability to repay if interest rates were to rise.
        </p>

        <h2>What Affects How Much You Can Borrow?</h2>
        <ul>
          <li><strong>Gross annual income</strong> — including any regular bonuses, overtime, or second income.</li>
          <li><strong>Deposit size</strong> — a larger deposit reduces the loan-to-value ratio, often unlocking better rates.</li>
          <li><strong>Monthly outgoings</strong> — existing debts and committed spending reduce the amount lenders are willing to offer.</li>
          <li><strong>Credit history</strong> — a strong credit score can improve your options.</li>
          <li><strong>Property type</strong> — some lenders restrict lending on flats, new builds, or non-standard construction.</li>
        </ul>

        <h2>Tips to Improve Your Affordability</h2>
        <p>
          Pay down existing debts before applying, avoid taking on new credit in the months leading up to your
          application, and make sure you are on the electoral roll. If you have a joint applicant, both incomes will be
          considered, which can significantly increase your borrowing power.
        </p>
      </section>

      <FaqSection faqs={faqs} />
      <RelatedTools tools={relatedTools} />
    </div>
  )
}
