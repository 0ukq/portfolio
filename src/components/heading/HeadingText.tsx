import clsx from 'clsx';
import styles from './HeadingText.module.css';
import { bigShoulders } from '@/lib/fonts';

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
};

const HeadingText: React.FC<HeadingTextProps> = ({
  children,
  variant = HeadingTextVariant.HEADING2,
  font = HeadingTextFont.BIG_SHOULDERS,
  align,
  color = HeadingTextColor.GRAY,
  className,
}) => {
  const commonClass = clsx(
    font === HeadingTextFont.BIG_SHOULDERS ? bigShoulders.className : undefined,
    align ? styles[align] : undefined,
    styles[color],
    className || ''
  );

  if (variant === HeadingTextVariant.HEADING1) {
    return <h1 className={clsx(styles.heading1, commonClass)}>{children}</h1>;
  }
  if (variant === HeadingTextVariant.HEADING2) {
    return <h2 className={clsx(styles.heading2, commonClass)}>{children}</h2>;
  }
};
export default HeadingText;
