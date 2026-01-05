import HeadingText from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import AboutImg01 from '../../../public/images/index/about_img01.jpg';
import Image from 'next/image';
import clsx from 'clsx';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import styles from './Profile.module.css';

gsap.registerPlugin(SplitText);

const Profile: React.FC = () => {
  const gsapRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // 初期値設定
      gsap.set('[data-image]', { clipPath: 'inset( 0% 0% 88% 0%)', scale: 1.4 });
      gsap.set('[data-profile-split]', { clipPath: 'inset(0% 100% 0% 0%)' });

      // scrollTrigger 共通設定
      const defaultTrigger: ScrollTrigger.Vars = {
        trigger: gsapRef.current,
        start: 'top top',
        end: 'bottom-=10% bottom',
        scrub: 1.2,
      };

      // 画像
      gsap.to('[data-image]', {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        scrollTrigger: {
          ...defaultTrigger,
          onLeave: () => {
            console.log('Image left the viewport');
          },
        },
      });

      // テキストアニメーション
      gsap.to('[data-profile-split]', {
        clipPath: 'inset(0% 0% 0% 0%)',
        scrollTrigger: { ...defaultTrigger },
      });
    },
    { scope: gsapRef }
  );

  return (
    <section ref={gsapRef} className={clsx(styles.profile, 'bg-main-gray')}>
      <div className={styles.wrapper}>
        <ContentInner>
          <div className={styles.block}>
            <div className={styles.content}>
              <HeadingText>PROFILE</HeadingText>
              <dl className={styles.info}>
                <div className={styles.item}>
                  <dt data-profile-split className="clip">
                    Age
                  </dt>
                  <dd data-profile-split className="clip">
                    20s
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt data-profile-split className="clip">
                    Role
                  </dt>
                  <dd data-profile-split className="clip">
                    Frontend Developer
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt data-profile-split className="clip">
                    Experience
                  </dt>
                  <dd data-profile-split className="clip">
                    6+ Years
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt data-profile-split className="clip">
                    Interests
                  </dt>
                  <dd data-profile-split className="clip">
                    Road trips, Angling, and Strength training.
                  </dd>
                </div>
              </dl>
            </div>
            <figure className={clsx(styles.thumbnail, 'clip')} data-thumbnail>
              <Image
                src={AboutImg01}
                alt="profile"
                width={AboutImg01.width}
                height={AboutImg01.height}
                className={clsx(styles.image, 'fit')}
                data-image
              />
            </figure>
          </div>
        </ContentInner>
      </div>
    </section>
  );
};
export default Profile;
