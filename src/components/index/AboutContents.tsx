import HideUpAnimate from '../animation/HideUpAnimate';
import RollingTextAnimate from '../animation/RollingTextAnimate';
import HeadingText from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import ScrollInteractivityLottie from '../lotties/ScrollInteractivityLottie';
import Clouds from '../../../public/lotties/clouds.json';

import styles from './AboutContents.module.css';
import clsx from 'clsx';
import { bigShoulders } from '@/lib/fonts';
import StackText from '../stack/StackText';

const AboutContents: React.FC = () => {
  return (
    <>
      <ContentInner className={styles.inner}>
        <hgroup data-heading className={styles.heading}>
          <div data-lottie className={clsx(styles.lottie, 'hover-lottie')}>
            <HideUpAnimate>
              <ScrollInteractivityLottie lottieData={Clouds} />
            </HideUpAnimate>
          </div>
          <HeadingText className={styles.title}>
            <RollingTextAnimate text="A CURIOUS WEB DEVELOPER" />
          </HeadingText>
        </hgroup>
      </ContentInner>
      <div data-text-trigger className={styles.content}>
        <p className={clsx(styles.paragraphs, bigShoulders.className)} data-paragraphs>
          <StackText text="AS A FRONT-END DEVELOPER," className={styles.text} />
          <StackText
            text="I TAKE GENUINE JOY IN BRINGING DESIGNS TO LIFE"
            className={styles.text}
          />
          <StackText text="MY GREATEST ASSET IS MY CURIOSITY." className={styles.text} />
          <StackText
            text="I CONSTANTLY CHASE NEW TECHNOLOGIES AS A DEVELOPER,"
            className={styles.text}
          />
          <StackText
            text="WHILE ALSO DIGGING INTO OLDER ONES WHEN NEEDED."
            className={styles.text}
          />
          <StackText
            text="THAT CURIOSITY IS THE FORCE THAT DRIVES EVERYTHING I DO."
            className={styles.text}
          />
        </p>
      </div>
    </>
  );
};
export default AboutContents;
