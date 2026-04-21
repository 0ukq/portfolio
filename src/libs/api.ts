import type { MicroCMSImage } from 'microcms-js-sdk';
import { client } from './microcms';

export interface BlogPost {
  id: string;
  title: string;
  thumbnail: MicroCMSImage;
  contents: string;
  category: string;
  tags: string[];
}

enum Endpoints {
  BLOG = 'blog',
}

// ブログ一覧
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const data = await client.getList({
    endpoint: Endpoints.BLOG,
  });

  return data.contents;
};
