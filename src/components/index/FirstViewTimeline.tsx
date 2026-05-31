'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { createContext, useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';

import styles from './FirstViewTimeline.module.css';
import clsx from 'clsx';

interface FirstViewTimelineProps {
  children: React.ReactNode;
}

// tlのコンテキスト
export const FirstViewTlContext = createContext<gsap.core.Timeline | null>(null);

const FirstViewTimeline: React.FC<FirstViewTimelineProps> = ({ children }) => {
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  const lenis = useLenis();

  useGSAP(() => {
    // アニメーション開始時にスクロールをロック
    const tl = gsap.timeline();
    setTl(tl);
  });

  useEffect(() => {
    lenis?.stop(); // スクロールをロック
  }, [lenis]);

  return (
    <FirstViewTlContext.Provider value={tl}>
      <div className={clsx(styles.firstViewTimeline)}>{children}</div>
    </FirstViewTlContext.Provider>
  );
};
export default FirstViewTimeline;
