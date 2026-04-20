import HeadingText from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import Image from 'next/image';
import SampleImg01 from '../../../public/images/index/profile_sample_img01.jpg';
import SampleImg02 from '../../../public/images/index/profile_sample_img02.jpg';
import SampleImg03 from '../../../public/images/index/profile_sample_img03.jpg';
import SampleImg04 from '../../../public/images/index/profile_sample_img04.jpg';
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
      const thumbnails: HTMLElement[] = gsap.utils.toArray('[data-thumbnail]');
      thumbnails.forEach((thumbnail, i) => {
        if (i === 0) return;
        const img = thumbnail.querySelector('img');
        gsap.set(thumbnail, { clipPath: 'inset( 100% 0% 0%)' }); // figure
        gsap.set(img, { scale: 1.1 }); // img
      });
      gsap.set('[data-profile-split]', { clipPath: 'inset(0% 100% 0% 0%)' });

      // scrollTrigger 共通設定
      const defaultTrigger: ScrollTrigger.Vars = {
        trigger: gsapRef.current,
        start: 'top top',
        end: 'bottom-=10% bottom',
        scrub: 1.2,
      };

      // 画像
      const thumbnailTl = gsap.timeline({
        scrollTrigger: { ...defaultTrigger, start: 'top+=5% top' },
      });
      thumbnails.forEach((thumbnail, i) => {
        if (i === 0) return;
        const img = thumbnail.querySelector('img');
        thumbnailTl.to(thumbnail, { clipPath: 'inset(0% 0% 0% 0%)' });
        thumbnailTl.to(img, { yPercent: -5, scale: 1 }, '<');
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
                  <dt>
                    <span data-profile-split className="clip">
                      Age
                    </span>
                  </dt>
                  <dd>
                    <span data-profile-split className="clip">
                      20s
                    </span>
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt>
                    <span data-profile-split className="clip">
                      Role
                    </span>
                  </dt>
                  <dd>
                    <span data-profile-split className="clip">
                      Frontend Developer
                    </span>
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt>
                    <span data-profile-split className="clip">
                      Experience
                    </span>
                  </dt>
                  <dd>
                    <span data-profile-split className="clip">
                      6+ Years
                    </span>
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt>
                    <span data-profile-split className="clip">
                      Interests
                    </span>
                  </dt>
                  <dd>
                    <span data-profile-split className="clip">
                      Road trips, Angling, and Strength training.
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
            <div className={clsx(styles.thumbnails)} data-thumbnails>
              <figure className={clsx(styles.thumbnail, 'clip')} data-thumbnail>
                <Image
                  src={SampleImg01}
                  alt="profile"
                  width={SampleImg01.width}
                  height={SampleImg01.height}
                  className={clsx(styles.image, 'fit')}
                  data-image
                />
              </figure>
              <figure className={clsx(styles.thumbnail, 'clip')} data-thumbnail>
                <Image
                  src={SampleImg02}
                  alt="profile"
                  width={SampleImg02.width}
                  height={SampleImg02.height}
                  className={clsx(styles.image, 'fit')}
                  data-image
                />
              </figure>
              <figure className={clsx(styles.thumbnail, 'clip')} data-thumbnail>
                <Image
                  src={SampleImg03}
                  alt="profile"
                  width={SampleImg03.width}
                  height={SampleImg03.height}
                  className={clsx(styles.image, 'fit')}
                  data-image
                />
              </figure>
              <figure className={clsx(styles.thumbnail, 'clip')} data-thumbnail>
                <Image
                  src={SampleImg04}
                  alt="profile"
                  width={SampleImg04.width}
                  height={SampleImg04.height}
                  className={clsx(styles.image, 'fit')}
                  data-image
                />
              </figure>
            </div>
          </div>
        </ContentInner>
      </div>
    </section>
  );
};
export default Profile;
