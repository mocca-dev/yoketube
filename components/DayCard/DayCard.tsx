import { HTMLAttributes } from 'react';
import styles from './dayCard.module.css';
import StatsHeader from './StatsHeader/StatsHeader';
import VideoList from './VideoList/VideoList';
import PlayButton from './PlayButton/PlayButton';
import BackPannel from './BackPannel/BackPannel';
import Video from '@/types/Types';

interface DayCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  date: string;
  list?: Video[];
}

export const DayCard = ({ name, date, list }: DayCardProps) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>{name}</span>
        <span className={styles.date}>{date}</span>
      </header>

      <main className={styles.main}>
        <StatsHeader />
        {list && list.length ? (
          <>
            <PlayButton />
            <VideoList list={list} />
          </>
        ) : (
          <>
            <div className={styles.mainTitle}>Select a list</div>
            <button className={styles.checkboxCointainer}>Arms and Legs</button>
            <button className={styles.btnCointainer}>Set list</button>
          </>
        )}
      </main>
      <BackPannel />
    </div>
  );
};

export default DayCard;
