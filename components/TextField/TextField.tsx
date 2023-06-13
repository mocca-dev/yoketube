'use client';

import { HTMLAttributes } from 'react';
import styles from './textField.module.css';
import CrossIcon from '../CrossIcon/CrossIcon';

interface TextFieldProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  placeholder: string;
  type?: string;
}

const TextField = ({ name, placeholder, type = 'text' }: TextFieldProps) => (
  <div className={styles.container}>
    {/* <button className={styles.clearBtn}>
      <CrossIcon />
    </button> */}
    <input
      className={styles.input}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  </div>
);

export default TextField;
