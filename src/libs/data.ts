import WorkSampleImg from '../../public/images/index/work_img_sample.jpg';
import SampleWorkShot from '../../public/images/work/work_sample.jpg';
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
  stack: string[];
  screenShots: {
    src: StaticImageData;
    width: number;
    height: number;
  }[];
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
    stack: ['React', 'TypeScript', 'Next.js'],
    screenShots: [
      {
        src: SampleWorkShot,
        width: SampleWorkShot.width,
        height: SampleWorkShot.height,
      },
      {
        src: SampleWorkShot,
        width: SampleWorkShot.width,
        height: SampleWorkShot.height,
      },
      {
        src: SampleWorkShot,
        width: SampleWorkShot.width,
        height: SampleWorkShot.height,
      },
    ],
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
    stack: ['React', 'TypeScript', 'Next.js'],
    screenShots: [
      {
        src: SampleWorkShot,
        width: SampleWorkShot.width,
        height: SampleWorkShot.height,
      },
    ],
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
    stack: ['React', 'TypeScript', 'Next.js'],
    screenShots: [
      {
        src: SampleWorkShot,
        width: SampleWorkShot.width,
        height: SampleWorkShot.height,
      },
    ],
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
    stack: ['React', 'TypeScript', 'Next.js'],
    screenShots: [
      {
        src: SampleWorkShot,
        width: SampleWorkShot.width,
        height: SampleWorkShot.height,
      },
    ],
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
    stack: ['React', 'TypeScript', 'Next.js'],
    screenShots: [
      {
        src: SampleWorkShot,
        width: SampleWorkShot.width,
        height: SampleWorkShot.height,
      },
    ],
  },
];
