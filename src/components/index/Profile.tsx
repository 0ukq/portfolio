import HeadingText from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import AboutImg01 from '../../../public/images/index/about_img01.jpg';

import styles from './Profile.module.css';
import Image from 'next/image';
import clsx from 'clsx';

const Profile: React.FC = () => {
  return (
    <section className={styles.profile}>
      <ContentInner>
        <div className={styles.block}>
          <div className={styles.content}>
            <HeadingText>PROFILE</HeadingText>
            <dl className={styles.info}>
              <div className={styles.item}>
                <dt>Age</dt>
                <dd>20s</dd>
              </div>
              <div className={styles.item}>
                <dt>Role</dt>
                <dd>Frontend Developer</dd>
              </div>
              <div className={styles.item}>
                <dt>Experience</dt>
                <dd>6+ Years</dd>
              </div>
              <div className={styles.item}>
                <dt>Interests</dt>
                <dd>Road trips, Angling, and Strength training.</dd>
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
            <div className={styles.background} />
          </figure>
        </div>
      </ContentInner>
    </section>
  );
};
export default Profile;
