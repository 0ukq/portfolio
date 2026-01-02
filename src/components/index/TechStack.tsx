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
        const cssPaths = gsapRef.current.querySelectorAll('[data-css-vector] path');
        const htmlPaths = gsapRef.current.querySelectorAll('[data-html-vector] path');

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
        gsap.set(cssPaths, { ...setVars });
        gsap.set(htmlPaths, { ...setVars });

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
          .to(cssPaths, { ...drawVars }, '<')
          .to(htmlPaths, { ...drawVars }, '<')
          .to(reactPaths, { fill: '#61DAFB', ...fillVars }, '>')
          .to(nextPaths, { fill: 'white', ...fillVars }, '<')
          .to(tsPaths[0], { fill: '#3178C6', ...fillVars }, '<')
          .to(tsPaths[1], { fill: '#3178C6', ...fillVars }, '<')
          .to(tsPaths[2], { fill: 'white', ...fillVars }, '<')
          .to(cssPaths[0], { fill: '#663399', ...fillVars }, '<')
          .to(cssPaths[1], { fill: 'white', ...fillVars }, '<')
          .to(htmlPaths[0], { fill: '#E34F26', ...fillVars }, '<')
          .to(htmlPaths[1], { fill: '#E34F26', ...fillVars }, '<')
          .to(htmlPaths[2], { fill: '#EBEBEB', ...fillVars }, '<')
          .to(htmlPaths[3], { fill: 'white', ...fillVars }, '<');
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
            <HideUpAnimate>
              <p>3YEAR.</p>
            </HideUpAnimate>
          </li>
          <li>
            <NextVector />
            <HideUpAnimate>
              <p>2YEAR.</p>
            </HideUpAnimate>
          </li>
          <li>
            <TsVector />
            <HideUpAnimate>
              <p>5YEAR.</p>
            </HideUpAnimate>
          </li>
          <li>
            <CssVector />
            <HideUpAnimate>
              <p>5YEAR.</p>
            </HideUpAnimate>
          </li>
          <li>
            <HtmlVector />
            <HideUpAnimate>
              <p>5YEAR.</p>
            </HideUpAnimate>
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
            <li>
              <HideUpAnimate>・TailWind CSS</HideUpAnimate>
            </li>
            <li>
              <HideUpAnimate>・GSAP</HideUpAnimate>
            </li>
            <li>
              <HideUpAnimate>・React Router</HideUpAnimate>
            </li>
            <li>
              <HideUpAnimate>・microCMS</HideUpAnimate>
            </li>
            <li>
              <HideUpAnimate>・GitHub</HideUpAnimate>
            </li>
            <li>
              <HideUpAnimate>・Figma</HideUpAnimate>
            </li>
            <li>
              <HideUpAnimate>・Post CSS</HideUpAnimate>
            </li>
            <li>
              <HideUpAnimate>・Three.js</HideUpAnimate>
            </li>
            <li>
              <HideUpAnimate>・React Hook Form</HideUpAnimate>
            </li>
            <li>
              <HideUpAnimate>・Vercel</HideUpAnimate>
            </li>
            <li>
              <HideUpAnimate>・Axios</HideUpAnimate>
            </li>
            <li>
              <HideUpAnimate>・Photoshop</HideUpAnimate>
            </li>
          </ul>
        </div>
      </ContentInner>
    </section>
  );
};
export default TechStack;
