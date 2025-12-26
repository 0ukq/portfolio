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
      const texts: HTMLElement[] = Array.from(document.querySelectorAll('[data-profile-split]'));
      const splits = texts.map(text => {
        gsap.set(text, { display: 'inline-block' });
        return SplitText.create(text, { type: 'chars', tag: 'span' });
      });

      gsap.set('[data-image]', { clipPath: 'inset( 0% 0% 100% 0%)', scale: 1.4 });

      // scrollTrigger 共通設定
      const defaultTrigger: ScrollTrigger.Vars = {
        trigger: gsapRef.current,
        start: 'top top',
        end: 'bottom-=14% bottom',
        scrub: 1.2,
      };

      gsap.to('[data-image]', {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        scrollTrigger: { ...defaultTrigger },
      });

      // テキストアニメーション
      splits.forEach(split => {
        gsap.set(split.chars, { display: 'inline-block', yPercent: 100 });
        gsap.to(split.chars, {
          yPercent: 0,
          stagger: 0.05,
          scrollTrigger: { ...defaultTrigger },
        });
        console.log(split.chars);
      });
    },
    { scope: gsapRef }
  );

  return (
    <section ref={gsapRef} className={styles.profile}>
      <div className={styles.wrapper}>
        <ContentInner>
          <div className={styles.block}>
            <div className={styles.content}>
              <HeadingText>
                <span data-profile-split className="clip">
                  PROFILE
                </span>
              </HeadingText>
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
            <figure className={clsx(styles.thumbnail, 'clip')}>
              <Image
                src={AboutImg01}
                alt="profile"
                width={AboutImg01.width}
                height={AboutImg01.height}
                className={clsx(styles.image, 'fit')}
                data-image
              />
              {/* <div className={styles.background} data-background /> */}
            </figure>
          </div>
        </ContentInner>
      </div>
    </section>
  );
};
export default Profile;
