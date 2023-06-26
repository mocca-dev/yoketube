'use client';
import { HTMLAttributes, useEffect } from 'react';
import styles from './dayCard.module.css';
import StatsHeader from './StatsHeader/StatsHeader';
import VideoList from './VideoList/VideoList';
import PlayButton from './PlayButton/PlayButton';
import BackPannel from './BackPannel/BackPannel';
import { List } from '@/types/Types';
import SelectList from './SelectList/SelectList';
import { goToToday } from '@/app/utils/week';

interface DayCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  date: string;
  lists: List[];
  number: number;
  userEmail: any;
  updateDayInList: any;
  list?: string[];
}

const DayCard = ({
  name,
  date,
  lists,
  list,
  number,
  updateDayInList,
  userEmail,
}: DayCardProps) => {
  const updateDay = async (id: string) => {
    updateDayInList(id, number);
    // console.log('LLLLLLL', id);
  };

  useEffect(() => {
    if (name === 'Today') {
      goToToday();
    }
  }, [name]);

  return (
    <div
      className={`${styles.container} `}
      id={`${name === 'Today' ? 'current' : ''}`}
    >
      <header className={styles.header}>
        <span>{name}</span>
        {name === 'Today' ? (
          <span className={styles.date}>{date}</span>
        ) : (
          <button className={styles.goToTodayBtn} onClick={goToToday}>
            {date}
          </button>
        )}
      </header>

      <main className={styles.main}>
        <StatsHeader />
        {list && list.length ? (
          <>
            <PlayButton />
            <VideoList list={list} />
          </>
        ) : (
          <SelectList
            lists={lists}
            dayNumber={number}
            userEmail={userEmail}
            updateDay={(id: string) => updateDay(id)}
          />
        )}
      </main>
      <BackPannel />
    </div>
  );
};

export default DayCard;
