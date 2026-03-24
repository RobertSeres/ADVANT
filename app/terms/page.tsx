'use client';

import React from 'react';
import Link from 'next/link';
import ColorBends from '@/components/ColorBends';

export default function TermsAndConditions() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <ColorBends 
          colors={["#0ea5e9", "#B19EEF", "#1e1e1e"]}
          speed={0.12}
          scale={1.3}
          mouseInfluence={0.25}
          transparent={true}
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[#0ea5e9] hover:text-white transition-colors uppercase tracking-widest text-sm font-bold mb-8">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Vissza a főoldalra
        </Link>
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black font-[Glancyr] uppercase tracking-tighter">Általános Szerződési Feltételek</h1>
          <p className="text-gray-400 text-lg">Utoljára frissítve: 2026. március 24.</p>
        </div>

        <div className="space-y-8 prose prose-invert prose-sky max-w-none">
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">1. Általános hatály</h2>
            <p className="text-gray-400 leading-relaxed">Jelen Általános Szerződési Feltételek (ÁSZF) hatálya kiterjed az ADVANT Growth Systems által nyújtott összes szolgáltatásra, beleértve a weboldal készítést, SEO-t és tartalomgyártást.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">2. Szolgáltatások köre</h2>
            <p className="text-gray-400 leading-relaxed">A szolgáltatások részletes leírása a konkrét árajánlatokban és szolgáltatási szerződésekben szerepel. Az ADVANT fenntartja a jogot a szolgáltatások technikai paramétereinek frissítésére a technológiai fejlődés függvényében.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">3. Fizetési feltételek</h2>
            <p className="text-gray-400 leading-relaxed">A díjazás alapját a választott csomag (Starter, Growth, Dominance) vagy az egyedi megállapodás képezi. A számlázás elektronikus úton történik.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">4. Szerzői jogok</h2>
            <p className="text-gray-400 leading-relaxed">Az elkészített weboldalak, grafikák és videók felhasználási joga a kifizetést követően száll át az ügyfélre, a szerződésben meghatározott mértékben.</p>
          </section>
        </div>

        <footer className="pt-20 border-t border-white/5 text-gray-500 text-sm">
          <p>&copy; 2026 ADVANT Growth Systems. Minden jog fenntartva.</p>
        </footer>
      </div>
    </main>
  );
}
