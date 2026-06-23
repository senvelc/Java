import React from 'react';
import { Download, Calendar, Award, Briefcase, Globe, BookOpen } from 'lucide-react';
import { portraitImage } from '../data/content';

const bioPoints = [
  'Shri. Devendra Fadnavis is presently the 21st Chief Minister of Maharashtra. Under his visionary leadership, Maharashtra became the most economically advanced state with the highest industrial output (nearly 25% of the country\u2019s output).',
  'Fadnavis strongly believes that \u2018Politics is an instrument for socio-economic change\u2019 and his 25 year political career in the Maharashtra Vidhanmandal continues to reflect this. His capacity to work tirelessly and relentlessly comes from his mantra of \u2018People First\u2019.',
  'Fadnavis hails from a middle-class progressive family in Nagpur. His diverse educational background includes a Graduate Degree in Law, a Post Graduate Degree in Business Management and a Diploma in Project Management from D.S.E. Berlin.',
  'His political career began at a very young age, in 1992. He was elected as the Councilor at Nagpur Municipal Corporation and served two consecutive terms. He has the distinction of being the second youngest Mayor in India and was the Mayor of Nagpur twice. He has been elected as the MLA for 6 consecutive terms.',
  'Shri Fadnavis holds the record of becoming the first Chief Minister of Maharashtra to complete a full five-year term in the last 47 years and only the second one in the entire history of Maharashtra.',
];

const education = [
  'LLB - Nagpur University (1992)',
  'PG Degree in Business Management',
  'Diploma in Methods and Techniques of Project Management - DSE Berlin',
];

const governance = [
  { years: '1992-2001', role: 'Corporator, Nagpur Municipal Corporation' },
  { years: '1997-2001', role: 'Mayor, City of Nagpur / Mayor in Council' },
  { years: '1999 - Present', role: 'Member, Maharashtra Legislative Assembly (6 terms)' },
  { years: '2014-2019', role: 'Chief Minister, Government of Maharashtra' },
  { years: '2019-2022', role: 'Leader of Opposition, Maharashtra State Assembly' },
  { years: '2022-2024', role: 'Deputy Chief Minister, Government of Maharashtra' },
  { years: 'Current', role: 'Chief Minister, Government of Maharashtra' },
];

const international = [
  'Lee Kuan Yew Exchange Fellow, Lee Kuan Yew School of Public Policy, Singapore',
  'Outstanding Leadership in Development Award by Georgetown University, USA',
  'Honorary Doctorate by Osaka City University, Japan',
  'Best Parliamentarian Award by Commonwealth Parliamentary Association (2002-03)',
  'Nag Bhushan Award by Nag Bhushan Foundation, 2016',
];

const books = [
  { title: 'Arthsankalp Sopya Bhashet', year: '2020', desc: 'A book on how to read and understand budget.' },
  { title: 'AatmaNirbhar Maharashtra - AatmaNirbhar Bharat', year: '2020', desc: 'Available in English, Hindi and Marathi.' },
  { title: 'Bhartiy Samvidhan - Gaouravshali Amritmahotsavi Watchal', year: '2025', desc: 'A reflection on the journey of the Indian Constitution.' },
];

export default function AboutHim() {
  return (
    <div className="pt-[70px]">
      {/* Hero strip */}
      <section className="relative bg-[#1a2632] text-white py-16">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/34842268/pexels-photo-34842268.jpeg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2632] via-[#1a2632]/85 to-transparent" />
        <div className="relative max-w-[1300px] mx-auto px-4 lg:px-6">
          <p className="text-[#f47920] text-[13px] tracking-[3px] font-semibold uppercase">Proficient Leadership</p>
          <h1 className="text-[32px] lg:text-[44px] font-bold mt-3 leading-tight">
            Devendra Fadnavis: Strategist, Leader, Husband, Father, Son
          </h1>
          <div className="w-16 h-[3px] bg-[#f47920] mt-5"></div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6 grid lg:grid-cols-[1fr_380px] gap-12">
          <div className="text-[#444] text-[15px] leading-[1.85] space-y-5">
            {bioPoints.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <button className="inline-flex items-center gap-2 mt-3 px-6 py-3 bg-[#f47920] hover:bg-[#e06710] text-white text-[13px] font-semibold tracking-wide rounded-sm transition-colors">
              <Download size={16} /> Download PDF
            </button>
          </div>
          <aside className="space-y-5">
            <div className="relative overflow-hidden rounded-sm shadow-lg">
              <img src={portraitImage} alt="Devendra Fadnavis" className="w-full h-[420px] object-cover" />
            </div>
            <div className="bg-[#f6f6f8] p-6 rounded-sm border-l-4 border-[#f47920]">
              <h3 className="font-bold text-[#1a2632] text-[16px] flex items-center gap-2"><Calendar size={18} className="text-[#f47920]" /> Date of Birth</h3>
              <p className="mt-2 text-[#444] text-[14px]">22 July, 1970</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Education */}
      <section className="py-14 bg-[#f6f6f8]">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={24} className="text-[#f47920]" />
            <h2 className="text-[#1a2632] text-[26px] lg:text-[32px] font-bold">Educational Qualification</h2>
          </div>
          <div className="w-16 h-[3px] bg-[#f47920] mb-8"></div>
          <ul className="grid md:grid-cols-3 gap-4">
            {education.map((e, i) => (
              <li key={i} className="bg-white p-5 rounded-sm shadow-sm border-l-4 border-[#f47920] text-[#444] text-[14px] leading-relaxed">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Governance positions */}
      <section className="py-14 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase size={24} className="text-[#f47920]" />
            <h2 className="text-[#1a2632] text-[26px] lg:text-[32px] font-bold">Positions in Governance</h2>
          </div>
          <div className="w-16 h-[3px] bg-[#f47920] mb-8"></div>
          <div className="relative pl-6 border-l-2 border-[#f47920]/30 space-y-6">
            {governance.map((g, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#f47920] border-4 border-white shadow"></div>
                <p className="text-[#f47920] font-semibold text-[13px] tracking-wide">{g.years}</p>
                <p className="text-[#1a2632] font-medium text-[15px] mt-1">{g.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International */}
      <section className="py-14 bg-[#f6f6f8]">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          <div className="flex items-center gap-3 mb-6">
            <Globe size={24} className="text-[#f47920]" />
            <h2 className="text-[#1a2632] text-[26px] lg:text-[32px] font-bold">International Accolades &amp; Felicitations</h2>
          </div>
          <div className="w-16 h-[3px] bg-[#f47920] mb-8"></div>
          <div className="grid md:grid-cols-2 gap-4">
            {international.map((a, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-sm shadow-sm">
                <Award size={20} className="text-[#f47920] mt-0.5 flex-shrink-0" />
                <p className="text-[#444] text-[14px] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Penmanship */}
      <section id="penmanship" className="py-14 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={24} className="text-[#f47920]" />
            <h2 className="text-[#1a2632] text-[26px] lg:text-[32px] font-bold">Penmanship</h2>
          </div>
          <div className="w-16 h-[3px] bg-[#f47920] mb-8"></div>
          <div className="grid md:grid-cols-3 gap-6">
            {books.map((b, i) => (
              <div key={i} className="bg-[#f6f6f8] p-6 rounded-sm border-t-4 border-[#f47920]">
                <p className="text-[#f47920] text-[12px] font-semibold tracking-wider">{b.year}</p>
                <h3 className="mt-2 text-[#1a2632] font-bold text-[17px] leading-snug">{b.title}</h3>
                <p className="mt-3 text-[#555] text-[13.5px] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
