import clsx from 'clsx';
import styles from './HeadingText.module.css';
import { bigShoulders } from '@/libs/fonts';

export enum HeadingTextVariant {
  HEADING1,
  HEADING2,
  HEADING3,
}

export enum HeadingTextFont {
  BIG_SHOULDERS,
}

export enum HeadingTextAlign {
  CENTER = 'center',
  RIGHT = 'right',
}

export enum HeadingTextColor {
  GRAY = 'gray',
  WHITE = 'white',
}

type HeadingTextProps = {
  children?: React.ReactNode;
  variant?: HeadingTextVariant;
  font?: HeadingTextFont;
  align?: HeadingTextAlign;
  color?: HeadingTextColor;
  className?: string;
} & React.ComponentProps<'h1' | 'h2' | 'h3'>;

const HeadingText: React.FC<HeadingTextProps> = ({
  children,
  variant = HeadingTextVariant.HEADING2,
  font = HeadingTextFont.BIG_SHOULDERS,
  align,
  color = HeadingTextColor.GRAY,
  className,
  ...props
}) => {
  const commonClass = clsx(
    font === HeadingTextFont.BIG_SHOULDERS ? bigShoulders.className : undefined,
    align ? styles[align] : undefined,
    styles[color],
    className || ''
  );

  if (variant === HeadingTextVariant.HEADING1) {
    return (
      <h1 className={clsx(styles.heading1, commonClass)} {...props}>
        {children}
      </h1>
    );
  }
  if (variant === HeadingTextVariant.HEADING2) {
    return (
      <h2 className={clsx(styles.heading2, commonClass)} {...props}>
        {children}
      </h2>
    );
  }
  if (variant === HeadingTextVariant.HEADING3) {
    return (
      <h3 className={clsx(styles.heading3, commonClass)} {...props}>
        {children}
      </h3>
    );
  }
};
export default HeadingText;
