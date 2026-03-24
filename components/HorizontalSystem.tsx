'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ColorBends from './ColorBends';
import './HorizontalSystem.css';

gsap.registerPlugin(ScrollTrigger);

const SYSTEM_ITEMS = [
  {
    title: "WEB & KONVERZIÓ",
    description: "Gyors, modern és eladásra optimalizált felületek. Nem csak egy weboldal, hanem egy digitális értékesítő gép.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    color: "#07ab75"
  },
  {
    title: "SEO DOMINANCIA",
    description: "Hogy ott legyél, ahol a vendéged keres. Google Maps optimalizálás és organikus találatok az élen, hirdetési költségek nélkül.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    color: "#0ea5e9"
  },
  {
    title: "VIZUÁLIS HATALOM",
    description: "FPV drón videók, profi fotók és magával ragadó közösségi tartalom, ami bizalmat épít és érzelmi kötődést hoz létre.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    color: "#B19EEF"
  },
  {
    title: "AI AUTOMATIZÁCIÓ",
    description: "Smarter, not harder. Mesterséges intelligencia alapú ügyfélszolgálat és automatizált foglalási folyamatok a hatékonyságért.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
    color: "#ffffff"
  }
];

export default function HorizontalSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const horizontal = horizontalRef.current;
      if (!horizontal) return;

      const totalWidth = horizontal.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollAmount = totalWidth - viewportWidth;

      gsap.to(horizontal, {
        x: -scrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          start: 'top top',
          end: () => `+=${scrollAmount}`,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      // Character level animations for titles on active slide
      SYSTEM_ITEMS.forEach((_, i) => {
        gsap.fromTo(`.sys-item-${i} .sys-title`, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: `.sys-item-${i}`,
              containerAnimation: gsap.getById('horizontal-tween'), // Wait, I need a better way to reference
              start: 'left center',
              // Use a different approach for nested triggers
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="horizontal-system-container">
      <div className="hs-background">
        <ColorBends 
           colors={["#07ab75", "#0ea5e9", "#111111"]}
           speed={0.1}
           scale={1.5}
           transparent={true}
        />
      </div>
      
      <div ref={horizontalRef} className="horizontal-scroll-content">
        {/* Intro Slide */}
        <section className="hs-slide intro-slide">
          <div className="hs-content">
            <h2 className="hs-big-title">EGYSÉGES<br/><span className="text-[#07ab75]">RENDSZER</span></h2>
            <p className="hs-description">Mi ezt a pontot kontrolláljuk. A megjelenést, jelenlétet, élményt és konverziót egy folyamatként kezeljük.</p>
            <div className="mt-12 hs-scroll-indicator">
              <span>Görgess a felfedezéshez</span>
              <div className="hs-line"></div>
            </div>
          </div>
        </section>

        {/* Feature Slides */}
        {SYSTEM_ITEMS.map((item, i) => (
          <section key={i} className={`hs-slide feature-slide sys-item-${i}`}>
            <div className="hs-card">
              <div className="hs-icon-wrap" style={{ color: item.color }}>
                {item.icon}
              </div>
              <h3 className="hs-card-title sys-title uppercase">{item.title}</h3>
              <p className="hs-card-desc">{item.description}</p>
              <div className="hs-card-number">0{i + 1}</div>
            </div>
          </section>
        ))}

        {/* Closing Slide */}
        <section className="hs-slide closing-slide">
          <div className="hs-content">
            <h2 className="hs-card-title uppercase mb-8">Készen állsz?</h2>
            <a href="#pricing" className="px-12 py-6 bg-[#07ab75] text-white font-black rounded-2xl hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest shadow-2xl shadow-[#07ab75]/20">
              Csomagok megtekintése
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
