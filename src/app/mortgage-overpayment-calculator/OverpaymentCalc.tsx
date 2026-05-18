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

function simulate(principal: number, annualRate: number, termYears: number, monthlyOverpayment: number) {
  const monthlyRate = annualRate / 12
  const termMonths = termYears * 12

  // Normal schedule
  const normalPayment = monthlyRate > 0
    ? (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1)
    : principal / termMonths
  const normalTotal = normalPayment * termMonths
  const normalInterest = normalTotal - principal

  // Overpayment schedule
  let balance = principal
  let overpayMonths = 0
  let overpayTotalPaid = 0
  let overpayTotalInterest = 0

  while (balance > 0.01 && overpayMonths < termMonths * 2) {
    const interest = balance * monthlyRate
    const totalPayment = Math.min(balance + interest, normalPayment + monthlyOverpayment)
    const capitalPaid = totalPayment - interest
    balance = Math.max(0, balance - capitalPaid)
    overpayTotalPaid += totalPayment
    overpayTotalInterest += interest
    overpayMonths++
  }

  const monthsSaved = termMonths - overpayMonths
  const interestSaved = normalInterest - overpayTotalInterest
  const yearsSaved = Math.floor(monthsSaved / 12)
  const remainingMonthsSaved = monthsSaved % 12

  return {
    normalPayment,
    normalTotal,
    normalInterest,
    normalMonths: termMonths,
    overpayMonths,
    overpayTotalPaid,
    overpayTotalInterest,
    monthsSaved,
    yearsSaved,
    remainingMonthsSaved,
    interestSaved,
  }
}

