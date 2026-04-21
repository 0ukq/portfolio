import Image from 'next/image';
import { WorkData } from '@/libs/data';
import clsx from 'clsx';
import Link from 'next/link';
import HideUpAnimate from '../animation/HideUpAnimate';

import styles from './WorkCard.module.css';
import HeadingText, { HeadingTextAlign, HeadingTextVariant } from '../heading/HeadingText';

interface WorkCardProps {
  data: WorkData;
}

const WorkCard: React.FC<WorkCardProps> = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <Link href={`/${data.id}`} className={clsx(styles.link, styles['link--hover-animation'])}>
            <div className={styles.thumbnail}>
              <figure className={clsx(styles.image, 'clip')}>
                <Image
                  src={data.thumbnail.src}
                  alt={data.title}
                  width={data.thumbnail.width}
                  height={data.thumbnail.height}
                  data-work-card-image
                />
              </figure>
              <HeadingText
                align={HeadingTextAlign.CENTER}
                variant={HeadingTextVariant.HEADING3}
                className={styles.title}
              >
                {data.title}
              </HeadingText>
            </div>
            <div className={styles.description}>
              <HideUpAnimate start={'top bottom-=5%'}>
                <p>{data.title}</p>
              </HideUpAnimate>
              <HideUpAnimate start={'top bottom-=5%'}>
                <p>{data.position}</p>
              </HideUpAnimate>
            </div>
          </Link>
        </>
      )}
    </>
  );
};
export default WorkCard;
