'use client';
import TextField from '@/components/TextField/TextField';
import styles from './register.module.css';
import PrimaryBtn from '@/components/PrimaryBtn/PrimaryBtn';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo/Logo';

const Register = () => {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[1].value;
    const email = e.target[3].value;
    const password = e.target[5].value;
    const repassword = e.target[7].value;

    if (name) {
      try {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });

        res.status === 201 &&
          router.push('/login?success=Account has been created');
      } catch (error) {
        console.log('Register Error:', error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <h3 className={styles.title}>Welcome to YokeTube</h3>
      <form onSubmit={handleSubmit}>
        {/* <Label text="Name" /> */}
        <TextField name="username" placeholder="Name" />
        {/* <Label text="E-Mail" /> */}
        <TextField name="email" placeholder="E-Mail" type="email" />
        {/* <Label text="Password" /> */}
        <TextField name="password" placeholder="Password" type="password" />
        {/* <Label text="Re Password" /> */}
        <TextField
          name="repassword"
          placeholder="Re Password"
          type="password"
        />
        <PrimaryBtn type="submit" label="Register" />
      </form>
      <Link href="/login" className={styles.link}>
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
