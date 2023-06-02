import { HTMLAttributes } from 'react';
import styles from './label.module.css';

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  name: string;
}

export const Label = ({ text, name }: LabelProps) => (
  <label htmlFor={name} className={styles.label}>
    {text}
  </label>
);

export default Label;
