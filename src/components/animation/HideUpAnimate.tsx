import { easeOutExpo } from '@/lib/custom-ease';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

interface HideUpAnimateProps {
  duration?: number;
  delay?: number;
  children: React.ReactNode;
}

const HideUpAnimate: React.FC<HideUpAnimateProps> = ({ duration = 2, delay = 0, children }) => {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set('[data-hide-up-ele]', { yPercent: 100 });

      gsap.to('[data-hide-up-ele]', {
        delay: delay,
        duration: duration,
        yPercent: 0,
        ease: easeOutExpo,
        scrollTrigger: {
          trigger: scopeRef.current,
          start: 'top bottom-=30%',
          scrub: false,
          // markers: true,
        },
      });
    },
    { scope: scopeRef }
  );

  return (
    <div ref={scopeRef} className="clip">
      <div data-hide-up-ele>{children}</div>
    </div>
  );
};
export default HideUpAnimate;
