import { HTMLAttributes } from 'react';
import styles from './secondarybtn.module.css';

interface SecondaryBtnProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  action: any;
  toTheBottom?: boolean;
}

const SecondaryBtn = ({ label, action, toTheBottom }: SecondaryBtnProps) => (
  <button
    onClick={action}
    className={`${styles.container} ${toTheBottom ? styles.toTheBottom : null}`}
  >
    {label}
  </button>
);

export default SecondaryBtn;
