import { HTMLAttributes } from 'react';
import Image from 'next/image';
import styles from './videoItem.module.css';
import { Video } from '@/types/Types';

interface VideoItemProps extends HTMLAttributes<HTMLDivElement> {
  data: Video;
}

const VideoItem = ({ data }: VideoItemProps) => (
  <div className={styles.container}>
    <Image
      src={data.thumbnailUrl}
      className={styles.thumbnail}
      height={70}
      width={120}
      alt=""
    />
    <span className={styles.descriptionContainer}>
      <div className={styles.title}>{data.name}</div>
      <div className={styles.channelName}>{data.author}</div>
      <div className={styles.duration}>{data.duration}</div>
    </span>
  </div>
);

export default VideoItem;
