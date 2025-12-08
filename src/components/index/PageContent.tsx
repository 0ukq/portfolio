import { bigShoulders } from '@/lib/fonts';
import clsx from 'clsx';

const PageContent = () => {
  return (
    <>
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
