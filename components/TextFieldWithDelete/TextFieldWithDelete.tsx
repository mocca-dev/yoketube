'use client';

import TextField from '@/components/TextField/TextField';
import { HTMLAttributes } from 'react';
import styles from './textfieldwithdelete.module.css';
import Label from '../Label/Label';
import DeleteIcon from '../DeleteIcon/DeleteIcon';
import SmallBtn from '../SmallBtn/SmallBtn';

interface TextFieldWithDeleteProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
  name: string;
  placeholder: string;
  onChange: any;
}

export const TextFieldWithDelete = ({
  label,
  value,
  name,
  placeholder,
  onChange,
}: TextFieldWithDeleteProps) => {
  return (
    <>
      <Label name={name} text={label} />
      <div className={styles.container}>
        <TextField
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={() => null}
        />
        <SmallBtn>
          <DeleteIcon />
        </SmallBtn>
      </div>
    </>
  );
};

export default TextFieldWithDelete;
