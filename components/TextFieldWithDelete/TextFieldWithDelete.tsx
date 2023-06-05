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
}

const TextFieldWithDelete = ({
  name,
  placeholder,
  deleteAction,
  disabledDelete,
}: TextFieldWithDeleteProps) => {
  return (
    <>
      <div className={styles.container}>
        <TextField name={name} placeholder={placeholder} />
        <SmallBtn name={name} action={deleteAction} disabled={disabledDelete}>
          <DeleteIcon />
        </SmallBtn>
      </div>
    </>
  );
};

export default TextFieldWithDelete;
