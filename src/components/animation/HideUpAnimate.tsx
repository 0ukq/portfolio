import { easeOutExpo } from '@/lib/custom-ease';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

interface HideUpAnimateProps {
  trigger?: gsap.DOMTarget;
  duration?: number;
  delay?: number;
  markers?: boolean;
  animateDisable?: boolean; // アニメーション無効化フラグ
  children: React.ReactNode;
}

const HideUpAnimate: React.FC<HideUpAnimateProps> = ({
  trigger,
  duration = 2,
  delay = 0,
  markers = false,
  animateDisable = false,
  children,
}) => {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (animateDisable) return;
      gsap.set('[data-hide-up-ele]', { yPercent: 100 });

      gsap.to('[data-hide-up-ele]', {
        delay: delay,
        duration: duration,
        yPercent: 0,
        ease: easeOutExpo,
        scrollTrigger: {
          trigger: trigger ? trigger : scopeRef.current,
          start: 'top bottom-=30%',
          scrub: false,
          markers: markers,
        },
      });
    },
    { scope: scopeRef }
  );

  if (animateDisable) return children;

  return (
    <div ref={scopeRef} className="clip">
      <div data-hide-up-ele>{children}</div>
    </div>
  );
};
export default HideUpAnimate;
