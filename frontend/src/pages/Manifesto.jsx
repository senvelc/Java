import React from 'react';
import { Download, CheckCircle2, FileText } from 'lucide-react';
import { manifestoSections } from '../data/content';

export default function Manifesto() {
  return (
    <div className="pt-[70px]">
      <section className="relative bg-[#1a2632] text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/19488920/pexels-photo-19488920.jpeg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2632] via-[#1a2632]/85 to-[#1a2632]/40" />
        <div className="relative max-w-[1300px] mx-auto px-4 lg:px-6">
          <p className="text-[#f47920] text-[13px] tracking-[3px] font-semibold uppercase">Vision Document</p>
          <h1 className="text-[32px] lg:text-[48px] font-bold mt-3 leading-tight">
            Manifesto - BMC Election 2026
          </h1>
          <div className="w-16 h-[3px] bg-[#f47920] mt-5"></div>
          <p className="mt-6 max-w-2xl text-white/85 text-[15px] leading-relaxed">
            A blueprint for a cleaner, greener, smarter Mumbai. Together we will build the world's most
            liveable megacity – with world-class infrastructure, affordable housing, and citizen-first governance.
          </p>
          <button className="mt-7 inline-flex items-center gap-2 px-6 py-3 bg-[#f47920] hover:bg-[#e06710] text-white text-[13px] font-semibold tracking-wide rounded-sm transition-colors">
            <Download size={16} /> Download full manifesto (PDF)
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              { num: '5L+', label: 'Affordable homes' },
              { num: '1Cr', label: 'Trees to be planted' },
              { num: '500+', label: 'Digital services' },
            ].map((s, i) => (
              <div key={i} className="bg-[#f6f6f8] rounded-sm p-7 border-t-4 border-[#f47920] text-center">
                <p className="text-[#f47920] text-[42px] font-bold leading-none">{s.num}</p>
                <p className="mt-2 text-[#1a2632] font-semibold text-[14px] tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            {manifestoSections.map((sec, i) => (
              <div key={i} className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
                <div className="lg:sticky lg:top-24">
                  <p className="text-[#f47920] text-[12.5px] font-bold tracking-[3px] uppercase">
                    Pillar {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2 className="mt-2 text-[#1a2632] text-[24px] lg:text-[28px] font-bold leading-tight">
                    {sec.title}
                  </h2>
                  <div className="w-12 h-[3px] bg-[#f47920] mt-4"></div>
                </div>
                <ul className="space-y-3">
                  {sec.points.map((p, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 bg-[#f6f6f8] p-5 rounded-sm border-l-4 border-[#f47920] hover:translate-x-1 transition-transform"
                    >
                      <CheckCircle2 size={20} className="text-[#f47920] flex-shrink-0 mt-0.5" />
                      <span className="text-[#444] text-[14.5px] leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#1a2632] p-10 rounded-sm text-center">
            <FileText size={36} className="text-[#f47920] mx-auto" />
            <h3 className="mt-4 text-white text-[24px] font-bold">Read the full Sankalp Patra</h3>
            <p className="mt-3 text-white/75 text-[14px] max-w-xl mx-auto">
              The complete manifesto includes 100+ commitments across 9 sectors. Download the PDF to read every commitment in detail.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 px-7 py-3 bg-[#f47920] hover:bg-[#e06710] text-white text-[13px] font-semibold tracking-wide rounded-sm transition-colors">
              <Download size={16} /> Download Manifesto PDF
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
