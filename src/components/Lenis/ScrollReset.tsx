/* 
  スクロール位置リセット
**/

'use client';

import { useLenis } from 'lenis/react';
import { useEffect } from 'react';

const ScrollReset: React.FC = () => {
  const lenis = useLenis();

  useEffect(() => {
    if ('history' in window && window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [lenis]);

  return null;
};
export default ScrollReset;
