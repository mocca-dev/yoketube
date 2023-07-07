import { HTMLAttributes } from 'react';
import styles from './checkbox.module.css';
import EditBtn from '../DayCard/BackPannel/EditBtn/EditBtn';

interface CheckBoxProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  onClick: any;
  onEditClick: any;
  value?: string;
}

const CheckBox = ({ label, value, onClick, onEditClick }: CheckBoxProps) => (
  <label className={styles.container}>
    <span>{label}</span>
    <input type="radio" name="radio" onClick={() => onClick(value)} />
    <span className={styles.checkmark}></span>
    <EditBtn action={() => onEditClick(value)} isInEditMode={false} />
  </label>
);

export default CheckBox;
