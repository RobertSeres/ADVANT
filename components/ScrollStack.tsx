'use client';

import React, { useLayoutEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollStack.css';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.scroll-stack-card');
      const totalCards = cards.length;
      
      if (totalCards === 0) return;

      // Pinning the main container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: `+=${totalCards * 100}%`, // Scroll space relative to number of cards
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      cards.forEach((card, i) => {
        if (i === 0) {
          // First card is already visible
          return;
        }

        // Previous cards scale down and fade slightly
        tl.to(cards.slice(0, i), {
          scale: (j) => 0.8 + (i - j) * 0.05,
          opacity: 0.5,
          duration: 0.5,
          ease: 'none'
        }, i);

        // Current card slides up
        tl.fromTo(card, {
          yPercent: 120,
          scale: 1,
          opacity: 0
        }, {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'none'
        }, i);
      });
      
      // Add a small pause at the end
      tl.to({}, { duration: 0.5 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`scroll-stack-container ${className}`.trim()}>
      <div ref={triggerRef} className="scroll-stack-trigger">
        <div className="scroll-stack-cards-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ScrollStack;
