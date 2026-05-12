'use client';

import clsx from 'clsx';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import styles from './Profile.module.css';

interface ProfileProps {
  children: React.ReactNode;
}

gsap.registerPlugin(SplitText);

const Profile: React.FC<ProfileProps> = ({ children }) => {
  const gsapRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // 初期値設定
      const thumbnails: HTMLElement[] = gsap.utils.toArray('[data-thumbnail]');

      // scrollTrigger 共通設定
      const defaultTrigger: ScrollTrigger.Vars = {
        trigger: gsapRef.current,
        start: 'top top',
        end: 'bottom-=10% bottom',
        scrub: 1.2,
      };

      // 画像
      const thumbnailTl = gsap.timeline({
        scrollTrigger: { ...defaultTrigger, start: 'top+=5% top' },
      });
      thumbnails.forEach((thumbnail, i) => {
        if (i === 0) return;
        const img = thumbnail.querySelector('img');
        thumbnailTl.to(thumbnail, { clipPath: 'inset(0% 0% 0% 0%)' });
        thumbnailTl.to(img, { yPercent: -5, scale: 1 }, '<');
      });

      // テキストアニメーション
      gsap.to('[data-profile-split]', {
        clipPath: 'inset(0% 0% 0% 0%)',
        scrollTrigger: { ...defaultTrigger },
      });
    },
    { scope: gsapRef }
  );

  return (
    <section ref={gsapRef} className={clsx(styles.profile, 'bg-main-gray')}>
      {children}
    </section>
  );
};
export default Profile;
