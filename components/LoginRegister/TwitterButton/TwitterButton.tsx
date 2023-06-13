import PrimaryBtn from './../../PrimaryBtn/PrimaryBtn';
import { signIn } from 'next-auth/react';
import styles from './twitterbutton.module.css';

const TwitterButton = () => (
  <span className={styles.bgColor}>
    <PrimaryBtn action={() => signIn('twitter')} label="Login with Twitter" />
  </span>
);

export default TwitterButton;
