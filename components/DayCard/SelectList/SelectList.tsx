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
  ]);
  return (
    <>
      <div className={styles.mainTitle}>Select a list</div>
      {list &&
        list.map((item) => (
          <CheckBox key={item.title} label={item.title} value="1" />
        ))}
      <Link href={'/newList'}>
        <SecondaryBtn toTheBottom={true} label="+ Add new list" />
      </Link>
      <PrimaryBtn label="Set list" />
    </>
  );
};

export default SelectList;
