'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { LenisRef, ReactLenis } from 'lenis/react';

export default function Lenis() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />;
}
