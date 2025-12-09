import clsx from 'clsx';
import HeadingText from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import LottieClouds from '../lotties/LottieClouds';
import Image from 'next/image';
import { bigShoulders } from '@/lib/fonts';

import aboutImage01 from '../../../public/images/index/about_img01.png';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={clsx(styles.about, 'bg-main-gray')}>
      <ContentInner className={styles.inner}>
        <div className={styles.container}>
          <hgroup className={styles.heading}>
            <div className={styles.lottie}>
              <LottieClouds />
            </div>
            <HeadingText className={styles.title}>
              <span>A CURIOUS</span>
              <span>WEB DEVELOPER</span>
            </HeadingText>
          </hgroup>
          <div className={styles.paragraph}>
            <p className={clsx(styles.text, bigShoulders.className)}>
              AS A FRONT-END ENGINEER, I TAKE GENUINE JOY IN BRINGING DESIGNS TO LIFE. MY GREATEST
              ASSET IS MY CURIOSITY. I CONSTANTLY CHASE NEW TECHNOLOGIES AS A DEVELOPER, WHILE ALSO
              DIGGING INTO OLDER ONES WHEN NEEDED. THAT CURIOSITY IS THE FORCE THAT DRIVES
              EVERYTHING I DO.
            </p>
          </div>
          <figure className={styles.image}>
            <Image
              src={aboutImage01}
              alt="A CURIOUS WEB DEVELOPER"
              width={aboutImage01.width}
              height={aboutImage01.height}
            />
          </figure>
        </div>
      </ContentInner>
    </section>
  );
};
export default About;
