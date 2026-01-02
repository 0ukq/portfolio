import Image from 'next/image';
import { WorkData } from '@/lib/data';
import clsx from 'clsx';
import Link from 'next/link';
import HideUpAnimate from '../animation/HideUpAnimate';

import styles from './WorkCard.module.css';

interface WorkCardProps {
  data: WorkData;
}

const WorkCard: React.FC<WorkCardProps> = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <Link href={`/work/${data.id}`} className={styles.link}>
            <figure className={clsx(styles.thumbnail, 'clip')}>
              <Image
                src={data.thumbnail.src}
                alt={data.title}
                width={data.thumbnail.width}
                height={data.thumbnail.height}
                data-work-card-image
              />
            </figure>
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
