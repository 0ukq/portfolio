'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { LenisRef, ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import { LenisOptions } from 'lenis';

export default function Lenis() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  function easeOutExpo(x: number): number {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  const options: LenisOptions = {
    autoRaf: false,
    lerp: 0.1,
    // duration: 2,
    easing: t => easeOutExpo(t),
  };

  return <ReactLenis root options={options} ref={lenisRef} />;
}
