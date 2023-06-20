import { HTMLAttributes } from 'react';
import styles from './checkbox.module.css';

interface CheckBoxProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  onClick: any;
  value?: string;
}

const CheckBox = ({ label, value, onClick }: CheckBoxProps) => {
  return (
    <label className={styles.container}>
      {label}
      <input type="radio" name="radio" onClick={() => onClick(value)} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CheckBox;
