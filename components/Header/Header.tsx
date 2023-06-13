'use client';

import { usePathname } from 'next/navigation';
import { HTMLAttributes } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import LeftArrowIcon from '../LeftArrowIcon/LeftArrowIcon';
import { signOut, useSession } from 'next-auth/react';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header = ({}: HeaderProps) => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <header className={styles.header}>
      {pathname === '/' && (
        <span>
          <div className={styles.welcome}>Welcome,</div>{' '}
          <div className={styles.username}>Toneko</div>
        </span>
      )}
      {pathname === '/newList' && (
        <span className={styles.title}>
          <Link href={'/'}>
            <LeftArrowIcon />
          </Link>
          <div className={styles.username}> New list</div>
        </span>
      )}
      {pathname !== '/login' &&
        pathname !== '/register' &&
        (session.status === 'authenticated' ? (
          <button className={styles.noBackground} onClick={() => signOut()}>
            <Image
              src="/profile.png"
              className={styles.profilePic}
              height={50}
              width={50}
              alt=""
            />
          </button>
        ) : (
          'signin'
        ))}
    </header>
  );
};

export default Header;
