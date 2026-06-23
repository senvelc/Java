import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ChevronDown, Facebook, Twitter, Youtube, Play } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import { aboutShort, newsItems, portraitImage, videos } from '../data/content';

export default function Home() {
  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div>
      <HeroSlider />

      {/* About Section */}
      <section className="py-20 lg:py-24 bg-[#f6f6f8] relative">
        <button
          onClick={scrollDown}
          className="hidden md:flex absolute top-[-25px] left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center text-[#1a2632] hover:bg-[#f47920] hover:text-white transition-colors z-10"
          aria-label="Scroll down"
        >
          <ChevronDown size={20} />
        </button>

        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#1a2632] text-[34px] lg:text-[44px] font-bold leading-tight">
                A modest man<br />
                <span className="text-[#1a2632]">with a steely resolve</span>
              </h2>
              <div className="w-16 h-[3px] bg-[#f47920] mt-5 mb-7"></div>
              <div className="text-[#444] text-[15px] leading-[1.85] space-y-4">
                {aboutShort.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <Link
                to="/about-him"
                className="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-[#f47920] hover:bg-[#e06710] text-white text-[13px] font-semibold tracking-wide transition-colors rounded-sm uppercase"
              >
                Continue Reading <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 border-[3px] border-[#1a2632]/15 rounded-sm hidden lg:block"></div>
              <div className="relative overflow-hidden rounded-sm shadow-xl">
                <img
                  src={portraitImage}
                  alt="Devendra Fadnavis portrait"
                  className="w-full h-[520px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Media */}
      <section className="py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          <div className="mb-12">
            <p className="text-[#f47920] text-[13px] tracking-[3px] font-semibold uppercase">News &amp; media</p>
            <h2 className="text-[#1a2632] text-[32px] lg:text-[40px] font-bold mt-2">News &amp; Media</h2>
            <div className="w-16 h-[3px] bg-[#f47920] mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.slice(0, 4).map((item) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                  <div className="flex items-center gap-2 text-white text-[13px] font-semibold">
                    <Calendar size={14} className="text-[#f47920]" />
                    {item.date}
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#1a2632]/0 group-hover:bg-[#1a2632]/85 transition-all duration-300 flex items-center justify-center p-5 opacity-0 group-hover:opacity-100">
                  <p className="text-white text-center text-[14px] font-medium leading-snug">
                    {item.title}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/press-room"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#f47920] hover:bg-[#e06710] text-white text-[13px] font-semibold tracking-wider uppercase transition-colors rounded-sm"
            >
              Load More
            </Link>
          </div>
        </div>
      </section>

      {/* Keep up with */}
      <section className="py-20 bg-[#f6f6f8]">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          <div className="mb-12">
            <p className="text-[#f47920] text-[13px] tracking-[3px] font-semibold uppercase">News &amp; media</p>
            <h2 className="text-[#1a2632] text-[32px] lg:text-[40px] font-bold mt-2">
              Keep up with Devendra Fadnavis
            </h2>
            <div className="w-16 h-[3px] bg-[#f47920] mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Facebook card */}
            <div className="bg-white rounded-sm shadow-sm overflow-hidden border-t-4 border-[#1877f2]">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#1877f2] font-bold">
                  <Facebook size={20} /> Facebook
                </div>
                <button className="px-3 py-1 bg-[#1877f2] text-white text-[12px] rounded-sm font-medium">
                  Follow
                </button>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f47920] text-white flex items-center justify-center font-bold flex-shrink-0">DF</div>
                  <div>
                    <p className="font-semibold text-[14px]">Devendra Fadnavis</p>
                    <p className="text-[12px] text-gray-500">3 hours ago</p>
                  </div>
                </div>
                <p className="text-[13.5px] text-gray-700 leading-relaxed">
                  Tributes to a distinguished leader, scholar and founder of Bharatiya Jan Sangh, Dr. Syama Prasad Mookerjee, on his Balidan Din.
                </p>
                <p className="text-[12px] text-[#1877f2]">#DevendraFadnavis #Maharashtra</p>
                <div className="flex items-center justify-between text-[12px] text-gray-500 pt-3 border-t border-gray-100">
                  <span>918 Likes</span>
                  <span>216 Comments</span>
                  <span>106 Shares</span>
                </div>
              </div>
            </div>

            {/* Twitter card */}
            <div className="bg-white rounded-sm shadow-sm overflow-hidden border-t-4 border-black">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-black font-bold">
                  <Twitter size={20} /> Twitter
                </div>
                <button className="px-3 py-1 bg-black text-white text-[12px] rounded-sm font-medium">
                  Follow
                </button>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f47920] text-white flex items-center justify-center font-bold flex-shrink-0">DF</div>
                  <div>
                    <p className="font-semibold text-[14px]">Devendra Fadnavis</p>
                    <p className="text-[12px] text-gray-500">@Dev_Fadnavis</p>
                  </div>
                </div>
                <p className="text-[13.5px] text-gray-700 leading-relaxed">
                  Budget Session 2026 - Key Highlights presented before the Maharashtra Vidhan Sabha.
                </p>
                <p className="text-[12px] text-blue-500">#Maharashtra #Mumbai #Budget2026</p>
                <div className="flex items-center justify-between text-[12px] text-gray-500 pt-3 border-t border-gray-100">
                  <span>937 Likes</span>
                  <span>274 Replies</span>
                  <span>10:09 AM</span>
                </div>
              </div>
            </div>

            {/* YouTube card */}
            <div className="bg-white rounded-sm shadow-sm overflow-hidden border-t-4 border-[#ff0000]">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#ff0000] font-bold">
                  <Youtube size={20} /> YouTube
                </div>
                <button className="px-3 py-1 bg-[#ff0000] text-white text-[12px] rounded-sm font-medium">
                  Subscribe
                </button>
              </div>
              <div className="relative aspect-video bg-black overflow-hidden group cursor-pointer">
                <img src={videos[0].thumb} alt={videos[0].title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#ff0000] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={28} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-[13.5px] font-medium text-gray-800 line-clamp-2">{videos[0].title}</p>
                <p className="text-[11.5px] text-gray-500 mt-1">1.48M subscribers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join TeamDevendra */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26,38,50,0.85), rgba(26,38,50,0.85)), url(https://images.pexels.com/photos/15470124/pexels-photo-15470124.jpeg)`,
        }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-white text-[34px] lg:text-[44px] font-bold">
            Join #TeamDevendra
          </h2>
          <div className="w-16 h-[3px] bg-[#f47920] mx-auto mt-4 mb-7"></div>
          <p className="text-white/90 text-[15.5px] leading-relaxed">
            After ages, Maharashtra has found a leader who stands at the golden intersection between
            tradition and futurism. As he takes a step forward for all of us, you&apos;re welcome to
            join his tribe.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              to="/contact"
              className="px-7 py-3 bg-[#f47920] hover:bg-[#e06710] text-white text-[13px] font-semibold tracking-wider uppercase transition-colors rounded-sm"
            >
              Join Team Devendra
            </Link>
            <a
              href="#whatsapp"
              onClick={(e) => e.preventDefault()}
              className="px-7 py-3 bg-white hover:bg-gray-100 text-[#1a2632] text-[13px] font-semibold tracking-wider uppercase transition-colors rounded-sm"
            >
              Join WhatsApp Channel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
