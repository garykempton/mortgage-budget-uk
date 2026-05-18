'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import FaqSection from '@/components/FaqSection'
import RelatedTools from '@/components/RelatedTools'
import { sdltBands, TAX_YEAR } from '@/config/ukRates'

interface Props {
  faqs: { question: string; answer: string }[]
  relatedTools: { title: string; href: string }[]
}

function fmt(n: number) {
  return n.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 })
}

function calculateSDLT(price: number, buyerType: string): { total: number; effectiveRate: number; breakdown: { band: string; tax: number }[] } {
  if (price <= 0) return { total: 0, effectiveRate: 0, breakdown: [] }

  let bands: { threshold: number; rate: number }[]
  const surcharge = buyerType === 'additional' ? sdltBands.additionalProperty : 0

  if (buyerType === 'firstTime' && price <= 500_000) {
    bands = sdltBands.firstTimeBuyer
  } else {
    bands = sdltBands.standard
  }

  let total = 0
  let prev = 0
  const breakdown: { band: string; tax: number }[] = []

  for (const band of bands) {
    if (price <= prev) break
    const taxable = Math.min(price, band.threshold) - prev
    const rate = band.rate + surcharge
    const tax = taxable * rate
    if (taxable > 0) {
      const upper = band.threshold === Infinity ? '+' : fmt(band.threshold)
      breakdown.push({
        band: `${fmt(prev)} – ${upper} @ ${(rate * 100).toFixed(0)}%`,
        tax,
      })
    }
    total += tax
    prev = band.threshold
  }

  // For additional properties, also add surcharge on the 0% bands
  if (buyerType === 'additional' && price > 0) {
    // Already handled via surcharge addition above
  }

  const effectiveRate = price > 0 ? (total / price) * 100 : 0
  return { total, effectiveRate, breakdown }
}

export default function StampDutyCalc({ faqs, relatedTools }: Props) {
  const [propertyPrice, setPropertyPrice] = useState('')
  const [buyerType, setBuyerType] = useState('standard')
  const [calculated, setCalculated] = useState(false)

  const price = parseFloat(propertyPrice) || 0
  const result = calculateSDLT(price, buyerType)

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault()
    setCalculated(true)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <PageHeader
        title="Stamp Duty Calculator"
        description={`Calculate how much Stamp Duty Land Tax (SDLT) you will owe on your property purchase in England or Northern Ireland. Updated for the ${TAX_YEAR} tax year.`}
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
                placeholder="300000" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Buyer type</label>
            <div className="mt-2 space-y-2">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="radio" name="buyer" checked={buyerType === 'firstTime'}
                  onChange={() => { setBuyerType('firstTime'); setCalculated(false) }}
                  className="h-4 w-4 text-brand-600 focus:ring-brand-500" />
                First-time buyer
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="radio" name="buyer" checked={buyerType === 'standard'}
                  onChange={() => { setBuyerType('standard'); setCalculated(false) }}
                  className="h-4 w-4 text-brand-600 focus:ring-brand-500" />
                Moving home (standard)
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="radio" name="buyer" checked={buyerType === 'additional'}
                  onChange={() => { setBuyerType('additional'); setCalculated(false) }}
                  className="h-4 w-4 text-brand-600 focus:ring-brand-500" />
                Additional property / buy-to-let
              </label>
            </div>
          </div>
        </div>
        <button type="submit"
          className="mt-6 w-full rounded-lg bg-brand-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 sm:w-auto sm:px-8">
          Calculate stamp duty
        </button>
      </form>

      {calculated && price > 0 && (
        <div className="mt-8 rounded-xl border border-brand-200 bg-brand-50 p-6">
          <h2 className="text-lg font-semibold text-brand-900">Your Stamp Duty</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-brand-700">Total SDLT payable</p>
              <p className="text-3xl font-bold text-brand-900">{fmt(result.total)}</p>
            </div>
            <div>
              <p className="text-sm text-brand-700">Effective tax rate</p>
              <p className="text-3xl font-bold text-brand-900">{result.effectiveRate.toFixed(2)}%</p>
            </div>
          </div>
          {result.breakdown.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-brand-800">Breakdown</h3>
              <table className="mt-2 w-full text-sm">
                <tbody>
                  {result.breakdown.map((row, i) => (
                    <tr key={i} className="border-t border-brand-200">
                      <td className="py-2 text-brand-700">{row.band}</td>
                      <td className="py-2 text-right font-medium text-brand-900">{fmt(row.tax)}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-brand-300">
                    <td className="py-2 font-semibold text-brand-900">Total</td>
                    <td className="py-2 text-right font-bold text-brand-900">{fmt(result.total)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          <p className="mt-4 text-xs text-brand-700">
            Based on {TAX_YEAR} SDLT rates for England and Northern Ireland. Scotland (LBTT) and Wales (LTT) have different rates.
          </p>
        </div>
      )}

      <section className="prose mt-12 max-w-none text-gray-700">
        <h2>What Is Stamp Duty Land Tax?</h2>
        <p>
          Stamp Duty Land Tax (SDLT) is a tax paid to HMRC when you purchase a property or piece of land over a certain
          price in England and Northern Ireland.
        </p>
        <h2>How SDLT Bands Work</h2>
        <p>
          SDLT is charged in bands — you only pay the rate on the portion of the purchase price that falls within each
          band, not on the entire amount. This is similar to how income tax works.
        </p>
        <h2>First-Time Buyer Relief</h2>
        <p>
          First-time buyers pay no stamp duty on the first &pound;300,000 and 5% on the portion between &pound;300,000
          and &pound;500,000. If the property costs more than &pound;500,000, the relief does not apply and standard
          rates are charged.
        </p>
        <h2>Additional Property Surcharge</h2>
        <p>
          Buying a second home or buy-to-let property attracts a 5% surcharge on top of the standard rates across all
          bands. This can add a substantial amount to your purchase costs.
        </p>
      </section>

      <FaqSection faqs={faqs} />
      <RelatedTools tools={relatedTools} />
    </div>
  )
}
