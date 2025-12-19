import { LottieOptions, useLottie } from 'lottie-react';
import { useImperativeHandle } from 'react';

export type LottieRef = {
  play: () => void;
  pause: () => void;
};

type BaseLottieProps = {
  lottieData: unknown;
  options?: LottieOptions;
  ref?: React.Ref<LottieRef>;
};

const BaseLottie: React.FC<BaseLottieProps> = ({ lottieData, options, ref }) => {
  const { View, play, pause } = useLottie({
    animationData: lottieData,
    loop: true,
    autoplay: false,
    ...options,
  });

  // 外部からの操作
  useImperativeHandle(ref, () => ({
    play: () => play(),
    pause: () => pause(),
  }));
  return View;
};
export default BaseLottie;
