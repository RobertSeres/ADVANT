import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 3,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const wordElements = el.querySelectorAll<HTMLElement>('.word');

      // Main container entrance
      gsap.fromTo(
        el,
        { transformOrigin: '0% 50%', rotate: baseRotation, opacity: 0 },
        {
          rotate: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 50%',
            scrub: true,
          }
        }
      );

      // Word-by-word reveal (Karaoke effect)
      wordElements.forEach((word) => {
        gsap.fromTo(
          word,
          { 
            opacity: baseOpacity, 
            filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
            color: 'rgba(255,255,255,0.1)'
          },
          {
            opacity: 1,
            filter: 'blur(0px)',
            color: 'rgb(255,255,255)',
            scrollTrigger: {
              trigger: word,
              start: 'top 80%',
              end: 'top 60%',
              scrub: true,
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, [enableBlur, baseRotation, baseOpacity, blurStrength]);

  return (
    <div ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <div className={`scroll-reveal-text ${textClassName}`}>{splitText}</div>
    </div>
  );
};

export default ScrollReveal;
