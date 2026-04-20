import { useLottie, useLottieInteractivity } from 'lottie-react';

interface ScrollInteractivityLottieProps {
  lottieData: unknown;
}

const ScrollInteractivityLottie: React.FC<ScrollInteractivityLottieProps> = ({ lottieData }) => {
  const options = {
    animationData: lottieData,
  };

  const lottieObj = useLottie(options);

  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        type: 'seek',
        visibility: [0.4, 1],
        frames: [0, 60],
      },
    ],
  });

  return Animation;
};

export default ScrollInteractivityLottie;
