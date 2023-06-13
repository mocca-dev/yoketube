import { useSession } from 'next-auth/react';
import styles from './welcomeName.module.css';

const WelcomeName = () => {
  const session = useSession();
  return (
    <span>
      <div className={styles.welcome}>Welcome,</div>
      <div className={styles.username}>
        {session.status === 'authenticated'
          ? session.data?.user?.name
          : 'to YokeTube'}
      </div>
    </span>
  );
};

export default WelcomeName;
