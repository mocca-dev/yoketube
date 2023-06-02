import { HTMLAttributes } from 'react';
import styles from './primaryBtn.module.css';

interface PrimaryBtnProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
}

export const PrimaryBtn = ({ label }: PrimaryBtnProps) => (
  <button className={styles.container}>{label}</button>
);

export default PrimaryBtn;
