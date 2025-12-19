import clsx from 'clsx';
import HeadingText, { HeadingTextAlign, HeadingTextVariant } from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import BaseLottie from '../lotties/BaseLottie';
import ShakingFace from '../../../public/lotties/shaking-face.json';

import styles from './TechStack.module.css';
import ReactVector from '../vector/ReactVector';
import NextVector from '../vector/NextVector';
import TsVector from '../vector/TsVector';
import CssVector from '../vector/CssVector';
import HtmlVector from '../vector/HtmlVector';

const TechStack: React.FC = () => {
  return (
    <section className={clsx(styles.techStack, 'bg-main-gray')}>
      <ContentInner>
        <HeadingText align={HeadingTextAlign.CENTER}>
          <span className={styles.title}>
            <span className={styles.lottie}>
              <BaseLottie lottieData={ShakingFace} />
            </span>
            TECH STACK
          </span>
        </HeadingText>
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
          <HeadingText align={HeadingTextAlign.CENTER} variant={HeadingTextVariant.HEADING3}>
            OTHER
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
