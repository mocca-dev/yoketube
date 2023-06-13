'use client';

import { usePathname } from 'next/navigation';
import { HTMLAttributes } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import LeftArrowIcon from '../LeftArrowIcon/LeftArrowIcon';
import ProfileButton from './ProfileButton/ProfileButton';
import WelcomeName from './WelcomeName/WelcomeName';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header = ({}: HeaderProps) => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      {pathname === '/' && <WelcomeName />}
      {pathname === '/newList' && (
        <span className={styles.title}>
          <Link href={'/'}>
            <LeftArrowIcon />
          </Link>
          <div className={styles.username}>New list</div>
        </span>
      )}
      {pathname !== '/login' && pathname !== '/register' && <ProfileButton />}
    </header>
  );
};

export default Header;
