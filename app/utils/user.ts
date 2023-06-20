export async function getUserDataByEmail(id: string | null) {
  if (id) {
    const res = await fetch(`/api/user/?email=${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch user data!');
    }

    return res.json();
  } else {
    return null;
  }
}
