'use client';

import CheckBox from '@/components/CheckBox/CheckBox';
import PrimaryBtn from '@/components/PrimaryBtn/PrimaryBtn';
import SecondaryBtn from '@/components/SecondaryBtn/SecondaryBtn';
import styles from './selectList.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { getListsByUser } from '@/app/utils/list';
import { List } from '@/types/Types';
import LoaderWithText from '@/components/LoaderWithText/LoaderWithText';

const SelectList = () => {
  const [list, setList] = useState<List[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const session = useSession();

  useEffect(() => {
    const getLists = async () => {
      setIsLoading(true);
      const data = await getListsByUser(session.data?.user?.name || null);
      setList(data);
      setIsLoading(false);
    };
    getLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.status]);

  return (
    <>
      <div className={styles.mainTitle}>Select a list</div>
      {isLoading ? (
        <LoaderWithText text="Saving new list" />
      ) : (
        <div className={styles.listContainer}>
          {list &&
            list.map((item) => (
              <CheckBox key={item._id} label={item.title} value="1" />
            ))}
        </div>
      )}
      <Link href={'/newList'}>
        <SecondaryBtn
          toTheBottom={true}
          label="+ Add new list"
          action={undefined}
        />
      </Link>
      <PrimaryBtn label="Set list" type="submit" toTheBottom={true} />
    </>
  );
};

export default SelectList;
