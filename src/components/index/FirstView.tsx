import FirstViewTimeline from './FirstViewTimeline';
import Loading from './Loading';
import LoadingContents from './LoadingContents';
import MainVisual from './MainVisual';
import MainVisualContents from './MainVisualContents';

const FirstView: React.FC = () => {
  return (
    <FirstViewTimeline>
      <Loading>
        <LoadingContents />
      </Loading>
      <MainVisual>
        <MainVisualContents />
      </MainVisual>
    </FirstViewTimeline>
  );
};
export default FirstView;
