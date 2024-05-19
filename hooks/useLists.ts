import { getListsByEmail } from '@/app/utils/list';
import { List } from '@/types/Types';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

type UseLists = {
  isSearching: boolean;
  lists: List[];
};

const useLists = (): UseLists => {
  const [lists, setLists] = useState<List[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const session = useSession();

  useEffect(() => {
    const getLists = async () => {
      setIsSearching(true);
      const data = await getListsByEmail(session.data?.user?.email || null);
      setLists(data);
      setIsSearching(false);
    };

    if (session.status === 'authenticated') getLists();
  }, [session.data?.user?.email, session.status]);

  return { isSearching, lists };
};

export default useLists;
