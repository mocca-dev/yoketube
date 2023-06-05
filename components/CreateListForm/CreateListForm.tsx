'use client';

// import { HTMLAttributes } from 'react';
import { useState } from 'react';
import Label from '../Label/Label';
import TextField from '../TextField/TextField';
import TextFieldWithDelete from '../TextFieldWithDelete/TextFieldWithDelete';
import SecondaryBtn from '../SecondaryBtn/SecondaryBtn';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import styles from './createListForm.module.css';

// interface CreateListFormProps extends HTMLAttributes<HTMLDivElement> {
//   : ;
// } {  }: CreateListFormProps

const CreateListForm = () => {
  const [linkList, setLinkList] = useState(['0', '1']);

  const addLink = (e: any) => {
    e.preventDefault();
    setLinkList([...linkList, linkList.length.toString()]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
    let id = '-1';
    const nodeName = e.target.nodeName.toLowerCase();

    if (nodeName === 'path') {
      id = e.target.parentNode.parentNode.parentNode.id;
    } else if (nodeName === 'svg') {
      id = e.target.parentNode.parentNode.id;
    } else {
      id = e.target.id;
    }

    if (linkList.length > 1)
      setLinkList(linkList.filter((idLink) => idLink !== id));
  };

  return (
    <form className={styles.form}>
      <Label text="Name" />
      <TextField name="name" placeholder="Back and legs, Arms and Abs,..." />

      <Label text="List of videos" />
      <div className={styles.listContainer}>
        {linkList.map((link) => (
          <TextFieldWithDelete
            key={link}
            name={link.toString()}
            placeholder="https://www.youtube.com/..."
            deleteAction={(e: any) => handleDelete(e)}
            disabledDelete={linkList.length === 1}
          />
        ))}
      </div>
      <SecondaryBtn label="+ Add new link" action={(e: any) => addLink(e)} />
      <PrimaryBtn
        type="submit"
        label="Save"
        action={(e: any) => handleSubmit(e)}
      />
    </form>
  );
};

export default CreateListForm;
