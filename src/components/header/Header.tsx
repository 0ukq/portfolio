import clsx from 'clsx';
import ExLink from '../link/ExLink';
import StackItems from '../stack/StackItems';
import { bigShoulders } from '@/libs/fonts';
import ContentInner from '../layout/ContentInner';

import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <ContentInner>
        <ExLink href="/" className={clsx(styles.logo, bigShoulders.className)} data-header-logo>
          <StackItems
            before="Daiki Hirano"
            beforeData="logo-before"
            after="Back to home"
            afterData="logo-after"
          />
        </ExLink>
      </ContentInner>
    </header>
  );
};
export default Header;
