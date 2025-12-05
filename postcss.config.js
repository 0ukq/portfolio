import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';
import postcssCustomMedia from 'postcss-custom-media';
import functions from 'postcss-functions';
import postcssGlobalData from '@csstools/postcss-global-data';

const BASE_FONT_SIZE = 16;
const PC_WIDTH = 1440;
const MOBILE_WIDTH = 768;

const config = {
  plugins: [
    postcssGlobalData({
      files: ['./app/assets/css/_config/_media.css'],
    }),
    postcssCustomMedia(),
    autoprefixer,
    postcssNested,
    functions({
      functions: {
        rem(num) {
          return `${num / BASE_FONT_SIZE}rem`;
        },
        tb(num) {
          return `${(num / PC_WIDTH) * 100}vw`;
        },
        vw(num) {
          return `${(num / MOBILE_WIDTH) * 100}vw`;
        },
      },
    }),
  ],
};

export default config;
