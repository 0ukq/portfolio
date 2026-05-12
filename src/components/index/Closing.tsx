'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { easeOutExpo } from '@/lib/custom-ease';

import styles from './Closing.module.css';
import clsx from 'clsx';

interface ClosingProps {
  children: React.ReactNode;
}

const Closing: React.FC<ClosingProps> = ({ children }) => {
  const gsapRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // スクロール
      gsap.to(gsapRef.current, {
        y: 0,
        scrollTrigger: {
          trigger: gsapRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1.5,
        },
      });

      // 画面下テキスト
      gsap.to('[data-foot-text] svg', {
        duration: 2,
        y: 0,
        stagger: 0.08,
        ease: easeOutExpo,
        scrollTrigger: {
          trigger: '[data-foot-text]',
          start: 'center bottom',
        },
      });

      // lottie
      gsap.to('[data-closing-lottie]', {
        yPercent: -120,
        scrollTrigger: {
          trigger: '[data-closing-lottie]',
          start: 'top bottom-=30%',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    },
    { scope: gsapRef }
  );

  return (
    <section ref={gsapRef} className={clsx(styles.closing, styles['is-animation'])}>
      {children}
    </section>
  );
};
export default Closing;
