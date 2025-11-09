import { useLottie, type LottieOptions } from 'lottie-react';
import RollingFaceAnimation from '../../../public/lottie/rolling-face.json';
import { useImperativeHandle } from 'react';

export type LottieRollingFaceRef = {
  play: () => void;
};

type LottieRollingFaceProps = {
  ref?: React.Ref<LottieRollingFaceRef>;
};

export default function LottieRollingFace({ ref }: LottieRollingFaceProps) {
  const options: LottieOptions = {
    animationData: RollingFaceAnimation,
    loop: true,
    autoplay: false,
  };

  const { View, play } = useLottie(options);
  useImperativeHandle(ref, () => ({
    play: () => play(),
  }));

  return View;
}
