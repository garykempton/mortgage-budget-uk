import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Important disclaimer about the use of Mortgage Budget UK calculators and content. We do not provide financial advice.',
}

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <PageHeader title="Disclaimer" />

      <article className="prose max-w-none text-gray-700">
        <p>
          <strong>Last updated:</strong> May 2026
        </p>

        <h2>General Information Only</h2>
        <p>
          The content published on Mortgage Budget UK, including all calculators, guides, and articles, is provided for
          general informational purposes only. It does not constitute financial advice, mortgage advice, tax advice, or
          any other form of professional advice.
        </p>

        <h2>Not Regulated Financial Advice</h2>
        <p>
          Mortgage Budget UK is not authorised or regulated by the Financial Conduct Authority (FCA). We do not
          recommend, arrange, or advise on any mortgage products or financial services. Any decisions you make based on
          the information found on this website are made entirely at your own risk.
        </p>

        <h2>Calculator Estimates</h2>
        <p>
          Our calculators are designed to provide rough estimates to help you plan and budget. The results are based on
          the figures you input and standard formulae. They do not take into account your full personal or financial
          circumstances and should not be relied upon as an indication of what any particular lender may offer you.
        </p>

        <h2>Rates and Thresholds</h2>
        <p>
          Tax rates, stamp duty bands, lending criteria, and other financial thresholds can change at short notice. While
          we strive to keep our tools current, we cannot guarantee that all figures are up to date at any given time.
          Always verify current rates with the relevant authority (e.g. HMRC) or a qualified professional.
        </p>

        <h2>Seek Professional Advice</h2>
        <p>
          Before making any financial decisions — including taking out a mortgage, remortgaging, or making overpayments —
          we strongly recommend that you speak to a qualified, FCA-regulated mortgage adviser who can assess your
          individual circumstances and provide tailored advice.
        </p>

        <h2>Affiliate Links and Advertising</h2>
        <p>
          This website may contain affiliate links or display advertisements from third-party networks. If you click on
          an affiliate link and make a purchase or application, we may receive a small commission at no additional cost to
          you. This does not influence our editorial content or the results of our calculators.
        </p>
      </article>
    </div>
  )
}
