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
