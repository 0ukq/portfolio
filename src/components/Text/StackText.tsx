import clsx from 'clsx';
import styles from '@/components/Text/StackText.module.css';

type StackTextProps = {
  text?: string;
  className?: string;
};

export default function StackText({ text, className }: StackTextProps) {
  return (
    <span className={clsx(styles.StackText, 'clip', className || '')}>
      <span data-text-before>{text}</span>
      <span data-text-after>{text}</span>
    </span>
  );
}
