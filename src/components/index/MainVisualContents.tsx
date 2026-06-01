import clsx from 'clsx';
import { bigShoulders } from '@/lib/fonts';
import ContentInner from '../layout/ContentInner';
import HeadingText, { HeadingTextVariant } from '../heading/HeadingText';
import StackText from '../stack/StackText';
import styles from './MainVisualContents.module.css';

const MainVisualContents: React.FC = () => {
  return (
    <div className={clsx(styles.frame, styles['is-animation'])}>
      <ContentInner>
        <HeadingText variant={HeadingTextVariant.HEADING1} className={styles.titles} data-titles>
          <StackText text="DAIKI" className={styles.title} />
          <StackText text="HIRANO" className={styles.title} />
          <StackText text="PORTFOLIO" className={styles.title} />
        </HeadingText>
      </ContentInner>
      <div className={styles.circle} data-circle />
      <div className={clsx(styles.scroll, 'clip')}>
        <p className={clsx(styles.scrollText, bigShoulders.className)} data-scroll>
          SCROLL
        </p>
      </div>
    </div>
  );
};
export default MainVisualContents;
