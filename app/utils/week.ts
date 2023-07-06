import { List, Day } from '@/types/Types';

export async function getByUser(user: string | null) {
  if (user) {
    const res = await fetch(`/api/lists/${user}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch lists User!');
    }

    return res.json();
  } else {
    return [];
  }
}

export function goToToday() {
  document.querySelector('#current')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'start',
  });
}

export function getToday(): { today: number; date: string } {
  const now = new Date();
  const today = now.getDay();

  let month = now.toLocaleString('default', {
    month: 'long',
  });
  const date = month + ' ' + now.getDate();
  return { today, date };
}

export function updateDayInList(
  id: string,
  dayNumber: number,
  lists: List[],
  days: Day[]
): Day[] {
  let selectedList: any = { _id: '', email: '', list: [], title: '' };
  if (id !== '') {
    selectedList = lists.filter((list) => list._id === id)[0];
  } else {
    selectedList.list = [];
  }

  if (days) {
    let day = days[dayNumber - 1];
    day = {
      ...day,
      list: selectedList.list as string[],
      title: selectedList.title,
      isInEditMode: false,
    };
    days[dayNumber - 1] = day;

    return [...days];
  }
  return [];
}

export function setDayInEditMode(dayNumber: number, days: Day[]): Day[] {
  if (days) {
    let day = days[dayNumber - 1];
    day = {
      ...day,
      isInEditMode: !day.isInEditMode,
    };
    days[dayNumber - 1] = day;

    return [...days];
  }
  return [];
}
