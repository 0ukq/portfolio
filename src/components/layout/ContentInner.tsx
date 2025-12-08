import clsx from 'clsx';
import styles from './ContentInner.module.css';

type ContentInnerProps = {
  children: React.ReactNode;
  className?: string;
};

const ContentInner: React.FC<ContentInnerProps> = ({ children, className }) => {
  return <div className={clsx(styles.contentInner, className || '')}>{children}</div>;
};
export default ContentInner;
1;
