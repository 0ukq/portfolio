'use client';

import clsx from 'clsx';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { useRef } from 'react';
import gsap from 'gsap';
import { easeOutCubic } from '@/lib/custom-ease';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './About.module.css';

interface AboutProps {
  children?: React.ReactNode;
}

gsap.registerPlugin(SplitText, ScrollTrigger);

const About: React.FC<AboutProps> = ({ children }) => {
  const gsapRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (gsapRef.current) {
        // プロパティ設定
        const textTween: gsap.TweenVars = {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 3,
          stagger: 0.4,
          ease: easeOutCubic,
        };

        // scrollTrigger設定
        const textTrigger: ScrollTrigger.Vars = {
          trigger: '[data-text-trigger]',
          start: 'top bottom-=30%',
        };

        gsap.to('[data-paragraphs] [data-before-text]', {
          ...textTween,
          delay: 0.1,
          scrollTrigger: textTrigger,
        });
        gsap.to('[data-paragraphs] [data-after-text]', {
          ...textTween,
          scrollTrigger: textTrigger,
        });

        // lottie
        gsap.to('[data-lottie]', {
          yPercent: -120,
          scrollTrigger: {
            trigger: '[data-lottie]',
            start: 'top bottom-=30%',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    },
    { scope: gsapRef }
  );

  return (
    <section ref={gsapRef} className={clsx(styles.about, 'bg-main-gray')}>
      {children}
    </section>
  );
};
export default About;
