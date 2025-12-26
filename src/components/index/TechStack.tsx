import HeadingText, { HeadingTextAlign, HeadingTextVariant } from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import BaseLottie, { LottieRef } from '../lotties/BaseLottie';
import ShakingFace from '../../../public/lotties/shaking-face.json';
import ReactVector from '../vector/ReactVector';
import NextVector from '../vector/NextVector';
import TsVector from '../vector/TsVector';
import CssVector from '../vector/CssVector';
import HtmlVector from '../vector/HtmlVector';
import StackItems from '../stack/StackItems';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useEffect, useRef } from 'react';
import RollingTextAnimate from '../animation/RollingTextAnimate';

import styles from './TechStack.module.css';
import HideUpAnimate from '../animation/HideUpAnimate';
import clsx from 'clsx';

gsap.registerPlugin(SplitText);

const TechStack: React.FC = () => {
  const gsapRef = useRef<HTMLElement>(null);
  const lottieRef = useRef<LottieRef>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }, []);

  return (
    <section ref={gsapRef} className={styles.techStack}>
      <ContentInner>
        <hgroup className={styles.heading}>
          <div className={clsx(styles.lottie, 'hover-lottie')}>
            <HideUpAnimate>
              <BaseLottie lottieData={ShakingFace} ref={lottieRef} />
            </HideUpAnimate>
          </div>
          <HeadingText align={HeadingTextAlign.CENTER}>
            <RollingTextAnimate text="TECH STACK" />
          </HeadingText>
        </hgroup>
        <ul className={styles.logos}>
          <li>
            <ReactVector />
            <p>3YEAR.</p>
          </li>
          <li>
            <NextVector />
            <p>2YEAR.</p>
          </li>
          <li>
            <TsVector />
            <p>5YEAR.</p>
          </li>
          <li>
            <CssVector />
            <p>5YEAR.</p>
          </li>
          <li>
            <HtmlVector />
            <p>5YEAR.</p>
          </li>
        </ul>
        <div className={styles.other}>
          <HeadingText
            align={HeadingTextAlign.CENTER}
            variant={HeadingTextVariant.HEADING3}
            className={styles.otherTitle}
          >
            <RollingTextAnimate text="OTHER" />
          </HeadingText>
          <ul className={styles.otherList}>
            <li>・TailWind CSS</li>
            <li>・GSAP</li>
            <li>・React Router</li>
            <li>・microCMS</li>
            <li>・GitHub</li>
            <li>・Figma</li>
            <li>・Post CSS</li>
            <li>・Three.js</li>
            <li>・React Hook Form</li>
            <li>・Vercel</li>
            <li>・Axios</li>
            <li>・Photoshop</li>
          </ul>
        </div>
      </ContentInner>
    </section>
  );
};
export default TechStack;
