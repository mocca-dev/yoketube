'use client';
import { HTMLAttributes, useContext } from 'react';
import styles from './videoList.module.css';
import VideoItem from './VideoItem/VideoItem';
import { ModalContext } from '@/context/modal.context';
import LoaderWithText from '@/components/LoaderWithText/LoaderWithText';
import useVideoList from '@/hooks/useVideoList';
import { LinkItem } from '@/types/Types';

interface VideoListProps extends HTMLAttributes<HTMLDivElement> {
  list: LinkItem[];
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
            key={index}
            data={video}
            played={state.playedList[dayNumber][index]}
          />
        ))
      ) : (
        <LoaderWithText text="Searching video data" />
      )}
    </div>
  );
};

export default VideoList;
