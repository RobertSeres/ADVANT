'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import StaggeredMenu from '@/components/StaggeredMenu';
import LogoLoop from '@/components/LogoLoop';
import TextPressure from '@/components/TextPressure';
import ColorBends from '@/components/ColorBends';
import DecryptedText from '@/components/DecryptedText';
import FlowingMenu from '@/components/FlowingMenu';
import FloatingLines from '@/components/FloatingLines';
import BorderGlow from '@/components/BorderGlow';

// SVG Icons
const Icons = {
  Star: () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  Chart: () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  Rocket: () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Lightning: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Target: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
};

export default function WebPage() {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [techKey, setTechKey] = useState(0);
  const mainRef = useRef<HTMLElement>(null);

  const techExplanations: Record<string, string> = {
    'Vanilla': 'Színtiszta HTML, CSS és JavaScript. Villámgyors betöltés, nulla felesleges kód, maximális kontroll és skálázhatóság minden üzleti célra.',
    'React': 'Modern, komponens-alapú fejlesztés Next.js keretrendszerben. Interaktív felületek, nagy teljesítményű webalkalmazások bármilyen vállalkozásnak.',
    'Custom': 'Egyedi igényekre szabott komplex megoldások. CRM integráció, egyedi munkafolyamatok és üzleti automatizáció a legmagasabb szinten.'
  };

  const handleTechClick = (tech: string) => {
    setActiveTech(tech);
    setTechKey(prev => prev + 1);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = mainRef.current?.querySelectorAll(':scope > section, :scope > footer') || [];
      gsap.from(sections, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: { each: 0.15, ease: 'power2.inOut' },
        ease: 'power4.out',
        clearProps: 'all'
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="relative w-full bg-black overflow-x-hidden">
      {/* Navigation */}
      <StaggeredMenu
        position="right"
        colors={['#0e0c0e', '#07ab75', '#B19EEF']}
        items={[
          { label: 'ADVANT', ariaLabel: 'Home', link: '/' },
          { label: 'ADVANT RÉSZLETEK', ariaLabel: 'Services', link: '/services' },
          { label: 'ADVANT WEB', ariaLabel: 'Web', link: '/web' }
        ]}
        socialItems={[
          { label: 'Instagram', link: '#' },
          { label: 'Facebook', link: '#' },
          { label: 'TikTok', link: '#' }
        ]}
        displaySocials={true}
        menuButtonColor="#ffffff"
        accentColor="#07ab75"
        isFixed={true}
      />

      {/* 1. Hero Section - sticky like homepage */}
      <section className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center z-0">
        <div className="absolute inset-0 z-0 will-change-transform">
          <ColorBends
            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
            rotation={0}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={0.35}
            parallax={0.5}
            noise={0.1}
            transparent={true}
            autoRotate={0}
          />
        </div>

        <div className="relative z-10 w-full flex flex-col items-center px-4">
          <div className="w-full mb-8 mt-[100px]" style={{ height: '180px' }}>
            <TextPressure
              text="ADVANT WEB"
              flex={true}
              alpha={false}
              stroke={false}
              width={false}
              weight={true}
              italic={false}
              textColor="#ffffff"
              strokeColor="#040014"
              minFontSize={36}
            />
          </div>

          <div className="text-center max-w-4xl space-y-4 mt-48 md:mt-[250px] px-4">
            <p className="text-lg md:text-2xl font-light tracking-wide leading-relaxed text-white">
              Nem csak weboldalakat építünk. <span className="font-semibold text-[#07ab75]">Digitális birodalmakat</span> hozunk létre, amelyek 24/7 dolgoznak az üzleted sikeréért.
            </p>
            <div className="flex items-center justify-center pt-4 text-sm md:text-lg font-semibold tracking-[0.3em] uppercase text-[#07ab75] gap-4 md:gap-8">
              <span>Stratégia</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span>Design</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span>Konverzió</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Partner Marquee */}
      <section className="relative z-20 w-full py-20 bg-[#0e0e0e] border-y border-white/5 shadow-[0_-50px_100px_rgba(0,0,0,0.8)] -mt-px">
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Piacvezető márkák, akik minket választottak</span>
        </div>
        <div className="w-full opacity-60 hover:opacity-100 transition-opacity duration-700">
          <LogoLoop
            logos={[
              { src: "/partners/p1.png", alt: "Partner 1" },
              { src: "/partners/sdp.png", alt: "SDP" },
              { src: "/partners/omega.png", alt: "Omega" },
              { src: "/partners/rs.png", alt: "RS" }
            ]}
            speed={40}
            logoHeight={50}
            gap={150}
            fadeOut={false}
            pauseOnHover={true}
          />
        </div>
      </section>

      {/* 3. Kinek Való? Section */}
      <section className="relative z-20 w-full py-40 px-4 flex flex-col items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#07ab75]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="w-full mb-24 flex justify-center" style={{ height: '180px' }}>
            <TextPressure
              text="KINEK VALÓ?"
              flex={true}
              alpha={false}
              stroke={false}
              width={false}
              weight={true}
              italic={false}
              textColor="#ffffff"
              strokeColor="#B19EEF"
              minFontSize={48}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "MÁRKÁK & CÉGEK",
                desc: "Akiknél a vizuális élmény és az online presztízs ugyanolyan fontos, mint a termék vagy szolgáltatás minősége.",
                icon: <Icons.Star />,
                accent: "#07ab75"
              },
              {
                title: "NÖVEKVŐ VÁLLALKOZÁSOK",
                desc: "Akik skálázható digitális infrastruktúrával akarják támogatni a piaci terjeszkedésüket és üzleti növekedésüket.",
                icon: <Icons.Chart />,
                accent: "#0ea5e9"
              },
              {
                title: "INDULÓ STARTUPOK",
                desc: "Akik a nulláról akarnak felépíteni egy erős digitális jelenlétet, ami mérhető eredményeket és versenyelőnyt hoz.",
                icon: <Icons.Rocket />,
                accent: "#B19EEF"
              }
            ].map((item, i) => (
              <div key={i} className="group relative p-10 bg-white/2 border border-white/5 rounded-[40px] flex flex-col items-center text-center gap-6 hover:bg-white/5 hover:border-white/10 transition-all duration-500">
                <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 grid place-items-center group-hover:scale-110 transition-transform duration-500 shadow-2xl" style={{ color: item.accent }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-4 tracking-tighter text-white group-hover:text-[#07ab75] transition-colors uppercase">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pain Factors (Flowing Menu Style - like homepage) */}
      <section className="relative z-20 w-full overflow-hidden -mt-px">
        <FlowingMenu
          items={[
            { link: '#', text: 'Lassú, elavult weboldal', info: 'Az első benyomás online dől el — és másodpercek alatt elveszítheted.' },
            { link: '#', text: 'Alacsony konverziós arány', info: 'A forgalom önmagában nem elég, ha a látogatóból nem lesz ügyfél.' },
            { link: '#', text: 'Gyenge mobilélmény', info: 'A felhasználók 70%-a mobilról böngészik — ha ott nem működik, nem létezel.' },
            { link: '#', text: 'Nincs Google jelenlét', info: 'Ha nem találnak meg az első oldalon, a konkurencia nyer helyetted.' },
            { link: '#', text: 'Elavult, sablon design', info: 'A generic megjelenés bizalmatlanságot szül és nem különböztet meg.' },
            { link: '#', text: 'Bonyolult kezelhetőség', info: 'Egy jó weboldal önállóan is kezelhető, fejlesztő nélkül.' },
            { link: '#', text: 'Nincs mérhető eredmény', info: 'Adatok nélkül csak találgatsz, ahelyett, hogy tudatosan fejlődnél.' }
          ]}
          speed={20}
          textColor="#ffffff"
          bgColor="#0e0e0e"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#0e0e0e"
          borderColor="rgba(255,255,255,0.1)"
        />
      </section>

      {/* 5. Solutions & Tech Stack */}
      <section className="relative z-20 w-full py-48 px-4 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center justify-center text-center mb-24 w-full">
            <div className="w-full mb-8" style={{ height: '140px' }}>
              <TextPressure
                text="FUTURE PROOF TECH"
                flex={true}
                alpha={false}
                stroke={false}
                width={false}
                weight={true}
                italic={false}
                textColor="#ffffff"
                strokeColor="#040014"
                minFontSize={36}
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-3 text-[#07ab75] text-xs font-bold uppercase tracking-widest">
              <span className="animate-bounce flex items-center justify-center"><Icons.Target /></span>
              <span>Kattints a részletekért</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-24">
            {['Vanilla', 'React', 'Custom'].map((tech) => (
              <button
                key={tech}
                onClick={() => handleTechClick(tech)}
                className={`group relative px-12 py-8 rounded-[40px] border transition-all duration-700 overflow-hidden ${activeTech === tech
                  ? 'bg-[#07ab75] border-[#07ab75] text-black scale-110 shadow-[0_20px_60px_rgba(7,171,117,0.3)]'
                  : 'bg-white/5 border-white/10 text-white hover:border-[#07ab75]/50'
                  }`}
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <h3 className="relative z-10 text-3xl font-black tracking-tighter uppercase">{tech}</h3>
              </button>
            ))}
          </div>

          <div className="min-h-[160px] w-full flex items-center justify-center">
            {activeTech ? (
              <div className="max-w-4xl w-full mx-auto text-center">
                <DecryptedText
                  key={techKey}
                  text={techExplanations[activeTech]}
                  speed={35}
                  className="text-2xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter"
                  encryptedClassName="text-[#07ab75] opacity-40"
                  animateOn="view"
                  sequential={true}
                />
              </div>
            ) : (
              <p className="text-gray-500 text-lg font-light tracking-widest uppercase opacity-50 ml-[510px]">Válassz technológiát</p>
            )}
          </div>
        </div>
      </section>

      {/* 6. Folyamat Section (Roadmap with FloatingLines) */}
      <section id="folyamat" className="relative z-20 w-full py-32 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={12}
            lineDistance={4}
            bendRadius={5}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
            linesGradient={['#07ab75', '#B19EEF', '#07ab75']}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-[100px] mt[-100px]">
            <div className="w-full mb-6" style={{ height: '140px' }}>
              <TextPressure
                text="A FOLYAMAT"
                flex={true}
                alpha={false}
                stroke={false}
                width={false}
                weight={true}
                italic={false}
                textColor="#ffffff"
                strokeColor="#040014"
                minFontSize={48}
              />
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto font-extralight text-lg mt-[70px]">Módszeres építkezés a sikeres indulástól a skálázható növekedésig.</p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {[
              { title: 'STRATÉGIA & AUDIT', desc: 'Mélyelemzés, versenytárs-kutatás és a jelenlegi digitális állapot felmérése az üzleti célok mentén.', step: '01' },
              { title: 'UX & PRÉMIUM DESIGN', desc: 'A felhasználói élmény megtervezése, fókuszban a vizuális dominanciával és a bizalomépítéssel.', step: '02' },
              { title: 'MODERN FEJLESZTÉS', desc: 'Személyre szabott kódbázis építése piacvezető technológiákkal, felesleges pluginok nélkül.', step: '03' },
              { title: 'SEO & OPTIMALIZÁLÁS', desc: 'Teljesítmény-központú finomhangolás és keresőbarát felépítés a maximális láthatóságért.', step: '04' },
              { title: 'LAUNCH & GROWTH', desc: 'Technikai élesítés és az üzleti folyamatok automatizált támogatása a hosszú távú sikerért.', step: '05' }
            ].map((item, idx) => (
              <div key={idx} className={`flex items-start gap-6 md:gap-10 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse md:text-right'}`}>
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#07ab75]/10 border border-[#07ab75]/20 grid place-items-center">
                  <span className="text-[#07ab75] text-sm font-black">{item.step}</span>
                </div>
                <div className="flex-1 pb-12 border-b border-white/5">
                  <h3 className="text-2xl md:text-3xl font-black mb-3 tracking-tighter uppercase text-white">{item.title}</h3>
                  <p className={`text-gray-400 font-light text-base leading-relaxed max-w-lg ${idx % 2 !== 0 ? 'md:ml-auto' : ''}`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CSOMAGOK Section */}
      <section id="pricing" className="relative z-20 py-32 px-4 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-[100px]">
            <div className="w-full mb-6" style={{ height: '140px' }}>
              <TextPressure
                text="WEB CSOMAGOK"
                flex={true}
                alpha={false}
                stroke={false}
                width={false}
                weight={true}
                italic={false}
                textColor="#ffffff"
                strokeColor="#040014"
                minFontSize={48}
              />
            </div>
            <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg mt-[100px]">Egyedi, skálázható megoldások bármilyen üzleti igényre.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {[
              {
                name: 'Landing Page',
                price: '290.000 Ft-tól',
                features: ['Adatvezérelt konverziós struktúra', 'Sub-second betöltési sebesség', 'Perfect SEO alapok', 'Mobil-first reszponzivitás', 'Automatizált lead generálás'],
                popular: false,
                glowColor: '0 0 70',
                colors: ['#888888', '#666666', '#aaaaaa'] as string[]
              },
              {
                name: 'PRO Business',
                price: '540.000 Ft-tól',
                features: ['Teljes ökoszisztéma felépítése', 'Interaktív élményelemek', 'Haladó SEO és tartalom stratégia', 'Üzleti integrációk (CRM, Calendars)', 'Könnyen kezelhető CMS felület'],
                popular: true,
                glowColor: '160 80 60',
                colors: ['#07ab75', '#0ea5e9', '#07ab75'] as string[]
              },
              {
                name: 'Elite / Custom',
                price: 'Egyedi ajánlat',
                features: ['Komplex szoftveres megoldások', 'Teljes körű API integrációk', 'AI alapú üzleti automatizáció', 'Személyre szabott design rendszer', '24/7 VIP támogatás és karbantartás'],
                popular: false,
                glowColor: '268 70 75',
                colors: ['#B19EEF', '#8a5cff', '#c084fc'] as string[]
              }
            ].map((plan, i) => (
              <BorderGlow
                key={i}
                className={`${plan.popular ? 'lg:scale-105 z-10' : ''}`}
                backgroundColor="#0a0a0a"
                borderRadius={24}
                glowColor={plan.glowColor}
                colors={plan.colors}
                edgeSensitivity={25}
                glowIntensity={1.2}
                fillOpacity={0.3}
                coneSpread={30}
              >
                <div className="relative p-10 flex flex-col h-full rounded-[24px]">
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-[#07ab75] text-black text-[10px] font-black tracking-widest uppercase rounded-full shadow-[0_0_15px_rgba(7,171,117,0.5)] z-20">
                      Bestseller
                    </div>
                  )}

                  <div className="mb-10 text-center">
                    <h3 className="text-2xl font-black mb-3 tracking-tighter uppercase text-white">{plan.name}</h3>
                    <div className="text-3xl font-black tracking-tighter text-white">{plan.price}</div>
                  </div>

                  <ul className="space-y-4 mb-10 flex-1">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-400 font-light">
                        <span className="text-[#07ab75] shrink-0 grid place-items-center"><Icons.Lightning /></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/#contact"
                    className={`py-5 rounded-2xl text-center font-black tracking-widest uppercase transition-all duration-300 block text-sm ${plan.popular
                      ? 'bg-[#07ab75] text-white hover:bg-white hover:text-black'
                      : 'bg-white/5 text-white hover:bg-white/10'
                      }`}
                  >
                    Ajánlatot kérek
                  </Link>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Záró rész - CTA */}
      <section className="relative z-20 w-full py-32 md:py-48 px-4 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#07ab75]/20 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-10">
          <div className="w-full" style={{ height: '160px' }}>
            <TextPressure
              text="KEZDJÜNK BELE"
              flex={true}
              alpha={false}
              stroke={false}
              width={false}
              weight={true}
              italic={false}
              textColor="#ffffff"
              strokeColor="#040014"
              minFontSize={36}
            />
          </div>
          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed">
            A legjobb befektetés a digitális jelenléted. Építsünk együtt egy weboldalt, ami nem csak szép, hanem <span className="text-white font-semibold">eredményeket hoz</span>.
          </p>
          <div className="flex flex-row items-center justify-center gap-6 mt-6">
            <Link href="/#contact" className="group relative px-10 py-5 bg-[#07ab75] text-white font-black rounded-2xl hover:scale-105 transition-all duration-300 uppercase tracking-widest overflow-hidden text-sm md:text-base whitespace-nowrap shadow-2xl shadow-[#07ab75]/20">
              <span className="relative z-10">Ajánlatot kérek</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </Link>
            <Link href="#pricing" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 uppercase tracking-widest backdrop-blur-xl text-sm md:text-base whitespace-nowrap">
              Csomagok
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Footer - like homepage */}
      <footer className="relative z-20 w-full bg-[#050505] pt-16 md:pt-24 pb-12 px-4 md:px-6 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <Image src="/A.png" alt="ADVANT" width={40} height={40} className="rounded-lg" />
                <span className="text-3xl font-black font-[Glancyr] tracking-tighter text-white uppercase">ADVANT</span>
              </div>
              <p className="text-gray-400 max-w-md text-base md:text-lg leading-relaxed">Vállalkozások digitális szintemelése. Webfejlesztés, SEO és prémium design a mérhető növekedésért.</p>
              <div className="flex gap-4">
                {[
                  { name: 'Instagram', d: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z' },
                  { name: 'Facebook', d: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z' },
                  { name: 'LinkedIn', d: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z' }
                ].map(social => (
                  <a key={social.name} href="#" className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 grid place-items-center text-gray-400 hover:text-white hover:bg-[#07ab75]/20 hover:border-[#07ab75]/50 transition-all duration-500">
                    <span className="sr-only">{social.name}</span>
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d={social.d} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg">Navigáció</h4>
              <ul className="space-y-4">
                {[
                  { label: 'Főoldal', href: '/' },
                  { label: 'Kinek való?', href: '#' },
                  { label: 'Technológia', href: '#' },
                  { label: 'Folyamat', href: '#folyamat' },
                  { label: 'Csomagok', href: '#pricing' }
                ].map(link => (
                  <li key={link.label}><a href={link.href} className="text-gray-400 hover:text-[#07ab75] transition-colors">{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg">Kapcsolat</h4>
              <p className="text-gray-400 text-sm leading-relaxed">contact@advant.hu<br />+36 70 885 6534</p>
              <div className="flex flex-col gap-3">
                <Link href="/#contact" className="text-[#07ab75] hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Ajánlatot kérek &rarr;</Link>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-gray-500 text-sm">
            <p>&copy; 2026 ADVANT Growth Systems. Minden jog fenntartva.</p>
            <div className="flex gap-8">
              <Link href="/privacy" className="hover:text-white transition-colors">Adatkezelés</Link>
              <Link href="/terms" className="hover:text-white transition-colors">ÁSZF</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
