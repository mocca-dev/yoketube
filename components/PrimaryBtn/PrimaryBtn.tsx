import { HTMLAttributes } from 'react';
import styles from './primaryBtn.module.css';

interface PrimaryBtnProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  action?: any;
  type?: string;
  toTheBottom?: boolean;
  disabled?: boolean;
}

const PrimaryBtn = ({
  label,
  action,
  type,
  toTheBottom,
  disabled,
}: PrimaryBtnProps) => (
  <button
    typeof={type}
    className={`${styles.container} ${toTheBottom ? styles.toTheBottom : null}`}
    onClick={action}
    disabled={disabled}
  >
    {label}
  </button>
);

export default PrimaryBtn;
