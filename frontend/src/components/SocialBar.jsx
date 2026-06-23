import React from 'react';
import { Facebook, Instagram, Youtube, Send, MessageCircle } from 'lucide-react';

// Real public social profile URLs (from devendrafadnavis.in)
const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/devendra.fadnavis',
  twitter: 'https://twitter.com/Dev_Fadnavis',
  instagram: 'https://www.instagram.com/devendra_fadnavis/',
  youtube: 'https://www.youtube.com/user/DevendraFadanvis',
  telegram: 'https://t.me/DevendraGFadnavis',
  whatsapp: 'https://whatsapp.com/channel/0029Va5JHjT2Jl8HDl3nBs2o',
};

// X (Twitter) icon - simple inline SVG since lucide does not ship a current X logo
const XIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.93l-5.4-7.06L4.4 22H1.14l8.02-9.17L1 2h7.06l4.88 6.46L18.244 2Zm-1.22 18h1.86L7.06 4H5.1l11.92 16Z" />
  </svg>
);

const iconMap = {
  facebook: Facebook,
  twitter: XIcon,
  instagram: Instagram,
  youtube: Youtube,
  telegram: Send,
  whatsapp: MessageCircle,
};

export default function SocialBar({ vertical = false, className = '' }) {
  const items = ['facebook', 'twitter', 'instagram', 'youtube', 'telegram', 'whatsapp'];
  return (
    <div className={`flex ${vertical ? 'flex-col gap-2 sm:gap-3' : 'gap-2 sm:gap-3 flex-wrap'} ${className}`}>
      {items.map((name) => {
        const Icon = iconMap[name];
        return (
          <a
            key={name}
            href={SOCIAL_LINKS[name]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="w-9 h-9 flex items-center justify-center rounded-sm bg-white/10 hover:bg-[#f47920] text-white transition-colors duration-200 border border-white/15"
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
}

export { SOCIAL_LINKS };
