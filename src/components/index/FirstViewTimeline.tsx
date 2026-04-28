'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { createContext, useState } from 'react';

import styles from './FirstViewTimeline.module.css';
import clsx from 'clsx';

interface FirstViewTimelineProps {
  children: React.ReactNode;
}

// tlのコンテキスト
export const FirstViewTlContext = createContext<gsap.core.Timeline | null>(null);

const FirstViewTimeline: React.FC<FirstViewTimelineProps> = ({ children }) => {
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsLoaded(true),
    });
    setTl(tl);
  });

  return (
    <FirstViewTlContext.Provider value={tl}>
      <div className={clsx(styles.firstViewTimeline, isLoaded && styles['is-loaded'])}>
        {children}
      </div>
    </FirstViewTlContext.Provider>
  );
};
export default FirstViewTimeline;
