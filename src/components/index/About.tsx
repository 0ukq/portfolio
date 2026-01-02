import clsx from 'clsx';
import HeadingText from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { useEffect, useRef } from 'react';
import { bigShoulders } from '@/lib/fonts';
import gsap from 'gsap';
import { easeOutCubic, easeOutQuint } from '@/lib/custom-ease';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Clouds from '../../../public/lotties/clouds.json';
import BaseLottie, { LottieRef } from '../lotties/BaseLottie';
import HideUpAnimate from '../animation/HideUpAnimate';

import styles from './About.module.css';
import StackItems from '../stack/StackItems';

gsap.registerPlugin(SplitText, ScrollTrigger);

const About: React.FC = () => {
  const gsapRef = useRef<HTMLElement>(null);
  const cloudsRef = useRef<LottieRef>(null);
  const title = 'A CURIOUS WEB DEVELOPER';
  const titleChars = Array.from(title);

  useEffect(() => {
    cloudsRef.current?.play();
  }, []);

  useGSAP(
    () => {
      if (gsapRef.current) {
        /**
         * タイトルアニメーション
         * */
        const splitTitle = SplitText.create('[data-about-split-title]', {
          type: 'chars',
          tag: 'span',
          reduceWhiteSpace: false,
        });

        gsap.set(splitTitle.chars, { xPercent: -110 });

        gsap.to(splitTitle.chars, {
          xPercent: 0,
          duration: 1,
          stagger: 0.05,
          ease: easeOutQuint,
          scrollTrigger: {
            trigger: '[data-about-heading]',
            start: 'top-=140% bottom-=30%',
            // markers: true,
          },
        });

        /**
         * テキストアニメーション
         * */
        const textBefore: HTMLElement[] = Array.from(
          document.querySelectorAll('[data-about-clip-before]')
        );
        const textAfter: HTMLElement[] = Array.from(
          document.querySelectorAll('[data-about-clip-after]')
        );

        // プロパティ設定
        const textTween: gsap.TweenVars = {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 2,
          stagger: 0.4,
          ease: easeOutCubic,
        };

        // scrollTrigger設定
        const textTrigger: ScrollTrigger.Vars = {
          trigger: '[data-about-clip-trigger]',
          start: 'top bottom-=30%',
        };

        // 初期値設定
        textBefore.forEach(before =>
          gsap.set(before, { opacity: 0.2, clipPath: 'inset(0 100% 0 0)' })
        );
        textAfter.forEach(after => {
          gsap.set(after, { clipPath: 'inset(0 100% 0 0)' });
        });

        // 実行
        gsap.to(textBefore, {
          ...textTween,
          scrollTrigger: textTrigger,
        });
        gsap.to(textAfter, {
          ...textTween,
          delay: 0.1,
          scrollTrigger: textTrigger,
        });

        /**
         * lottie
         * */
        gsap.to('[data-about-lottie]', {
          yPercent: -120,
          scrollTrigger: {
            trigger: '[data-about-lottie]',
            start: 'top bottom-=30%',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    },
    { scope: gsapRef }
  );

  return (
    <section ref={gsapRef} className={clsx(styles.about, 'bg-main-gray')}>
      <ContentInner className={styles.inner}>
        <div>
          <hgroup data-about-heading className={styles.heading}>
            <div data-about-lottie className={clsx(styles.lottie, 'hover-lottie')}>
              <HideUpAnimate>
                <BaseLottie lottieData={Clouds} ref={cloudsRef} />
              </HideUpAnimate>
            </div>
            <HeadingText className={styles.title}>
              <span data-about-split-title>
                {titleChars.map((chars, index) => (
                  <span key={index} className="clip">
                    {chars === ' ' ? '\u00A0' : chars}
                  </span>
                ))}
              </span>
            </HeadingText>
          </hgroup>
        </div>
      </ContentInner>
      <div data-about-clip-trigger className={styles.paragraph}>
        <p className={clsx(styles.text, bigShoulders.className)}>
          <StackItems
            before="AS A FRONT-END DEVELOPER,"
            after="AS A FRONT-END DEVELOPER,"
            afterData="about-clip-after"
            beforeData="about-clip-before"
          />
          <StackItems
            before="I TAKE GENUINE JOY IN BRINGING DESIGNS TO LIFE."
            after="I TAKE GENUINE JOY IN BRINGING DESIGNS TO LIFE."
            afterData="about-clip-after"
            beforeData="about-clip-before"
          />
          <StackItems
            before="MY GREATEST ASSET IS MY CURIOSITY."
            after="MY GREATEST ASSET IS MY CURIOSITY."
            afterData="about-clip-after"
            beforeData="about-clip-before"
          />
          <StackItems
            before="I CONSTANTLY CHASE NEW TECHNOLOGIES AS A DEVELOPER,"
            after="I CONSTANTLY CHASE NEW TECHNOLOGIES AS A DEVELOPER,"
            afterData="about-clip-after"
            beforeData="about-clip-before"
          />
          <StackItems
            before="WHILE ALSO DIGGING INTO OLDER ONES WHEN NEEDED."
            after="WHILE ALSO DIGGING INTO OLDER ONES WHEN NEEDED."
            afterData="about-clip-after"
            beforeData="about-clip-before"
          />
          <StackItems
            before="THAT CURIOSITY IS THE FORCE THAT DRIVES EVERYTHING I DO."
            after="THAT CURIOSITY IS THE FORCE THAT DRIVES EVERYTHING I DO."
            afterData="about-clip-after"
            beforeData="about-clip-before"
          />
        </p>
      </div>
    </section>
  );
};
export default About;
