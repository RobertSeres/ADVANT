'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ColorBends from '@/components/ColorBends';
import TextPressure from '@/components/TextPressure';
import BorderGlow from '@/components/BorderGlow';
import StaggeredMenu from '@/components/StaggeredMenu';

const services = [
  {
    id: 'web-opt',
    title: 'Web-optimalizálás',
    color: '#07ab75',
    content: `
      <h3>Digitális alapok a vendéglátásban</h3>
      <p>A weboldal nem csak egy digitális névjegykártya, hanem a legfontosabb értékesítési csatornád. Egy lassú, elavult dizájnú oldal bizalomvesztést okoz.</p>
      <p>Mi olyan felületeket építünk, amelyek másodpercek alatt betöltenek, mobilra vannak optimalizálva és pszichológiailag segítik a látogatót a foglalás felé.</p>
      <ul>
        <li>Lightning Fast: Google PageSpeed 90+</li>
        <li>Conversion Focused Design (UX/UI)</li>
        <li>Modern technologial stack (Next.js, Tailwind)</li>
      </ul>
      <h4>Gyakori Kérdések</h4>
      <div class="faq-item">
        <strong>Mennyi idő egy weboldal elkészítése?</strong>
        <p>A komplexitástól függően 14-30 nap között mozog az alap rendszertől a teljes Dominance csomagig.</p>
      </div>
    `
  },
  {
    id: 'seo',
    title: 'SEO & Lokális SEO',
    color: '#0ea5e9',
    content: `
      <h3>Legyél ott, ahol keresnek!</h3>
      <p>A Google keresőoptimalizálás biztosítja, hogy éttermed vagy hoteled az elsők között szerepeljen, amikor valaki a környéken keres helyet.</p>
      <p>A lokális SEO (Google Maps optimalizálás) kritikus: a vendégek 70%-a a térképen dönt. Mi gondoskodunk róla, hogy te tűnj ki.</p>
      <ul>
        <li>Kulcsszó stratégia vendéglátóknak</li>
        <li>Google Cégem profil optimalizálás</li>
        <li>Technikai SEO és tartalomépítés</li>
      </ul>
      <h4>Gyakori Kérdések</h4>
      <div class="faq-item">
        <strong>Mikor látszanak az eredmények?</strong>
        <p>A SEO egy hosszú távú befektetés, de az első javulások már 30-60 nap után mérhetőek statisztikailag.</p>
      </div>
    `
  },
  {
    id: 'photo-video',
    title: 'Fotó, Videó & FPV',
    color: '#ff5c7a',
    content: `
      <h3>Vizuális Hatalom</h3>
      <p>A vendéglátás az élményről szól. Ha a fotóid nem étvágygerjesztőek, az FPV videód nem ragadja magával a nézőt, akkor vesztettél.</p>
      <p>Prémium tartalomgyártásunkkal a helyszíned hangulatát úgy adjuk át online, hogy a látogató azonnal ott akarjon lenni.</p>
      <ul>
        <li>Profi étel- és enteriőrfotók</li>
        <li>Dinamikus közösségi média videók (Reels/TikTok)</li>
        <li>FPV drón bejárások az egyedi élményért</li>
      </ul>
    `
  },
  {
    id: 'ai-crm',
    title: 'AI & CRM Rendszerek',
    color: '#8a5cff',
    content: `
      <h3>Automatizált Növekedés</h3>
      <p>Ne hagyj elveszni egyetlen érdeklődőt sem. Az mesterséges intelligencia alapú és CRM rendszereink segítenek a vendégkezelésben.</p>
      <p>Automatizált válaszok, hírlevél kampányok és foglalás-optimalizálás technológiával, emberi erőforrás pazarlása nélkül.</p>
      <ul>
        <li>AI Ügyfélszolgálati Chatbotok</li>
        <li>Hűségprogram és CRM integráció</li>
        <li>Foglalási folyamat automatizálása</li>
      </ul>
    `
  }
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(services[0]);
  const mainRef = useRef<HTMLElement>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <main ref={mainRef} className="relative w-full min-h-screen bg-black text-white">
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <ColorBends
          colors={["#07ab75", "#0ea5e9", "#111111"]}
          speed={0.1}
          scale={1.5}
          mouseInfluence={0.1}
          transparent={true}
        />
      </div>

      {/* Header */}
      <nav className="z-50 w-full p-6 flex items-center justify-between backdrop-blur-md border-b border-white/5 sticky top-0">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#07ab75]/10 rounded-lg grid place-items-center group-hover:bg-[#07ab75]/20 transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#07ab75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </div>
          <span className="font-bold tracking-widest uppercase text-sm">Vissza</span>
        </Link>
        <span className="font-black font-[Glancyr] tracking-tighter text-2xl hidden md:block">ADVANT <span className="text-[#07ab75]">RÉSZLETEK</span></span>
        <div className="w-10" />
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar - Sticky on desktop */}
          <div className="w-full lg:w-80 space-y-4 lg:sticky lg:top-32 lg:h-fit">
            <h2 className="text-gray-500 text-xs font-black uppercase tracking-[0.3em] mb-8">Szolgáltatások</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`relative group w-full text-left p-6 rounded-2xl transition-all duration-500 overflow-hidden ${activeService.id === service.id
                      ? 'bg-white/5'
                      : 'hover:bg-white/5 grayscale opacity-60 hover:opacity-100 hover:grayscale-0'
                    }`}
                >
                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]"
                      style={{ color: service.color, backgroundColor: service.color }}
                    />
                    <span className="font-bold uppercase tracking-widest text-sm">{service.title}</span>
                  </div>
                  {activeService.id === service.id && (
                    <div
                      className="absolute inset-x-0 bottom-0 h-1"
                      style={{ backgroundColor: service.color }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 space-y-12">
            <div className="w-full" style={{ height: '140px' }}>
              <TextPressure
                text={activeService.title.toUpperCase()}
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

            <div className="space-y-12">
              <div className="w-full relative z-10">
                <div className="p-8 md:p-16">
                  <div
                    className="prose prose-invert prose-emerald max-w-none space-y-8 text-gray-400 text-xl leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: activeService.content }}
                  />

                  <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-12 pt-12">
                    <div className="space-y-3">
                      <h3 className="text-3xl font-black uppercase text-white tracking-widest">KÉSZEN ÁLLSZ?</h3>
                      <p className="text-gray-400">Vegyük át együtt a részleteket egy konzultáció keretében.</p>
                    </div>
                    <Link
                      href="/#contact"
                      className="px-12 py-5 bg-white text-black font-black rounded-2xl hover:bg-[#07ab75] hover:text-white transition-all duration-300 uppercase tracking-widest shadow-2xl text-sm"
                    >
                      Kapcsolatfelvétel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative w-full bg-[#050505] pt-16 md:pt-24 pb-12 px-4 md:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 text-center md:text-left">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Image src="/A.png" alt="ADVANT" width={40} height={40} className="rounded-lg" />
                <span className="text-3xl font-black font-[Glancyr] tracking-tighter text-white uppercase">ADVANT</span>
              </div>
              <p className="text-gray-400 max-w-md text-base md:text-lg leading-relaxed mx-auto md:mx-0">Vendéglátóhelyek digitális szintemelése. Web-optimalizálás, SEO és prémium tartalomgyártás.</p>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg uppercase tracking-widest">Oldalak</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-gray-400 hover:text-[#07ab75] transition-colors">Kezdőlap</Link></li>
                <li><Link href="/web" className="text-gray-400 hover:text-[#07ab75] transition-colors">Advant Web</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg uppercase tracking-widest">Kapcsolat</h4>
              <p className="text-gray-400">contact@advant.hu<br />+36 70 885 6534</p>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
            <p>&copy; 2026 ADVANT Growth Systems.</p>
            <div className="flex gap-8">
              <Link href="/privacy" className="hover:text-white transition-colors">Adatkezelés</Link>
              <Link href="/terms" className="hover:text-white transition-colors">ÁSZF</Link>
            </div>
          </div>
        </div>
      </footer>

      <StaggeredMenu
        position="right"
        isFixed={true}
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
        displaySocials
        menuButtonColor="#ffffff"
        openMenuButtonColor="#fff"
        colors={['#07ab75', '#0ea5e9']}
        accentColor="#07ab75"
      />

      <style jsx global>{`
        .prose h3 { color: #fff; font-size: 2.5rem; font-weight: 900; text-transform: uppercase; margin-bottom: 2rem; letter-spacing: -2px; }
        .prose h4 { color: #fff; font-size: 1.5rem; font-weight: 800; text-transform: uppercase; margin-top: 4rem; margin-bottom: 1.5rem; border-left: 6px solid #07ab75; padding-left: 1.5rem; }
        .prose p { margin-bottom: 1.5rem; }
        .prose ul { list-style: none; padding: 0; margin: 3rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
        .prose li { padding: 1rem 0; color: #fff; font-weight: 700; display: flex; align-items: flex-start; gap: 1rem; transition: transform 0.3s ease; }
        .prose li:hover { transform: translateX(10px); }
        .prose li::before { content: '✓'; color: #07ab75; font-size: 1.25rem; flex-shrink: 0; }
        .faq-item { border-left: 2px solid rgba(255, 255, 255, 0.1); padding-left: 2rem; margin-top: 4rem; }
        .faq-item strong { display: block; color: #fff; margin-bottom: 1rem; font-size: 1.25rem; font-weight: 800; text-transform: uppercase; }
      `}</style>
    </main>
  );
}

