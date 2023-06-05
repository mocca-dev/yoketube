'use client';

import { HTMLAttributes } from 'react';
import styles from './textField.module.css';
import CrossIcon from '../CrossIcon/CrossIcon';

interface TextFieldProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  placeholder: string;
}

const TextField = ({ name, placeholder }: TextFieldProps) => (
  <div className={styles.container}>
    {/* <button className={styles.clearBtn}>
      <CrossIcon />
    </button> */}
    <input
      className={styles.input}
      type="text"
      name={name}
      placeholder={placeholder}
    />
  </div>
);

export default TextField;
