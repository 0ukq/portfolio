import type { Metadata } from 'next';
import Lenis from '@/components/Lenis/Lenis';
import { robot } from '@/lib/fonts';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Daiki Hirano Portfolio',
  description: "Daiki Hirano's Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robot.className}`}>
        <Lenis />
        {children}
      </body>
    </html>
  );
}
