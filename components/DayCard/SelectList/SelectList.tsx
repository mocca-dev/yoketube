'use client';

import CheckBox from '@/components/CheckBox/CheckBox';
import PrimaryBtn from '@/components/PrimaryBtn/PrimaryBtn';
import SecondaryBtn from '@/components/SecondaryBtn/SecondaryBtn';
import styles from './selectList.module.css';
import { HTMLAttributes, useState } from 'react';
import Link from 'next/link';
import { List } from '@/types/Types';
import LoaderWithText from '@/components/LoaderWithText/LoaderWithText';

interface SelectListProps extends HTMLAttributes<HTMLDivElement> {
  lists: List[];
}

const SelectList = ({ lists }: SelectListProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSelectedItem = (id: string) => {
    console.log(id);
  };

  return (
    <>
      <div className={styles.mainTitle}>Select a list</div>
      {isLoading ? (
        <LoaderWithText text="Saving new list" />
      ) : (
        <div className={styles.listContainer}>
          {lists &&
            lists.map((item: List) => (
              <CheckBox
                key={item._id}
                label={item.title}
                onClick={(id: string) => handleSelectedItem(id)}
                value={item._id}
              />
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
