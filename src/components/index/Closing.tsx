import HeadingText, { HeadingTextAlign, HeadingTextVariant } from '../heading/HeadingText';
import BaseLottie from '../lotties/BaseLottie';
import WaveHand from '../../../public/lotties/wave-hand.json';
import ContentInner from '../layout/ContentInner';
import ExLink from '../link/ExLink';

import { ExternalLink } from 'lucide-react';
import FootText from './FootText';
import styles from './Closing.module.css';

const Closing: React.FC = () => {
  return (
    <section className={styles.closing}>
      <ContentInner>
        <div className={styles.container}>
          <HeadingText align={HeadingTextAlign.CENTER} className={styles.title}>
            <div className={styles.lottie}>
              <BaseLottie lottieData={WaveHand} />
            </div>
            THANKS FOR CHECKING OUT
            <br />
            MY PORTFOLIO!
          </HeadingText>
          <div className={styles.info}>
            <div className={styles.box}>
              <HeadingText variant={HeadingTextVariant.HEADING3}>BUILT WITH</HeadingText>
              <ul className={styles.list}>
                <li>Framework - Next.js</li>
                <li>Animation - GSAP / Lottie</li>
                <li>CMS - microCMS</li>
                <li>Hosting - Vercel</li>
              </ul>
            </div>
            <div className={styles.box}>
              <HeadingText variant={HeadingTextVariant.HEADING3}>LINKS</HeadingText>
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
      <FootText className={styles.footText} />
    </section>
  );
};
export default Closing;
