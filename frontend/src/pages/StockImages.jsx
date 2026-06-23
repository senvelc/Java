import React, { useState } from 'react';
import { X, Download, Image as ImageIcon } from 'lucide-react';
import { stockImages } from '../data/content';

export default function StockImages() {
  const [active, setActive] = useState(null);

  return (
    <div className="pt-[70px]">
      <section className="bg-[#1a2632] text-white py-14">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          <p className="text-[#f47920] text-[13px] tracking-[3px] font-semibold uppercase">Gallery</p>
          <h1 className="text-[32px] lg:text-[44px] font-bold mt-2 flex items-center gap-3">
            <ImageIcon size={36} className="text-[#f47920]" /> Stock Images
          </h1>
          <div className="w-16 h-[3px] bg-[#f47920] mt-4"></div>
          <p className="mt-5 max-w-2xl text-white/75 text-[14.5px] leading-relaxed">
            High resolution images for use by the media and press. Click on any image to view a larger preview.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#f6f6f8]">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {stockImages.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className="group relative aspect-square overflow-hidden rounded-sm bg-gray-200 shadow-sm hover:shadow-xl transition-shadow"
              >
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1a2632]/0 group-hover:bg-[#1a2632]/40 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-[#f47920] text-white text-[12px] font-semibold tracking-wide rounded-sm">
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-[#f47920] text-white flex items-center justify-center transition-colors"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <img
            src={stockImages[active]}
            alt="Preview"
            className="max-w-[92vw] max-h-[85vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <a
            href={stockImages[active]}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-5 py-2.5 bg-[#f47920] hover:bg-[#e06710] text-white text-[12.5px] font-semibold rounded-sm transition-colors"
          >
            <Download size={16} /> Open original
          </a>
        </div>
      )}
    </div>
  );
}
