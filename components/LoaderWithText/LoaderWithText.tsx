import { HTMLAttributes } from 'react';
import Loader from '../Loader/Loader';
import styles from './LoaderWithText.module.css';

interface LoaderWithTextProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

export const LoaderWithText = ({ text }: LoaderWithTextProps) => (
  <div className={styles.container}>
    <Loader />
    <div> {text}...</div>
  </div>
);

export default LoaderWithText;
