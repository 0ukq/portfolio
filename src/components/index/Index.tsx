import FirstView from './FirstView';
import AboutContents from './AboutContents';
import About from './About';
import Profile from './Profile';
import ProfileContents from './ProfileContents';
import TechStack from './TechStack';
import TechStackContents from './TechStackContents';
import Closing from './Closing';
import ClosingContents from './ClosingContents';

const Index: React.FC = () => {
  return (
    <>
      <FirstView />
      <About>
        <AboutContents />
      </About>
      <Profile>
        <ProfileContents />
      </Profile>
      <TechStack>
        <TechStackContents />
      </TechStack>
      <Closing>
        <ClosingContents />
      </Closing>
    </>
  );
};
export default Index;
