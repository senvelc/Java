import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const accepted = localStorage.getItem('df_cookie_consent');
    if (!accepted) setShow(true);
  }, []);
  if (!show) return null;
  const set = (val) => {
    localStorage.setItem('df_cookie_consent', val);
    setShow(false);
  };
  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-xs bg-white shadow-2xl rounded-sm border border-gray-200 p-5">
      <p className="text-[12.5px] text-[#1a2632] leading-relaxed">
        We use cookies on our website to give you your preferences for repeat visits. By clicking ACCEPT, you consent to the use of ALL the cookies.
      </p>
      <button onClick={() => set('seen')} className="text-[12px] text-[#1a2632] underline mt-2 hover:text-[#f47920]">
        Cookie Policy
      </button>
      <div className="flex gap-2 mt-4">
        <button onClick={() => set('rejected')} className="flex-1 px-3 py-2 bg-[#1a2632] hover:bg-black text-white text-[11.5px] font-semibold tracking-wider rounded-sm transition-colors">
          REJECT
        </button>
        <button onClick={() => set('accepted')} className="flex-1 px-3 py-2 bg-[#f47920] hover:bg-[#e06710] text-white text-[11.5px] font-semibold tracking-wider rounded-sm transition-colors">
          ACCEPT
        </button>
      </div>
    </div>
  );
}
