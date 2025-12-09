import { bigShoulders } from '@/lib/fonts';
import clsx from 'clsx';
import HeadingText, { HeadingTextAlign } from '../heading/HeadingText';

const PageContent = () => {
  return (
    <>
      <section className="h-full">
        <HeadingText>
          <span>A CURIOUS</span>
          <span>WEB DEVELOPER</span>
        </HeadingText>
        <HeadingText>WORK</HeadingText>
        <HeadingText>TECH STACK</HeadingText>
        <HeadingText align={HeadingTextAlign.CENTER}>
          THANKS FOR CHECKING OUT
          <br />
          MY PORTFOLIO!
        </HeadingText>
      </section>
      <section className="h-full">
        <HeadingText>
          <span>A CURIOUS</span>
          <span>WEB DEVELOPER</span>
        </HeadingText>
        <HeadingText>WORK</HeadingText>
        <HeadingText>TECH STACK</HeadingText>
        <HeadingText align={HeadingTextAlign.CENTER}>
          THANKS FOR CHECKING OUT
          <br />
          MY PORTFOLIO!
        </HeadingText>
      </section>
      <section>
        <p className={clsx('clip')}>index</p>
      </section>
      <section>
        <p className={bigShoulders.className}>big shoulders</p>
      </section>
    </>
  );
};
export default PageContent;
