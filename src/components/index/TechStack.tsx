'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import clsx from 'clsx';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';
import { easeOutCubic } from '@/lib/custom-ease';
import styles from './TechStack.module.css';

interface TechStackProps {
  children: React.ReactNode;
}

gsap.registerPlugin(SplitText, DrawSVGPlugin, MotionPathPlugin, MorphSVGPlugin, ScrollTrigger);

const TechStack: React.FC<TechStackProps> = ({ children }) => {
  const gsapRef = useRef<HTMLElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (gsapRef.current) {
        // React Vector Animation
        const reactPaths = gsapRef.current.querySelectorAll('[data-react-vector] path');
        const nextPaths = gsapRef.current.querySelectorAll('[data-next-vector] path');
        const tsPaths = gsapRef.current.querySelectorAll('[data-ts-vector] path');
        const cssPaths = gsapRef.current.querySelectorAll('[data-css-vector] path');
        const htmlPaths = gsapRef.current.querySelectorAll('[data-html-vector] path');

        // 共通の初期値
        const setVars: gsap.TweenVars = {
          drawSVG: '0%',
          fill: 'none',
        };

        // drawSVG
        const drawVars: gsap.TweenVars = {
          drawSVG: '100%',
          duration: 1.2,
          ease: easeOutCubic,
        };

        // fill
        const fillVars: gsap.TweenVars = {
          duration: 1,
          ease: easeOutCubic,
        };

        // 初期値設定
        gsap.set(reactPaths, { ...setVars });
        gsap.set(nextPaths, { ...setVars });
        gsap.set(tsPaths, { ...setVars });
        gsap.set(cssPaths, { ...setVars });
        gsap.set(htmlPaths, { ...setVars });

        // tl設定
        tl.current = gsap.timeline({
          scrollTrigger: {
            trigger: '[data-tech-stack-logos]',
            start: 'top bottom-=30%',
          },
        });

        tl.current
          .to(reactPaths, { ...drawVars })
          .to(nextPaths, { ...drawVars }, '<')
          .to(tsPaths, { ...drawVars }, '<')
          .to(cssPaths, { ...drawVars }, '<')
          .to(htmlPaths, { ...drawVars }, '<')
          .to(reactPaths, { fill: 'white', ...fillVars }, '>')
          .to(nextPaths, { fill: 'white', ...fillVars }, '<')
          .to(tsPaths[0], { fill: '#767676', ...fillVars }, '<')
          .to(tsPaths[1], { fill: '#767676', ...fillVars }, '<')
          .to(tsPaths[2], { fill: 'white', ...fillVars }, '<')
          .to(cssPaths[0], { fill: '#767676', ...fillVars }, '<')
          .to(cssPaths[1], { fill: 'white', ...fillVars }, '<')
          .to(htmlPaths[0], { fill: '#767676', ...fillVars }, '<')
          .to(htmlPaths[1], { fill: '#767676', ...fillVars }, '<')
          .to(htmlPaths[2], { fill: '#EBEBEB', ...fillVars }, '<')
          .to(htmlPaths[3], { fill: 'white', ...fillVars }, '<');
      }
    },
    { scope: gsapRef }
  );

  return (
    <section ref={gsapRef} className={clsx(styles.techStack, 'bg-main-gray')}>
      {children}
    </section>
  );
};
export default TechStack;
