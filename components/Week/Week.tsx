'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { getUserDataByEmail } from '@/app/utils/user';
import DayCard from '../DayCard/DayCard';
import { Day, List, TWeek } from '@/types/Types';
import { getListByID, getListsByEmail } from '@/app/utils/list';

export const Week = () => {
  const [days, setDays] = useState<Day[]>([]);
  const [lists, setLists] = useState<List[]>([]);

  const session = useSession();

  useEffect(() => {
    const getUserDataAndLists = async () => {
      // setIsLoading(true);
      const data = await getUserDataByEmail(session.data?.user?.email || null);

      if (data) {
        let week: any = data.week;
        week = await Promise.all(
          week.map(async (day: any) => {
            if (day.listId) {
              const { list } = await getListByID(day.listId || null);
              return { ...day, list };
            }
            return day;
          })
        );
        setDays(week);
      }
      // setIsLoading(false);
    };
    if (session.status === 'authenticated') getUserDataAndLists();
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

  return (
    <>
      {days &&
        days.map((day) => (
          <DayCard
            key={day.name}
            list={day.list}
            lists={lists}
            name={day.name}
            date={day.date}
          />
        ))}
    </>
  );
};

export default Week;
