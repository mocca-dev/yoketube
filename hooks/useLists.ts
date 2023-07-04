import { getListsByEmail } from '@/app/utils/list';
import { List } from '@/types/Types';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const useLists = (): List[] => {
  const [lists, setLists] = useState<List[]>([]);
  const session = useSession();

  useEffect(() => {
    const getLists = async () => {
      const data = await getListsByEmail(session.data?.user?.email || null);
      setLists(data);
    };

    if (session.status === 'authenticated') getLists();
  }, [session.data?.user?.email, session.status]);

  return lists;
};

export default useLists;
