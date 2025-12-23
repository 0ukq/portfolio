import { easeOutExpo } from '@/lib/custom-ease';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface HideUpAnimateProps {
  target: gsap.DOMTarget;
  trigger: gsap.DOMTarget;
  children: React.ReactNode;
}

const HideUpAnimate: React.FC<HideUpAnimateProps> = ({ target, trigger, children }) => {
  useGSAP(() => {
    gsap.set(target, { yPercent: 100 });

    gsap.to(target, {
      duration: 2,
      yPercent: 0,
      ease: easeOutExpo,
      scrollTrigger: {
        trigger: trigger,
        start: 'top bottom-=30%',
        // markers: true,
      },
    });
  });

  return <div className="clip">{children}</div>;
};
export default HideUpAnimate;
