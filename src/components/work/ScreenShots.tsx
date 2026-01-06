import { WorkData } from '@/lib/data';
import Image from 'next/image';
import clsx from 'clsx';
import ContentInner from '../layout/ContentInner';

import styles from './ScreenShots.module.css';

interface ScreenShotsProps {
  data: WorkData;
}

const ScreenShots: React.FC<ScreenShotsProps> = ({ data }) => {
  return (
    <section className={styles.screenShots}>
      <ContentInner className={styles.inner}>
        <ul className={styles.list}>
          {data.screenShots.map((screenShot, index) => (
            <li key={index} className={styles.item}>
              <figure className={clsx(styles.image, 'clip')}>
                <Image
                  src={screenShot.src}
                  width={screenShot.width}
                  height={screenShot.height}
                  alt={`${data.title} スクリーンショット ${index + 1}`}
                />
              </figure>
            </li>
          ))}
        </ul>
      </ContentInner>
    </section>
  );
};
export default ScreenShots;
