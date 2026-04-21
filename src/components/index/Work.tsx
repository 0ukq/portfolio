import HeadingText, { HeadingTextAlign } from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import HeadShake from '../../../public/lotties/head-shake.json';
import BaseLottie, { LottieRef } from '../lotties/BaseLottie';
// import { Options, Splide, SplideSlide } from '@splidejs/react-splide';
import { workDataSample } from '@/libs/data';
import WorkCard from '../card/WorkCard';
import clsx from 'clsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useEffect, useRef } from 'react';
import { easeOutQuint } from '@/libs/custom-ease';
import HideUpAnimate from '../animation/HideUpAnimate';
import RollingTextAnimate from '../animation/RollingTextAnimate';

import styles from './Work.module.css';

gsap.registerPlugin(SplitText);

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
  const gsapRef = useRef<HTMLElement>(null);
  const lottieRef = useRef<LottieRef>(null);

  useEffect(() => {
    lottieRef.current?.play();
  }, []);

  useGSAP(
    () => {
      // タイトル
      const splitText = SplitText.create('[data-split-text]', {
        type: 'chars',
        tag: 'span',
      });
      gsap.set(splitText.chars, { xPercent: -100 });

      gsap.to(splitText.chars, {
        scrollTrigger: {
          trigger: '[data-heading]',
          start: 'top bottom-=10%',
          // markers: true,
        },
        xPercent: 0,
        duration: 1.6,
        stagger: 0.05,
        ease: easeOutQuint,
      });

      // サムネ
      gsap.set('[data-work-card-image]', { scale: 1.08 });
      gsap.to('[data-work-card-image]', {
        scale: 1,
        duration: 2.6,
        ease: easeOutQuint,
        scrollTrigger: {
          trigger: '[data-work-card-image]',
          start: 'top bottom-=20%',
          // markers: true,
        },
      });
    },
    { scope: gsapRef }
  );

  return (
    <>
      {works.length > 0 && (
        <section ref={gsapRef} className={clsx(styles.work, 'bg-main-gray')}>
          <ContentInner>
            <hgroup className={styles.heading}>
              <div className={clsx(styles.lottie, 'hover-lottie')}>
                <HideUpAnimate>
                  <BaseLottie lottieData={HeadShake} ref={lottieRef} />
                </HideUpAnimate>
              </div>
              <HeadingText data-heading align={HeadingTextAlign.RIGHT} className={styles.title}>
                <RollingTextAnimate text="WORK" />
              </HeadingText>
            </hgroup>

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
