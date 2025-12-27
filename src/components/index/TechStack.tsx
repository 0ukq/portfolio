import HeadingText, { HeadingTextAlign, HeadingTextVariant } from '../heading/HeadingText';
import ContentInner from '../layout/ContentInner';
import BaseLottie, { LottieRef } from '../lotties/BaseLottie';
import ShakingFace from '../../../public/lotties/shaking-face.json';
import ReactVector from '../vector/ReactVector';
import NextVector from '../vector/NextVector';
import TsVector from '../vector/TsVector';
import CssVector from '../vector/CssVector';
import HtmlVector from '../vector/HtmlVector';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import RollingTextAnimate from '../animation/RollingTextAnimate';
import HideUpAnimate from '../animation/HideUpAnimate';
import clsx from 'clsx';

import styles from './TechStack.module.css';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';
import { easeOutCubic } from '@/lib/custom-ease';

gsap.registerPlugin(SplitText, DrawSVGPlugin, MotionPathPlugin, MorphSVGPlugin, ScrollTrigger);

const TechStack: React.FC = () => {
  const gsapRef = useRef<HTMLElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const lottieRef = useRef<LottieRef>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }, []);

  useGSAP(
    () => {
      if (gsapRef.current) {
        // React Vector Animation
        const reactPaths = gsapRef.current.querySelectorAll('[data-react-vector] path');
        const nextPaths = gsapRef.current.querySelectorAll('[data-next-vector] path');
        const tsPaths = gsapRef.current.querySelectorAll('[data-ts-vector] path');

        // 共通の初期値
        const setVars: gsap.TweenVars = {
          drawSVG: '0%',
          fill: 'none',
        };

        // drawSVG
        const drawVars: gsap.TweenVars = {
          drawSVG: '100%',
          duration: 2,
          ease: easeOutCubic,
        };

        // fill
        const fillVars: gsap.TweenVars = {
          duration: 1,
          ease: easeOutCubic,
        };

        // 初期値設定
        gsap.set(reactPaths, { ...setVars });
        gsap.set(nextPaths, { ...setVars });
        gsap.set(tsPaths, { ...setVars });

        // tl設定
        tl.current = gsap.timeline({
          scrollTrigger: {
            trigger: '[data-tech-stack-logos]',
            start: 'top bottom-=30%',
          },
        });

        console.log(tsPaths[0].getAttribute('stroke'));

        tl.current
          .to(reactPaths, { ...drawVars })
          .to(nextPaths, { ...drawVars }, '<')
          .to(tsPaths, { ...drawVars }, '<')
          .to(reactPaths, { fill: '#61DAFB', ...fillVars }, '>')
          .to(nextPaths, { fill: 'white', ...fillVars }, '<')
          .to(tsPaths[0], { fill: '#3178C6', ...fillVars }, '<')
          .to(tsPaths[1], { fill: '#3178C6', ...fillVars }, '<')
          .to(tsPaths[2], { fill: 'white', ...fillVars }, '<');
      }
    },
    { scope: gsapRef }
  );

  return (
    <section ref={gsapRef} className={clsx(styles.techStack, 'bg-main-gray')}>
      <ContentInner>
        <hgroup className={styles.heading}>
          <div className={clsx(styles.lottie, 'hover-lottie')}>
            <HideUpAnimate>
              <BaseLottie lottieData={ShakingFace} ref={lottieRef} />
            </HideUpAnimate>
          </div>
          <HeadingText align={HeadingTextAlign.CENTER}>
            <RollingTextAnimate text="TECH STACK" />
          </HeadingText>
        </hgroup>
        <ul className={styles.logos} data-tech-stack-logos>
          <li>
            <ReactVector />
            <p>3YEAR.</p>
          </li>
          <li>
            <NextVector />
            <p>2YEAR.</p>
          </li>
          <li>
            <TsVector />
            <p>5YEAR.</p>
          </li>
          <li>
            <CssVector />
            <p>5YEAR.</p>
          </li>
          <li>
            <HtmlVector />
            <p>5YEAR.</p>
          </li>
        </ul>
        <div className={styles.other}>
          <HeadingText
            align={HeadingTextAlign.CENTER}
            variant={HeadingTextVariant.HEADING3}
            className={styles.otherTitle}
          >
            <RollingTextAnimate text="OTHER" />
          </HeadingText>
          <ul className={styles.otherList}>
            <li>・TailWind CSS</li>
            <li>・GSAP</li>
            <li>・React Router</li>
            <li>・microCMS</li>
            <li>・GitHub</li>
            <li>・Figma</li>
            <li>・Post CSS</li>
            <li>・Three.js</li>
            <li>・React Hook Form</li>
            <li>・Vercel</li>
            <li>・Axios</li>
            <li>・Photoshop</li>
          </ul>
        </div>
      </ContentInner>
    </section>
  );
};
export default TechStack;
