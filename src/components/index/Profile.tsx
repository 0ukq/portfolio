import HeadingText from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import AboutImg01 from '../../../public/images/index/about_img01.jpg';
import Image from 'next/image';
import clsx from 'clsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import styles from './Profile.module.css';

const Profile: React.FC = () => {
  const gsapRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set('[data-background]', { clipPath: 'inset(0% 0% 0% 0%)' });
      gsap.set('[data-hide-text]', { display: 'inline-block' });
      gsap.set('[data-hide-text] > span', { display: 'inline-block', yPercent: 100 });

      gsap.to('[data-background]', {
        clipPath: 'inset(100% 0% 0% 0%)',
        scrollTrigger: {
          trigger: gsapRef.current,
          start: 'top top',
          end: 'bottom-=14% bottom',
          scrub: 1.2,
          markers: true,
        },
      });
      gsap.to('[data-hide-text] > span', {
        yPercent: 0,
        scrollTrigger: {
          trigger: gsapRef.current,
          start: 'top top',
          end: 'bottom-=14% bottom',
          scrub: 1.2,
          markers: true,
        },
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
                <span className="clip" data-hide-text>
                  <span>PROFILE</span>
                </span>
              </HeadingText>
              <dl className={styles.info}>
                <div className={styles.item}>
                  <dt>
                    <span className="clip" data-hide-text>
                      <span>Age</span>
                    </span>
                  </dt>
                  <dd>
                    <span className="clip" data-hide-text>
                      <span>20s</span>
                    </span>
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt>
                    <span className="clip" data-hide-text>
                      <span>Role</span>
                    </span>
                  </dt>
                  <dd>
                    <span className="clip" data-hide-text>
                      <span>Frontend Developer</span>
                    </span>
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt>
                    <span className="clip" data-hide-text>
                      <span>Experience</span>
                    </span>
                  </dt>
                  <dd>
                    <span className="clip" data-hide-text>
                      <span>6+ Years</span>
                    </span>
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt>
                    <span className="clip" data-hide-text>
                      <span>Interests</span>
                    </span>
                  </dt>
                  <dd>
                    <span className="clip" data-hide-text>
                      <span>Road trips, Angling, and Strength training.</span>
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
            <figure className={styles.thumbnail}>
              <Image
                src={AboutImg01}
                alt="profile"
                width={AboutImg01.width}
                height={AboutImg01.height}
                className={clsx(styles.image, 'fit')}
              />
              <div className={styles.background} data-background />
            </figure>
          </div>
        </ContentInner>
      </div>
    </section>
  );
};
export default Profile;
