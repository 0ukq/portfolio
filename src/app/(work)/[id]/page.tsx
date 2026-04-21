import PageLayout from '@/components/layout/PageLayout';
import { workDataSample } from '@/libs/data';
import FirstView from '@/components/work/FirstView';
import ScreenShots from '@/components/work/ScreenShots';
import NextPage from '@/components/work/NextPage';

export default function Page() {
  const data = workDataSample[0];

  return (
    <PageLayout>
      <FirstView data={data} />
      <ScreenShots data={data} />
      <NextPage data={workDataSample} />
    </PageLayout>
  );
}
