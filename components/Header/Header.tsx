import { HTMLAttributes } from 'react';
import styles from './header.module.css';
import Image from 'next/image';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <span>
        <div className={styles.welcome}>Welcome,</div>{' '}
        <div className={styles.username}>Toneko</div>
      </span>
      <span>
        <Image
          src="/profile.png"
          className={styles.profilePic}
          height={50}
          width={50}
          alt=""
        />
      </span>
    </header>
  );
};

export default Header;
