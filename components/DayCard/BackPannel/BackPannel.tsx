import { HTMLAttributes } from 'react';
import styles from './backPannel.module.css';
import ResetIcon from './ResetIcon';
import EditIcon from './EditIcon';
import RightArrowIcon from './RightArrowIcon';

interface BackPannelProps extends HTMLAttributes<HTMLDivElement> {}

export const BackPannel = ({}: BackPannelProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonsBar}>
        <ResetIcon />
        <EditIcon />
        <RightArrowIcon />
      </div>
    </div>
  );
};

export default BackPannel;
