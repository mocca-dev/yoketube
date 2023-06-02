import CheckBox from '@/components/CheckBox/CheckBox';
import PrimaryBtn from '@/components/PrimaryBtn/PrimaryBtn';
import SecondaryBtn from '@/components/SecondaryBtn/SecondaryBtn';
import styles from './selectList.module.css';
import { useState } from 'react';
import Link from 'next/link';

export const SelectList = () => {
  const [list] = useState([
    { title: 'Arms and Legs' },
    { title: 'Back and abs' },
    { title: 'Back and abs2' },
    { title: 'Back and abs3' },
  ]);
  return (
    <>
      <div className={styles.mainTitle}>Select a list</div>
      <div className={styles.listContainer}>
        {list &&
          list.map((item) => (
            <CheckBox key={item.title} label={item.title} value="1" />
          ))}
      </div>
      <Link href={'/newList'}>
        <SecondaryBtn toTheBottom={true} label="+ Add new list" />
      </Link>
      <PrimaryBtn label="Set list" />
    </>
  );
};

export default SelectList;
