import clsx from 'clsx';
import styles from './StackItemsV2.module.css';

interface StackItemsV2Props {
  contentData?: string;
  text: string;
  beforeData?: string;
  afterData?: string;
  className?: string;
}

const StackItemsV2: React.FC<StackItemsV2Props & React.ComponentProps<'span'>> = ({
  contentData,
  text,
  beforeData,
  afterData,
  className,
  ...props
}) => {
  return (
    <span
      {...(contentData ? { [`data-${contentData}`]: '' } : {})}
      className={clsx(styles.StackItemsV2, 'clip align', className || '')}
      {...props}
    >
      <span {...(beforeData ? { [`data-${beforeData}`]: '' } : {})} className={styles.item}>
        {text}
      </span>
      <span {...(afterData ? { [`data-${afterData}`]: '' } : {})} className={styles.item}>
        {text}
      </span>
    </span>
  );
};
export default StackItemsV2;
