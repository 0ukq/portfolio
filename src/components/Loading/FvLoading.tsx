import StackText from '../Text/StackText';

import styles from '@/components/Loading/FvLoading.module.css';
import LottieRollingFace, { type LottieRollingFaceRef } from '../Lottie/LottieRollingFace';
import LottieSalute from '../Lottie/LottieSalute';
import { useRef } from 'react';
import type { LottieSaluteRef } from '../Lottie/LottieSalute';
import clsx from 'clsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

type FvLoadingProps = {
  timeline: gsap.core.Timeline | null;
};

gsap.registerPlugin(CustomEase);

export default function FvLoading({ timeline }: FvLoadingProps) {
  const animationsRef = useRef<HTMLDivElement>(null);
  const lottieSaluteRef = useRef<LottieSaluteRef>(null);
  const LottieRollingFaceRef = useRef<LottieRollingFaceRef>(null);
  CustomEase.create('loadingEase', '0.16, 1, 0.3, 1'); // デフォルトのイージング
  CustomEase.create('insetEase', '0.85, 0, 0.15, 1'); // カラーフィルター（inset）のイージング
  CustomEase.create('containerEase', '0.22, 1, 0.36, 1'); // コンテナのイージング

  useGSAP(
    () => {
      if (timeline && animationsRef.current) {
        gsap.set('[data-text-loading]', { yPercent: 100 });
        gsap.set('[data-text-loading] [data-text-before]', { opacity: 0.2 });
        gsap.set('[data-text-loading] [data-text-after]', { clipPath: 'inset(0% 100% 0% 0%)' });
        gsap.set('[data-text-completed]', { yPercent: 100 });
        gsap.set('[data-lottie-rolling]', { xPercent: 100 });
        gsap.set('[data-lottie-salute]', { xPercent: 100 });

        const defaults: gsap.TweenVars = { duration: 1.8, ease: 'loadingEase' };

        timeline.to('[data-text-loading]', {
          ...defaults,
          yPercent: 0,
          duration: 1.4,
          delay: 0.5,
        });
        timeline.to(
          '[data-lottie-rolling]',
          {
            ...defaults,
            xPercent: 0,
            duration: 1.4,
            onStart: () => LottieRollingFaceRef.current?.play(),
          },
          '<+.2'
        );
        timeline.to('[data-text-loading] [data-text-after]', {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'insetEase',
          duration: 4,
        });
        timeline.to('[data-text-loading]', {
          ...defaults,
          yPercent: -100,
        });
        timeline.to(
          '[data-text-completed]',
          {
            ...defaults,
            yPercent: 0,
          },
          '<'
        );
        timeline.to(
          '[data-lottie-rolling]',
          {
            ...defaults,
            xPercent: -100,
          },
          '<'
        );
        timeline.to(
          '[data-lottie-salute]',
          {
            ...defaults,
            xPercent: 0,
            onStart: () => lottieSaluteRef.current?.play(),
          },
          '<'
        );
        timeline.to(
          animationsRef.current,
          {
            scale: 0.9,
            duration: 1,
            ease: 'containerEase',
          },
          '+=.8'
        );
        timeline.to(
          animationsRef.current,
          {
            height: 0,
            duration: 1,
            ease: 'containerEase',
          },
          '-=.2'
        );
        timeline.to(
          '[data-container]',
          {
            height: 0,
            duration: 1,
            ease: 'containerEase',
          },
          '<'
        );
      }
    },
    { scope: animationsRef, dependencies: [timeline] }
  );

  return (
    <div ref={animationsRef} className={clsx(styles.FvLoading, 'clip')}>
      <div className={clsx(styles.wrapper, 'clip')}>
        <div data-container className={styles.container}>
          <div className={clsx(styles.lotties, 'clip')}>
            <div data-lottie-salute className={styles.lottie}>
              <LottieSalute ref={lottieSaluteRef} />
            </div>
            <div data-lottie-rolling className={styles.lottie}>
              <LottieRollingFace ref={LottieRollingFaceRef} />
            </div>
          </div>
          <div className={clsx(styles.paragraphs, 'clip')}>
            <p data-text-loading className={styles.text}>
              <StackText text="LOADING..." />
            </p>
            <p data-text-completed className={styles.text}>
              COMPLETED.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
