import { getListByID } from '@/app/utils/list';
import { getUserDataByEmail } from '@/app/utils/user';
import { getToday } from '@/app/utils/week';
import { Day } from '@/types/Types';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

type UseWeekWithLists = {
  isSearching: boolean;
  setDays: any;
  days?: Day[];
};

const useWeekWithLists = (): UseWeekWithLists => {
  const [days, setDays] = useState<Day[]>();
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const session = useSession();

  useEffect(() => {
    const getUserDataAndLists = async () => {
      setIsSearching(true);
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
              const { list, title } = await getListByID(day.listId || null);
              return { ...day, list, title };
            }
            return day;
          })
        );
        setDays(week);
        setIsSearching(false);
      }
    };

    if (session.status === 'authenticated') {
      getUserDataAndLists();
    } else {
      setDays([]);
    }
  }, [session.data?.user?.email, session.status]);

  return { isSearching, days, setDays };
};

export default useWeekWithLists;
