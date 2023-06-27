import { HTMLAttributes } from 'react';
import styles from './playButton.module.css';
import PlayIcon from './PlayIcon';

interface PlayButtonProps extends HTMLAttributes<HTMLDivElement> {
  action: any;
}

const PlayButton = ({ action }: PlayButtonProps) => {
  return (
    <button className={styles.container} onClick={action}>
      <PlayIcon />
    </button>
  );
};

export default PlayButton;
