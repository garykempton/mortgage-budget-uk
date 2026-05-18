import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Read the terms and conditions for using the Mortgage Budget UK website and its calculators.',
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <PageHeader title="Terms of Use" />

      <article className="prose max-w-none text-gray-700">
        <p>
          <strong>Last updated:</strong> May 2026
        </p>

        <p>
          By accessing and using the Mortgage Budget UK website, you agree to be bound by these terms. If you do not
          agree with any part of these terms, please do not use the website.
        </p>

        <h2>Use of the Website</h2>
        <p>
          The content on this website is provided for general informational and educational purposes only. Our
          calculators produce estimates based on the information you enter and should not be treated as financial advice
          or as a guarantee of any mortgage offer.
        </p>

        <h2>No Financial Advice</h2>
        <p>
          Mortgage Budget UK does not provide financial, legal, or tax advice. The information on this site is not a
          substitute for professional advice from a qualified, FCA-regulated mortgage adviser, solicitor, or accountant.
          You should always seek independent professional advice before making financial decisions.
        </p>

        <h2>Accuracy of Information</h2>
        <p>
          While we make every effort to ensure the information on this website is accurate and up to date, we do not
          warrant that it is free from errors or omissions. Tax rates, thresholds, and lending criteria may change, and
          we cannot guarantee that our tools reflect the very latest figures at all times.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Mortgage Budget UK accepts no liability for any loss or damage arising
          from your use of, or reliance on, the information or tools provided on this website.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          This website may contain links to third-party websites. These links are provided for your convenience only. We
          have no control over, and accept no responsibility for, the content or practices of external websites.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on this website, including text, design, and code, is the property of Mortgage Budget UK and is
          protected by copyright. You may not reproduce, distribute, or republish any content without our written
          permission.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Continued use of the website after changes are posted
          constitutes acceptance of the revised terms.
        </p>
      </article>
    </div>
  )
}
