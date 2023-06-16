'use client';

import { useState } from 'react';
import Label from '../Label/Label';
import TextField from '../TextField/TextField';
import TextFieldWithDelete from '../TextFieldWithDelete/TextFieldWithDelete';
import SecondaryBtn from '../SecondaryBtn/SecondaryBtn';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import styles from './createListForm.module.css';
import { setListByUser } from '@/app/utils/list';
import { useSession } from 'next-auth/react';
import { List } from '@/types/Types';
import { useRouter } from 'next/navigation';
import LoaderWithText from '../LoaderWithText/LoaderWithText';

const CreateListForm = () => {
  const [linkList, setLinkList] = useState(['0']);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const session = useSession();
  const router = useRouter();

  const addLink = (e: any) => {
    e.preventDefault();
    setLinkList([...linkList, linkList.length.toString()]);
  };

  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    let videoList: string[] = [];

    let emptyFields: any[] = [];

    for (let index = 1; index < e.target.length; index++) {
      const input = e.target[index];
      if (input.tagName === 'INPUT') {
        videoList.push(input.value);
        if (input.value === '') {
          emptyFields.push(input.classList.add(styles.error));
        } else {
          input.classList.remove(styles.error);
        }
      }
    }
    const hasSomeEmpty = emptyFields.length > 0;

    const titleInput = e.target[0];

    if (titleInput.value) {
      titleInput.classList.remove(styles.error);
    } else {
      titleInput.classList.add(styles.error);
    }

    if (titleInput.value && !hasSomeEmpty) {
      const list: List = {
        title: titleInput.value,
        email: session.data?.user?.email,
        list: videoList,
      };
      const data = await setListByUser(session.data?.user?.name || '', list);
      if (data) {
        router.push('/');
      }
    }
    setIsLoading(false);
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
    <>
      <form id="new-list" className={styles.form} onSubmit={handleSubmit}>
        {isLoading ? (
          <LoaderWithText text="Saving new list" />
        ) : (
          <>
            <Label text="Name" />
            <TextField
              name="name"
              placeholder="Back and legs, Arms and Abs,..."
            />

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
          </>
        )}
        <SecondaryBtn label="+ Add new link" action={(e: any) => addLink(e)} />
        <PrimaryBtn type="submit" label="Save" />
      </form>
    </>
  );
};

export default CreateListForm;
