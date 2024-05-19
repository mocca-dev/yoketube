import Image from 'next/image';
import styles from './profileButton.module.css';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader/Loader';
import LoginIcon from '@/components/LoginIcon/LoginIcon';

const ProfileButton = () => {
  const session = useSession();
  const router = useRouter();
  const hasProfileImage = session.data?.user?.image;
  return (
    <>
      {session.status === 'authenticated' && (
        <button
          className={`${styles.noBackground} ${
            !hasProfileImage ? styles.smallIcon : null
          }`}
          onClick={() => signOut()}
        >
          <Image
            src={session.data?.user?.image || '/logout.svg'}
            className={styles.profilePic}
            height={50}
            width={50}
            alt=""
          />
        </button>
      )}
      {session.status === 'loading' && (
        <span className={styles.loaderContainer}>
          <Loader />
        </span>
      )}
      {session.status === 'unauthenticated' && (
        <button
          className={styles.noBackground}
          onClick={() => router.push('/login')}
        >
          <LoginIcon />
        </button>
      )}
    </>
  );
};

export default ProfileButton;
