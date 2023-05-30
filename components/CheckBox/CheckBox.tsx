import { HTMLAttributes } from 'react';
import styles from './checkbox.module.css';

interface CheckBoxProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
}

export const CheckBox = ({ label }: CheckBoxProps) => {
  return (
    <label className={styles.container}>
      {label}
      <input type="radio" checked={true} name="radio" />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CheckBox;
