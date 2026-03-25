'use client';

import { WorkData } from '@/lib/data';
import Image from 'next/image';
import clsx from 'clsx';
import ContentInner from '../layout/ContentInner';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

import styles from './ScreenShots.module.css';
import { easeOutQuint } from '@/lib/custom-ease';

gsap.registerPlugin(ScrollTrigger);

interface ScreenShotsProps {
  data: WorkData;
}

const ScreenShots: React.FC<ScreenShotsProps> = ({ data }) => {
  const gsapRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const screenShots: HTMLElement[] = gsap.utils.toArray('[data-screen-shot]');

      // 共通tween
      const defaultTween: gsap.TweenVars = {
        duration: 2,
        ease: easeOutQuint,
      };

      // スクリーンショット画像アニメーション
      screenShots.forEach(shot => {
        const img = shot.querySelector('img');

        gsap.set(shot, { clipPath: 'inset(15%)' });
        gsap.set(img, { filter: 'grayscale(1)' });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: shot,
            start: 'top bottom-=15%',
            // markers: true,
          },
        });

        tl.to(shot, {
          clipPath: 'inset(0%)',
          ...defaultTween,
        }).to(
          img,
          {
            filter: 'grayscale(0)',
            ...defaultTween,
          },
          '<+0.4'
        );
      });
    },
    { scope: gsapRef }
  );

  return (
    <section ref={gsapRef} className={styles.screenShots}>
      <ContentInner className={styles.inner}>
        <ul className={styles.list}>
          {data.screenShots.map((screenShot, index) => (
            <li key={index} className={styles.item}>
              <figure className={clsx(styles.image, 'clip')} data-screen-shot>
                <Image
                  src={screenShot.src}
                  width={screenShot.width}
                  height={screenShot.height}
                  alt={`${data.title} スクリーンショット ${index + 1}`}
                  className="fit"
                />
              </figure>
            </li>
          ))}
        </ul>
      </ContentInner>
    </section>
  );
};
export default ScreenShots;
