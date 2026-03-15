'use client';

import gsap from 'gsap';
import clsx from 'clsx';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { bigShoulders } from '@/lib/fonts';
import { easeOutExpo } from '@/lib/custom-ease';
import ContentInner from '../layout/ContentInner';
import StackItems from '../stack/StackItems';
import HeadingText, { HeadingTextVariant } from '../heading/HeadingText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './MainVisual.module.css';

gsap.registerPlugin(ScrollTrigger);

type MainVisualProps = {
  timeline?: gsap.core.Timeline | null;
};

const MainVisual: React.FC<MainVisualProps> = ({ timeline }) => {
  const gsapRef = useRef<HTMLDivElement>(null);
  const circleScrollTl = useRef<gsap.core.Timeline>(gsap.timeline());
  const titleTl = useRef<gsap.core.Timeline>(gsap.timeline());

  useGSAP(
    () => {
      if (timeline && gsapRef.current) {
        // 初期値設定
        gsap.set('[data-title]', { xPercent: -3, clipPath: 'inset(0 100% 0 0)' });
        gsap.set('[data-title-before]', { opacity: 0.2 });
        gsap.set('[data-title-after]', { clipPath: 'inset(0 100% 0 0)' });
        gsap.set('[data-scroll]', { yPercent: 100 });
        gsap.set('[data-circle]', { clipPath: 'circle(0% at 100% 0)' });

        // アニメーション
        const defaultOpt: gsap.TweenVars = { duration: 2.4, ease: easeOutExpo };

        // 円 / スクロールテキスト
        circleScrollTl.current
          .to('[data-circle]', {
            ...defaultOpt,
            // duration: 2.5,
            clipPath: 'circle(40% at 100% 0)',
          })
          .to('[data-scroll]', { ...defaultOpt, duration: 2, yPercent: 0 }, '<+0.4');

        // タイトル
        titleTl.current
          .to('[data-title]', { ...defaultOpt, xPercent: 0 })
          .to('[data-title]', { ...defaultOpt, clipPath: 'inset(0% 0% 0% 0%)' }, '<')
          .to(
            '[data-title-after]',
            {
              ...defaultOpt,
              clipPath: 'inset(0% 0% 0% 0%)',
              onComplete: () => {
                // timeline完了後
                gsapRef.current?.classList.add('is-loaded');
                scrollAnimation();
              },
            },
            '<+0.2'
          );

        // 親のタイムラインに追加
        timeline.add(circleScrollTl.current, '<+0.3').add(titleTl.current, '<');

        // スクロールアニメーション
        const scrollAnimation = () => {
          gsap.to('[data-circle]', {
            clipPath: 'circle(145% at 100% 0)',
            scrollTrigger: {
              trigger: gsapRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            },
          });
          gsap.to('[data-scroll]', {
            yPercent: 100,
            scrollTrigger: {
              trigger: gsapRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            },
          });
        };
      }
    },
    { scope: gsapRef, dependencies: [timeline] }
  );

  return (
    <>
      <section ref={gsapRef} className={styles.mainVisual}>
        <div className={styles.frame}>
          <div>
            <ContentInner>
              <HeadingText variant={HeadingTextVariant.HEADING1} className={styles.titles}>
                <StackItems
                  contentData="title"
                  before={'DAIKI'}
                  after={'DAIKI'}
                  beforeData="title-before"
                  afterData="title-after"
                  className={styles.item}
                />
                <StackItems
                  contentData="title"
                  before={'HIRANO'}
                  after={'HIRANO'}
                  beforeData="title-before"
                  afterData="title-after"
                  className={styles.item}
                />
                <StackItems
                  contentData="title"
                  before={'PORTFOLIO'}
                  after={'PORTFOLIO'}
                  beforeData="title-before"
                  afterData="title-after"
                  className={styles.item}
                />
              </HeadingText>
            </ContentInner>
          </div>
          <div data-circle className={styles.circle} />
          <div className={clsx(styles.scrollWrap, 'clip')}>
            <p data-scroll className={clsx(styles.scroll, bigShoulders.className)}>
              SCROLL
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default MainVisual;
