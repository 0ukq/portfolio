'use client';

import gsap from 'gsap';
import clsx from 'clsx';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { bigShoulders } from '@/lib/fonts';
import { easeOutExpo } from '@/lib/custom-ease';
import ContentInner from '../layout/ContentInner';
import HeadingH1 from '../heading/HeadingH1';
import StackItems from '../stack/StackItems';

import styles from './MainVisual.module.css';

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
            duration: 2,
            clipPath: 'circle(40% at 100% 0)',
          })
          .to('[data-scroll]', { ...defaultOpt, duration: 2, yPercent: 0 }, '<+0.4');

        // タイトル
        titleTl.current
          .to('[data-title]', { ...defaultOpt, xPercent: 0 })
          .to('[data-title]', { ...defaultOpt, clipPath: 'inset(0% 0% 0% 0%)' }, '<')
          .to('[data-title-after]', { ...defaultOpt, clipPath: 'inset(0% 0% 0% 0%)' }, '<+0.2');

        // 親のタイムラインに追加
        timeline.add(circleScrollTl.current, '<+0.3').add(titleTl.current, '<');
      }
    },
    { scope: gsapRef, dependencies: [timeline] }
  );

  return (
    <section ref={gsapRef} className={styles.mainVisual}>
      <div className={styles.frame}>
        <div>
          <ContentInner>
            <div className={styles.headings}>
              <StackItems
                contentData="title"
                before={<HeadingH1 text="TITLE" />}
                after={<HeadingH1 text="TITLE" />}
                beforeData="title-before"
                afterData="title-after"
                className={styles.title}
              />
              <StackItems
                contentData="title"
                before={<HeadingH1 text="TITLE TITLE TITLE" />}
                after={<HeadingH1 text="TITLE TITLE TITLE" />}
                beforeData="title-before"
                afterData="title-after"
                className={styles.title}
              />
              <StackItems
                contentData="title"
                before={<HeadingH1 text="TITLE TITLE" />}
                after={<HeadingH1 text="TITLE TITLE" />}
                beforeData="title-before"
                afterData="title-after"
                className={styles.title}
              />
            </div>
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
  );
};
export default MainVisual;
