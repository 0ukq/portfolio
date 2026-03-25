'use client';

import { WorkData } from '@/lib/data';
import HeadingText, { HeadingTextVariant } from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import ExLink from '../link/ExLink';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './FirstView.module.css';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { easeOutQuint } from '@/lib/custom-ease';

import { CustomEase } from 'gsap/CustomEase';
gsap.registerPlugin(SplitText, CustomEase);

interface FirstViewProps {
  data: WorkData;
}

const FirstView: React.FC<FirstViewProps> = ({ data }) => {
  const gsapRef = useRef<HTMLElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);

  useGSAP(
    () => {
      const thumbnails = gsap.utils.toArray<HTMLElement>('[data-thumbnail]');

      // アニメーション初期設定
      gsap.set(gsapRef.current, { autoAlpha: 1 });
      // タイトル分割
      const splitTitle = SplitText.create('[data-title]', {
        type: 'chars',
        tag: 'span',
      });
      gsap.set(splitTitle.chars, { yPercent: 100 });
      gsap.set(thumbnails, { clipPath: 'inset(100% 0% 0% 0% )' });
      gsap.set(thumbnails[0], { filter: 'grayscale(1)' });
      gsap.set('[data-hide-item] span', { yPercent: 100 });

      // tl設定
      tl.current = gsap.timeline({
        delay: 0.6,
      });

      // タイトル
      tl.current.to(splitTitle.chars, {
        yPercent: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: easeOutQuint,
      });

      // サムネ
      const thumbnailTween: gsap.TweenVars = {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.4,
        ease: easeOutQuint,
      };
      tl.current
        .to(thumbnails[0], { ...thumbnailTween }, '<+0.8')
        .to(thumbnails[1], { ...thumbnailTween, duration: 2 }, '<+0.5');

      // 詳細テキスト
      tl.current.to(
        '[data-hide-item] span',
        {
          yPercent: 0,
          duration: 2.2,
          ease: easeOutQuint,
        },
        '<+0.2'
      );
    },
    { scope: gsapRef }
  );

  return (
    <section ref={gsapRef} className={clsx(styles.fv, styles.initialized)}>
      <ContentInner>
        <HeadingText variant={HeadingTextVariant.HEADING1} className={clsx(styles.title, 'clip')}>
          <span data-title>WORK</span>
        </HeadingText>
        <div className={styles.detail}>
          <div className={styles.content}>
            <HeadingText>
              <span data-hide-item className="clip">
                <span>{data.title}</span>
              </span>
            </HeadingText>
            <dl className={styles.description}>
              <div className={styles.item}>
                <dt>
                  <span data-hide-item className="clip ">
                    <span>Role</span>
                  </span>
                </dt>
                <dd>
                  <span data-hide-item className="clip ">
                    <span>{data.position}</span>
                  </span>
                </dd>
              </div>
              <div className={styles.item}>
                <dt>
                  <span data-hide-item className="clip ">
                    <span>Stack</span>
                  </span>
                </dt>
                <dd>
                  <span data-hide-item className="clip ">
                    <span>{data.stack.join(', ')}</span>
                  </span>
                </dd>
              </div>
              <div className={styles.item}>
                <dt>
                  <span data-hide-item className="clip ">
                    <span>Link</span>
                  </span>
                </dt>
                <dd>
                  <span data-hide-item className="clip ">
                    <span>
                      <ExLink href={data.link} className={styles.link}>
                        See in live
                        <ExternalLink strokeWidth={1.5} />
                      </ExLink>
                    </span>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
          <figure className={styles.thumbnail}>
            <Image
              src={data.thumbnail.src}
              width={data.thumbnail.width}
              height={data.thumbnail.height}
              alt={data.title}
              className="fit"
              data-thumbnail
            />
            <Image
              src={data.thumbnail.src}
              width={data.thumbnail.width}
              height={data.thumbnail.height}
              alt={data.title}
              className="fit"
              data-thumbnail
            />
          </figure>
        </div>
      </ContentInner>
    </section>
  );
};
export default FirstView;
