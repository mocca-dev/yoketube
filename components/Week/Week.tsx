'use client';

import { useSession } from 'next-auth/react';
import DayCard from '../DayCard/DayCard';
import LoaderWithText from '../LoaderWithText/LoaderWithText';
import { setDayInEditMode, updateDayInList } from '@/app/utils/week';
import useWeekWithLists from '@/hooks/useWeekWithLists';
import useLists from '@/hooks/useLists';

export const Week = () => {
  const { isSearching, days, setDays } = useWeekWithLists();
  const lists = useLists();
  const session = useSession();

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
            title={day.title}
            isSearching={isSearching}
            isInEditMode={day.isInEditMode}
            setDayInEditMode={() => setDays(setDayInEditMode(day.number, days))}
            updateDayInList={(id: string, number: number) =>
              setDays(updateDayInList(id, number, lists, days))
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
