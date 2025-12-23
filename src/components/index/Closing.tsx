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
import { useRef } from 'react';
import StackItems from '../stack/StackItems';
import RollingTextAnimate from '../animation/RollingTextAnimate';
import { easeOutExpo } from '@/lib/custom-ease';
import HideUpAnimate from '../animation/HideUpAnimate';
import clsx from 'clsx';

const Closing: React.FC = () => {
  const lottieRef = useRef<LottieRef>(null);

  if (lottieRef.current) {
    lottieRef.current.play();
    lottieRef.current.setSpeed(0.5);
  }

  useGSAP(() => {
    // 画面下テキストアニメーション
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
            <div className={clsx(styles.lottie, 'hover-lottie')} data-closing-lottie>
              <HideUpAnimate trigger="[data-closing-lottie]" target="[data-closing-target]">
                <div data-closing-target>
                  <BaseLottie lottieData={WaveHand} ref={lottieRef} />
                </div>
              </HideUpAnimate>
            </div>
            <RollingTextAnimate
              before="[data-before-closing-title]"
              after="[data-after-closing-title]"
              trigger="[data-heading]"
            >
              <HeadingText className={styles.heading} data-heading>
                <StackItems
                  before="THANKS FOR CHECKING OUT"
                  beforeData="before-closing-title"
                  after="THANKS FOR CHECKING OUT"
                  afterData="after-closing-title"
                  className={styles.stackItems}
                />
                <StackItems
                  before="MY PORTFOLIO!"
                  beforeData="before-closing-title"
                  after="MY PORTFOLIO!"
                  afterData="after-closing-title"
                  className={styles.stackItems}
                />
              </HeadingText>
            </RollingTextAnimate>
          </hgroup>
          <div className={styles.info}>
            <div className={styles.box}>
              <RollingTextAnimate
                before="[data-built-before-title]"
                after="[data-built-after-title]"
                trigger="[data-built-title]"
              >
                <HeadingText variant={HeadingTextVariant.HEADING3} data-built-title>
                  <StackItems
                    before="BUILT WITH"
                    beforeData="built-before-title"
                    after="BUILT WITH"
                    afterData="built-after-title"
                  />
                </HeadingText>
              </RollingTextAnimate>
              <ul className={styles.list}>
                <li>Framework - Next.js</li>
                <li>Animation - GSAP / Lottie</li>
                <li>CMS - microCMS</li>
                <li>Hosting - Vercel</li>
              </ul>
            </div>
            <div className={styles.box}>
              <RollingTextAnimate
                before="[data-links-before-title]"
                after="[data-links-after-title]"
                trigger="[data-links-title]"
              >
                <HeadingText variant={HeadingTextVariant.HEADING3} data-links-title>
                  <StackItems
                    before="LINKS"
                    beforeData="links-before-title"
                    after="LINKS"
                    afterData="links-after-title"
                  />
                </HeadingText>
              </RollingTextAnimate>
              <ul className={styles.links}>
                <li>
                  <ExLink href="https://example.com">
                    GitHub
                    <ExternalLink strokeWidth={1.5} />
                  </ExLink>
                </li>
                <li>
                  <ExLink href="https://example.com">
                    Zenn
                    <ExternalLink strokeWidth={1.5} />
                  </ExLink>
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
