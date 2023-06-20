import { List } from '@/types/Types';

export async function getByUser(user: string | null) {
  if (user) {
    const res = await fetch(`${process.env.BASE_URL}/api/lists/${user}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch lists!');
    }

    return res.json();
  } else {
    return [];
  }
}
