'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { LenisRef, ReactLenis } from 'lenis/react';
import { LenisOptions } from 'lenis';
import { usePathname } from 'next/navigation';

type LenisProps = {
  children: React.ReactNode;
};

export default function Lenis({ children }: LenisProps) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  // ページ遷移時にスクロール位置をリセット
  useEffect(() => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  function easeOutExpo(x: number): number {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  const options: LenisOptions = {
    autoRaf: false,
    lerp: 0.1,
    // duration: 2,
    easing: t => easeOutExpo(t),
  };

  return (
    <ReactLenis root options={options} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
