import HeadingText from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import HeadShake from '../../../public/lotties/head-shake.json';
import BaseLottie from '../lotties/BaseLottie';
// import { Options, Splide, SplideSlide } from '@splidejs/react-splide';

import styles from './Work.module.css';
import { workDataSample } from '@/lib/data';
import WorkCard from '../card/WorkCard';
import clsx from 'clsx';

const Work: React.FC = () => {
  // const options: Options = {
  //   arrows: false,
  //   autoWidth: true,
  //   // speed: 4000,
  //   // drag: false,
  //   wheel: true,
  //   wheelMinThreshold: 100,
  //   wheelSleep: 1000,
  //   releaseWheel: true,
  //   waitForTransition: true,
  // };

  const works = workDataSample;

  return (
    <>
      {works.length > 0 && (
        <section className={clsx(styles.work, 'bg-main-gray')}>
          <ContentInner>
            <HeadingText className={styles.title}>
              <div className={styles.lottie}>
                <BaseLottie lottieData={HeadShake} />
              </div>
              WORK
            </HeadingText>

            {/* <Splide options={options} aria-label="work slider" className={styles.slider}>
              {workDataSample.map(work => (
                <SplideSlide key={work.id}>
                  <WorkCard data={work} />
                </SplideSlide>
              ))}
            </Splide> */}
          </ContentInner>
          <ul className={styles.list}>
            {works.map(work => (
              <li key={work.id}>
                <WorkCard data={work} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default Work;
