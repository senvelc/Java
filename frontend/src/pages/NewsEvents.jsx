import React, { useState } from 'react';
import { Calendar, MapPin, Play, FileText } from 'lucide-react';
import { newsItems, events, speeches, videos } from '../data/content';

const tabs = [
  { key: 'news', label: 'News' },
  { key: 'events', label: 'Events' },
  { key: 'speeches', label: 'Speeches' },
  { key: 'videos', label: 'Videos' },
];

export default function NewsEvents() {
  const initial = typeof window !== 'undefined' && window.location.hash
    ? window.location.hash.replace('#', '')
    : 'news';
  const [active, setActive] = useState(tabs.find((t) => t.key === initial)?.key || 'news');

  return (
    <div className="pt-[70px]">
      <section className="bg-[#1a2632] text-white py-14">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          <p className="text-[#f47920] text-[13px] tracking-[3px] font-semibold uppercase">Latest Updates</p>
          <h1 className="text-[32px] lg:text-[44px] font-bold mt-2">News &amp; Events</h1>
          <div className="w-16 h-[3px] bg-[#f47920] mt-4"></div>
        </div>
      </section>

      {/* Tabs */}
      <div className="bg-white sticky top-[70px] z-30 border-b border-gray-200 shadow-sm">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6 flex overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-6 py-4 text-[14px] font-semibold tracking-wide whitespace-nowrap transition-all border-b-[3px] ${
                active === t.key
                  ? 'border-[#f47920] text-[#f47920]'
                  : 'border-transparent text-[#1a2632] hover:text-[#f47920]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <section className="py-14 bg-[#f6f6f8] min-h-[60vh]">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          {active === 'news' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newsItems.map((n) => (
                <article key={n.id} className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[#f47920] text-[12px] font-semibold uppercase tracking-wide">
                      <Calendar size={14} /> {n.date}
                    </div>
                    <h3 className="mt-3 text-[#1a2632] font-bold text-[15px] leading-snug group-hover:text-[#f47920] transition-colors">
                      {n.title}
                    </h3>
                    <p className="mt-3 text-[12px] text-gray-500">Source: {n.source}</p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {active === 'events' && (
            <div className="max-w-4xl mx-auto space-y-4">
              {events.map((e) => (
                <div key={e.id} className="bg-white rounded-sm shadow-sm p-5 flex flex-col md:flex-row gap-4 md:items-center border-l-4 border-[#f47920] hover:shadow-md transition-shadow">
                  <div className="md:w-32 flex-shrink-0">
                    <div className="flex items-center gap-2 text-[#f47920] font-bold text-[14px]">
                      <Calendar size={16} /> {e.date}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#1a2632] font-semibold text-[15.5px]">{e.title}</h3>
                    <div className="mt-2 flex items-center gap-2 text-[13px] text-gray-600">
                      <MapPin size={14} className="text-[#f47920]" /> {e.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {active === 'speeches' && (
            <div className="grid md:grid-cols-2 gap-6">
              {speeches.map((s) => (
                <div key={s.id} className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#f47920]">
                  <div className="flex items-start gap-3">
                    <FileText size={22} className="text-[#f47920] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[12px] text-[#f47920] font-semibold tracking-wide">{s.date}</p>
                      <h3 className="mt-1 text-[#1a2632] font-bold text-[17px]">{s.title}</h3>
                      <p className="mt-3 text-[13.5px] text-gray-600 leading-relaxed">{s.summary}</p>
                      <button className="mt-4 text-[#f47920] text-[12.5px] font-semibold tracking-wide uppercase hover:underline">
                        Read transcript &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {active === 'videos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((v) => (
                <article key={v.id} className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img src={v.thumb} alt={v.title} className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#ff0000]/95 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play size={24} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-white text-[11px] rounded-sm">
                      {v.duration}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#1a2632] font-semibold text-[14px] line-clamp-2 leading-snug">{v.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
