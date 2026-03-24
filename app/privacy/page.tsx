'use client';

import React from 'react';
import Link from 'next/link';
import ColorBends from '@/components/ColorBends';

export default function PrivacyPolicy() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <ColorBends 
          colors={["#07ab75", "#0ea5e9", "#1e1e1e"]}
          speed={0.15}
          scale={1.2}
          mouseInfluence={0.2}
          transparent={true}
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[#07ab75] hover:text-white transition-colors uppercase tracking-widest text-sm font-bold mb-8">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Vissza a főoldalra
        </Link>
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black font-[Glancyr] uppercase tracking-tighter">Adatkezelési Tájékoztató</h1>
          <p className="text-gray-400 text-lg">Utoljára frissítve: 2026. március 24.</p>
        </div>

        <div className="space-y-8 prose prose-invert prose-emerald max-w-none">
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">1. Általános információk</h2>
            <p className="text-gray-400 leading-relaxed">Ez az adatkezelési tájékoztató tartalmazza az ADVANT Growth Systems által végzett adatkezelési folyamatok részleteit. Számunkra kiemelten fontos felhasználóink adatainak védelme és a jogszabályoknak megfelelő adatkezelés.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">2. Kezelt adatok köre</h2>
            <p className="text-gray-400 leading-relaxed">A weboldalon történő böngészés során automatikusan gyűjtünk technikai adatokat (IP-cím, böngésző típusa, látogatás időpontja). Kapcsolatfelvétel esetén az Ön által megadott nevet, email címet és telefonszámot kezeljük.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">3. Az adatkezelés célja</h2>
            <p className="text-gray-400 leading-relaxed">Az adatok kezelésének elsődleges célja a szolgáltatásaink nyújtása, a látogatókkal való kapcsolattartás, valamint a felhasználói élmény optimalizálása statisztikai elemzéseken keresztül.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">4. Jogok és jogorvoslat</h2>
            <p className="text-gray-400 leading-relaxed">Önnek joga van tájékoztatást kérni adatai kezeléséről, kérheti azok helyesbítését vagy törlését. Kérdéseivel forduljon hozzánk bizalommal a contact@advant.hu címen.</p>
          </section>
        </div>

        <footer className="pt-20 border-t border-white/5 text-gray-500 text-sm">
          <p>&copy; 2026 ADVANT Growth Systems. Minden jog fenntartva.</p>
        </footer>
      </div>
    </main>
  );
}
