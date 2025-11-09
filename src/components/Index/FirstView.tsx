import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import FvLoading from '../Loading/FvLoading';
import MainVisual from './MainVisual';

export default function FirstView() {
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    setTl(tl);
  });

  return (
    <>
      <FvLoading timeline={tl} />
      <MainVisual timeline={tl} />
    </>
  );
}
