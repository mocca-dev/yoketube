import styles from './page.module.css';
import DayCard from '@/components/DayCard/DayCard';

export default function Home() {
  return (
    <main className={styles.main}>
      <DayCard />
    </main>
  );
}