export default function OverpaymentCalc({ faqs, relatedTools }: Props) {
  const [balance, setBalance] = useState('')
  const [rate, setRate] = useState(defaults.interestRate.toString())
  const [term, setTerm] = useState(defaults.mortgageTermYears.toString())
  const [overpayment, setOverpayment] = useState('')
  const [calculated, setCalculated] = useState(false)

  const principal = parseFloat(balance) || 0
  const annualRate = (parseFloat(rate) || 0) / 100
  const termYears = parseInt(term) || 25
  const monthlyOverpay = parseFloat(overpayment) || 0

  const result = principal > 0 ? simulate(principal, annualRate, termYears, monthlyOverpay) : null

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault()
    setCalculated(true)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <PageHeader
        title="Mortgage Overpayment Calculator"
        description="Find out how much time and interest you could save by making regular overpayments on your mortgage."
      />

      <form onSubmit={handleCalculate} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="balance" className="block text-sm font-medium text-gray-700">Current mortgage balance</label>
            <div className="relative mt-1">
              <span className="pointer-events-none absolute left-3 top-2.5 text-sm text-gray-400">&pound;</span>
              <input type="number" id="balance" min="1000" step="1000" required value={balance}
                onChange={(e) => { setBalance(e.target.value); setCalculated(false) }}
                className="block w-full rounded-lg border border-gray-300 py-2.5 pl-7 pr-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                placeholder="180000" />
            </div>
          </div>
          <div>
            <label htmlFor="rate" className="block text-sm font-medium text-gray-700">Interest rate (% per year)</label>
            <input type="number" id="rate" min="0" max="15" step="0.01" required value={rate}
              onChange={(e) => { setRate(e.target.value); setCalculated(false) }}
              className="mt-1 block w-full rounded-lg border border-gray-300 py-2.5 px-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
          </div>
          <div>
            <label htmlFor="term" className="block text-sm font-medium text-gray-700">Remaining term (years)</label>
            <input type="number" id="term" min="1" max="40" step="1" required value={term}
              onChange={(e) => { setTerm(e.target.value); setCalculated(false) }}
              className="mt-1 block w-full rounded-lg border border-gray-300 py-2.5 px-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
          </div>
          <div>
            <label htmlFor="overpay" className="block text-sm font-medium text-gray-700">Monthly overpayment</label>
            <div className="relative mt-1">
              <span className="pointer-events-none absolute left-3 top-2.5 text-sm text-gray-400">&pound;</span>
              <input type="number" id="overpay" min="0" step="50" required value={overpayment}
                onChange={(e) => { setOverpayment(e.target.value); setCalculated(false) }}
                className="block w-full rounded-lg border border-gray-300 py-2.5 pl-7 pr-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                placeholder="200" />
            </div>
          </div>
        </div>
        <button type="submit"
          className="mt-6 w-full rounded-lg bg-brand-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 sm:w-auto sm:px-8">
          Calculate savings
        </button>
      </form>

      {calculated && result && (
        <div className="mt-8 rounded-xl border border-brand-200 bg-brand-50 p-6">
          <h2 className="text-lg font-semibold text-brand-900">Your Results</h2>

          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-gray-500">Without overpayments</h3>
              <p className="mt-2 text-sm text-gray-600">Monthly payment: <strong>{fmt(result.normalPayment)}</strong></p>
              <p className="text-sm text-gray-600">Total interest: <strong>{fmt(result.normalInterest)}</strong></p>
              <p className="text-sm text-gray-600">Total payable: <strong>{fmt(result.normalTotal)}</strong></p>
              <p className="text-sm text-gray-600">Mortgage ends: <strong>{termYears} years</strong></p>
            </div>
            <div className="rounded-lg border border-brand-300 bg-brand-50 p-4">
              <h3 className="text-sm font-semibold text-brand-700">With {fmt(monthlyOverpay)}/month overpayment</h3>
              <p className="mt-2 text-sm text-gray-600">Monthly payment: <strong>{fmt(result.normalPayment + monthlyOverpay)}</strong></p>
              <p className="text-sm text-gray-600">Total interest: <strong>{fmt(result.overpayTotalInterest)}</strong></p>
              <p className="text-sm text-gray-600">Total payable: <strong>{fmt(result.overpayTotalPaid)}</strong></p>
              <p className="text-sm text-gray-600">Mortgage ends: <strong>{Math.floor(result.overpayMonths / 12)} years {result.overpayMonths % 12} months</strong></p>
            </div>
          </div>

          {result.monthsSaved > 0 && (
            <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-3 text-sm font-medium text-green-800">
              You could save <strong>{fmt(result.interestSaved)}</strong> in interest and pay off your mortgage <strong>{result.yearsSaved > 0 ? `${result.yearsSaved} year${result.yearsSaved !== 1 ? 's' : ''}` : ''}{result.yearsSaved > 0 && result.remainingMonthsSaved > 0 ? ' and ' : ''}{result.remainingMonthsSaved > 0 ? `${result.remainingMonthsSaved} month${result.remainingMonthsSaved !== 1 ? 's' : ''}` : ''}</strong> early.
            </div>
          )}

          <p className="mt-3 text-xs text-brand-700">
            Check your lender&apos;s overpayment limit (often 10% per year) to avoid early repayment charges.
          </p>
        </div>
      )}

      <section className="prose mt-12 max-w-none text-gray-700">
        <h2>How Do Mortgage Overpayments Work?</h2>
        <p>
          An overpayment is any amount you pay on top of your required monthly mortgage repayment. This extra money goes
          directly towards reducing your outstanding balance, which means you are charged less interest going forward.
        </p>
        <h2>Types of Overpayment</h2>
        <ul>
          <li><strong>Regular overpayments</strong> — adding a fixed extra amount to your monthly payment.</li>
          <li><strong>Lump-sum overpayments</strong> — making a one-off payment when you have spare cash.</li>
        </ul>
        <h2>Things to Check Before Overpaying</h2>
        <ul>
          <li><strong>Early repayment charges</strong> — many fixed-rate deals charge a penalty if you overpay more than 10% per year.</li>
          <li><strong>Higher-interest debts</strong> — clear credit cards or loans first if they carry a higher rate.</li>
          <li><strong>Emergency fund</strong> — keep 3-6 months of expenses in accessible savings before overpaying.</li>
        </ul>
      </section>

      <FaqSection faqs={faqs} />
      <RelatedTools tools={relatedTools} />
    </div>
  )
}
