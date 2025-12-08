import { LottieOptions, useLottie } from 'lottie-react';

import Rolling from '../../../public/lotties/salute.json';
import { useImperativeHandle } from 'react';

export type LottieSaluteRef = {
  play: () => void;
};

type LottieSaluteProps = {
  ref?: React.Ref<LottieSaluteRef>;
};

const LottieSalute: React.FC<LottieSaluteProps> = ({ ref }) => {
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
export default LottieSalute;
