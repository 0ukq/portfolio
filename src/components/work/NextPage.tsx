import { WorkData } from '@/lib/data';
import Image from 'next/image';
import IconLinkArrow from '../../../public/images/common/icon_link_arrow.svg';
import ContentInner from '../layout/ContentInner';
import ExLink from '../link/ExLink';
import { bigShoulders } from '@/lib/fonts';
import clsx from 'clsx';

import styles from './NextPage.module.css';

interface NextPageProps {
  data: WorkData[];
}

const NextPage: React.FC<NextPageProps> = ({ data }) => {
  return (
    <section className={styles.nextPage}>
      <ContentInner>
        <ExLink href={`/2}`} className={styles.link}>
          <p className={clsx(styles.text, bigShoulders.className)}>NEXT</p>
          <figure>
            <Image
              src={IconLinkArrow.src}
              width={IconLinkArrow.width}
              height={IconLinkArrow.height}
              alt="Next"
            />
          </figure>
        </ExLink>
      </ContentInner>
    </section>
  );
};
export default NextPage;
