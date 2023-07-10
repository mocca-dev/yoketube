import Link from 'next/link';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import styles from './welcomeMsg.module.css';

const WelcomeMsg = () => (
  <div className={styles.container}>
    <p>You need to login to start using the app</p>
    <Link href={'/login'}>
      <PrimaryBtn label="Go to login" />
    </Link>
  </div>
);

export default WelcomeMsg;
