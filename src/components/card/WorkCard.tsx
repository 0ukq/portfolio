import Image from 'next/image';
import styles from './WorkCard.module.css';
import { WorkData } from '@/lib/data';
import clsx from 'clsx';
import Link from 'next/link';

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
              />
            </figure>
            <div className={styles.description}>
              <p>{data.title}</p>
              <p>{data.position}</p>
            </div>
          </Link>
        </>
      )}
    </>
  );
};
export default WorkCard;
