import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import SocialBar from './SocialBar';
import { navItems } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-[#101820] text-white pt-14 pb-6">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#f47920] flex items-center justify-center text-white font-bold">
                DF
              </div>
              <span className="font-bold text-[16px] tracking-wide">DEVENDRA FADNAVIS</span>
            </div>
            <p className="text-white/65 text-[13.5px] leading-relaxed">
              Hailed as the face of new age Indian politics, driven by accountability and efficiency.
              Chief Minister of Maharashtra State.
            </p>
            <div className="mt-5">
              <SocialBar />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4 text-[15px] tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-white/65 hover:text-[#f47920] text-[13.5px] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-semibold mb-4 text-[15px] tracking-wide">More</h4>
            <ul className="space-y-2.5">
              {navItems.slice(5).map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-white/65 hover:text-[#f47920] text-[13.5px] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[15px] tracking-wide">Get in Touch</h4>
            <ul className="space-y-3 text-white/65 text-[13.5px]">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#f47920] mt-1 flex-shrink-0" />
                <span>Office of Chief Minister, Mantralaya, Mumbai - 400032, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#f47920] flex-shrink-0" />
                <span>contact@devendrafadnavis.local</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#f47920] flex-shrink-0" />
                <span>+91 22 2202 0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/55 text-[12.5px]">
          <span>© {new Date().getFullYear()} Devendra Fadnavis. All rights reserved.</span>
          <div className="flex gap-5">
            <Link to="/about-him" className="hover:text-[#f47920] transition-colors">About</Link>
            <Link to="/press-room" className="hover:text-[#f47920] transition-colors">Press Room</Link>
            <Link to="/contact" className="hover:text-[#f47920] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
