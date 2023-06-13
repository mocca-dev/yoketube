'use client';
import { signIn } from 'next-auth/react';
import styles from './login.module.css';
import PrimaryBtn from '@/components/PrimaryBtn/PrimaryBtn';
import Link from 'next/link';
import TextField from '@/components/TextField/TextField';
import GoogleButton from '@/components/LoginRegister/GoogleButton/GoogleButton';
// import TwitterButton from '@/components/LoginRegister/TwitterButton/TwitterButton';
// import InstagramButton from '@/components/LoginRegister/InstagramButton/InstagramButton';
import Logo from '@/components/Logo/Logo';
import { useState } from 'react';

const Login = () => {
  const [showForm, setShowForm] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn('credentials', { email, password });
  };

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>Log in</h1> */}
      <div className={styles.logo}>
        <Logo />
      </div>
      <h3 className={styles.title}>Welcome to YokeTube</h3>
      <GoogleButton />
      {/* <TwitterButton />
      <InstagramButton /> */}
      <p className={styles.or}>or</p>
      {!showForm ? (
        <PrimaryBtn label="Login with email" action={() => setShowForm(true)} />
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField name="email" placeholder="Email" type="email" />
          <TextField name="password" placeholder="Password" type="password" />
          <PrimaryBtn type="submit" label="Login" />
        </form>
      )}
      <Link href="/register" className={styles.link}>
        Are you new here? Create new account
      </Link>
    </div>
  );
};

export default Login;
