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
      setDays([
        {
          name: 'Monday',
          number: 1,
          listId: '',
          date: '',
          title: '',
          isInEditMode: true,
        },
        {
          name: 'Tuesday',
          number: 2,
          listId: '',
          date: '',
          title: '',
          isInEditMode: true,
        },
        {
          name: 'Wednesday',
          number: 3,
          listId: '',
          date: '',
          title: '',
          isInEditMode: true,
        },
        {
          name: 'Thursday',
          number: 4,
          listId: '',
          date: '',
          title: '',
          isInEditMode: true,
        },
        {
          name: 'Friday',
          number: 5,
          listId: '',
          date: '',
          title: '',
          isInEditMode: true,
        },
        {
          name: 'Saturday',
          number: 6,
          listId: '',
          date: '',
          title: '',
          isInEditMode: true,
        },
        {
          name: 'Sunday',
          number: 0,
          listId: '',
          date: '',
          title: '',
          isInEditMode: true,
        },
      ]);
    }
  }, [session.data?.user?.email, session.status]);

  return { isSearching, days, setDays };
};

export default useWeekWithLists;
