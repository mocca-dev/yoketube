import { HTMLAttributes } from 'react';
import Image from 'next/image';
import styles from './videoItem.module.css';

interface VideoItemProps extends HTMLAttributes<HTMLDivElement> {}

export const VideoItem = ({}: VideoItemProps) => {
  return (
    <div className={styles.container}>
      <Image
        src="/thumbnail1.png"
        className={styles.thumbnail}
        height={70}
        width={120}
        alt=""
      />
      <span className={styles.descriptionContainer}>
        <div className={styles.title}>
          5 MIN WAKE UP CALL ROUTINE TO STAY SHREDDED | Rowan Row
        </div>
        <div className={styles.channelName}>Rowan Row</div>
        <div className={styles.duration}>7:36</div>
      </span>
    </div>
  );
};

export default VideoItem;
