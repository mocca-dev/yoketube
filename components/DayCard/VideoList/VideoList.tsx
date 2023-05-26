import { HTMLAttributes } from 'react';
import styles from './videoList.module.css';
import VideoItem from './VideoItem/VideoItem';

interface VideoListProps extends HTMLAttributes<HTMLDivElement> {}

export const VideoList = ({}: VideoListProps) => {
  return (
    <div className={styles.container}>
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
    </div>
  );
};

export default VideoList;
