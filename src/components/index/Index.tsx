'use client';

import gsap from 'gsap';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import Loading from './Loading';
import PageContent from './PageContent';
import MainVisual from './MainVisual';
import HeadingText, { HeadingTextAlign } from '../heading/HeadingText';

const Index: React.FC = () => {
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      onUpdate: function () {
        // 1秒早く読み込み完了フラグ更新
        const timeRemaining = this.duration() * (1 - this.progress());
        if (!isLoaded && timeRemaining <= 1) {
          setIsLoaded(true);
        }
      },
    });
    setTl(tl);
  });

  return (
    <>
      {/* {!isLoaded && <Loading timeline={tl} />} */}
      <MainVisual timeline={tl} />
      {isLoaded && (
        <>
          <HeadingText>
            <span>A CURIOUS</span>
            <span>WEB DEVELOPER</span>
          </HeadingText>
          <HeadingText>WORK</HeadingText>
          <HeadingText>TECH STACK</HeadingText>
          <HeadingText align={HeadingTextAlign.CENTER}>
            THANKS FOR CHECKING OUT
            <br />
            MY PORTFOLIO!
          </HeadingText>
          <PageContent />
        </>
      )}
    </>
  );
};
export default Index;
