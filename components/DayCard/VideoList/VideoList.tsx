import { HTMLAttributes } from 'react';
import styles from './videoList.module.css';
import VideoItem from './VideoItem/VideoItem';
import Video from '@/types/Types';

interface VideoListProps extends HTMLAttributes<HTMLDivElement> {
  list: Video[];
}

export const VideoList = ({ list }: VideoListProps) => {
  return (
    <div className={styles.container}>
      {list && list.map((video) => <VideoItem key={video.name} data={video} />)}
    </div>
  );
};

export default VideoList;
