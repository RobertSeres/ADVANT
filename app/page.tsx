'use client';

import ColorBends from '@/components/ColorBends';
import TextPressure from '@/components/TextPressure';
import ScrollReveal from '@/components/ScrollReveal';
import FlowingMenu from '@/components/FlowingMenu';
import Grainient from '@/components/Grainient';
import LightRays from '@/components/LightRays';
import StaggeredMenu from '@/components/StaggeredMenu';
import BorderGlow from '@/components/BorderGlow';
import FloatingLines from '@/components/FloatingLines';
import HorizontalSystem from '@/components/HorizontalSystem';
import VariableProximity from '@/components/VariableProximity';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [faqExpanded, setFaqExpanded] = useState(false);
  const [copyTooltip, setCopyTooltip] = useState<'phone' | 'email' | null>(null);
  const mainRef = useRef<HTMLElement>(null);
  const rendszerTitleRef = useRef<HTMLDivElement>(null);
  const mitKapszTitleRef = useRef<HTMLDivElement>(null);
  const faqTitleRef = useRef<HTMLDivElement>(null);

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopyTooltip(type);
    setTimeout(() => setCopyTooltip(null), 2000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Immediate load sequence for all main sections
      const sections = mainRef.current?.querySelectorAll(':scope > section, :scope > footer') || [];
      gsap.from(sections, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: {
          each: 0.15,
          ease: 'power2.inOut'
        },
        ease: 'power4.out',
        clearProps: 'all'
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);
  
  const faqItems = [
    { q: "Miben segít az ADVANT egy vendéglátóhelynek?", a: "Az ADVANT vendéglátóhelyek digitális szintjét emeli teljes rendszerben. Weboldal optimalizálás, SEO, vizuális tartalom (fotó, videó, FPV), valamint AI és CRM integráció segítségével növeljük a bizalmat és a foglalások számát. Nem külön szolgáltatásokat adunk, hanem egy működő növekedési rendszert." },
    { q: "Miért fontos a weboldal optimalizálás a vendéglátásban?", a: "A weboldal az első benyomás. Egy lassú, elavult vagy rosszul felépített weboldal csökkenti a foglalások számát. Egy gyors, mobilbarát, konverzióra optimalizált weboldal viszont növeli a vendégek bizalmát és a foglalási arányt." },
    { q: "Hogyan segít a SEO több vendéget hozni?", a: "A keresőoptimalizálás (SEO) biztosítja, hogy a vendéglátóhelyed megjelenjen a Google keresésekben. Ha valaki éttermet, hotelt vagy rendezvényhelyszínt keres a környéken, a jó SEO több organikus látogatót és több foglalást eredményez, hirdetések nélkül." },
    { q: "Mennyi idő alatt hoz eredményt a SEO és a web optimalizálás?", a: "Az első eredmények általában 30–60 napon belül láthatók, míg a stabil növekedés 2–3 hónap alatt alakul ki. A SEO és a digitális jelenlét hosszú távon skálázható, folyamatosan növekvő eredményt ad." },
    { q: "Mit jelent az, hogy konverzióra optimalizált weboldal?", a: "Egy konverzióra optimalizált weboldal úgy van felépítve, hogy a látogatóból vendég legyen. Gyors betöltés, tiszta struktúra, erős vizuális tartalom és egyértelmű foglalási lehetőség — ezek együtt növelik a foglalási arányt." },
    { q: "Milyen szerepe van a profi képeknek és videóknak?", a: "A vizuális tartalom kulcsfontosságú a vendéglátásban. Profi fotók, videók és FPV bejárások segítenek abban, hogy a vendég már online átélje a hely hangulatát. Ez jelentősen növeli a bizalmat és a foglalási hajlandóságot." },
    { q: "Mi az az FPV videó és miért fontos?", a: "Az FPV (first-person view) videó egy dinamikus bejárás a helyszínen. Ez egy modern, prémium megjelenési forma, ami kiemel a versenytársak közül és erősíti a márkaélményt." },
    { q: "Hogyan segít az AI és a CRM a vendéglátásban?", a: "Az AI és CRM rendszerek automatizálják a vendégkommunikációt, kezelik az érdeklődéseket, és segítenek visszatérő vendégeket építeni. Ez hatékonyabb működést és magasabb bevételt eredményez." },
    { q: "Minden vendéglátóhely számára működik?", a: "Igen. Éttermek, kávézók, hotelek és rendezvényhelyszínek esetében is működik, mert az alap ugyanaz: a vendég online dönt, és a jobb megjelenést választja." },
    { q: "Miért nem elég csak social media jelenlét?", a: "A social media önmagában nem elég. Ha nincs mögötte jól felépített weboldal, SEO és konverziós rendszer, akkor a figyelem nem alakul át foglalássá." },
    { q: "Mi különböztet meg más marketing ügynökségektől?", a: "Nem kampányokban gondolkodunk, hanem rendszerben. Nem csak forgalmat hozunk, hanem a színvonalat emeljük, ami hosszú távon több foglalást és stabil növekedést eredményez." },
    { q: "Kell hosszú távú szerződés?", a: "A rendszer működéséhez idő kell, de az együttműködés teljesítményalapú. Az eredmény mérhető: foglalások, forgalom, konverzió." },
    { q: "Mennyibe kerül egy ilyen rendszer?", a: "Az ár a csomagtól függ, de minden esetben a cél a megtérülés. A fókusz nem a költség, hanem az, hogy mennyi plusz bevételt generál a rendszer." },
    { q: "Miért fontos az éttermi SEO 2026-ban?", a: "A keresőoptimalizálás (SEO) biztosítja, hogy éttermed az elsők között szerepeljen a Google találatok között, amikor a vendégek a környéken keresnek helyszínt. Ez csökkenti a hirdetési költségeket és hosszú távú, organikus forgalmat biztosít." },
    { q: "Hogyan optimalizálja az ADVANT a Google Maps megjelenést?", a: "A lokális SEO keretében teljes körűen kezeljük a Google Cégem profilt, optimalizáljuk a kulcsszavakat, a képeket és segítünk a véleménykezelésben, hogy a térképen is te legyél a legvonzóbb választás." },
    { q: "Milyen előnyei vannak az egyedi weboldalnak a WordPress-szel szemben?", a: "Az egyedi (vanilla/Next.js) fejlesztés villámgyors, nincs kitéve biztonsági réseknek a pluginok miatt, és abszolút a te márkád igényeire van szabva — nincs felesleges kód, csak színtiszta teljesítmény." },
    { q: "Hogyan segít az AI a vendégélmény javításában?", a: "Az AI asszisztensek képesek 24/7 azonnali válaszokat adni az asztalfoglalással, nyitvatartással vagy menüvel kapcsolatos kérdésekre, így vendégeid sosem maradnak válasz nélkül, a személyzeted pedig a vendéglátásra fókuszálhat." },
    { q: "Mit jelent a konverzió fókuszú webdesign a vendéglátásban?", a: "Olyan felépítést jelent, ahol az oldal minden eleme (a képektől a szövegezésig) a vendég döntését támogatja: az éhséget gerjesztő vizualitás és az egyszerű foglalási folyamat közvetlenül növeli a bevételedet." }
  ];

  const visibleFaq = faqExpanded ? faqItems : faqItems.slice(0, 5);

  return (
    <main ref={mainRef} className="relative w-full bg-black overflow-x-hidden">
      {/* Hero */}
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
          <div className="w-full mb-8" style={{ height: '180px' }}>
            <TextPressure text="ADVANT" flex={true} alpha={false} stroke={false} width={false} weight={true} italic={false} textColor="#ffffff" strokeColor="#040014" minFontSize={36} />
          </div>
          <div className="text-center max-w-4xl space-y-4 mt-48 md:mt-[400px] px-4">
            <p className="text-lg md:text-2xl font-light tracking-wide leading-relaxed text-white">
              A vendég online dönt. Ha nem tűnsz elég jónak, nem téged választ. Mi ezt megváltoztatjuk.
            </p>
            <div className="flex items-center justify-center pt-4 text-sm md:text-lg font-semibold tracking-[0.3em] uppercase text-[#07ab75] gap-4 md:gap-8">
              <span>Színvonal</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span>bizalom</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span>foglalás</span>
            </div>
          </div>
        </div>
      </section>


      {/* RENDSZER */}
      <section id="rendszer" className="relative z-20 w-full bg-[#0e0e0e] min-h-screen py-16 md:py-24 px-4 md:px-12 flex flex-col items-center shadow-[0_-50px_100px_rgba(0,0,0,0.8)] -mt-px overflow-hidden">
        <div className="relative z-10 max-w-5xl w-full">
          <div ref={rendszerTitleRef} className="w-full mb-20 md:mb-32 flex justify-center" style={{ position: 'relative', height: '180px' }}>
            <TextPressure 
              text="RENDSZER" 
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
          <div className="mt-[90px]">
            <ScrollReveal baseOpacity={0.1} enableBlur={true} baseRotation={0.5} blurStrength={5} textClassName="glancyr-reveal text-center">
              Az ADVANT vendéglátóhelyek digitális szintjét emeli.
              A vendég ma már a képernyőn dönt. Amit ott lát, az alapján választ — vagy továbblép.
              Mi ezt a pontot kontrolláljuk. A megjelenést, jelenlétet, élményt és konverziót egy rendszerként kezeljük, hogy egységes, magas színvonalat mutass.
              Az eredmény: erősebb bizalom és több foglalás.
            </ScrollReveal>
          </div>
          <div className="mt-12 flex justify-center">
            <a href="#contact" className="px-10 py-5 bg-[#07ab75] text-white font-black rounded-2xl hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest shadow-2xl shadow-[#07ab75]/20">
              Kérem a rendszert
            </a>
          </div>
        </div>
      </section>

      {/* Flowing Menu */}
      <section className="relative z-20 w-full overflow-hidden -mt-px">
        <FlowingMenu
          items={[
            { link: '#', text: 'Nem az a probléma, hogy nincs vendég.', info: 'A kereslet adott, a kérdés csak az, hogy ki fogja kiszolgálni.' },
            { link: '#', text: 'Az, hogy nem téged választanak.', info: 'Ha a digitális jelenléted nem meggyőző, a konkurencia nyer.' },
            { link: '#', text: 'Gyenge első benyomás online', info: 'A vendég másodpercek alatt dönt a látottak alapján.' },
            { link: '#', text: 'Elavult vagy lassú weboldal', info: 'A technikai hibák bizalomvesztéshez és lemorzsolódáshoz vezetnek.' },
            { link: '#', text: 'Láthatatlanság keresésben', info: 'Ha nem találnak meg az első oldalon, nem is létezel számukra.' },
            { link: '#', text: 'Következetlen tartalom', info: 'A kaotikus kommunikáció bizonytalanságot szül a márkáddal szemben.' },
            { link: '#', text: 'Nincs mérhető rendszer', info: 'Adatok nélkül csak találgatsz, ahelyett, hogy tudatosan fejlődnél.' }
          ]}
          speed={20}
          textColor="#ffffff"
          bgColor="#0e0e0e"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#0e0e0e"
          borderColor="rgba(255,255,255,0.1)"
        />
      </section>

      {/* Horizontal Services */}
      <div id="services">
        <HorizontalSystem />
      </div>

      {/* Mit kapsz valójában */}
      <section className="relative z-30 w-full py-20 md:py-32 px-4 md:px-6 flex flex-col items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
          <Grainient
            color1="#0a0a0a" color2="#07ab75" color3="#0ea5e9"
            timeSpeed={0.15} colorBalance={0} warpStrength={0.5}
            warpFrequency={3} warpSpeed={1} warpAmplitude={30}
            blendAngle={45} blendSoftness={0.1} rotationAmount={90}
            noiseScale={1.5} grainAmount={0.05} grainScale={1.5}
            grainAnimated={false} contrast={1.2} gamma={1}
            saturation={1.2} centerX={0} centerY={0} zoom={1.1}
          />
        </div>

        <div className="relative z-10 max-w-7xl w-full">
          <div ref={mitKapszTitleRef} className="w-full mb-16 md:mb-24 flex justify-center" style={{ position: 'relative', height: 'auto', minHeight: '120px' }}>
            <VariableProximity
              label="MIT KAPSZ VALÓJÁBAN?"
              className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-center"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={mitKapszTitleRef}
              radius={200}
              falloff="linear"
              style={{ color: '#ffffff' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web-optimalizálás',
                desc: 'Gyors betöltés, modern UI, tökéletes konverzió minden eszközön. Nem csak szép, hanem elad.',
                iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              },
              {
                title: 'SEO & Megjelenés',
                desc: 'Ott lenni, ahol a vendég keres. Google első oldal és lokális láthatóság, hirdetések nélkül.',
                iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              },
              {
                title: 'Vizuális Hatalom',
                desc: 'FPV drón videók, profi fotók és magával ragadó közösségi tartalom, ami bizalmat épít.',
                iconPath: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
              }
            ].map((feature, i) => (
              <BorderGlow
                key={i}
                backgroundColor="transparent"
                borderRadius={32}
                glowRadius={60}
                glowIntensity={0.8}
                colors={['#07ab75', '#0ea5e9']}
                className="group h-full border border-white/5 backdrop-blur-sm"
              >
                <div className="p-8 md:p-12 flex flex-col items-center text-center space-y-6 h-full transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 grid place-items-center mb-2 group-hover:bg-[#07ab75]/10 group-hover:border-[#07ab75]/30 transition-all duration-500">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#07ab75] transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d={feature.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-[Glancyr] text-white tracking-tight uppercase leading-tight">{feature.title}</h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">{feature.desc}</p>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="pricing" className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center py-20 md:py-32 px-4 md:px-6">
        <div className="absolute inset-0 z-0 will-change-transform">
          <LightRays raysOrigin="top-center" raysColor="#07ab75" raysSpeed={0.4} lightSpread={0.8} rayLength={1.3} followMouse={true} mouseInfluence={0.1} noiseAmount={0.28} distortion={0} fadeDistance={0.9} saturation={1.4} />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-20">
          <div className="text-center space-y-4 px-2">
            <h2 className="text-4xl md:text-8xl font-black font-[Glancyr] tracking-tighter uppercase text-white">VÁLASZD A SZINTEDET</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">A digitális transzformáció nem kiadás, hanem befektetés a jövőbeni dominanciába.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full items-start">
            {/* Starter */}
            <BorderGlow edgeSensitivity={31} glowColor="158 80 60" backgroundColor="#0a0a0a" borderRadius={24} glowRadius={100} glowIntensity={1.5} coneSpread={10} animated colors={['#07ab75', '#0ea5e9']} className="group">
              <div className="flex flex-col p-8 md:p-10 grow transition-all duration-500 rounded-[inherit]">
                <div className="space-y-2 mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold font-[Glancyr] uppercase tracking-tight text-white">Starter</h3>
                  <div className="text-3xl md:text-4xl font-black text-[#07ab75]">390 000 Ft <span className="text-sm text-gray-500 font-normal">/ egyszeri</span></div>
                  <p className="text-gray-400 italic">Alap szintemelés</p>
                </div>
                <ul className="space-y-4 text-gray-300 mb-12 grow">
                  {['Web optimalizálás', 'Reszponzív működés', 'Alap SEO'].map(item => (
                    <li key={item} className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#07ab75] shrink-0" />{item}</li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4 mt-auto">
                  <a href="#contact" className="w-full py-4 bg-white text-black text-center font-bold rounded-xl hover:bg-[#07ab75] hover:text-white transition-colors uppercase tracking-widest text-sm">Igénylem</a>
                  <Link href="/services" className="text-center text-xs font-bold text-gray-500 hover:text-[#07ab75] transition-colors uppercase tracking-widest">Részletek</Link>
                </div>
              </div>
            </BorderGlow>

            {/* Growth */}
            <BorderGlow edgeSensitivity={31} glowColor="158 80 60" backgroundColor="#0a0a0a" borderRadius={24} glowRadius={100} glowIntensity={1.5} coneSpread={15} animated isPersistentGlow={true} persistentGlowIntensity={0.5} colors={['#07ab75', '#0ea5e9']} className="md:scale-105 z-10 shadow-[0_0_60px_-15px_rgba(7,171,117,0.4)] group">
              <div className="flex flex-col p-8 md:p-10 grow relative transition-all duration-500 rounded-[inherit]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#07ab75] text-xs font-bold uppercase tracking-widest rounded-full z-20 shadow-[0_0_15px_rgba(7,171,117,0.5)] text-white">Legnépszerűbb</div>
                <div className="space-y-2 mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold font-[Glancyr] uppercase tracking-tight text-white">Growth</h3>
                  <div className="text-3xl md:text-4xl font-black text-white">590 000 Ft <span className="text-sm text-[#07ab75] font-normal">/ hó</span></div>
                  <p className="text-[#07ab75] italic font-medium">Teljes rendszer</p>
                </div>
                <ul className="space-y-4 text-gray-200 mb-12 grow">
                  {['Web + konverzió', 'SEO + Google', 'FPV videó', 'Profi képek', 'Social tartalom', 'Optimalizálás'].map(item => (
                    <li key={item} className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#07ab75] shadow-[0_0_10px_#07ab75] shrink-0" />{item}</li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4 mt-auto">
                  <a href="#contact" className="w-full py-5 bg-[#07ab75] text-white text-center font-black rounded-xl hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest">Szintet lépek</a>
                  <Link href="/services" className="text-center text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest">Részletek</Link>
                </div>
              </div>
            </BorderGlow>

            {/* Dominance */}
            <BorderGlow edgeSensitivity={31} glowColor="158 80 60" backgroundColor="#0a0a0a" borderRadius={24} glowRadius={100} glowIntensity={1.5} coneSpread={10} animated colors={['#07ab75', '#B19EEF']} className="group">
              <div className="flex flex-col p-8 md:p-10 grow transition-all duration-500 rounded-[inherit]">
                <div className="space-y-2 mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold font-[Glancyr] uppercase tracking-tight text-white">Dominance</h3>
                  <div className="text-3xl md:text-4xl font-black text-[#B19EEF]">890 000 Ft <span className="text-sm text-gray-500 font-normal">/ hó</span></div>
                  <p className="text-gray-400 italic">Piaci előny</p>
                </div>
                <ul className="space-y-4 text-gray-300 mb-12 grow">
                  {['Minden a Growth-ból', 'AI + CRM integráció', 'Több tartalom', 'Mélyebb SEO', 'Prioritás kezelés', 'Skálázás fókusz'].map(item => (
                    <li key={item} className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#B19EEF] shrink-0" />{item}</li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4 mt-auto">
                  <a href="#contact" className="w-full py-4 border border-white/20 text-white text-center font-bold rounded-xl hover:bg-[#B19EEF] hover:text-black hover:border-transparent transition-all duration-300 uppercase tracking-widest text-sm">Uralom a piacot</a>
                  <Link href="/services" className="text-center text-xs font-bold text-gray-500 hover:text-[#B19EEF] transition-colors uppercase tracking-widest">Részletek</Link>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative w-full bg-[#0e0e0e] py-20 md:py-32 px-4 md:px-6 flex flex-col items-center">
        <div className="max-w-4xl w-full">
          <div ref={faqTitleRef} className="w-full mb-12 md:mb-20 flex justify-center" style={{ position: 'relative' }}>
            <VariableProximity
              label="GYAKORI KÉRDÉSEK"
              className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-center"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={faqTitleRef}
              radius={180}
              falloff="linear"
              style={{ color: '#ffffff' }}
            />
          </div>
          <div className="space-y-4 md:space-y-6">
            {visibleFaq.map((item, i) => (
              <details key={i} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 open:bg-white/10 open:border-[#07ab75]/30">
                <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none">
                  <span className="text-lg md:text-xl font-bold text-white group-hover:text-[#07ab75] transition-colors pr-4">{item.q}</span>
                  <div className="relative w-8 h-8 rounded-full border border-white/20 grid place-items-center group-open:rotate-45 transition-transform duration-300 shrink-0">
                    <div className="w-4 h-0.5 bg-white absolute" />
                    <div className="w-0.5 h-4 bg-white absolute" />
                  </div>
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-400 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
          <div className="flex justify-center mt-10 md:mt-12">
            <button
              onClick={() => setFaqExpanded(!faqExpanded)}
              className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-[#07ab75] hover:border-[#07ab75] transition-all duration-300 uppercase tracking-widest text-sm flex items-center gap-3"
            >
              {faqExpanded ? 'Kevesebb' : 'Több kérdés'}
              <svg className={`w-5 h-5 transition-transform duration-300 ${faqExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* StaggeredMenu */}
      <StaggeredMenu
        position="right"
        isFixed={true}
        items={[
          { label: 'Kezdőlap', ariaLabel: 'Home', link: '#' },
          { label: 'Rendszer', ariaLabel: 'System', link: '#rendszer' },
          { label: 'Eszközök', ariaLabel: 'Services', link: '#services' },
          { label: 'Csomagok', ariaLabel: 'Pricing', link: '#pricing' },
          { label: 'GYIK', ariaLabel: 'FAQ', link: '#faq' },
          { label: 'Kapcsolat', ariaLabel: 'Contact', link: '#contact' }
        ]}
        socialItems={[
          { label: 'ADVANT Részletek', link: '/services' },
          { label: 'ADVANT WEB', link: '/web' },
          { label: 'Instagram', link: '#' },
          { label: 'Facebook', link: '#' },
          { label: 'LinkedIn', link: '#' }
        ]}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#07ab75', '#B19EEF', '#5227FF']}
        accentColor="#07ab75"
      />

      {/* Kapcsolat */}
      <section id="contact" className="relative w-full bg-black py-20 md:py-32 px-4 md:px-6 flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#07ab75]/20 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-5xl w-full text-center">
          <div className="w-full mb-12 md:mb-20" style={{ height: '160px' }}>
            <TextPressure text="KAPCSOLAT" flex={true} alpha={false} stroke={false} width={false} weight={true} italic={false} textColor="#ffffff" strokeColor="#040014" minFontSize={36} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div 
              onClick={() => handleCopy('+36 70 885 6534', 'phone')}
              className="relative flex flex-col items-center p-8 md:p-12 bg-white/5 border border-white/10 rounded-3xl hover:border-[#07ab75]/50 group transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {copyTooltip === 'phone' && (
                <div className="absolute inset-0 bg-[#07ab75] flex items-center justify-center animate-in fade-in zoom-in duration-300 z-20">
                  <span className="text-white font-bold uppercase tracking-widest text-center w-full">Másolva!</span>
                </div>
              )}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#07ab75]/10 grid place-items-center mb-6 md:mb-8 group-hover:bg-[#07ab75]/20 group-hover:scale-110 transition-all duration-500">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-[#07ab75]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-gray-400 text-sm uppercase tracking-[0.2em] mb-3 font-semibold">Telefon</span>
              <span className="text-2xl md:text-4xl font-black text-white font-[Glancyr] tracking-tight group-hover:text-[#07ab75] transition-colors duration-500">+36 70 885 6534</span>
            </div>
            <div 
              onClick={() => handleCopy('contact@advant.hu', 'email')}
              className="relative flex flex-col items-center p-8 md:p-12 bg-white/5 border border-white/10 rounded-3xl hover:border-[#07ab75]/50 group transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {copyTooltip === 'email' && (
                <div className="absolute inset-0 bg-[#07ab75] flex items-center justify-center animate-in fade-in zoom-in duration-300 z-20">
                  <span className="text-white font-bold uppercase tracking-widest text-center w-full">Másolva!</span>
                </div>
              )}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#07ab75]/10 grid place-items-center mb-6 md:mb-8 group-hover:bg-[#07ab75]/20 group-hover:scale-110 transition-all duration-500">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-[#07ab75]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-400 text-sm uppercase tracking-[0.2em] mb-3 font-semibold">Email</span>
              <span className="text-2xl md:text-4xl font-black text-white font-[Glancyr] tracking-tight group-hover:text-[#07ab75] transition-colors duration-500">contact@advant.hu</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full bg-[#050505] pt-16 md:pt-24 pb-12 px-4 md:px-6 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <Image src="/A.png" alt="ADVANT" width={40} height={40} className="rounded-lg" />
                <span className="text-3xl font-black font-[Glancyr] tracking-tighter text-white uppercase">ADVANT</span>
              </div>
              <p className="text-gray-400 max-w-md text-base md:text-lg leading-relaxed">Vendéglátóhelyek digitális szintemelése. Web-optimalizálás, SEO és prémium tartalomgyártás a látható növekedésért.</p>
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
                  { label: 'Kezdőlap', href: '#' },
                  { label: 'Rendszer', href: '#rendszer' },
                  { label: 'Szolgáltatások', href: '#services' },
                  { label: 'Csomagok', href: '#pricing' },
                  { label: 'GYIK', href: '#faq' }
                ].map(link => (
                  <li key={link.label}><a href={link.href} className="text-gray-400 hover:text-[#07ab75] transition-colors">{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg">Hírlevél</h4>
              <p className="text-gray-400 text-sm">Iratkozz fel havi tippjeinkre a vendéglátás digitális trendjeiről.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email címed" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#07ab75] transition-colors w-full min-w-0" />
                <button className="p-2 bg-[#07ab75] text-black rounded-lg hover:bg-white transition-colors shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
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
        colors={['#07ab75', '#ff5c7a']}
        accentColor="#07ab75"
      />
    </main>
  );
}
