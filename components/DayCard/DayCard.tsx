import { HTMLAttributes } from 'react';
import styles from './dayCard.module.css';
import StatsHeader from './StatsHeader/StatsHeader';
import VideoList from './VideoList/VideoList';

interface DayCardProps extends HTMLAttributes<HTMLDivElement> {}

export const DayCard = ({}: DayCardProps) => {
  return (
    <>
      <header className={styles.header}>
        <span>Today workout</span>
        <span className={styles.date}>25 May</span>
      </header>
      <main className={styles.main}>
        <StatsHeader />
        <VideoList />
      </main>
    </>
  );
};

export default DayCard;
