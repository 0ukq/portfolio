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

  useEffect(() => {
    lottieRef.current?.play();
    lottieRef.current?.setSpeed(0.5);
  }, []);

  useGSAP(() => {
    // 画面下テキストアニメーション
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
  });

  return (
    <section className={styles.closing}>
      <ContentInner>
        <div className={styles.container}>
          <hgroup className={styles.title}>
            <div className={clsx(styles.lottie, 'hover-lottie')}>
              <HideUpAnimate>
                <BaseLottie lottieData={WaveHand} ref={lottieRef} />
              </HideUpAnimate>
            </div>
            <HeadingText className={styles.heading}>
              <RollingTextAnimate text="THANKS FOR CHECKING OUT" />
              <RollingTextAnimate text="MY PORTFOLIO!" delay={0.4} />
            </HeadingText>
          </hgroup>
          <div className={styles.info}>
            <div className={styles.box}>
              <HeadingText variant={HeadingTextVariant.HEADING3} data-built-title>
                <RollingTextAnimate text="BUILT WITH" />
              </HeadingText>
              <ul className={styles.list}>
                <li>
                  <HideUpAnimate>Framework - Next.js</HideUpAnimate>
                </li>
                <li>
                  <HideUpAnimate delay={0.2}>Animation - GSAP / Lottie</HideUpAnimate>
                </li>
                <li>
                  <HideUpAnimate delay={0.4}>CMS - microCMS</HideUpAnimate>
                </li>
                <li>
                  <HideUpAnimate delay={0.6}>Hosting - Vercel</HideUpAnimate>
                </li>
              </ul>
            </div>
            <div className={styles.box}>
              <HeadingText variant={HeadingTextVariant.HEADING3}>
                <RollingTextAnimate text="LINKS" />
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
