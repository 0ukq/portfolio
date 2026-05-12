import HeadingText from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import Image from 'next/image';
import SampleImg01 from '../../../public/images/index/profile_sample_img01.jpg';
import SampleImg02 from '../../../public/images/index/profile_sample_img02.jpg';
import SampleImg03 from '../../../public/images/index/profile_sample_img03.jpg';
import SampleImg04 from '../../../public/images/index/profile_sample_img04.jpg';
import clsx from 'clsx';

import styles from './ProfileContents.module.css';

const ProfileContents: React.FC = () => {
  return (
    <div className={clsx(styles.wrapper, styles['is-animation'])}>
      <ContentInner>
        <div className={styles.block}>
          <div className={styles.content}>
            <HeadingText>PROFILE</HeadingText>
            <dl className={styles.info}>
              <div className={styles.item}>
                <dt>
                  <span data-profile-split className={clsx(styles['clip-text'], 'clip')}>
                    Age
                  </span>
                </dt>
                <dd>
                  <span data-profile-split className={clsx(styles['clip-text'], 'clip')}>
                    20s
                  </span>
                </dd>
              </div>
              <div className={styles.item}>
                <dt>
                  <span data-profile-split className={clsx(styles['clip-text'], 'clip')}>
                    Role
                  </span>
                </dt>
                <dd>
                  <span data-profile-split className={clsx(styles['clip-text'], 'clip')}>
                    Frontend Developer
                  </span>
                </dd>
              </div>
              <div className={styles.item}>
                <dt>
                  <span data-profile-split className={clsx(styles['clip-text'], 'clip')}>
                    Experience
                  </span>
                </dt>
                <dd>
                  <span data-profile-split className={clsx(styles['clip-text'], 'clip')}>
                    6+ Years
                  </span>
                </dd>
              </div>
              <div className={styles.item}>
                <dt>
                  <span data-profile-split className={clsx(styles['clip-text'], 'clip')}>
                    Interests
                  </span>
                </dt>
                <dd>
                  <span data-profile-split className={clsx(styles['clip-text'], 'clip')}>
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
  );
};
export default ProfileContents;
