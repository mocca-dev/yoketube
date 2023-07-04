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
import LoaderWithText from '../LoaderWithText/LoaderWithText';

interface DayCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  date: string;
  lists: List[];
  number: number;
  userEmail: any;
  updateDayInList: any;
  title: string;
  isSearching: Boolean;
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
  isSearching,
}: DayCardProps) => {
  const { dispatch } = useContext(ModalContext);

  useEffect(() => {
    if (name === 'Today') goToToday();
  }, [name]);

  const handlePlayClick = () => {
    const onlyVideoIDList = list?.map((video: string) => {
      if (video.startsWith('https://youtu.be/')) {
        return video.replace('https://youtu.be/', '');
      }
      return video.slice(video.indexOf('v=') + 2);
    });

    dispatch({ type: 'SET_CURRENTDAY', payload: number });
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
            <VideoList list={list} dayNumber={number} />
          </>
        ) : isSearching ? (
          <LoaderWithText text="Fetching video data" />
        ) : (
          <>
            {lists && lists.length ? (
              <SelectList
                lists={lists}
                dayNumber={number}
                userEmail={userEmail}
                updateDay={(id: string) => updateDayInList(id, number)}
              />
            ) : (
              <LoaderWithText text="Fetching lists data" />
            )}
          </>
        )}
        <div className={styles.hiddingPannel}></div>
        <BackPannel
          reset={() => dispatch({ type: 'RESET_PLAYED', payload: number })}
          edit={() => updateDay('')}
          right={() => console.log('right')}
        />
      </main>
    </div>
  );
};

export default DayCard;
