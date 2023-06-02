import { HTMLAttributes } from 'react';
import styles from './secondarybtn.module.css';

interface SecondaryBtnProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  toTheBottom?: boolean;
}

export const SecondaryBtn = ({ label, toTheBottom }: SecondaryBtnProps) => (
  <button
    className={`${styles.container} ${toTheBottom ? styles.toTheBottom : null}`}
  >
    {label}
  </button>
);

export default SecondaryBtn;
