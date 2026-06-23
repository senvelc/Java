import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navItems } from '../data/content';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenSub(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1a2632] shadow-md' : 'bg-[#1a2632]/95 backdrop-blur'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[#f47920] flex items-center justify-center text-white font-bold text-lg border-2 border-white/20 group-hover:scale-105 transition-transform">
              DF
            </div>
            <span className="text-white font-bold tracking-wide text-[15px] lg:text-[17px] hidden sm:block">
              DEVENDRA FADNAVIS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-2.5 py-2 text-[12.5px] font-medium tracking-wide whitespace-nowrap transition-colors ${
                    location.pathname === item.path
                      ? 'text-[#f47920]'
                      : 'text-white hover:text-[#f47920]'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={13} />}
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full mt-0 min-w-[220px] bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-4 py-3 text-[13px] text-[#1a2632] hover:bg-[#f47920] hover:text-white transition-colors border-b border-gray-100 last:border-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className="ml-3 px-4 py-2.5 bg-[#f47920] hover:bg-[#e06710] text-white text-[12px] font-semibold tracking-wide whitespace-nowrap transition-colors rounded-sm"
            >
              Join #TeamDevendra
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#1a2632] border-t border-white/10 max-h-[calc(100vh-70px)] overflow-y-auto">
          <nav className="px-4 py-4 flex flex-col">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    className="flex-1 py-3 text-white text-[14px] font-medium"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                      className="p-2 text-white"
                      aria-label="Expand"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          openSub === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && openSub === item.label && (
                  <div className="pl-4 pb-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block py-2 text-[13px] text-white/80 hover:text-[#f47920]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-4 px-5 py-3 bg-[#f47920] text-white text-center font-semibold rounded-sm"
            >
              Join #TeamDevendra
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
