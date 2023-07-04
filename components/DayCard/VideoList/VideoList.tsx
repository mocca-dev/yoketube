'use client';
import { HTMLAttributes, useContext } from 'react';
import styles from './videoList.module.css';
import VideoItem from './VideoItem/VideoItem';
import { ModalContext } from '@/context/modal.context';
import LoaderWithText from '@/components/LoaderWithText/LoaderWithText';
import useVideoList from '@/hooks/useVideoList';

interface VideoListProps extends HTMLAttributes<HTMLDivElement> {
  list: string[];
  dayNumber: number;
}

const VideoList = ({ list, dayNumber }: VideoListProps) => {
  const { state } = useContext(ModalContext);
  const videoList = useVideoList(list);

  return (
    <div className={styles.container}>
      {videoList ? (
        videoList.map((video: any, index: number) => (
          <VideoItem
            key={video.url}
            data={video}
            index={index}
            playedList={state.playedList}
            dayNumber={dayNumber}
          />
        ))
      ) : (
        <LoaderWithText text="Searching video data" />
      )}
    </div>
  );
};

export default VideoList;
