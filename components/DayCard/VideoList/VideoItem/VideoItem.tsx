import { HTMLAttributes } from 'react';
import Image from 'next/image';
import styles from './videoItem.module.css';
import { EnhancedVideo, Video } from '@/types/Types';

interface VideoItemProps extends HTMLAttributes<HTMLDivElement> {
  data: EnhancedVideo;
  played: boolean;
}

const VideoItem = ({ data, played }: VideoItemProps) => {
  const { thumbnail, title, author } = data;

  return (
    <div className={`${styles.container} ${played ? styles.played : ''}`}>
      <Image
        src={thumbnail}
        className={styles.thumbnail}
        height={70}
        width={91}
        alt=""
      />
      <span className={styles.descriptionContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.channelName}>{author.name}</div>
        {/* <div className={styles.duration}>{duration}</div> */}
      </span>
    </div>
  );
};

export default VideoItem;
