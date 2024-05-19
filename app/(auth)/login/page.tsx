'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import styles from './login.module.css';
import PrimaryBtn from '@/components/PrimaryBtn/PrimaryBtn';
import Link from 'next/link';
import TextField from '@/components/TextField/TextField';
import Logo from '@/components/Logo/Logo';
import { useSearchParams } from 'next/navigation';
import ErrorMsg from '@/components/ErrorMsg/ErrorMsg';
// import GoogleButton from '@/components/LoginRegister/GoogleButton/GoogleButton';
// import TwitterButton from '@/components/LoginRegister/TwitterButton/TwitterButton';
// import InstagramButton from '@/components/LoginRegister/InstagramButton/InstagramButton';

const Login = () => {
  // const [showForm, setShowForm] = useState(false);
  const [isSendingData, setIsSendinData] = useState(false);
  const searchParams = useSearchParams();
  const error: string = searchParams.get('error')?.toString() || '';
  console.log(error);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSendinData(true);
    const email = e.target[1]?.value;
    const password = e.target[3]?.value;

    if (email && password) {
      const siginData = await signIn('credentials', {
        email,
        password,
      });
    }
    setIsSendinData(false);
  };

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>Log in</h1> */}
      <div className={styles.logo}>
        <Logo />
      </div>
      <h3 className={styles.title}>Welcome to YokeTube</h3>
      {/* <GoogleButton /> 
      <TwitterButton />
      <InstagramButton /> 
      <p className={styles.or}>or</p>*/}
      {/* {!showForm ? (
        <PrimaryBtn label="Login with email" action={() => setShowForm(true)} />
      ) : ( */}
      <form onSubmit={handleSubmit}>
        <TextField name="email" placeholder="Email" type="email" value="" />
        <TextField name="password" placeholder="Password" type="password" />
        {error ? <ErrorMsg label={error} /> : null}
        <PrimaryBtn
          type="submit"
          label="Login"
          disabled={isSendingData}
          isLoading={isSendingData}
        />
      </form>
      {/* )} */}
      <Link href="/register" className={styles.link}>
        Are you new here? Create new account
      </Link>
    </div>
  );
};

export default Login;
