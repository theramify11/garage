import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Apex Custom Garage, Dubai.',
};

const sections = [
  {
    title: 'Data We Collect',
    content:
      'When you submit an enquiry through our contact form, we collect your name, email address, phone number, vehicle details, and the details of your project enquiry. We do not collect payment card information through this website. If you browse without submitting a form, we collect no personally identifiable information beyond standard server access logs (IP address, browser type, pages visited).',
  },
  {
    title: 'How We Use Your Data',
    content:
      'Information submitted via our contact form is used solely to respond to your enquiry and manage your project with us. We do not sell, license, or otherwise transfer your personal data to third parties. Your data may be shared internally within our workshop team strictly for the purpose of fulfilling your request.',
  },
  {
    title: 'Cookies',
    content:
      'This website uses only essential cookies required for its operation. We do not use advertising cookies, tracking pixels, or third-party analytics that collect personally identifiable information. You may disable cookies in your browser settings, though some site features may be affected.',
  },
  {
    title: 'Third-Party Services',
    content:
      'We may use third-party services for hosting and infrastructure (such as Vercel). These providers are governed by their own privacy policies. Images on this website are served from Unsplash\'s CDN. No personal data from our forms is transmitted to these third parties.',
  },
  {
    title: 'Data Retention',
    content:
      'Enquiry data is retained for a period of 24 months, after which it is securely deleted unless a contractual relationship requires longer retention. You may request deletion of your data at any time by contacting us.',
  },
  {
    title: 'Your Rights',
    content:
      'You have the right to access, correct, or request deletion of any personal data we hold about you. To exercise these rights, contact us at builds@apexcustomgarage.ae. We will respond within 14 business days.',
  },
  {
    title: 'Contact',
    content:
      'For any privacy-related questions, write to: Apex Custom Garage, Workshop 14, Al Quoz Industrial Area 3, Dubai, UAE. Email: builds@apexcustomgarage.ae',
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-l-snow">
      <section className="bg-l-cream pt-28 pb-12 px-6 sm:px-8 border-b border-l-border">
        <div className="max-w-3xl mx-auto">
          <SectionHeader label="Legal" title="PRIVACY POLICY" subtitle="Last updated: January 2025" />
        </div>
      </section>
      <section className="py-14 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          {sections.map((s) => (
            <div key={s.title} className="card p-7">
              <h2 className="font-display text-2xl text-l-carbon tracking-wide mb-2">{s.title.toUpperCase()}</h2>
              <div className="amber-bar w-8 mb-4" />
              <p className="font-body text-sm text-l-muted leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
