'use client';

import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import StackItems from '../stack/StackItems';
import { easeOutExpo } from '@/libs/custom-ease';
import Rolling from '../../../public/lotties/rolling.json';
import Salute from '../../../public/lotties/salute.json';
import BaseLottie, { LottieRef } from '../lotties/BaseLottie';

import styles from './Loading.module.css';

type LoadingProps = {
  timeline?: gsap.core.Timeline | null;
};

const Loading: React.FC<LoadingProps> = ({ timeline }) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  const gsapRef = useRef<HTMLDivElement>(null);
  const rollingRef = useRef<LottieRef>(null);
  const saluteRef = useRef<LottieRef>(null);

  useEffect(() => {
    setDomLoaded(true);
  }, [domLoaded]);

  useGSAP(
    () => {
      if (timeline && gsapRef.current) {
        // 初期値設定
        gsap.set('[data-loading-text]', { yPercent: 100 });
        gsap.set('[data-loading-text-before]', { opacity: 0.5 });
        gsap.set('[data-loading-text-after]', { clipPath: 'inset(0 100% 0 0)' });
        gsap.set('[data-completed-text]', { yPercent: 100 });
        gsap.set('[data-rolling]', { xPercent: 100 });
        gsap.set('[data-salute]', { xPercent: 100 });

        const defaultOpt: gsap.TweenVars = { duration: 1.8, ease: easeOutExpo };
        timeline
          .to('[data-loading-text]', { yPercent: 0, ...defaultOpt })
          .to(
            '[data-rolling]',
            {
              xPercent: 0,
              onStart: () => {
                rollingRef.current?.play();
              },
              ...defaultOpt,
            },
            '<'
          )
          .to('[data-loading-text-after]', {
            clipPath: 'inset(0 0% 0 0)',
            duration: 3,
          })
          .to('[data-loading-text]', { yPercent: -100, ...defaultOpt })
          .to('[data-rolling]', { xPercent: -100, ...defaultOpt }, '<')
          .to('[data-completed-text]', { yPercent: 0, ...defaultOpt }, '<+0.2')
          .to(
            '[data-salute]',
            {
              xPercent: 0,
              onStart: () => {
                setTimeout(() => saluteRef.current?.play(), 1000);
              },
              ...defaultOpt,
            },
            '<'
          )
          .to(gsapRef.current, { scale: 0.8, ...defaultOpt })
          .to(gsapRef.current, { height: 0, ...defaultOpt, duration: 1.4 }, '<+0.6');
      }
    },
    { scope: gsapRef, dependencies: [timeline] }
  );

  return (
    <div ref={gsapRef} className={clsx(styles.loading, !domLoaded && styles.initialized, 'clip')}>
      <div className={styles.content}>
        <StackItems
          before={<BaseLottie lottieData={Rolling} ref={rollingRef} />}
          after={<BaseLottie lottieData={Salute} ref={saluteRef} />}
          beforeData="rolling"
          afterData="salute"
          className={clsx(styles.lottie, 'stack-items')}
        />
        <p className={styles.text}>
          <StackItems
            before={
              <StackItems
                before="LOADING..."
                beforeData="loading-text-before"
                after="LOADING..."
                afterData="loading-text-after"
              />
            }
            after={<span>COMPLETED!</span>}
            beforeData="loading-text"
            afterData="completed-text"
          />
        </p>
      </div>
    </div>
  );
};

export default Loading;
