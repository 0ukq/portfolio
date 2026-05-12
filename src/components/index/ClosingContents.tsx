import HeadingText, { HeadingTextAlign, HeadingTextVariant } from '../heading/HeadingText';
import WaveHand from '../../../public/lotties/wave-hand.json';
import ContentInner from '../layout/ContentInner';
import ExLink from '../link/ExLink';
import { ExternalLink } from 'lucide-react';
import FootText from './FootText';
import RollingTextAnimate from '../animation/RollingTextAnimate';
import HideUpAnimate from '../animation/HideUpAnimate';
import ScrollInteractivityLottie from '../lotties/ScrollInteractivityLottie';
import clsx from 'clsx';

import styles from './ClosingContents.module.css';

const ClosingContents: React.FC = () => {
  return (
    <div className={styles['is-animation']}>
      <ContentInner>
        <div className={styles.container}>
          <hgroup className={styles.title}>
            <div className={clsx(styles.lottie, 'hover-lottie')} data-closing-lottie>
              <HideUpAnimate>
                <ScrollInteractivityLottie lottieData={WaveHand} />
              </HideUpAnimate>
            </div>
            <HeadingText align={HeadingTextAlign.CENTER} className={styles.heading}>
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
    </div>
  );
};
export default ClosingContents;
