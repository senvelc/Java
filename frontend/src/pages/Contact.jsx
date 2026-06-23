import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import SocialBar from '../components/SocialBar';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save locally (frontend-only mock)
    const existing = JSON.parse(localStorage.getItem('df_contacts') || '[]');
    existing.unshift({ ...form, ts: Date.now() });
    localStorage.setItem('df_contacts', JSON.stringify(existing));
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', city: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-[70px]">
      <section className="bg-[#1a2632] text-white py-14">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          <p className="text-[#f47920] text-[13px] tracking-[3px] font-semibold uppercase">Get in Touch</p>
          <h1 className="text-[32px] lg:text-[44px] font-bold mt-2">Contact Us</h1>
          <div className="w-16 h-[3px] bg-[#f47920] mt-4"></div>
          <p className="mt-5 max-w-2xl text-white/75 text-[14.5px] leading-relaxed">
            Join #TeamDevendra or share your suggestions. Every voice matters in shaping a better Maharashtra.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#f6f6f8]">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Form */}
          <div className="bg-white p-8 lg:p-10 rounded-sm shadow-sm">
            <h2 className="text-[#1a2632] text-[24px] font-bold">Send a message</h2>
            <div className="w-12 h-[3px] bg-[#f47920] mt-3 mb-6"></div>

            {submitted && (
              <div className="mb-5 p-4 rounded-sm bg-[#f47920]/10 border-l-4 border-[#f47920] flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#f47920]" />
                <p className="text-[#1a2632] text-[14px] font-medium">
                  Thank you! Your message has been recorded.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[12px] font-semibold tracking-wide text-[#1a2632] uppercase mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#f47920] focus:ring-2 focus:ring-[#f47920]/20 text-[14px] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold tracking-wide text-[#1a2632] uppercase mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#f47920] focus:ring-2 focus:ring-[#f47920]/20 text-[14px] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold tracking-wide text-[#1a2632] uppercase mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#f47920] focus:ring-2 focus:ring-[#f47920]/20 text-[14px] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold tracking-wide text-[#1a2632] uppercase mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#f47920] focus:ring-2 focus:ring-[#f47920]/20 text-[14px] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-semibold tracking-wide text-[#1a2632] uppercase mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#f47920] focus:ring-2 focus:ring-[#f47920]/20 text-[14px] resize-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#f47920] hover:bg-[#e06710] text-white text-[13px] font-semibold tracking-wide uppercase rounded-sm transition-colors"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <aside className="space-y-5">
            <div className="bg-[#1a2632] text-white p-7 rounded-sm">
              <h3 className="font-bold text-[18px]">Office Address</h3>
              <div className="w-10 h-[2px] bg-[#f47920] mt-3 mb-5"></div>
              <ul className="space-y-4 text-[13.5px]">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#f47920] mt-1 flex-shrink-0" />
                  <span className="text-white/85 leading-relaxed">
                    Office of Chief Minister,<br />
                    Mantralaya, Mumbai - 400032,<br />
                    Maharashtra, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[#f47920] flex-shrink-0" />
                  <span className="text-white/85">+91 22 2202 0000</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-[#f47920] flex-shrink-0" />
                  <span className="text-white/85">contact@devendrafadnavis.local</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-7 rounded-sm shadow-sm">
              <h3 className="font-bold text-[#1a2632] text-[16px]">Connect on Social</h3>
              <div className="w-10 h-[2px] bg-[#f47920] mt-3 mb-5"></div>
              <div className="bg-[#1a2632] p-4 rounded-sm">
                <SocialBar />
              </div>
              <p className="mt-4 text-[12.5px] text-gray-600 leading-relaxed">
                Follow on social media for the latest updates, photos and announcements.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
