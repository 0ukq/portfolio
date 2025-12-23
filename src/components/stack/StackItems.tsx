import clsx from 'clsx';
import styles from './StackItems.module.css';

interface StackItemsProps {
  contentData?: string;
  before: React.ReactNode;
  after: React.ReactNode;
  beforeData?: string;
  afterData?: string;
  className?: string;
}

const StackItems: React.FC<StackItemsProps & React.ComponentProps<'span'>> = ({
  contentData,
  before,
  after,
  beforeData,
  afterData,
  className,
  ...props
}) => {
  return (
    <span
      {...(contentData ? { [`data-${contentData}`]: '' } : {})}
      className={clsx(styles.stackItems, 'clip align', className || '')}
      {...props}
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
