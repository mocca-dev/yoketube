import { HTMLAttributes } from 'react';
import styles from './label.module.css';

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const Label = ({ text }: LabelProps) => (
  <label className={styles.container}>{text}</label>
);

export default Label;
