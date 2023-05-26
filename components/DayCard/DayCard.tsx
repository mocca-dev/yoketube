import { HTMLAttributes } from 'react';
import styles from './dayCard.module.css';
import StatsHeader from './StatsHeader/StatsHeader';
import VideoList from './VideoList/VideoList';
import PlayButton from './PlayButton/PlayButton';
import BackPannel from './BackPannel/BackPannel';

interface DayCardProps extends HTMLAttributes<HTMLDivElement> {}

export const DayCard = ({}: DayCardProps) => {
  return (
    <>
      <header className={styles.header}>
        <span>Today workout</span>
        <span className={styles.date}>25 May</span>
      </header>

      <main className={styles.main}>
        <PlayButton />
        <StatsHeader />
        <VideoList />
      </main>
      <BackPannel />
    </>
  );
};

export default DayCard;
