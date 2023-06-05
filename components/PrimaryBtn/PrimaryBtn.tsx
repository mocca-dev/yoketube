import { HTMLAttributes } from 'react';
import styles from './primaryBtn.module.css';

interface PrimaryBtnProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  action: any;
  type?: string;
}

const PrimaryBtn = ({ label, action, type }: PrimaryBtnProps) => (
  <button typeof={type} className={styles.container} onClick={action}>
    {label}
  </button>
);

export default PrimaryBtn;
