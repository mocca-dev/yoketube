import PrimaryBtn from '../../PrimaryBtn/PrimaryBtn';
import { signIn } from 'next-auth/react';
import styles from './instagrambutton.module.css';

const InstagramButton = () => (
  <span className={styles.bgColor}>
    <PrimaryBtn
      action={() => signIn('instagram')}
      label="Login with Instagram"
    />
  </span>
);

export default InstagramButton;
