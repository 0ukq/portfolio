import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { easeOutExpo } from '@/lib/custom-ease';

gsap.registerPlugin(SplitText);

interface RollingTextAnimateProps {
  before: gsap.DOMTarget;
  after: gsap.DOMTarget;
  trigger: gsap.DOMTarget;
  children: React.ReactNode;
}

const RollingTextAnimate: React.FC<RollingTextAnimateProps> = ({
  before,
  after,
  trigger,
  children,
}) => {
  const scopeRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      // テキスト分割
      const beforeSplit = SplitText.create(before, {
        type: 'chars',
        tag: 'span',
      });
      const afterSplit = SplitText.create(after, {
        type: 'chars',
        tag: 'span',
      });

      // 初期値設定
      gsap.set(beforeSplit.chars, { display: 'inline-block', yPercent: 100 });
      gsap.set(afterSplit.chars, { display: 'inline-block', yPercent: 100 });

      // アニメーション
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: 'top bottom-=30%',
          // markers: true,
        },
        defaults: { ease: easeOutExpo, duration: 2.2, stagger: 0.08 },
      });

      tl.current
        .to(beforeSplit.chars, {
          yPercent: -100,
        })
        .to(
          afterSplit.chars,
          {
            yPercent: 0,
          },
          '<+0.3'
        );
    },
    { scope: scopeRef }
  );

  return <div ref={scopeRef}>{children}</div>;
};
export default RollingTextAnimate;
