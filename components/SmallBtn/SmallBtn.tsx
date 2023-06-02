import { HTMLAttributes } from 'react';
import styles from './smallBtn.module.css';

interface SmallBtnProps extends HTMLAttributes<HTMLDivElement> {
  children: any;
}

export const SmallBtn = ({ children }: SmallBtnProps) => (
  <button className={styles.container}>{children}</button>
);

export default SmallBtn;
