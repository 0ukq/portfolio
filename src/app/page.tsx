import { bigShoulders } from './layout';
import styles from './page.module.css';
import clsx from 'clsx';

export default function Home() {
  return (
    <>
      <section className={styles.heightFull}>
        <p className={clsx('clip')}>index</p>
      </section>
      <section className={styles.heightFull}>
        <p className={bigShoulders.className}>big shoulders</p>
      </section>
    </>
  );
}
