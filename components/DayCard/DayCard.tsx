import { HTMLAttributes } from 'react';
import styles from './dayCard.module.css';
import StatsHeader from './StatsHeader/StatsHeader';
import VideoList from './VideoList/VideoList';
import PlayButton from './PlayButton/PlayButton';
import BackPannel from './BackPannel/BackPannel';
import { List } from '@/types/Types';
import SelectList from './SelectList/SelectList';
import { getListByID } from '@/app/utils/list';

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
  const now = new Date();
  const today = now.getDay();
  const isToday = number === today;

  const updateDay = async (id: string) => {
    updateDayInList(id, number);
    // console.log('LLLLLLL', id);
  };

  if (isToday) {
    let month = now.toLocaleString('default', {
      month: 'long',
    });
    date = month + ' ' + now.getDate();
  } else {
    date = 'Go to today';
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>{isToday ? 'Today' : name}</span>
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
