import { HTMLAttributes } from 'react';
import styles from './textField.module.css';
import CrossIcon from '../CrossIcon/CrossIcon';

interface TextFieldProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  name: string;
  placeholder: string;
  onChange: any;
}

export const TextField = ({
  name,
  value,
  placeholder,
  onChange,
}: TextFieldProps) => (
  <div className={styles.container}>
    <button className={styles.clearBtn}>
      <CrossIcon />
    </button>
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
    />
  </div>
);

export default TextField;
