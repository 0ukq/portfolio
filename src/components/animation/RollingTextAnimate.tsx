import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { easeOutExpo } from '@/lib/custom-ease';
import StackItems from '../stack/StackItems';

gsap.registerPlugin(SplitText);

interface RollingTextAnimateProps {
  duration?: number;
  delay?: number;
  start?: string | number | ScrollTrigger.StartEndFunc | undefined;
  markers?: boolean;
  animateDisable?: boolean; // アニメーション無効化フラグ
  text: string;
}

const RollingTextAnimate: React.FC<RollingTextAnimateProps> = ({
  duration = 2.2,
  delay = 0,
  start = 'top bottom-=30%',
  markers = false,
  animateDisable = false,
  text,
}) => {
  const scopeRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (animateDisable) return;
      // テキスト分割
      const beforeSplit = SplitText.create('[data-rolling-before]', {
        type: 'chars',
        tag: 'span',
      });
      const afterSplit = SplitText.create('[data-rolling-after]', {
        type: 'chars',
        tag: 'span',
      });

      // 初期値設定
      gsap.set(beforeSplit.chars, { display: 'inline-block', yPercent: 100 });
      gsap.set(afterSplit.chars, { display: 'inline-block', yPercent: 100 });

      // アニメーション
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: scopeRef.current,
          start: start,
          markers: markers,
        },
        defaults: { ease: easeOutExpo, duration: duration, stagger: 0.08, delay: delay },
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

  if (animateDisable) return <p>{text}</p>;

  return (
    <>
      <StackItems
        ref={scopeRef}
        before={text}
        beforeData="rolling-before"
        after={text}
        afterData="rolling-after"
      />
    </>
  );
};
export default RollingTextAnimate;
