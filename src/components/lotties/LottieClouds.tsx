import { LottieOptions, useLottie } from 'lottie-react';

import Rolling from '../../../public/lotties/clouds.json';
import { useImperativeHandle } from 'react';

export type LottieCloudsRef = {
  play: () => void;
};

type LottieCloudsProps = {
  ref?: React.Ref<LottieCloudsRef>;
};

const LottieClouds: React.FC<LottieCloudsProps> = ({ ref }) => {
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
export default LottieClouds;
