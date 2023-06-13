import PrimaryBtn from '@/components/PrimaryBtn/PrimaryBtn';
import { signIn } from 'next-auth/react';
import styles from './googlebutton.module.css';

const GoogleButton = () => (
  <span className={styles.bgColor}>
    <PrimaryBtn action={() => signIn('google')} label="Login with Google" />
  </span>
);

export default GoogleButton;
