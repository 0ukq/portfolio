import HeadingText, { HeadingTextVariant } from '../heading/HeadingText';
import BaseLottie, { LottieRef } from '../lotties/BaseLottie';
import WaveHand from '../../../public/lotties/wave-hand.json';
import ContentInner from '../layout/ContentInner';
import ExLink from '../link/ExLink';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { ExternalLink } from 'lucide-react';
import FootText from './FootText';
import styles from './Closing.module.css';
import { useEffect, useRef } from 'react';
import StackItems from '../stack/StackItems';
import RollingTextAnimate from '../animation/RollingTextAnimate';
import { easeOutExpo } from '@/lib/custom-ease';
import HideUpAnimate from '../animation/HideUpAnimate';
import clsx from 'clsx';

const Closing: React.FC = () => {
  const lottieRef = useRef<LottieRef>(null);
  const gsapRef = useRef<HTMLElement>(null);

  useEffect(() => {
    lottieRef.current?.play();
    lottieRef.current?.setSpeed(0.5);
  }, []);

  useGSAP(
    () => {
      // スクロール
      gsap.set(gsapRef.current, { yPercent: -10 });
      gsap.to(gsapRef.current, {
        yPercent: 0,
        scrollTrigger: {
          trigger: gsapRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1.5,
        },
      });

      // 画面下テキスト
      gsap.set('[data-foot-text] svg', { yPercent: -100, clearProps: 'transform' });
      gsap.set('[data-foot-text] svg', { yPercent: -100 });

      gsap.to('[data-foot-text] svg', {
        duration: 2,
        yPercent: 0,
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
          markers: true,
        },
      });
    },
    { scope: gsapRef }
  );

  return (
    <section ref={gsapRef} className={styles.closing}>
      <ContentInner>
        <div className={styles.container}>
          <hgroup className={styles.title}>
            <div className={clsx(styles.lottie, 'hover-lottie')} data-closing-lottie>
              <HideUpAnimate>
                <BaseLottie lottieData={WaveHand} ref={lottieRef} />
              </HideUpAnimate>
            </div>
            <HeadingText className={styles.heading}>
              <RollingTextAnimate text="THANKS FOR CHECKING OUT" duration={1.4} />
              <RollingTextAnimate text="MY PORTFOLIO!" delay={0.4} duration={1.4} />
            </HeadingText>
          </hgroup>
          <div className={styles.info}>
            <div className={styles.box}>
              <HeadingText variant={HeadingTextVariant.HEADING3} data-built-title>
                <HideUpAnimate delay={0.4}>BUILT WITH</HideUpAnimate>
              </HeadingText>
              <ul className={styles.list}>
                <li>
                  <HideUpAnimate delay={0.4}>Framework - Next.js</HideUpAnimate>
                </li>
                <li>
                  <HideUpAnimate delay={0.4}>Animation - GSAP / Lottie</HideUpAnimate>
                </li>
                <li>
                  <HideUpAnimate delay={0.4}>CMS - microCMS</HideUpAnimate>
                </li>
                <li>
                  <HideUpAnimate delay={0.4}>Hosting - Vercel</HideUpAnimate>
                </li>
              </ul>
            </div>
            <div className={styles.box}>
              <HeadingText variant={HeadingTextVariant.HEADING3}>
                <HideUpAnimate delay={0.4}>LINKS</HideUpAnimate>
              </HeadingText>
              <ul className={styles.links}>
                <li>
                  <HideUpAnimate delay={0.2}>
                    <ExLink href="https://example.com">
                      GitHub
                      <ExternalLink strokeWidth={1.5} />
                    </ExLink>
                  </HideUpAnimate>
                </li>
                <li>
                  <HideUpAnimate delay={0.2}>
                    <ExLink href="https://example.com">
                      Zenn
                      <ExternalLink strokeWidth={1.5} />
                    </ExLink>
                  </HideUpAnimate>
                </li>
              </ul>
            </div>
          </div>
          <p className={styles.copy}>
            <small>&copy; 2025 Daiki Hirano, Code & Design by Me</small>
          </p>
        </div>
      </ContentInner>
      <FootText className={styles.footText} data-foot-text />
    </section>
  );
};
export default Closing;
