import TextField from '@/components/TextField/TextField';
import { HTMLAttributes } from 'react';
import styles from './textfieldwithdelete.module.css';
import Label from '../Label/Label';
import DeleteIcon from '../DeleteIcon/DeleteIcon';
import SmallBtn from '../SmallBtn/SmallBtn';

interface TextFieldWithDeleteProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  placeholder: string;
  deleteAction: any;
  disabledDelete: boolean;
  value: string;
}

const TextFieldWithDelete = ({
  name,
  placeholder,
  deleteAction,
  disabledDelete,
  value,
}: TextFieldWithDeleteProps) => {
  return (
    <>
      <div className={styles.container}>
        <TextField name={name} placeholder={placeholder} value={value} />
        <SmallBtn name={name} action={deleteAction} disabled={disabledDelete}>
          <DeleteIcon />
        </SmallBtn>
      </div>
    </>
  );
};

export default TextFieldWithDelete;
