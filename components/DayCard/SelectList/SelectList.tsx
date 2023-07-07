'use client';

import CheckBox from '@/components/CheckBox/CheckBox';
import PrimaryBtn from '@/components/PrimaryBtn/PrimaryBtn';
import SecondaryBtn from '@/components/SecondaryBtn/SecondaryBtn';
import styles from './selectList.module.css';
import { HTMLAttributes, useState } from 'react';
import Link from 'next/link';
import { List } from '@/types/Types';
import LoaderWithText from '@/components/LoaderWithText/LoaderWithText';
import { updateListInWeekByUserEmail } from '@/app/utils/list';
import { useRouter } from 'next/navigation';

interface SelectListProps extends HTMLAttributes<HTMLDivElement> {
  lists: List[];
  dayNumber: number;
  userEmail: string;
  updateDay: any;
}

const SelectList = ({
  lists,
  dayNumber,
  userEmail,
  updateDay,
}: SelectListProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>();
  const router = useRouter();

  const handleSelectedItem = (id: string) => {
    setSelectedItem(id);
  };

  const handleSetList = async () => {
    setIsLoading(true);
    if (selectedItem) {
      const newDay = await updateListInWeekByUserEmail(
        userEmail,
        selectedItem,
        dayNumber
      );
      updateDay(newDay.listId);
    }
    setIsLoading(false);
  };

  const handleEditClick = (id: string) => {
    router.push(`/newList/${id}`);
  };

  return (
    <>
      <div className={styles.mainTitle}>Select a list</div>
      {isLoading ? (
        <LoaderWithText text="Saving new list" />
      ) : (
        <div className={styles.listContainer}>
          {lists && lists.length ? (
            lists.map((item: List) => (
              <CheckBox
                key={item._id}
                label={item.title}
                onClick={(id: string) => handleSelectedItem(id)}
                onEditClick={handleEditClick}
                value={item._id}
              />
            ))
          ) : (
            <p className={styles.noResults}>There are no lists to show</p>
          )}
        </div>
      )}
      <Link href={'/newList/0'}>
        <SecondaryBtn
          toTheBottom={true}
          label="+ Add new list"
          action={undefined}
        />
      </Link>
      <PrimaryBtn
        label="Set list"
        type="submit"
        action={handleSetList}
        toTheBottom={true}
        disabled={!selectedItem}
      />
    </>
  );
};

export default SelectList;
