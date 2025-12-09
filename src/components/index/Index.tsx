'use client';

import gsap from 'gsap';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import Loading from './Loading';
import MainVisual from './MainVisual';

const Index: React.FC = () => {
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsLoaded(true),
    });
    setTl(tl);
  });

  return (
    <>
      {!isLoaded && <Loading timeline={tl} />}
      <MainVisual timeline={tl} />
    </>
  );
};
export default Index;
