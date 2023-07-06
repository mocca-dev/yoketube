import { HTMLAttributes, useState } from 'react';
import styles from './editBtn.module.css';
import CrossIcon from '@/components/CrossIcon/CrossIcon';
import EditIcon from '../EditIcon';

interface EditBtnProps extends HTMLAttributes<HTMLDivElement> {
  action: any;
  isInEditMode: Boolean;
}

const EditBtn = ({ action, isInEditMode }: EditBtnProps) => (
  <>
    <button className={styles.buttonIcon} onClick={action}>
      {isInEditMode ? <CrossIcon /> : <EditIcon />}
    </button>
  </>
);

export default EditBtn;
