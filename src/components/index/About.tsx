import clsx from 'clsx';
import HeadingText from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { useEffect, useRef } from 'react';
import { bigShoulders } from '@/lib/fonts';
import aboutImage01 from '../../../public/images/index/about_img01.jpg';
import gsap from 'gsap';
import { easeInExpo, easeOutCirc, easeOutExpo, easeOutQuint } from '@/lib/custom-ease';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Clouds from '../../../public/lotties/clouds.json';

import styles from './About.module.css';
import BaseLottie, { LottieRef } from '../lotties/BaseLottie';
import HideUpAnimate from '../animation/HideUpAnimate';

gsap.registerPlugin(SplitText, ScrollTrigger);

const About: React.FC = () => {
  const gsapRef = useRef<HTMLElement>(null);
  const cloudsRef = useRef<LottieRef>(null);
  const headingTl = useRef<gsap.core.Timeline | null>(null);
  const titleText = ['A CURIOUS', 'WEB DEVELOPER'];
  const titleText01Chars = Array.from(titleText[0]);
  const titleText02Chars = Array.from(titleText[1]);

  useEffect(() => {
    cloudsRef.current?.play();
  }, []);

  useGSAP(
    () => {
      if (gsapRef.current) {
        const splitTexts = gsap.utils.toArray<HTMLElement>('[data-split-text]');
        const split01 = SplitText.create(splitTexts[0], {
          type: 'chars',
          tag: 'span',
          reduceWhiteSpace: false,
        });
        const split02 = SplitText.create(splitTexts[1], {
          type: 'chars',
          tag: 'span',
          reduceWhiteSpace: false,
        });

        // 初期値設定
        gsap.set(split01.chars, { xPercent: -110 });
        gsap.set(split02.chars, { xPercent: -110 });

        // テキストアニメーション
        const splitTween: gsap.TweenVars = {
          xPercent: 0,
          duration: 1.6,
          stagger: 0.05,
          ease: easeOutQuint,
        };

        // タイトル・lottieアニメーション
        headingTl.current = gsap.timeline({
          scrollTrigger: {
            trigger: '[data-heading]',
            start: 'top bottom-=30%',
          },
        });
        headingTl.current.to(split01.chars, splitTween, '<+0.1').to(split02.chars, splitTween, '<');
      }
    },
    { scope: gsapRef }
  );

  return (
    // <section ref={gsapRef} className={clsx(styles.about, 'bg-main-gray')}>
    <section ref={gsapRef} className={styles.about}>
      <ContentInner className={styles.inner}>
        <div className={styles.container}>
          <hgroup data-heading className={styles.heading}>
            <div data-about-lottie className={clsx(styles.lottie, 'hover-lottie')}>
              <HideUpAnimate target="[data-about-target]" trigger="[data-about-lottie]">
                <div data-about-target>
                  <BaseLottie lottieData={Clouds} ref={cloudsRef} />
                </div>
              </HideUpAnimate>
            </div>
            <HeadingText className={styles.title}>
              <span data-split-text>
                {titleText01Chars.map((chars, index) => (
                  <span key={index} className="clip">
                    {chars === ' ' ? '\u00A0' : chars}
                  </span>
                ))}
              </span>
              <span data-split-text>
                {titleText02Chars.map((chars, index) => (
                  <span key={index} className="clip">
                    {chars === ' ' ? '\u00A0' : chars}
                  </span>
                ))}
              </span>
            </HeadingText>
          </hgroup>
          <div className={styles.paragraph}>
            <p className={clsx(styles.text, bigShoulders.className)}>
              <span data-text>AS A FRONT-END DEVELOPER, I TAKE GENUINE JOY IN</span>
              <span data-text>BRINGING DESIGNS TO LIFE. MY GREATEST ASSET IS MY</span>
              <span data-text>CURIOSITY. I CONSTANTLY CHASE NEW TECHNOLOGIES</span>
              <span data-text>AS A DEVELOPER, WHILE ALSO DIGGING INTO OLDER</span>
              <span data-text>ONES WHEN NEEDED. THAT CURIOSITY IS THE FORCE</span>
              <span data-text>THAT DRIVES EVERYTHING I DO.</span>
            </p>
          </div>
          {/* <figure className={styles.image}>
            <Image
              src={aboutImage01}
              alt="A CURIOUS WEB DEVELOPER"
              width={aboutImage01.width}
              height={aboutImage01.height}
              data-image
            />
          </figure> */}
        </div>
      </ContentInner>
    </section>
  );
};
export default About;
