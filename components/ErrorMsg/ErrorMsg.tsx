import { HTMLAttributes } from 'react';
import styles from './errorMsg.module.css';
import Loader from '../Loader/Loader';

interface ErrorMsgProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
}

const ErrorMsg = ({ label }: ErrorMsgProps) => (
  <div className={styles.container}>{label}</div>
);

export default ErrorMsg;
