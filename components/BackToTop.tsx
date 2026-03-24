'use client';

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[100] p-4 bg-[#07ab75] text-white rounded-full shadow-[0_0_20px_rgba(7,171,117,0.4)] hover:bg-white hover:text-[#07ab75] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#07ab75] focus:ring-offset-2 focus:ring-offset-black"
      aria-label="Vissza a tetejére"
    >
      <svg
        className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
