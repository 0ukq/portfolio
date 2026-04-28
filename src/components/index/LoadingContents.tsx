import clsx from 'clsx';
import StackText from '../stack/StackText';
import BaseLottie from '../lotties/BaseLottie';
import Rolling from '../../../public/lotties/rolling.json';
import Salute from '../../../public/lotties/salute.json';

import styles from './LoadingContents.module.css';

const LoadingContents: React.FC = () => {
  return (
    <div className={clsx(styles.contents, styles['is-animation'])}>
      <div className={clsx('clip')}>
        <div className={clsx(styles.lottie, 'stack-items')} data-lottie>
          <div className="item" data-rolling>
            <BaseLottie lottieData={Rolling} />
          </div>
          <div className={clsx(styles.salute, 'item')} data-salute>
            <BaseLottie lottieData={Salute} />
          </div>
        </div>
      </div>

      <div className="clip">
        <div className={clsx('stack-items', styles.paragraphs)} data-paragraphs>
          <StackText text="LOADING..." className={clsx(styles.loading, styles.text, 'item')} />
          <p className={clsx(styles.completed, styles.text, 'item')}>COMPLETED!</p>
        </div>
      </div>
    </div>
  );
};
export default LoadingContents;
