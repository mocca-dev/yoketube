'use client';
import { HTMLAttributes, useContext, useEffect } from 'react';
import styles from './dayCard.module.css';
import VideoList from './VideoList/VideoList';
import PlayButton from './PlayButton/PlayButton';
import BackPannel from './BackPannel/BackPannel';
import { LinkItem, List } from '@/types/Types';
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
  setDayInEditMode: any;
  title: string;
  isSearching: boolean;
  isInEditMode: boolean;
  list?: LinkItem[];
}

const DayCard = ({
  name,
  date,
  lists,
  list,
  number,
  updateDayInList,
  setDayInEditMode,
  userEmail,
  title,
  isSearching,
  isInEditMode,
}: DayCardProps) => {
  const { state, dispatch } = useContext(ModalContext);

  useEffect(() => {
    if (name === 'Today') goToToday();
  }, [name]);

  const handlePlayClick = () => {
    const onlyVideoIDList = list?.map(({ url }) => {
      if (url.startsWith('https://youtu.be/')) {
        return url.replace('https://youtu.be/', '');
      }
      return url.slice(url.indexOf('v=') + 2);
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
        {list?.length && !isInEditMode ? (
          <>
            <PlayButton action={() => handlePlayClick()} />
            <VideoList list={list} dayNumber={number} />
          </>
        ) : isSearching ? (
          <LoaderWithText text="Fetching video data" />
        ) : (
          <>
            {lists?.length ? (
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
        <div className={styles.hiddingPannel}>
          {!isInEditMode && (
            <>
              {state.playedList[number].length}/{list?.length} played
            </>
          )}
        </div>
        <BackPannel
          reset={() => dispatch({ type: 'RESET_PLAYED', payload: number })}
          edit={() => setDayInEditMode()}
          right={() => console.log('right')}
          isInEditMode={isInEditMode}
        />
      </main>
    </div>
  );
};

export default DayCard;
