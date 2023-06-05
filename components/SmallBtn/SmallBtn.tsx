import { HTMLAttributes } from 'react';
import styles from './smallBtn.module.css';

interface SmallBtnProps extends HTMLAttributes<HTMLDivElement> {
  action: any;
  children: any;
  name?: string;
  disabled: boolean;
}

const SmallBtn = ({ action, children, name, disabled }: SmallBtnProps) => (
  <button className={styles.container} onClick={action} id={name}>
    <span className={`${disabled ? styles.disabled : null}`}>{children}</span>
  </button>
);

export default SmallBtn;
