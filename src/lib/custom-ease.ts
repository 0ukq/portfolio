/**
 * イージング関数
 * https://easings.net/ja#
 */

import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

export const easeOutQuint = CustomEase.create('easeOutQuint', '0.22, 1, 0.36, 1'); // https://easings.net/ja#easeOutQuint
export const easeOutExpo = CustomEase.create('easeOutExpo', '0.16, 1, 0.3, 1'); // https://easings.net/ja#easeOutExpo
export const easeOutBack = CustomEase.create('easeOutBack', '0.34, 1.56, 0.64, 1'); // https://easings.net/ja#easeOutBack
