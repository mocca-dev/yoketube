'use client';
import { HTMLAttributes, useContext, useEffect } from 'react';
import styles from './dayCard.module.css';
import VideoList from './VideoList/VideoList';
import PlayButton from './PlayButton/PlayButton';
import BackPannel from './BackPannel/BackPannel';
import { List } from '@/types/Types';
import SelectList from './SelectList/SelectList';
import { goToToday } from '@/app/utils/week';
import { ModalContext } from '@/context/modal.context';
import TitleHeader from './TitleHeader/TitleHeader';

interface DayCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  date: string;
  lists: List[];
  number: number;
  userEmail: any;
  updateDayInList: any;
  title: string;
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
  title,
}: DayCardProps) => {
  const { dispatch } = useContext(ModalContext);

  useEffect(() => {
    if (name === 'Today') {
      goToToday();
    }
  }, [name]);

  const updateDay = async (id: string) => {
    updateDayInList(id, number);
  };

  const handlePlayClick = () => {
    const onlyVideoIDList = list?.map((video: string) =>
      video.slice(video.indexOf('v=') + 2)
    );

    dispatch({ type: 'SET_LIST', payload: onlyVideoIDList });
    dispatch({ type: 'SHOW' });
  };

  return (
    <div
      className={`${styles.container} `}
      id={`${name === 'Today' ? 'current' : number}`}
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
        <TitleHeader title={title} />
        {list && list.length ? (
          <>
            <PlayButton action={() => handlePlayClick()} />
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
        <div className={styles.hiddingPannel}></div>
        <BackPannel
          reset={() => console.log(number)}
          edit={() => updateDay('')}
          right={() => console.log('right')}
        />
      </main>
    </div>
  );
};

export default DayCard;
