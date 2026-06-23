import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from './SocialBar';

export default function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Channel"
        className="fixed bottom-5 right-5 z-40 w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white flex items-center justify-center shadow-xl transition-colors"
        style={{ width: 52, height: 52 }}
      >
        <MessageCircle size={26} fill="white" />
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-[85px] right-5 z-40 w-11 h-11 rounded-full bg-[#1a2632] hover:bg-[#f47920] text-white flex items-center justify-center shadow-xl transition-all ${
          show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
