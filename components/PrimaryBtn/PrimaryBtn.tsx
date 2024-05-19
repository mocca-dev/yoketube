import { HTMLAttributes } from 'react';
import styles from './primaryBtn.module.css';
import Loader from '../Loader/Loader';

interface PrimaryBtnProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  action?: any;
  type?: string;
  toTheBottom?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
}

const PrimaryBtn = ({
  label,
  action,
  type,
  toTheBottom,
  disabled,
  isLoading,
}: PrimaryBtnProps) => (
  <button
    typeof={type}
    className={`${styles.container} ${
      toTheBottom ? styles.toTheBottom : null
    } ${disabled ? styles.disabled : null}  ${
      isLoading ? styles.isLoading : null
    }`}
    onClick={action}
    disabled={disabled}
  >
    {label} {isLoading ? <Loader /> : null}
  </button>
);

export default PrimaryBtn;
