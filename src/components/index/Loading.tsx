'use client';

import clsx from 'clsx';
import { FirstViewTlContext } from './FirstViewTimeline';
import { useContext, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { easeOutExpo } from '@/lib/custom-ease';
import styles from './Loading.module.css';

type LoadingProps = {
  children: React.ReactNode;
};

const Loading: React.FC<LoadingProps> = ({ children }) => {
  const gsapRef = useRef<HTMLDivElement>(null);
  const tl = useContext(FirstViewTlContext);

  useGSAP(
    () => {
      if (tl && gsapRef.current) {
        const defaultOpt: gsap.TweenVars = { duration: 1.8, ease: easeOutExpo };

        tl.to('[data-paragraphs]', { y: 0, ...defaultOpt })
          .to(
            '[data-lottie]',
            {
              x: 0,
              ...defaultOpt,
            },
            '<+0.2'
          )
          .to('[data-paragraphs] [data-before-text]', {
            clipPath: 'inset(0 0% 0 0)',
            duration: 3,
          })
          .to('[data-paragraphs]', { yPercent: -100, ...defaultOpt })
          .to('[data-lottie]', { xPercent: -100, ...defaultOpt }, '<')
          .to(gsapRef.current, { scale: 0.8, ...defaultOpt })
          .to(gsapRef.current, { height: 0, ...defaultOpt, duration: 1.4 }, '<+0.6');
      }
    },
    { scope: gsapRef, dependencies: [tl] }
  );

  return (
    <div ref={gsapRef} className={clsx(styles.loading, 'clip')}>
      {children}
    </div>
  );
};

export default Loading;
