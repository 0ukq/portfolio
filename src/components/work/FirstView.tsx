import { WorkData } from '@/lib/data';
import HeadingText, { HeadingTextVariant } from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import ExLink from '../link/ExLink';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './FirstView.module.css';

interface FirstViewProps {
  data: WorkData;
}

const FirstView: React.FC<FirstViewProps> = ({ data }) => {
  return (
    <section className={styles.fv}>
      <ContentInner>
        <HeadingText variant={HeadingTextVariant.HEADING1}>WORK</HeadingText>
        <div className={styles.detail}>
          <div className={styles.content}>
            <HeadingText>{data.title}</HeadingText>
            <dl className={styles.description}>
              <div className={styles.item}>
                <dt>Role</dt>
                <dd>{data.position}</dd>
              </div>
              <div className={styles.item}>
                <dt>Stack</dt>
                <dd>{data.stack.join(', ')}</dd>
              </div>
              <div className={styles.item}>
                <dt>Link</dt>
                <dd>
                  <ExLink href={data.link} className={styles.link}>
                    See in live
                    <ExternalLink strokeWidth={1.5} />
                  </ExLink>
                </dd>
              </div>
            </dl>
          </div>
          <figure className={clsx(styles.thumbnail, 'clip')}>
            <Image
              src={data.thumbnail.src}
              width={data.thumbnail.width}
              height={data.thumbnail.height}
              alt={data.title}
            />
          </figure>
        </div>
      </ContentInner>
    </section>
  );
};
export default FirstView;
