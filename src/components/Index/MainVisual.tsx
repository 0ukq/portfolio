import { Image } from '@unpic/react';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import StackText from '../Text/StackText';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

import styles from '@/components/Index/MainVisual.module.css';

type MainVisualProps = {
  timeline: gsap.core.Timeline | null;
};

gsap.registerPlugin(CustomEase);

export default function MainVisual({ timeline }: MainVisualProps) {
  const animationsRef = useRef<HTMLElement>(null);
  CustomEase.create('textEase', '0.33, 1, 0.68, 1');

  useGSAP(
    () => {
      console.log(timeline);
      if (timeline && animationsRef.current) {
        gsap.set('[data-text-before]', { opacity: 0.1, clipPath: 'inset(0% 100% 0% 0%)' });
        gsap.set('[data-text-after]', { clipPath: 'inset(0% 100% 0% 0%)' });
        gsap.set('[data-h1-text]', { xPercent: -2 });
        gsap.set('[data-visual]', { xPercent: -5, clipPath: 'inset(0% 100% 0% 0%)' });

        const defaults: gsap.TweenVars = { duration: 1.6, ease: 'textEase' };

        timeline.to(
          '[data-visual]',
          {
            ...defaults,
            xPercent: 0,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.8,
          },
          '<+.4'
        );
        timeline.to('[data-h1-text]', { ...defaults, xPercent: 0 }, '<+.2');
        timeline.to('[data-text-before]', { ...defaults, clipPath: 'inset(0% 0% 0% 0%)' }, '<');
        timeline.to('[data-text-after]', { ...defaults, clipPath: 'inset(0% 0% 0% 0%)' }, '<+.2');
      }
    },
    { scope: animationsRef, dependencies: [timeline] }
  );

  return (
    <section ref={animationsRef} className={styles.MainVisual}>
      <div className={styles.inner}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span data-h1-text className={styles.item}>
              <StackText text="DAIKI" className="ff-b-shoulders" />
            </span>
            <span data-h1-text className={styles.item}>
              <StackText text="HIRANO" className="ff-b-shoulders" />
            </span>
            <span data-h1-text className={styles.item}>
              <StackText text="PORTFOLIO" className="ff-b-shoulders" />
            </span>
          </h1>
          <figure data-visual className={styles.visual}>
            <Image
              src="/index/main-visual-vector.jpg"
              layout="constrained"
              width={1154}
              height={1360}
              alt="Main Visual"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
