import { useLottie, type LottieOptions } from 'lottie-react';
import SaluteAnimation from '../../../public/lottie/salute.json';
import { useImperativeHandle } from 'react';

export type LottieSaluteRef = {
  play: () => void;
};

type LottieSaluteProps = {
  ref?: React.Ref<LottieSaluteRef>;
};

export default function LottieSalute({ ref }: LottieSaluteProps) {
  const options: LottieOptions = {
    animationData: SaluteAnimation,
    loop: true,
    autoplay: false,
  };

  const { View, play } = useLottie(options);

  useImperativeHandle(ref, () => ({
    play: () => play(),
  }));

  return View;
}
