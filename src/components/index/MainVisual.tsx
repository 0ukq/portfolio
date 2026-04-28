'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FirstViewTlContext } from './FirstViewTimeline';
import { useContext, useRef } from 'react';
import { easeOutExpo } from '@/lib/custom-ease';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './MainVisual.module.css';

gsap.registerPlugin(ScrollTrigger);

type MainVisualProps = {
  children: React.ReactNode;
};

const MainVisual: React.FC<MainVisualProps> = ({ children }) => {
  const gsapRef = useRef<HTMLDivElement>(null);
  const mainTl = useContext(FirstViewTlContext); // 親のタイムライン
  const titleTl = useRef<gsap.core.Timeline>(gsap.timeline()); // タイトルタイムライン
  const circleScrollTl = useRef<gsap.core.Timeline>(gsap.timeline()); // 円とスクロールテキストのタイムライン

  useGSAP(
    () => {
      if (mainTl && gsapRef.current) {
        // アニメーション
        const defaultOpt: gsap.TweenVars = { duration: 3, ease: easeOutExpo };

        // 円 / スクロールテキスト
        circleScrollTl.current
          .to('[data-circle]', {
            clipPath: 'circle(40% at 100% 0)',
            ...defaultOpt,
          })
          .to('[data-scroll]', { ...defaultOpt, duration: 2, y: 0 }, '<+0.6');

        // タイトル
        titleTl.current
          .to('[data-titles] [data-after-text]', {
            clipPath: 'inset(0% 0% 0% 0%)',
            ...defaultOpt,
          })
          .to('[data-titles]', { x: 0, ...defaultOpt }, '<+0.1')
          .to(
            '[data-titles] [data-before-text]',
            { clipPath: 'inset(0% 0% 0% 0%)', ...defaultOpt },
            '<+0.1'
          );

        // 親のタイムラインに追加
        mainTl.add(circleScrollTl.current, '<+0.3').add(titleTl.current, '<');

        mainTl.then(() => {
          scrollAnimation();
        });

        // スクロールアニメーション
        const scrollAnimation = () => {
          gsap.to('[data-circle]', {
            clipPath: 'circle(145% at 100% 0)',
            scrollTrigger: {
              trigger: gsapRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            },
          });
          gsap.to('[data-scroll]', {
            yPercent: 100,
            scrollTrigger: {
              trigger: gsapRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            },
          });
        };
      }
    },
    { scope: gsapRef, dependencies: [mainTl] }
  );

  return (
    <section ref={gsapRef} className={styles.mainVisual}>
      {children}
    </section>
  );
};
export default MainVisual;
