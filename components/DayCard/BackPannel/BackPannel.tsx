import { HTMLAttributes } from 'react';
import styles from './backPannel.module.css';
import ResetIcon from './ResetIcon';
import EditIcon from './EditIcon';
import RightArrowIcon from './RightArrowIcon';

interface BackPannelProps extends HTMLAttributes<HTMLDivElement> {
  reset: any;
  edit: any;
  right: any;
}

const BackPannel = ({ reset, edit, right }: BackPannelProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonsBar}>
        <button className={styles.buttonIcon} onClick={reset}>
          <ResetIcon />
        </button>
        <button className={styles.buttonIcon} onClick={edit}>
          <EditIcon />
        </button>
        <button className={styles.buttonIcon} onClick={right}>
          <RightArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default BackPannel;
