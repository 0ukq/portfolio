import clsx from 'clsx';
import styles from './StackItems.module.css';

type StackItemsProps = {
  contentData?: string;
  before: React.ReactNode;
  after: React.ReactNode;
  beforeData?: string;
  afterData?: string;
  className?: string;
};

const StackItems: React.FC<StackItemsProps> = ({
  contentData,
  before,
  after,
  beforeData,
  afterData,
  className,
}) => {
  return (
    <span
      {...(contentData ? { [`data-${contentData}`]: '' } : {})}
      className={clsx(styles.stackItems, 'clip', className || '')}
    >
      <span {...(beforeData ? { [`data-${beforeData}`]: '' } : {})} className={styles.item}>
        {before}
      </span>
      <span {...(afterData ? { [`data-${afterData}`]: '' } : {})} className={styles.item}>
        {after}
      </span>
    </span>
  );
};
export default StackItems;
