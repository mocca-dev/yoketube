'use client';

import { useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { getUserDataByEmail } from '@/app/utils/user';
import DayCard from '../DayCard/DayCard';
import { Day, List } from '@/types/Types';
import { getListByID, getListsByEmail } from '@/app/utils/list';
import LoaderWithText from '../LoaderWithText/LoaderWithText';
import { getToday } from '@/app/utils/week';
import { ModalContext } from '@/context/modal.context';

export const Week = () => {
  const [days, setDays] = useState<Day[]>();
  const [lists, setLists] = useState<List[]>([]);
  const { dispatch } = useContext(ModalContext);

  const session = useSession();
  // console.log(session);

  useEffect(() => {
    const getUserDataAndLists = async () => {
      const data = await getUserDataByEmail(session.data?.user?.email || null);

      const { today, date } = getToday();

      if (data) {
        let week: any = data.week;
        week = await Promise.all(
          week.map(async (day: Day) => {
            if (today === day.number) {
              day = { ...day, date: date, name: 'Today' };
            } else {
              day = { ...day, date: 'Go to today' };
            }

            if (day.listId) {
              const { list } = await getListByID(day.listId || null);
              return { ...day, list };
            }
            return day;
          })
        );
        setDays(week);
      }
    };
    if (session.status === 'authenticated') {
      getUserDataAndLists();
    } else {
      setDays([
        { name: 'Monday', number: 1, listId: '', date: '' },
        { name: 'Tuesday', number: 2, listId: '', date: '' },
        { name: 'Wednesday', number: 3, listId: '', date: '' },
        { name: 'Thursday', number: 4, listId: '', date: '' },
        { name: 'Friday', number: 5, listId: '', date: '' },
        { name: 'Saturday', number: 6, listId: '', date: '' },
        { name: 'Sunday', number: 0, listId: '', date: '' },
      ]);
    }
  }, [session.data?.user?.email, session.status]);

  useEffect(() => {
    const getLists = async () => {
      // setIsLoading(true);
      const data = await getListsByEmail(session.data?.user?.email || null);
      setLists(data);
      // setIsLoading(false);
    };

    if (session.status === 'authenticated') getLists();
  }, [session.data?.user?.email, session.status]);

  const updateDayInList = (id: string, dayNumber: number) => {
    let selectedList: any = { _id: '', email: '', list: [], title: '' };
    if (id !== '') {
      selectedList = lists.filter((list) => list._id === id)[0];
    } else {
      selectedList.list = [];
    }

    if (days) {
      let day = days[dayNumber - 1];
      day = { ...day, list: selectedList.list as string[] };
      days[dayNumber - 1] = day;

      setDays([...days]);
    }
  };

  return (
    <>
      {days ? (
        days.map((day) => (
          <DayCard
            key={day.name}
            list={day.list}
            lists={lists}
            name={day.name}
            date={day.date}
            number={day.number}
            userEmail={session.data?.user?.email}
            updateDayInList={(id: string, number: number) =>
              updateDayInList(id, number)
            }
          />
        ))
      ) : (
        <LoaderWithText text="Fetching week data" />
      )}
    </>
  );
};

export default Week;
