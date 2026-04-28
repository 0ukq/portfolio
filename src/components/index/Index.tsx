// 'use client';

import gsap from 'gsap';
// import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import Loading from './Loading';
import MainVisual from './MainVisual';
import PageContent from './PageContent';
import FirstView from './FirstView';

const Index: React.FC = () => {
  // const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  // const [isLoaded, setIsLoaded] = useState(false);

  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     onComplete: () => setIsLoaded(true),
  //   });
  //   setTl(tl);
  // });

  return (
    <>
      <FirstView />
      {/* <PageContent /> */}
      {/* <Loading timeline={tl} /> */}
      {/* {!isLoaded && <Loading timeline={tl} />} */}
      {/* <MainVisual timeline={tl} /> */}
      {/* タイムライン完了後 */}
      {/* {isLoaded && <PageContent />} */}
    </>
  );
};
export default Index;
