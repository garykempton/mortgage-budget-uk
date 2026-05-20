import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read our privacy policy to understand how Mortgage Budget UK collects, uses, and protects your personal data.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <PageHeader title="Privacy Policy" />

      <article className="prose max-w-none text-gray-700">
        <p>
          <strong>Last updated:</strong> May 2026
        </p>

        <p>
          Mortgage Budget UK (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting
          your privacy. This policy explains how we collect, use, and safeguard your information when you visit our
          website.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We do not require you to create an account or provide personal information to use our calculators. If you
          contact us via our contact form, we collect the information you provide (name, email address, and message
          content) solely to respond to your enquiry.
        </p>

        <h2>Cookies and Analytics</h2>
        <p>
          We use cookies and similar technologies to understand how visitors use our website. When you first visit, a
          consent banner lets you accept or reject non-essential cookies. We only enable analytics and advertising
          cookies after you give consent.
        </p>
        <p>
          We use Google Analytics 4 (GA4) to collect anonymous usage data such as pages visited, session duration, and
          referral source. Google Analytics uses cookies to help us analyse traffic patterns. No personally identifiable
          information is shared with Google. You can opt out of Google Analytics at any time using the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics Opt-out Browser Add-on
          </a>.
        </p>
        <p>
          <strong>Essential cookies</strong> (always active): These are required for the website to function, such as
          remembering your cookie consent preference.
        </p>
        <p>
          <strong>Analytics cookies</strong> (require consent): Used by Google Analytics to understand how visitors
          interact with the site.
        </p>
        <p>
          <strong>Advertising cookies</strong> (require consent): Used by advertising networks to serve relevant ads
          and measure their effectiveness.
        </p>

        <h2>Advertising</h2>
        <p>
          We may display advertisements from third-party advertising networks (such as Google AdSense). These networks
          may use cookies to serve ads based on your prior visits to this and other websites. You can opt out of
          personalised advertising by visiting your Google Ads settings or the Network Advertising Initiative opt-out
          page.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or
          content of these external sites. We encourage you to read their privacy policies before providing any personal
          information.
        </p>

        <h2>Data Retention</h2>
        <p>
          Contact form submissions are retained only for as long as necessary to respond to your enquiry and are then
          deleted.
        </p>

        <h2>Your Rights</h2>
        <p>
          Under UK data protection law (UK GDPR), you have the right to access, correct, or delete any personal data we
          hold about you. To exercise these rights, please contact us using the details on our contact page.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted on this page with an updated
          revision date.
        </p>
      </article>
    </div>
  )
}
