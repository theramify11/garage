'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';

type FormData = {
  name: string; email: string; phone: string;
  vehicle: string; service: string; message: string;
};

function sanitize(v: string): string { return v.replace(/<[^>]*>/g, '').trim(); }

const services = [
  'Custom Paint & Bodywork', 'Paint Protection Film (PPF)', 'Ceramic Coating',
  'Full Vehicle Wrap', 'Performance Accessories', 'Interior Upholstery & Tech',
  'Complete Restomod Project', 'Other / General Enquiry',
];

const hours = [
  ['Monday','8:00 AM — 6:00 PM'], ['Tuesday','8:00 AM — 6:00 PM'],
  ['Wednesday','8:00 AM — 6:00 PM'], ['Thursday','8:00 AM — 6:00 PM'],
  ['Friday','8:00 AM — 5:00 PM'], ['Saturday','9:00 AM — 3:00 PM'],
  ['Sunday','Closed'],
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setLoading(true);
    const _clean = {
      name: sanitize(data.name), email: sanitize(data.email),
      phone: sanitize(data.phone), vehicle: sanitize(data.vehicle),
      service: sanitize(data.service), message: sanitize(data.message),
    };
    void _clean; // suppress unused warning — in production POST to API
    setTimeout(() => { setLoading(false); setSubmitted(true); reset(); }, 1400);
  };

  return (
    <div className="min-h-screen bg-l-snow">
      <section className="bg-l-cream pt-28 pb-14 px-6 sm:px-8 border-b border-l-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Get In Touch" title="BOOK A CONSULTATION"
            subtitle="Describe your project and our team will respond within one business day." />
        </div>
      </section>

      <section className="py-14 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 xl:gap-14">

          {/* Form */}
          <div>
            {submitted ? (
              <div className="card p-10">
                <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center mb-5">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M4 11l5 5 9-9" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-4xl text-l-carbon mb-2">REQUEST RECEIVED</h3>
                <div className="amber-bar w-12 mb-4" />
                <p className="font-body text-sm text-l-mid leading-relaxed mb-2">
                  Our team will review your enquiry and contact you within one business day.
                </p>
                <p className="font-body text-sm text-l-muted mb-7">
                  Urgent? Call{' '}
                  <a href="tel:+97143889200" className="text-l-amber hover:text-l-amber2 transition-colors">+971 4 388 9200</a>
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline text-[11px]">Send Another Enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div>
                  <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-l-muted mb-1.5 font-semibold">
                    Full Name <span className="text-l-amber">*</span>
                  </label>
                  <input {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'At least 2 characters' } })}
                    type="text" placeholder="Your full name" className="input-field" autoComplete="name" />
                  {errors.name && <p className="font-body text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-l-muted mb-1.5 font-semibold">
                      Email <span className="text-l-amber">*</span>
                    </label>
                    <input {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' } })}
                      type="email" placeholder="you@example.com" className="input-field" autoComplete="email" />
                    {errors.email && <p className="font-body text-xs text-red-500 mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-l-muted mb-1.5 font-semibold">
                      Phone <span className="text-l-amber">*</span>
                    </label>
                    <input {...register('phone', { required: 'Phone is required', pattern: { value: /^[\+\d\s\-\(\)]{7,20}$/, message: 'Enter a valid phone number' } })}
                      type="tel" placeholder="+971 50 000 0000" className="input-field" autoComplete="tel" />
                    {errors.phone && <p className="font-body text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-l-muted mb-1.5 font-semibold">
                    Vehicle (Make / Model / Year) <span className="text-l-amber">*</span>
                  </label>
                  <input {...register('vehicle', { required: 'Vehicle details required' })}
                    type="text" placeholder="e.g. 2022 Toyota Fortuner" className="input-field" />
                  {errors.vehicle && <p className="font-body text-xs text-red-500 mt-1">{errors.vehicle.message}</p>}
                </div>

                <div>
                  <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-l-muted mb-1.5 font-semibold">
                    Service Interest <span className="text-l-amber">*</span>
                  </label>
                  <select {...register('service', { required: 'Please select a service' })} className="input-field" defaultValue="">
                    <option value="" disabled>Select a service...</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <p className="font-body text-xs text-red-500 mt-1">{errors.service.message}</p>}
                </div>

                <div>
                  <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-l-muted mb-1.5 font-semibold">
                    Project Details <span className="text-l-amber">*</span>
                  </label>
                  <textarea {...register('message', { required: 'Please describe your project', minLength: { value: 20, message: 'Minimum 20 characters' } })}
                    rows={5} placeholder="Describe the finish or modifications, your timeline, and any specific requirements."
                    className="input-field resize-none" />
                  {errors.message && <p className="font-body text-xs text-red-500 mt-1">{errors.message.message}</p>}
                </div>

                <button type="submit" disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <circle cx="7" cy="7" r="5" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                        <path d="M7 2a5 5 0 0 1 5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Submit Enquiry'}
                </button>
                <p className="font-body text-[10px] text-l-subtle text-center">
                  By submitting, you agree to our{' '}
                  <Link href="/privacy" className="text-l-amber hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-4">
            {/* Location */}
            <div className="card p-5">
              <div className="w-10 h-[3px] bg-gradient-to-r from-l-amber to-transparent rounded mb-3" />
              <h3 className="font-display text-xl text-l-carbon mb-3">WORKSHOP LOCATION</h3>
              <p className="font-body text-sm text-l-mid mb-0.5">Workshop 14, Al Quoz Industrial Area 3</p>
              <p className="font-body text-xs text-l-muted mb-4">Dubai, United Arab Emirates</p>
              <div className="w-full h-32 border border-l-border rounded-lg bg-l-cream flex flex-col items-center justify-center gap-1.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2C7.24 2 5 4.24 5 7c0 4.5 5 10 5 10s5-5.5 5-10c0-2.76-2.24-5-5-5z" stroke="#e8650a" strokeWidth="1.4"/>
                  <circle cx="10" cy="7" r="1.8" stroke="#e8650a" strokeWidth="1.4"/>
                </svg>
                <p className="font-body text-[10px] text-l-muted text-center">Al Quoz Industrial Area 3, Dubai</p>
              </div>
            </div>

            {/* Hours */}
            <div className="card p-5">
              <div className="w-10 h-[3px] bg-gradient-to-r from-l-amber to-transparent rounded mb-3" />
              <h3 className="font-display text-xl text-l-carbon mb-3">WORKING HOURS</h3>
              <table className="w-full">
                <tbody>
                  {hours.map(([day, time]) => (
                    <tr key={day} className="border-b border-l-border last:border-0">
                      <td className="font-body text-xs text-l-mid py-2 pr-4">{day}</td>
                      <td className={`font-body text-xs py-2 text-right font-medium ${time === 'Closed' ? 'text-l-subtle' : 'text-l-amber'}`}>{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Contact */}
            <div className="card p-5">
              <div className="w-10 h-[3px] bg-gradient-to-r from-l-amber to-transparent rounded mb-3" />
              <h3 className="font-display text-xl text-l-carbon mb-3">DIRECT CONTACT</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-body text-[10px] uppercase tracking-widest text-l-muted mb-0.5">Phone</p>
                  <a href="tel:+97143889200" className="font-body text-sm text-l-carbon hover:text-l-amber transition-colors">+971 4 388 9200</a>
                </div>
                <div>
                  <p className="font-body text-[10px] uppercase tracking-widest text-l-muted mb-0.5">Email</p>
                  <a href="mailto:builds@apexcustomgarage.ae" className="font-body text-sm text-l-carbon hover:text-l-amber transition-colors break-all">
                    builds@apexcustomgarage.ae
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
