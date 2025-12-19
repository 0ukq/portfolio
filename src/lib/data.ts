import WorkSampleImg from '../../public/images/index/work_img_sample.jpg';
import { StaticImageData } from 'next/image';

export interface WorkData {
  id: string;
  thumbnail: {
    src: StaticImageData;
    width: number;
    height: number;
  };
  title: string;
  position: string;
  link: string;
}

export const workDataSample: WorkData[] = [
  {
    id: '1',
    thumbnail: {
      src: WorkSampleImg,
      width: WorkSampleImg.width,
      height: WorkSampleImg.height,
    },
    title: 'ITEM NAME',
    position: 'FRONTEND',
    link: 'https://example.com/',
  },
  {
    id: '2',
    thumbnail: {
      src: WorkSampleImg,
      width: WorkSampleImg.width,
      height: WorkSampleImg.height,
    },
    title: 'ITEM NAME',
    position: 'FRONTEND',
    link: 'https://example.com/',
  },
  {
    id: '3',
    thumbnail: {
      src: WorkSampleImg,
      width: WorkSampleImg.width,
      height: WorkSampleImg.height,
    },
    title: 'ITEM NAME',
    position: 'FRONTEND',
    link: 'https://example.com/',
  },
  {
    id: '4',
    thumbnail: {
      src: WorkSampleImg,
      width: WorkSampleImg.width,
      height: WorkSampleImg.height,
    },
    title: 'ITEM NAME',
    position: 'FRONTEND',
    link: 'https://example.com/',
  },
  {
    id: '5',
    thumbnail: {
      src: WorkSampleImg,
      width: WorkSampleImg.width,
      height: WorkSampleImg.height,
    },
    title: 'ITEM NAME',
    position: 'FRONTEND',
    link: 'https://example.com/',
  },
];
