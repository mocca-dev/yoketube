'use client';

import { HTMLAttributes, useEffect, useState } from 'react';
import Label from '../Label/Label';
import TextField from '../TextField/TextField';
import TextFieldWithDelete from '../TextFieldWithDelete/TextFieldWithDelete';
import SecondaryBtn from '../SecondaryBtn/SecondaryBtn';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import styles from './createListForm.module.css';
import { getListByID, setListByUser } from '@/app/utils/list';
import { useSession } from 'next-auth/react';
import { LinkItem, List } from '@/types/Types';
import { useRouter } from 'next/navigation';
import LoaderWithText from '../LoaderWithText/LoaderWithText';

interface CreateListFormProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
}

const CreateListForm = ({ id }: CreateListFormProps) => {
  const [linkList, setLinkList] = useState<LinkItem[]>([]);
  const [title, setTitle] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (id !== '0')
      getListByID(id).then((list) => {
        setLinkList(list.list);
        setTitle(list.title);
      });
  }, [id]);

  const addLink = (e: any) => {
    e.preventDefault();
    setLinkList([...linkList, { url: '', _id: linkList.length.toString() }]);
  };

  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    let videoList: LinkItem[] = [];

    let emptyFields: any[] = [];

    for (let index = 3; index < e.target.length; index++) {
      const input = e.target[index];
      if (input.tagName === 'INPUT') {
        videoList.push({ url: input.value });
        if (input.value === '') {
          emptyFields.push(input.classList.add(styles.error));
        } else {
          input.classList.remove(styles.error);
        }
      }
    }
    const hasSomeEmpty = emptyFields.length > 0;

    const titleInput = e.target[1];
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
      const data = await setListByUser(session.data?.user?.name || '', {
        list,
        id,
      });
      if (data) {
        router.push('/');
      }
    }
    setIsLoading(false);
  };

  const handleDelete = (e: any, id: any) => {
    e.preventDefault();
    if (linkList.length > 1)
      setLinkList(linkList.filter((link) => link._id !== id));
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
              value={title}
            />
            <Label text="List of videos" />
            <div className={styles.listContainer}>
              {linkList.map((link) => (
                <TextFieldWithDelete
                  key={link._id}
                  name={link.url.toString()}
                  placeholder="https://www.youtube.com/..."
                  deleteAction={(e: any) => handleDelete(e, link._id)}
                  disabledDelete={linkList.length === 1}
                  value={link.url}
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
