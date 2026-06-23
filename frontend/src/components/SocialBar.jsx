import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Send, MessageCircle } from 'lucide-react';

const iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
  telegram: Send,
  whatsapp: MessageCircle,
};

export default function SocialBar({ vertical = false, className = '' }) {
  const items = ['facebook', 'twitter', 'instagram', 'youtube', 'telegram', 'whatsapp'];
  return (
    <div className={`flex ${vertical ? 'flex-col gap-3' : 'gap-3'} ${className}`}>
      {items.map((name) => {
        const Icon = iconMap[name];
        return (
          <a
            key={name}
            href={`#${name}`}
            onClick={(e) => e.preventDefault()}
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
