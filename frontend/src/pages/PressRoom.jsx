import React, { useState } from 'react';
import { Calendar, Tag, Download, Search } from 'lucide-react';
import { pressReleases } from '../data/content';

export default function PressRoom() {
  const [query, setQuery] = useState('');
  const filtered = pressReleases.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.tag.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="pt-[70px]">
      <section className="bg-[#1a2632] text-white py-14">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          <p className="text-[#f47920] text-[13px] tracking-[3px] font-semibold uppercase">Media &amp; Communications</p>
          <h1 className="text-[32px] lg:text-[44px] font-bold mt-2">Press Room</h1>
          <div className="w-16 h-[3px] bg-[#f47920] mt-4"></div>
          <p className="mt-5 max-w-2xl text-white/75 text-[14.5px] leading-relaxed">
            Official press releases, statements and media coverage from the office of the Chief Minister of Maharashtra.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#f6f6f8]">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-6">
          {/* Search */}
          <div className="bg-white p-4 rounded-sm shadow-sm flex items-center gap-3 mb-8">
            <Search size={20} className="text-[#f47920]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search press releases by title or tag..."
              className="flex-1 outline-none text-[14px] placeholder:text-gray-400 bg-transparent"
            />
          </div>

          {/* List */}
          <div className="space-y-4">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="group bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#f47920] flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="md:w-32 flex-shrink-0">
                  <div className="flex items-center gap-2 text-[#f47920] font-semibold text-[13px]">
                    <Calendar size={14} /> {p.date}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#f47920]/10 text-[#f47920] text-[11px] font-bold tracking-wider uppercase rounded-sm mb-2">
                    <Tag size={11} /> {p.tag}
                  </div>
                  <h3 className="text-[#1a2632] font-bold text-[16px] leading-snug group-hover:text-[#f47920] transition-colors">
                    {p.title}
                  </h3>
                </div>
                <button className="flex-shrink-0 px-4 py-2 bg-[#1a2632] hover:bg-[#f47920] text-white text-[12px] font-semibold tracking-wide rounded-sm transition-colors flex items-center gap-2">
                  <Download size={13} /> PDF
                </button>
              </article>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-gray-500 py-8">No press releases found.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
