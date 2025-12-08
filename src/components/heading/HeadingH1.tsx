import clsx from 'clsx';
import styles from './HeadingH1.module.css';
import { bigShoulders } from '@/lib/fonts';

type HeadingH1Props = {
  text: string;
  className?: string;
};

const HeadingH1: React.FC<HeadingH1Props> = ({ text, className }) => {
  return (
    <h1 className={clsx(styles.headingH1, bigShoulders.className, className || '')}>{text}</h1>
  );
};
export default HeadingH1;
