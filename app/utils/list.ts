import { List } from '@/types/Types';

export async function getListsByEmail(email: string | null) {
  if (email) {
    const res = await fetch(`http://localhost:3000/api/lists/?email=${email}`, {
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

export async function getListByID(id: string | null) {
  if (id) {
    const res = await fetch(`http://localhost:3000/api/lists/?id=${id}`, {
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

export async function setListByUser(user: string, list: List) {
  if (user) {
    const res = await fetch(`http://localhost:3000/api/lists`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(list),
    });

    if (!res.ok) {
      throw new Error('Failed to fetch lists!');
    }
    return res.json();
  } else {
    return [];
  }
}
