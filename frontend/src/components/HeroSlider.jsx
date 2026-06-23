import React, { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SocialBar from './SocialBar';
import { heroSlides } from '../data/content';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((idx) => {
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 700);
  }, []);

  const next = useCallback(() => goTo((current + 1) % heroSlides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + heroSlides.length) % heroSlides.length), [current, goTo]);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] max-h-[900px] overflow-hidden bg-black">
      {/* Slides */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
        </div>
      ))}

      {/* Right social bar */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
        <SocialBar vertical />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full max-w-[1400px] mx-auto px-4 lg:px-10 flex items-center">
        <div className="max-w-2xl pt-20">
          <div
            key={current}
            className={`border-l-[3px] border-[#f47920] pl-6 ${
              isAnimating ? '' : 'animate-fadeInUp'
            }`}
          >
            <h1 className="text-white text-[28px] md:text-[42px] lg:text-[52px] font-bold leading-[1.15] tracking-tight">
              {heroSlides[current].title}
            </h1>
            <p className="mt-5 text-white/90 text-[15px] md:text-[18px] font-light max-w-lg">
              {heroSlides[current].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 hover:bg-[#f47920] text-white flex items-center justify-center backdrop-blur transition-colors"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-16 lg:right-20 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 hover:bg-[#f47920] text-white flex items-center justify-center backdrop-blur transition-colors"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${
              idx === current ? 'w-8 bg-[#f47920]' : 'w-2 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
