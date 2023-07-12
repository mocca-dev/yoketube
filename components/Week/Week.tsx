'use client';

import { useSession } from 'next-auth/react';
import WelcomeMsg from '../WelcomeMsg/WelcomeMsg';
import LoaderWithText from '../LoaderWithText/LoaderWithText';
import DayCardList from './DayCardList/DayCardList';

export const Week = () => {
  const session = useSession();

  return (
    <>
      {session.status === 'authenticated' && <DayCardList />}
      {session.status === 'loading' && (
        <LoaderWithText text="Fetching profile data..." />
      )}
      {session.status === 'unauthenticated' && <WelcomeMsg />}
    </>
  );
};

export default Week;
