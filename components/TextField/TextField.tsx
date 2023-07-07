'use client';

import { HTMLAttributes, useEffect, useState } from 'react';
import styles from './textField.module.css';
import CrossIcon from '../CrossIcon/CrossIcon';

interface TextFieldProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  placeholder: string;
  value?: string;
  type?: string;
}

const TextField = ({
  name,
  placeholder,
  value,
  type = 'text',
}: TextFieldProps) => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    if (value) setText(value);
  }, [value]);

  return (
    <div className={styles.container}>
      {text?.length ? (
        <button className={styles.clearBtn} onClick={() => setText('')}>
          <CrossIcon />
        </button>
      ) : null}
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default TextField;
