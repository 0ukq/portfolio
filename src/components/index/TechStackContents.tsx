import HeadingText, { HeadingTextAlign, HeadingTextVariant } from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import ShakingFace from '../../../public/lotties/shaking-face.json';
import ReactVector from '../vector/ReactVector';
import NextVector from '../vector/NextVector';
import TsVector from '../vector/TsVector';
import CssVector from '../vector/CssVector';
import HtmlVector from '../vector/HtmlVector';
import RollingTextAnimate from '../animation/RollingTextAnimate';
import HideUpAnimate from '../animation/HideUpAnimate';
import ScrollInteractivityLottie from '../lotties/ScrollInteractivityLottie';
import clsx from 'clsx';

import styles from './TechStackContents.module.css';

const TechStackContents: React.FC = () => {
  return (
    <ContentInner className={styles['is-animation']}>
      <hgroup className={styles.heading}>
        <div className={clsx(styles.lottie, 'hover-lottie')}>
          <HideUpAnimate>
            <ScrollInteractivityLottie lottieData={ShakingFace} />
          </HideUpAnimate>
        </div>
        <HeadingText align={HeadingTextAlign.CENTER}>
          <RollingTextAnimate text="TECH STACK" />
        </HeadingText>
      </hgroup>
      <ul className={styles.logos} data-tech-stack-logos>
        <li>
          <ReactVector />
          <HideUpAnimate>
            <p>3YEAR.</p>
          </HideUpAnimate>
        </li>
        <li>
          <NextVector />
          <HideUpAnimate>
            <p>2YEAR.</p>
          </HideUpAnimate>
        </li>
        <li>
          <TsVector />
          <HideUpAnimate>
            <p>5YEAR.</p>
          </HideUpAnimate>
        </li>
        <li>
          <CssVector />
          <HideUpAnimate>
            <p>5YEAR.</p>
          </HideUpAnimate>
        </li>
        <li>
          <HtmlVector />
          <HideUpAnimate>
            <p>5YEAR.</p>
          </HideUpAnimate>
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
          <li>
            <HideUpAnimate>・TailWind CSS</HideUpAnimate>
          </li>
          <li>
            <HideUpAnimate>・GSAP</HideUpAnimate>
          </li>
          <li>
            <HideUpAnimate>・React Router</HideUpAnimate>
          </li>
          <li>
            <HideUpAnimate>・microCMS</HideUpAnimate>
          </li>
          <li>
            <HideUpAnimate>・GitHub</HideUpAnimate>
          </li>
          <li>
            <HideUpAnimate>・Figma</HideUpAnimate>
          </li>
          <li>
            <HideUpAnimate>・Post CSS</HideUpAnimate>
          </li>
          <li>
            <HideUpAnimate>・Three.js</HideUpAnimate>
          </li>
          <li>
            <HideUpAnimate>・React Hook Form</HideUpAnimate>
          </li>
          <li>
            <HideUpAnimate>・Vercel</HideUpAnimate>
          </li>
          <li>
            <HideUpAnimate>・Axios</HideUpAnimate>
          </li>
          <li>
            <HideUpAnimate>・Photoshop</HideUpAnimate>
          </li>
        </ul>
      </div>
    </ContentInner>
  );
};
export default TechStackContents;
