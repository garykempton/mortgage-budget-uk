'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import FaqSection from '@/components/FaqSection'
import RelatedTools from '@/components/RelatedTools'
import AffiliateCTA from '@/components/AffiliateCTA'
import NewsletterSignup from '@/components/NewsletterSignup'
import { defaults } from '@/config/ukRates'

interface Props {
  faqs: { question: string; answer: string }[]
  relatedTools: { title: string; href: string }[]
}

function fmt(n: number) {
  return n.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 })
}

export default function RentVsBuyCalc({ faqs, relatedTools }: Props) {
  const [propertyPrice, setPropertyPrice] = useState('')
  const [depositPct, setDepositPct] = useState('10')
  const [mortgageRate, setMortgageRate] = useState(defaults.interestRate.toString())
  const [mortgageTerm, setMortgageTerm] = useState(defaults.mortgageTermYears.toString())
  const [monthlyRent, setMonthlyRent] = useState('')
  const [rentGrowth, setRentGrowth] = useState(defaults.rentGrowthRate.toString())
  const [propertyGrowth, setPropertyGrowth] = useState(defaults.propertyGrowthRate.toString())
  const [yearsToCompare, setYearsToCompare] = useState('10')
  const [calculated, setCalculated] = useState(false)

  const price = parseFloat(propertyPrice) || 0
  const depPct = parseFloat(depositPct) || 10
  const deposit = price * (depPct / 100)
  const loan = price - deposit
  const rate = (parseFloat(mortgageRate) || 0) / 100
  const monthlyRate = rate / 12
  const termMonths = (parseInt(mortgageTerm) || 25) * 12
  const rent = parseFloat(monthlyRent) || 0
  const rentGr = (parseFloat(rentGrowth) || 0) / 100
  const propGr = (parseFloat(propertyGrowth) || 0) / 100
  const years = parseInt(yearsToCompare) || 10
  const months = years * 12

  // Monthly mortgage payment
  let monthlyMortgage = 0
  if (loan > 0 && monthlyRate > 0) {
    monthlyMortgage = (loan * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1)
  }

  // Total cost of buying over period
  const maintenanceRate = 0.01 // 1% of property value per year
  let totalBuyCost = deposit
  let totalRentCost = 0
  let currentRent = rent

  for (let y = 0; y < years; y++) {
    totalBuyCost += monthlyMortgage * 12 + price * Math.pow(1 + propGr, y) * maintenanceRate
    totalRentCost += currentRent * 12
    currentRent *= (1 + rentGr)
  }

  // Property value and equity at end
  const futureValue = price * Math.pow(1 + propGr, years)
  // Remaining mortgage balance after `months` payments
  let remainingBalance = loan
  if (loan > 0 && monthlyRate > 0) {
    const paidMonths = Math.min(months, termMonths)
    remainingBalance = loan * Math.pow(1 + monthlyRate, paidMonths) - monthlyMortgage * ((Math.pow(1 + monthlyRate, paidMonths) - 1) / monthlyRate)
    remainingBalance = Math.max(0, remainingBalance)
  }
  const equity = futureValue - remainingBalance
  const netBuyCost = totalBuyCost - equity // what you "spent" minus what you own

  const buyingIsCheaper = netBuyCost < totalRentCost
  const saving = Math.abs(totalRentCost - netBuyCost)

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault()
    setCalculated(true)
  }

  function reset() { setCalculated(false) }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <PageHeader
        title="Rent vs Buy Calculator"
        description="Compare the true cost of renting against buying over time. See which option could leave you better off financially in the long run."
      />

      <form onSubmit={handleCalculate} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-sm font-semibold text-gray-900">If you buy</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Property price</label>
            <div className="relative mt-1">
              <span className="pointer-events-none absolute left-3 top-2.5 text-sm text-gray-400">&pound;</span>
              <input type="number" id="price" min="0" step="1000" required value={propertyPrice}
                onChange={(e) => { setPropertyPrice(e.target.value); reset() }}
                className="block w-full rounded-lg border border-gray-300 py-2.5 pl-7 pr-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" placeholder="250000" />
            </div>
          </div>
          <div>
            <label htmlFor="dep" className="block text-sm font-medium text-gray-700">Deposit (%)</label>
            <input type="number" id="dep" min="5" max="95" step="1" value={depositPct}
              onChange={(e) => { setDepositPct(e.target.value); reset() }}
              className="mt-1 block w-full rounded-lg border border-gray-300 py-2.5 px-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
          </div>
          <div>
            <label htmlFor="mrate" className="block text-sm font-medium text-gray-700">Mortgage rate (%)</label>
            <input type="number" id="mrate" min="0" max="15" step="0.1" value={mortgageRate}
              onChange={(e) => { setMortgageRate(e.target.value); reset() }}
              className="mt-1 block w-full rounded-lg border border-gray-300 py-2.5 px-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
          </div>
          <div>
            <label htmlFor="mterm" className="block text-sm font-medium text-gray-700">Mortgage term (years)</label>
            <input type="number" id="mterm" min="5" max="40" step="1" value={mortgageTerm}
              onChange={(e) => { setMortgageTerm(e.target.value); reset() }}
              className="mt-1 block w-full rounded-lg border border-gray-300 py-2.5 px-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
          </div>
        </div>

        <h3 className="mb-4 mt-8 text-sm font-semibold text-gray-900">If you rent</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="rent" className="block text-sm font-medium text-gray-700">Monthly rent</label>
            <div className="relative mt-1">
              <span className="pointer-events-none absolute left-3 top-2.5 text-sm text-gray-400">&pound;</span>
              <input type="number" id="rent" min="0" step="50" required value={monthlyRent}
                onChange={(e) => { setMonthlyRent(e.target.value); reset() }}
                className="block w-full rounded-lg border border-gray-300 py-2.5 pl-7 pr-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" placeholder="1200" />
            </div>
          </div>
          <div>
            <label htmlFor="rg" className="block text-sm font-medium text-gray-700">Annual rent increase (%)</label>
            <input type="number" id="rg" min="0" max="15" step="0.5" value={rentGrowth}
              onChange={(e) => { setRentGrowth(e.target.value); reset() }}
              className="mt-1 block w-full rounded-lg border border-gray-300 py-2.5 px-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
          </div>
        </div>

        <h3 className="mb-4 mt-8 text-sm font-semibold text-gray-900">Assumptions</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="pg" className="block text-sm font-medium text-gray-700">Annual property growth (%)</label>
            <input type="number" id="pg" min="-5" max="15" step="0.5" value={propertyGrowth}
              onChange={(e) => { setPropertyGrowth(e.target.value); reset() }}
              className="mt-1 block w-full rounded-lg border border-gray-300 py-2.5 px-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
          </div>
          <div>
            <label htmlFor="yrs" className="block text-sm font-medium text-gray-700">Compare over (years)</label>
            <input type="number" id="yrs" min="1" max="40" step="1" value={yearsToCompare}
              onChange={(e) => { setYearsToCompare(e.target.value); reset() }}
              className="mt-1 block w-full rounded-lg border border-gray-300 py-2.5 px-4 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
          </div>
        </div>

        <button type="submit"
          className="mt-6 w-full rounded-lg bg-brand-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 sm:w-auto sm:px-8">
          Compare costs
        </button>
      </form>

      {calculated && price > 0 && rent > 0 && (
        <div className="mt-8 rounded-xl border border-brand-200 bg-brand-50 p-6">
          <h2 className="text-lg font-semibold text-brand-900">Results Over {years} Years</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-brand-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-brand-800">Buying</h3>
              <p className="mt-2 text-sm text-gray-600">Total spent: <strong>{fmt(totalBuyCost)}</strong></p>
              <p className="text-sm text-gray-600">Property value: <strong>{fmt(futureValue)}</strong></p>
              <p className="text-sm text-gray-600">Equity built: <strong>{fmt(equity)}</strong></p>
              <p className="text-sm text-gray-600">Net cost (spent &minus; equity): <strong>{fmt(netBuyCost)}</strong></p>
              <p className="mt-1 text-sm text-gray-600">Monthly payment: <strong>{fmt(monthlyMortgage)}</strong></p>
            </div>
            <div className="rounded-lg border border-brand-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-brand-800">Renting</h3>
              <p className="mt-2 text-sm text-gray-600">Total rent paid: <strong>{fmt(totalRentCost)}</strong></p>
              <p className="text-sm text-gray-600">Equity built: <strong>{fmt(0)}</strong></p>
              <p className="text-sm text-gray-600">Net cost: <strong>{fmt(totalRentCost)}</strong></p>
              <p className="mt-1 text-sm text-gray-600">Starting rent: <strong>{fmt(rent)}/month</strong></p>
              <p className="text-sm text-gray-600">Rent in year {years}: <strong>{fmt(rent * Math.pow(1 + rentGr, years - 1))}/month</strong></p>
            </div>
          </div>
          <div className={`mt-4 rounded-lg p-3 text-sm font-medium ${buyingIsCheaper ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-amber-50 text-amber-800 border border-amber-200'}`}>
            {buyingIsCheaper
              ? `Buying could leave you ${fmt(saving)} better off over ${years} years (after accounting for the equity you build).`
              : `Renting could be ${fmt(saving)} cheaper over ${years} years, though you would not build any equity.`}
          </div>
          <p className="mt-3 text-xs text-brand-700">
            This model uses simplified assumptions. It does not include stamp duty, solicitor fees, or investment returns on savings. Actual outcomes will vary.
          </p>
        </div>
      )}

      {calculated && price > 0 && rent > 0 && <AffiliateCTA />}

      <section className="prose mt-12 max-w-none text-gray-700">
        <h2>Renting vs Buying: Key Differences</h2>
        <p>
          Buying builds equity over time but comes with upfront costs and ongoing responsibilities. Renting offers
          flexibility but you do not benefit from property price growth.
        </p>
        <h2>Costs of Buying</h2>
        <ul>
          <li>Deposit (typically 5&ndash;20% of the property price)</li>
          <li>Stamp duty, solicitor fees, and survey costs</li>
          <li>Monthly mortgage repayments</li>
          <li>Buildings insurance, maintenance, and repairs</li>
        </ul>
        <h2>When Does Buying Make More Sense?</h2>
        <p>
          Generally, the longer you plan to stay in one place, the more buying makes financial sense. Over shorter
          periods, the upfront costs can outweigh the benefits.
        </p>
      </section>

      <NewsletterSignup />
      <FaqSection faqs={faqs} />
      <RelatedTools tools={relatedTools} />
    </div>
  )
}
