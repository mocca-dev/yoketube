import { HTMLAttributes } from 'react';
import styles from './playButton.module.css';
import PlayIcon from './PlayIcon';

interface PlayButtonProps extends HTMLAttributes<HTMLDivElement> {}

export const PlayButton = ({}: PlayButtonProps) => {
  return (
    <div className={styles.container}>
      <PlayIcon />
    </div>
  );
};

export default PlayButton;
