import { HTMLAttributes } from 'react';
import styles from './backPannel.module.css';
import ResetIcon from './ResetIcon';
import EditIcon from './EditIcon';
import RightArrowIcon from './RightArrowIcon';
import EditBtn from './EditBtn/EditBtn';

interface BackPannelProps extends HTMLAttributes<HTMLDivElement> {
  reset: any;
  edit: any;
  right: any;
  isInEditMode: boolean;
}

const BackPannel = ({ reset, edit, right, isInEditMode }: BackPannelProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonsBar}>
        <button className={styles.buttonIcon} onClick={reset}>
          <ResetIcon />
        </button>
        <EditBtn action={edit} isInEditMode={isInEditMode} />
        <button className={styles.buttonIcon} onClick={right}>
          <RightArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default BackPannel;
