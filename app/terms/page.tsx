import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Apex Custom Garage, Dubai.',
};

const sections = [
  {
    title: 'Service Agreement',
    content:
      'By engaging Apex Custom Garage for any automotive service, you enter into a binding service agreement governed by these terms. Work commences only after written approval of the project scope and payment of the required deposit. The agreed scope is documented in a written quotation provided before work begins.',
  },
  {
    title: 'Deposits & Payment',
    content:
      'A minimum deposit of 25% of the total project value is required to reserve a workshop slot. The remaining balance is due upon project completion and before vehicle collection. For projects exceeding AED 50,000, milestone payments may be agreed in the project contract. Deposits are non-refundable for cancellations made within 72 hours of the scheduled start date.',
  },
  {
    title: 'Project Scope Changes',
    content:
      'Any changes to the agreed project scope must be submitted in writing and will result in a revised quotation. Work on scope changes will not commence until the revised quotation is approved and any additional deposit paid. We are not liable for delays caused by scope changes requested mid-project.',
  },
  {
    title: 'Warranties',
    content:
      'Paint and bodywork carries a 2-year warranty against delamination, peeling, and verified application defects. Accessory installation is covered by the manufacturer\'s warranty of the installed component, plus a 90-day labour warranty from us. Warranties are void if the vehicle is modified after collection, involved in a collision, or not maintained per our care guidelines.',
  },
  {
    title: 'Liability Limitations',
    content:
      'Our liability is limited to the cost of the specific service that is the subject of a claim. We are not liable for consequential losses including but not limited to loss of use, loss of income, or market value changes. Vehicles are stored at the owner\'s risk. We carry workshop public liability insurance; details are available on request.',
  },
  {
    title: 'Vehicle Collection',
    content:
      'Completed vehicles must be collected within 5 business days of completion notification. Storage charges of AED 200 per day apply after this period. We reserve the right to move vehicles to external storage after 14 days, at the owner\'s cost, if collection has not been arranged.',
  },
  {
    title: 'Dispute Resolution',
    content:
      'In the event of a dispute, both parties agree to first attempt resolution through direct negotiation. If unresolved within 30 days, disputes shall be referred to mediation under the Dubai International Arbitration Centre (DIAC) rules. These terms are governed by the laws of the Emirate of Dubai and the applicable federal laws of the UAE.',
  },
  {
    title: 'Contact',
    content:
      'For any questions regarding these terms, contact us at builds@apexcustomgarage.ae or visit us at Workshop 14, Al Quoz Industrial Area 3, Dubai, UAE.',
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-l-snow">
      <section className="bg-l-cream pt-28 pb-12 px-6 sm:px-8 border-b border-l-border">
        <div className="max-w-3xl mx-auto">
          <SectionHeader label="Legal" title="TERMS OF SERVICE" subtitle="Last updated: January 2025" />
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
