import { LottieOptions, useLottie } from 'lottie-react';

import Rolling from '../../../public/lotties/rolling.json';
import { useImperativeHandle } from 'react';

export type LottieRollingRef = {
  play: () => void;
};

type LottieRollingProps = {
  ref?: React.Ref<LottieRollingRef>;
};

const LottieRolling: React.FC<LottieRollingProps> = ({ ref }) => {
  // Lottie オプション
  const options: LottieOptions = {
    animationData: Rolling,
    loop: true,
    autoplay: false,
  };

  const { View, play } = useLottie(options);

  // 外部からの操作
  useImperativeHandle(ref, () => ({
    play: () => play(),
  }));

  return View;
};
export default LottieRolling;
