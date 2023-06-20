import styles from './page.module.css';
import Week from '@/components/Week/Week';

const Home = () => (
  <main className={styles.main}>
    <div className={styles.container}>
      <Week />
    </div>
  </main>
);

export default Home;
